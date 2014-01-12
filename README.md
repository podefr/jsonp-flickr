Jsonp-flickr
============

Access Flickr's API from the browser via JSONP.

Installation:
=============

```bash
npm install jsonp-flickr
```

In the browser:
===============

```html
<script src="jsonp-flickr-browser.js"></script>
```

Usage:
======

After you've initialized jsonp-flickr you can do as many requests you want as quickly as you want, jsonp will ensure that the right callback will get the right data and do all the clean up for you!

```js
var flickr = require("jsonp-flickr");

var request = {
	method: "flickr.test.echo",
	format: "json",
	api_key: "a1faa53df9402fc5cc2d9746118f9ddc"
};

// Using the callback API
flickr.get(request, /* callback */ function (err, data) {
	this.innerHTML = JSON.stringify(data);
}, /* scope */ document.querySelector(".example1"));

// Using the promise API (vow promise)
var promise = flickr.get(request);

promise.then(function onSuccess(data) {
	document.querySelector(".example2").innerHTML = JSON.stringify(data);
}, function onError(err) {
	// on error
});
```

Licence
=======

MIT