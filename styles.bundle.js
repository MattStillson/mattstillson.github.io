webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(/assets/css/bootstrap.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n.navbar {\r\n  background: rgba(255, 255, 255, 0.95);\r\n}\r\n.bd-booticon {\r\n  margin: 1.25rem;\r\n  width: 256px;\r\n  height: 256px;\r\n}\r\n.bd-masthead, .jumbotron {\r\n  background-color: #0143a3;\r\n  background: linear-gradient(135deg, #0143a3, #0273d4);\r\n}\r\n.bd-masthead {\r\n  padding-top: 2rem;\r\n  padding-bottom: 2rem;\r\n  margin-bottom: 4rem;\r\n  text-align: center;\r\n  color: #efefef;\r\n}\r\n.bd-masthead .lead {\r\n  margin-right: auto;\r\n  margin-bottom: 2rem;\r\n  margin-left: auto;\r\n  width: 80%;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n}\r\n.bd-masthead .btn {\r\n  color: #fff;\r\n  border-color: #fff;\r\n}\r\n.bd-masthead .btn:hover {\r\n  background-color: #f7f7f7;\r\n  color: #0273d4;\r\n}\r\n.jumbotron {\r\n  color: #fff;\r\n  border-radius: 0;\r\n}\r\nheader .github-buttons {\r\n  margin-bottom: 0;\r\n  margin-top: 4px;\r\n  padding-left: 0;\r\n}\r\nngbd-default .github-buttons {\r\n  text-align: center;\r\n  margin-top: 2rem;\r\n}\r\n@media (min-width: 768px) {\r\n  .bd-sidebar {\r\n    padding-left: 1rem;\r\n    display: inline-block;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 1rem;\r\n  }\r\n}\r\n.bd-toc-link {\r\n  display: block;\r\n  padding: 0.25rem 0.75rem;\r\n  color: #55595c;\r\n}\r\n.bd-toc-link:focus, .bd-toc-link:hover {\r\n  color: #0275d8;\r\n  text-decoration: none;\r\n}\r\n.active > .bd-toc-link {\r\n  font-weight: 500;\r\n  color: #373a3c;\r\n}\r\n.bd-toc-item.active {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n.bd-toc-item:first-child {\r\n  margin-top: 0;\r\n}\r\n.bd-toc-item:last-child {\r\n  margin-bottom: 2rem;\r\n}\r\n.bd-sidebar .nav > li > a {\r\n  display: block;\r\n  padding: 0.25rem 0.75rem;\r\n  font-size: 90%;\r\n  color: #99979c;\r\n}\r\n.bd-sidebar .nav > li > a:focus, .bd-sidebar .nav > li > a:hover {\r\n  color: #0275d8;\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n}\r\n.bd-sidebar .nav > .active:focus > a, .bd-sidebar .nav > .active:hover > a, .bd-sidebar .nav > .active > a {\r\n  font-weight: 500;\r\n  color: #373a3c;\r\n  background-color: transparent;\r\n}\r\ndiv.api-doc-component {\r\n  margin-bottom: 3rem;\r\n}\r\ndiv.api-doc-component > h2 .github-link, div.api-doc-component > h3 .github-link {\r\n  transition: opacity 0.5s;\r\n  opacity: 0.3;\r\n}\r\ndiv.api-doc-component > h2:hover .github-link, div.api-doc-component > h3:hover .github-link {\r\n  opacity: 1;\r\n}\r\ndiv.api-doc-component > h2:hover > .title-fragment, div.api-doc-component > h3:hover > .title-fragment {\r\n  opacity: 1;\r\n}\r\ndiv.api-doc-component section {\r\n  margin-top: 3rem;\r\n}\r\ndiv.api-doc-component section h4 {\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n}\r\ndiv.api-doc-component section .meta {\r\n  font-size: 0.8rem;\r\n  margin-bottom: 1rem;\r\n}\r\ndiv.api-doc-component section .meta > div {\r\n  margin-bottom: 0.5rem;\r\n}\r\na.title-fragment {\r\n  opacity: 0;\r\n  transition: opacity 125ms ease;\r\n  line-height: inherit;\r\n  position: absolute;\r\n  margin-left: -1.2em;\r\n  padding-right: 0.5em;\r\n}\r\na.title-fragment > img {\r\n  width: 1em;\r\n  height: 1em;\r\n}\r\ndiv.component-demo {\r\n  margin-bottom: 3rem;\r\n}\r\ndiv.component-demo h2 {\r\n  margin-bottom: 1rem;\r\n}\r\ndiv.component-demo h2 .plunker {\r\n  opacity: 0.3;\r\n  transition: opacity 0.5s;\r\n}\r\ndiv.component-demo h2:hover .plunker {\r\n  opacity: 1;\r\n}\r\ndiv.component-demo .tabset-code .nav {\r\n  margin: 0;\r\n  padding: 0.5rem 1.25rem 0;\r\n  font-size: 80%;\r\n}\r\ndiv.component-demo .tabset-code .nav .nav-link.active {\r\n  background-color: #f5f2f0;\r\n  border-bottom: 1px solid #f5f2f0;\r\n}\r\ndiv.component-demo .tabset-code .nav .nav-link:not(.active) {\r\n  color: #999;\r\n}\r\ndiv.component-demo .tabset-code .nav .nav-link:not(.active):hover {\r\n  color: #666;\r\n}\r\ndiv.component-demo .tabset-code .tab-content {\r\n  overflow: hidden;\r\n}\r\ndiv.component-demo .tabset-code pre {\r\n  margin: 0;\r\n}\r\n.examples-legend {\r\n  font-size: 80%;\r\n}\r\n.bd-footer {\r\n  padding: 3rem 0;\r\n  margin-top: 3rem;\r\n  font-size: 85%;\r\n  background-color: #f7f7f7;\r\n  text-align: left;\r\n}\r\n.bd-footer p {\r\n  margin-bottom: 0;\r\n}\r\n.bd-footer a {\r\n  font-weight: 500;\r\n  color: #55595c;\r\n}\r\nngbd-api-docs, ngbd-api-docs-class, ngbd-api-docs-config {\r\n  display: block;\r\n}\r\nngbd-api-docs:not(:first-child), ngbd-api-docs-class:not(:first-child), ngbd-api-docs-config:not(:first-child) {\r\n  margin-top: 3rem;\r\n  border-top: 1px solid #999;\r\n  padding-top: 1rem;\r\n}\r\ncode[class*=\"language-\"], pre[class*=\"language-\"] {\r\n  background-color: #f5f5f5;\r\n}\r\nspan.token.tag {\r\n  font-size: 1em;\r\n  padding: 0;\r\n}\r\nngbd-component-wrapper .jumbotron, ngbd-page-wrapper .jumbotron {\r\n  border-radius: 0;\r\n}\r\n.root-nav > .nav-tabs {\r\n  -webkit-transform: translateY(-73px);\r\n          transform: translateY(-73px);\r\n}\r\n.root-nav > .nav-tabs .nav-link:not(.active) {\r\n  color: #f9f9f9;\r\n}\r\n.root-nav > .nav-tabs .nav-link:not(.active):hover {\r\n  background-color: rgba(255, 255, 255, 0.15);\r\n  border-color: rgba(255, 255, 255, 0.15);\r\n}\r\n.root-nav > .tab-content {\r\n  -webkit-transform: translateY(-36.5px);\r\n          transform: translateY(-36.5px);\r\n}\r\n@media (max-width: 768px) and (orientation: portrait) {\r\n  .jumbotron > .container {\r\n    margin-bottom: 2rem;\r\n  }\r\n  .jumbotron > .container h1 {\r\n    text-align: center;\r\n  }\r\n  .root-nav ul {\r\n    -webkit-box-pack: center !important;\r\n        -ms-flex-pack: center !important;\r\n            justify-content: center !important;\r\n  }\r\n}\r\n@media (max-width: 568px) and (max-height: 320px) {\r\n  .jumbotron > .container {\r\n    margin-bottom: 2rem;\r\n  }\r\n  .jumbotron > .container h1 {\r\n    text-align: center;\r\n  }\r\n  .root-nav ul {\r\n    -webkit-box-pack: center !important;\r\n        -ms-flex-pack: center !important;\r\n            justify-content: center !important;\r\n  }\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map