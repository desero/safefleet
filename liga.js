/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'go': '&#xe905;',
            'golang': '&#xe905;',
            'js': '&#xe906;',
            'javascript': '&#xe906;',
            'php': '&#xe907;',
            'zinc': '&#xe908;',
            'facebook': '&#xe948;',
            'github': '&#xe949;',
            'google-plus': '&#xe94a;',
            'linkedin': '&#xe94b;',
            'twitter': '&#xe94c;',
            'instagram': '&#xe90d;',
            'wordpress': '&#xe6a9;',
            'range': '&#xe946;',
            'bucket': '&#xe947;',
            'burger': '&#xe945;',
            'pay': '&#xe942;',
            'bank': '&#xe943;',
            'wire': '&#xe944;',
            'power': '&#xe941;',
            'paypal': '&#xe940;',
            'ratio': '&#xe93d;',
            'hour': '&#xe93e;',
            'day': '&#xe93f;',
            'elipsis': '&#xe91f;',
            'battery_empty': '&#xe920;',
            'battery_full': '&#xe921;',
            'battery': '&#xe922;',
            'bolt': '&#xe923;',
            'cino': '&#xe924;',
            'codebar': '&#xe925;',
            'magnet': '&#xe928;',
            'ok': '&#xe929;',
            'orient': '&#xe92a;',
            'print': '&#xe92b;',
            'umbrella': '&#xe92c;',
            'vector': '&#xe92d;',
            'superadmin': '&#xe927;',
            'admin': '&#xe91e;',
            'dev': '&#xe926;',
            'add': '&#xe91a;',
            'add_hair': '&#xe91b;',
            'backup': '&#xe91c;',
            'carrot': '&#xe91d;',
            'cod': '&#xe935;',
            'certificate': '&#xe919;',
            'aid': '&#xe918;',
            'alarm': '&#xe917;',
            'sd': '&#xe913;',
            'compass': '&#xe914;',
            'lego': '&#xe915;',
            'atom': '&#xe916;',
            'ram': '&#xe912;',
            'puzzle': '&#xe910;',
            'puzzle_alt': '&#xe911;',
            'broadcast': '&#xe90f;',
            'pingdownload': '&#xe90e;',
            'zthree': '&#xe903;',
            'play': '&#xe90a;',
            'eu_flag': '&#xe90b;',
            'eu': '&#xe90c;',
            'twofour': '&#xe6c0;',
            'zipa': '&#xe6cd;',
            'administrator': '&#xe63f;',
            'agenda': '&#xe6b5;',
            'america': '&#xe680;',
            'antenna': '&#xe67b;',
            'arrow': '&#xe611;',
            'arrow_alt_down': '&#xe92e;',
            'arrow_alt_left': '&#xe92f;',
            'arrow_alt_ne': '&#xe930;',
            'arrow_alt_nw': '&#xe931;',
            'arrow_alt_right': '&#xe932;',
            'arrow_alt_se': '&#xe933;',
            'arrow_alt_sw': '&#xe934;',
            'arrow_alt_up': '&#xe936;',
            'arrow_down': '&#xe604;',
            'arrow_left': '&#xe606;',
            'arrow_ne': '&#xe601;',
            'arrow_nw': '&#xe607;',
            'arrow_right': '&#xe602;',
            'arrow-right': '&#xe603;',
            'arrow_sw': '&#xe605;',
            'arrow_up': '&#xe600;',
            'lesser': '&#xe937;',
            'greater': '&#xe938;',
            'circumflex': '&#xe939;',
            'breve': '&#xe93a;',
            'ca': '&#xe93b;',
            'caret_full': '&#xe93c;',
            'asia': '&#xe681;',
            'at': '&#xe683;',
            'autover': '&#xe6c7;',
            'bill': '&#xe6ab;',
            'bin': '&#xe65b;',
            'board': '&#xe6b6;',
            'book': '&#xe644;',
            'bookmark': '&#xe645;',
            'boss': '&#xe63e;',
            'box': '&#xe66e;',
            'branch': '&#xe690;',
            'breifcase': '&#xe657;',
            'bug': '&#xe68c;',
            'bulb': '&#xe661;',
            'bullseye': '&#xe634;',
            'buoy': '&#xe6c2;',
            'calculator': '&#xe620;',
            'calendar': '&#xe646;',
            'camera': '&#xe64f;',
            'card': '&#xe686;',
            'caret_alt': '&#xe900;',
            'cart': '&#xe6ae;',
            'caution': '&#xe637;',
            'cc': '&#xe6aa;',
            'cd': '&#xe653;',
            'cdn': '&#xe695;',
            'check': '&#xe639;',
            'chip': '&#xe698;',
            'cicle': '&#xe60b;',
            'clone': '&#xe68e;',
            'close': '&#xe901;',
            'cloud': '&#xe65f;',
            'code': '&#xe689;',
            'code_hash': '&#xe68a;',
            'code_minor': '&#xe68b;',
            'coffee': '&#xe655;',
            'comment': '&#xe6b8;',
            'comment_empty': '&#xe6b7;',
            'concentric': '&#xe609;',
            'group': '&#xe60c;',
            'creditcard': '&#xe6ac;',
            'curve': '&#xe621;',
            'denied': '&#xe63a;',
            'deny': '&#xe62c;',
            'departing': '&#xe60f;',
            'diamond': '&#xe65e;',
            'disk': '&#xe65c;',
            'disk_alt': '&#xe65d;',
            'dislike': '&#xe69b;',
            'divide': '&#xe61e;',
            'down': '&#xe613;',
            'download': '&#xe626;',
            'download_alt': '&#xe627;',
            'eccentric': '&#xe60a;',
            'edit': '&#xe62d;',
            'ehternet_socket': '&#xe64a;',
            'employee': '&#xe63d;',
            'envelope': '&#xe684;',
            'envelope_open': '&#xe685;',
            'equal': '&#xe61f;',
            'ethernet_plug': '&#xe649;',
            'europe': '&#xe682;',
            'exclamation': '&#xe902;',
            'expand': '&#xe60d;',
            'file': '&#xe6b9;',
            'folder': '&#xe66d;',
            'forbidden': '&#xe635;',
            'forward': '&#xe617;',
            'gauge': '&#xe662;',
            'gears': '&#xe671;',
            'git': '&#xe6a6;',
            'gitfs': '&#xe6cc;',
            'gitium': '&#xe6c5;',
            'glasses': '&#xe654;',
            'globe': '&#xe67f;',
            'globestand': '&#xe67e;',
            'graphic': '&#xe622;',
            'headset': '&#xe6bf;',
            'heart': '&#xe640;',
            'heart_full': '&#xe641;',
            'home': '&#xe663;',
            'image': '&#xe64e;',
            'impulse': '&#xe664;',
            'info': '&#xe636;',
            'key': '&#xe659;',
            'keyboard': '&#xe665;',
            'laptop': '&#xe667;',
            'layout': '&#xe660;',
            'left': '&#xe614;',
            'lighthouse': '&#xe6c1;',
            'like': '&#xe69a;',
            'link': '&#xe687;',
            'link_broken': '&#xe688;',
            'lock': '&#xe66a;',
            'lock_open': '&#xe66b;',
            'login': '&#xe628;',
            'logout': '&#xe629;',
            'look': '&#xe62f;',
            'map': '&#xe658;',
            'mapping': '&#xe6ca;',
            'mark': '&#xe62a;',
            'media': '&#xe64d;',
            'meeting': '&#xe60e;',
            'merge': '&#xe68f;',
            'migration': '&#xe66c;',
            'minus': '&#xe61c;',
            'mobile': '&#xe668;',
            'mouse': '&#xe666;',
            'music': '&#xe650;',
            'net': '&#xe693;',
            'network': '&#xe67c;',
            'paragraph': '&#xe6b2;',
            'pause': '&#xe618;',
            'pen': '&#xe6b3;',
            'phone': '&#xe6be;',
            'phones': '&#xe651;',
            'pie': '&#xe623;',
            'place': '&#xe699;',
            'plugin': '&#xe6c3;',
            'plus': '&#xe61b;',
            'pointer': '&#xe610;',
            'power_plug': '&#xe647;',
            'power_socket': '&#xe648;',
            'presslabs': '&#xe6d2;',
            'protection': '&#xe6c8;',
            'pull': '&#xe692;',
            'push': '&#xe691;',
            'pyolite': '&#xe6d1;',
            'python': '&#xe6a7;',
            'question': '&#xe638;',
            'quotes': '&#xe6b1;',
            'rack': '&#xe697;',
            'rec': '&#xe61a;',
            'return': '&#xe608;',
            'rewind': '&#xe616;',
            'ribbon': '&#xe66f;',
            'right': '&#xe612;',
            'ruler': '&#xe670;',
            'safe': '&#xe677;',
            'scale': '&#xe6b0;',
            'search': '&#xe631;',
            'serving': '&#xe67d;',
            'settings': '&#xe673;',
            'sheep': '&#xe68d;',
            'shield': '&#xe674;',
            'shield_checker': '&#xe676;',
            'shield_deny': '&#xe675;',
            'shield_help': '&#xe6bd;',
            'shirt': '&#xe65a;',
            'shred': '&#xe6bc;',
            'silver': '&#xe6cf;',
            'speaker': '&#xe652;',
            'spike': '&#xe694;',
            'stack': '&#xe696;',
            'star': '&#xe642;',
            'star_full': '&#xe643;',
            'stop': '&#xe619;',
            'suitcase': '&#xe656;',
            'tablet': '&#xe669;',
            'tag': '&#xe6ce;',
            'text': '&#xe6ba;',
            'theme': '&#xe6c9;',
            'themeperuser': '&#xe6c6;',
            'ticket': '&#xe6af;',
            'time': '&#xe630;',
            'times': '&#xe61d;',
            'toplytics': '&#xe6c4;',
            'traffic': '&#xe678;',
            'linux': '&#xe6a8;',
            'up': '&#xe615;',
            'upload': '&#xe624;',
            'upload_alt': '&#xe625;',
            'usb_plug': '&#xe64b;',
            'usb_socket': '&#xe64c;',
            'user': '&#xe63c;',
            'users': '&#xe63b;',
            'utf': '&#xe6cb;',
            'validate': '&#xe62b;',
            'wallet': '&#xe6ad;',
            'watch': '&#xe679;',
            'wifi': '&#xe67a;',
            'wrench': '&#xe672;',
            'write': '&#xe62e;',
            'writing': '&#xe6b4;',
            'zip': '&#xe6bb;',
            'zoom_in': '&#xe632;',
            'zoom_out': '&#xe633;',
            'zsync': '&#xe6d0;',
            'contract': '&#xe904;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/particle/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
