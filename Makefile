build:
	yarn
	yarn build

generate:
	rm -rf dist
	mkdir -p dist/fonts dist/style dist/icons dist/export
	echo "Start dumping to dist"
	./bin/react.py config.json > dist/icons/icons-react-native.json
	./bin/dump.py config.json > dist/icons/icons.json
	echo "Finished dumping to dist"
	echo "Start replacing"
	./bin/replace.py config.json stroke-linecap=\"round\" stroke-linecap=\"butt\"
	./bin/replace.py config.json stroke-linejoin=\"round\" stroke-linejoin=\"miter\"
	echo "Finished replacing"
	echo "Start generate fonts"
	fontforge -script ./bin/generate.py config.json dist/icons/icons.json
	echo "Finished generate fonts"
	woff2_compress dist/fonts/safefleet.ttf
	./bin/create_css.py config.json > dist/style/icons.css
	./bin/create_scss.py config.json > dist/style/icons.scss
	./bin/create_data.py config.json > dist/icons/icons-data.json
