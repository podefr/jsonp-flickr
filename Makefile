all: clean jsonp-flickr.min.js browser

clean:
	rm -f ./jsonp-flickr.min.js
	rm -f ./jsonp-flickr-browser.js
	rm -f ./jsonp-flickr-browser.min.js

jsonp-flickr.min.js:
	cat license-mini >> jsonp-flickr.min.js
	uglifyjs js/jsonp-flickr.js >> jsonp-flickr.min.js

browser: clean jsonp-flickr.min.js
	browserify -r ./js/jsonp-flickr.js:jsonp-flickr -o jsonp-flickr-browser.js
	cat license-mini >> jsonp-flickr-browser.min.js
	uglifyjs jsonp-flickr-browser.js >> jsonp-flickr-browser.min.js

.PHONY: all clean browser