/**
 * jsonp-flickr.js - https://github.com/podefr/jsonp-flickr
 * Copyright(c) 2014 Olivier Scherrer <pode.fr@gmail.com>
 * MIT Licensed
 */
var chai = require("chai"),
	sinon = require("sinon"),
	expect = chai.expect,
	proxyquire = require("proxyquire").noCallThru();

var jsonpMock = sinon.spy();

var Flickr = proxyquire("../js/jsonp-flickr", {
	"jsonp-utils": jsonpMock
});

describe("GIVEN default Flickr", function() {

});