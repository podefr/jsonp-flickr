/**
 * jsonp-flickr.js - https://github.com/podefr/jsonp-flickr
 * Copyright(c) 2014 Olivier Scherrer <pode.fr@gmail.com>
 * MIT Licensed
 */
"use strict";

var DEFAULT_URL = "https://ycpi.api.flickr.com/services/rest/";
var DEFAULT_CALLBACKNAME = "jsoncallback";

var Jsonp = require("jsonp-utils");

module.exports = new Jsonp({
	url: DEFAULT_URL,
	callbackName: DEFAULT_CALLBACKNAME
});
