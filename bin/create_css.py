#!/usr/bin/python
"""
Creates a CSS File containing icons declatarions
"""

import sys
import os
import binascii
import json
from string import Template

def load_config(filename='font.json'):
    """
    Load JSON config file
    """
    with open(filename) as infile:
        return json.load(infile)

def main(src):
    """
    Creates a CSS File containing icons from src
    """

    config = load_config(src)
    svgs = config.pop('input')
    props = config['props']

    files = [f for f in os.listdir(svgs) if os.path.isfile(os.path.join(svgs, f))]
    files.sort()

    icons = []

    for filename in files:
        if not filename.endswith('.svg'):
            continue

        src = os.path.splitext(filename)[0]
        name = src.replace('-', '_')

        icon_string = Template('.icon.$className:before { content: "$value"; }')
        icons.append(icon_string.substitute(value=name, className=src))

    template = """@font-face {
    font-family: "$family_name";
    src: url("../fonts/$outfile.eot?$hash");
    src: url("../fonts/$outfile.eot?$hash#iefix") format("embedded-opentype"),
         url("../fonts/$outfile.woff2?$hash") format("woff2"),
         url("../fonts/$outfile.woff?$hash") format("woff"),
         url("../fonts/$outfile.ttf?$hash") format("truetype"),
         url("../fonts/$outfile.svg?$hash#icons") format("svg");
    font-weight: normal;
    font-style: normal;
}

.icon {
    font-family: "$family_name";
    display: inline-block;
    line-height: 1;
    font-weight: normal;
    font-style: normal;
    speak: none;
    text-decoration: inherit;
    text-transform: none;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Particles */
$icons
"""

    string_template = Template(template)
    print string_template.substitute(
        icons="\n".join(icons),
        hash=binascii.hexlify(os.urandom(16)),
        family_name=props.pop('fullname'),
        outfile=config.pop('outfile')
    )


if __name__ == '__main__':
    if len(sys.argv) > 1:
        main(sys.argv[1])
    else:
        sys.stderr.write("\nUsage: %s config_file\n" % sys.argv[0])
