/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    font-size: 10px;\n    font-family: Helvetica, sans-serif, Arial, sans-serif;\n    font-weight: bold;\n    text-shadow: 1px 1px 1px black;\n    color: white;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.canvas {\n    background-color: black;\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    position: relative;\n    background-size: cover;\n}\n\nimg {\n    max-height:100%;\n    max-width:100%;\n    object-fit:none;\n}\n\n.img-parent {\n    background-repeat: no-repeat;\n    background-position-y: bottom;\n    background-position-x: left;\n}\n\n.canvas-overlay--wrapper {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 98;\n    top: 0;\n    left: 0;\n}\n\n.canvas-overlay {\n    align-self: flex-end;\n    height: 50%;\n    width: 30%;\n    min-height: 500px;\n    min-width: 400px;\n    background-size: contain;\n}\n\n.canvas-overlay--right {\n    align-items: flex-end;\n}\n\n.canvas-overlay--center {\n    align-items: center;\n}\n\n.canvas-overlay--left {\n    align-items: flex-start;\n}\n\n.canvas-bottom-text--wrapper {\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-end;\n    border: 0.3rem solid black;\n    position: relative;\n    flex: 0.25;\n    left: 0;\n    bottom: 0; \n}\n\n.canvas-bottom-text {\n    background-color: #e899dc;\n    background-image: linear-gradient(315deg, #e899dc 0%, #d387ab 74%);\n    font-size: 3.5rem;\n    line-height: 4.5rem;\n    padding: 2rem;\n    height: 100%;\n    width: 100%;\n}\n\n\n.canvas-bottom-text-cursor {\n    height: 4rem;\n    width: 4rem;\n    border-style: solid;\n    border-left-color: transparent;\n    border-bottom-color: transparent;\n    border-width: 1rem;\n    transform: rotateY(0deg) rotate(45deg) scaleX(1.0) scaleY(0.8);\n    position: absolute;\n    bottom: 4rem;\n    right: 6rem;\n    z-index: 99;\n}\n\n.canvas-bottom-choices {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    align-items: flex-start;\n    justify-content: flex-start;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 100;\n}\n\n.canvas-bottom-choices--option {\n    background-color: rgba(33, 33, 33, 0.4);\n    font-size: 2rem;\n    padding: 2rem;\n    height: 100%;\n    width: 100%;\n    width: 100%;\n    cursor: pointer;\n}\n\n.canvas-bottom-choices--option:before {\n  content: '\\2665';\n  color: #e899dc;\n  margin-right: 1.4rem;\n}\n\n.scene-loading {\n  position: absolute;\n  background-color: #e899dc;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 200;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\n.scene-loading--text {\n  font-size: 8rem;\n  text-align: center;\n}\n\n\n.scene-loading--text:before {\n  content: '\\2665';\n  color: #e899dc;\n  margin-right: 2rem;\n}\n\n\n.scene-loading--text:after {\n  content: '\\2665';\n  color: #e899dc;\n  margin-left: 2rem;\n}\n\n\n.canvas-bottom-choices--option:hover {\n    background-color: rgba(33, 33, 33, 0.8);\n}\n\n.hidden {\n    display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,qDAAqD;IACrD,iBAAiB;IACjB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;AACX;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,OAAO;IACP,uBAAuB;IACvB,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,4BAA4B;IAC5B,6BAA6B;IAC7B,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,OAAO;AACX;;AAEA;IACI,oBAAoB;IACpB,WAAW;IACX,UAAU;IACV,iBAAiB;IACjB,gBAAgB;IAChB,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,yBAAyB;IACzB,0BAA0B;IAC1B,kBAAkB;IAClB,UAAU;IACV,OAAO;IACP,SAAS;AACb;;AAEA;IACI,yBAAyB;IACzB,kEAAkE;IAClE,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,WAAW;AACf;;;AAGA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,8BAA8B;IAC9B,gCAAgC;IAChC,kBAAkB;IAClB,8DAA8D;IAC9D,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,2BAA2B;IAC3B,OAAO;IACP,SAAS;IACT,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,uCAAuC;IACvC,eAAe;IACf,aAAa;IACb,YAAY;IACZ,WAAW;IACX,WAAW;IACX,eAAe;AACnB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,MAAM;EACN,OAAO;EACP,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;;AAGA;EACE,gBAAgB;EAChB,cAAc;EACd,kBAAkB;AACpB;;;AAGA;EACE,gBAAgB;EAChB,cAAc;EACd,iBAAiB;AACnB;;;AAGA;IACI,uCAAuC;AAC3C;;AAEA;IACI,aAAa;AACjB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    font-size: 10px;\n    font-family: Helvetica, sans-serif, Arial, sans-serif;\n    font-weight: bold;\n    text-shadow: 1px 1px 1px black;\n    color: white;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.canvas {\n    background-color: black;\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    position: relative;\n    background-size: cover;\n}\n\nimg {\n    max-height:100%;\n    max-width:100%;\n    object-fit:none;\n}\n\n.img-parent {\n    background-repeat: no-repeat;\n    background-position-y: bottom;\n    background-position-x: left;\n}\n\n.canvas-overlay--wrapper {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 98;\n    top: 0;\n    left: 0;\n}\n\n.canvas-overlay {\n    align-self: flex-end;\n    height: 50%;\n    width: 30%;\n    min-height: 500px;\n    min-width: 400px;\n    background-size: contain;\n}\n\n.canvas-overlay--right {\n    align-items: flex-end;\n}\n\n.canvas-overlay--center {\n    align-items: center;\n}\n\n.canvas-overlay--left {\n    align-items: flex-start;\n}\n\n.canvas-bottom-text--wrapper {\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-end;\n    border: 0.3rem solid black;\n    position: relative;\n    flex: 0.25;\n    left: 0;\n    bottom: 0; \n}\n\n.canvas-bottom-text {\n    background-color: #e899dc;\n    background-image: linear-gradient(315deg, #e899dc 0%, #d387ab 74%);\n    font-size: 3.5rem;\n    line-height: 4.5rem;\n    padding: 2rem;\n    height: 100%;\n    width: 100%;\n}\n\n\n.canvas-bottom-text-cursor {\n    height: 4rem;\n    width: 4rem;\n    border-style: solid;\n    border-left-color: transparent;\n    border-bottom-color: transparent;\n    border-width: 1rem;\n    transform: rotateY(0deg) rotate(45deg) scaleX(1.0) scaleY(0.8);\n    position: absolute;\n    bottom: 4rem;\n    right: 6rem;\n    z-index: 99;\n}\n\n.canvas-bottom-choices {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    align-items: flex-start;\n    justify-content: flex-start;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 100;\n}\n\n.canvas-bottom-choices--option {\n    background-color: rgba(33, 33, 33, 0.4);\n    font-size: 2rem;\n    padding: 2rem;\n    height: 100%;\n    width: 100%;\n    width: 100%;\n    cursor: pointer;\n}\n\n.canvas-bottom-choices--option:before {\n  content: '\\2665';\n  color: #e899dc;\n  margin-right: 1.4rem;\n}\n\n.scene-loading {\n  position: absolute;\n  background-color: #e899dc;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 200;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\n.scene-loading--text {\n  font-size: 8rem;\n  text-align: center;\n}\n\n\n.scene-loading--text:before {\n  content: '\\2665';\n  color: #e899dc;\n  margin-right: 2rem;\n}\n\n\n.scene-loading--text:after {\n  content: '\\2665';\n  color: #e899dc;\n  margin-left: 2rem;\n}\n\n\n.canvas-bottom-choices--option:hover {\n    background-color: rgba(33, 33, 33, 0.8);\n}\n\n.hidden {\n    display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameStates": () => (/* binding */ GameStates),
/* harmony export */   "EventTypes": () => (/* binding */ EventTypes),
/* harmony export */   "ScenePositions": () => (/* binding */ ScenePositions),
/* harmony export */   "Actors": () => (/* binding */ Actors),
/* harmony export */   "SceneNames": () => (/* binding */ SceneNames),
/* harmony export */   "AssetsDir": () => (/* binding */ AssetsDir),
/* harmony export */   "DomClasses": () => (/* binding */ DomClasses),
/* harmony export */   "ActorAssets": () => (/* binding */ ActorAssets),
/* harmony export */   "BackgroundAssets": () => (/* binding */ BackgroundAssets)
/* harmony export */ });
// fake enums !!
const GameStates = Object.freeze({
  Ending: 'Ending',
  EnterActor: 'EnterActor',
  ExitActor: 'ExitActor',
  LoadScene: 'LoadScene',
  IntroDelayedScene: 'IntroDelayedScene',
  IntroFinalScene: 'IntroFinalScene',
  IntroSceneDelayedDisplay: 'IntroSceneDelayedDisplay',
  IntroScene: 'IntroScene',
  IntroSceneDisplay: 'IntroSceneDisplay',
  IntroSceneFadeOut: 'IntroSceneFadeOut',
  NextScene: 'NextScene',
  PresentingChoices: 'PresentingChoices',
  PresentingText: 'PresentingText',
  PresentingTextForChoice: 'PresentingTextForChoice',
  SwitchingActorAsset: 'SwitchingActorAsset',
  WaitingForClick: 'WaitingForClick',
  WaitingForChoice: 'WaitingForChoice',
});

const EventTypes = Object.freeze({
  Click: 'click',
});

const ScenePositions = Object.freeze({
  Left: 0,
  Center: 1,
  Right: 2,
});

const Actors = Object.freeze({
  Matt: 'Matt',
  MosDef: 'Mos Def',
  Charlie: 'Charlie',
  Stella: 'Stella',
});

const SceneNames = Object.freeze({
  Intro: 'Intro',
  Ending: 'Ending',
  KoiSushiOutside: 'KoiSushiOutside',
  KoiSushiInside: 'KoiSushiInside',
  NashvilleFairGrounds: 'NashvilleFairGrounds',
  NssLunchRoom: 'NSSLunchRoom',
  OldNssParkingLot: 'NSSParkingLot',
});

const AssetsDir = 'assets';

const DomClasses = Object.freeze({
  CanvasBottomChoicesOption: 'canvas-bottom-choices--option',
});

const ActorAssets = Object.freeze({
  Charlie: 'charlie.png',
  JoeShep: 'joe_shep.png',
  MattHug: 'matt_hug.png',
  MattLove: 'matt_love.png',
  MattPoint: 'matt_point.png',
  MattShrug: 'matt_shrug.png',
  MattSmile: 'matt_smile.png',
  MattSurprise: 'matt_surprise.png',
  MattThink: 'matt_think.png',
  MattWave: 'matt_wave.png',
  MosDef: 'mos_def.png',
  Stella: 'stella.png',
});

const BackgroundAssets = Object.freeze({
  NashvilleFairGrounds: 'nashville_fairgrounds.png',
  NashvilleHouseOutside: 'nashville_house_outside.png',
  NashvilleKoiSushiInside: 'nashville_koi_sushi_inside.png',
  NashvilleKoiSushiOutside: 'nashville_koi_sushi_outside.png',
  NashvilleLasMaracasInside: 'nashville_las_maracas_inside.png',
  NashvilleLasMaracasOutside: 'nashville_las_maracas_outside.png',
  NssGameNight: 'nss_game_night_small.webp',
  NssLunchRoom: 'nss_lunchroom.png',
  OldNssParkingLot: 'old_nss_parking_lot.png',
});


/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assetsUrl": () => (/* binding */ assetsUrl),
/* harmony export */   "enterActor": () => (/* binding */ enterActor),
/* harmony export */   "ending": () => (/* binding */ ending),
/* harmony export */   "exitActor": () => (/* binding */ exitActor),
/* harmony export */   "loadScene": () => (/* binding */ loadScene),
/* harmony export */   "introScene": () => (/* binding */ introScene),
/* harmony export */   "introFinalScene": () => (/* binding */ introFinalScene),
/* harmony export */   "introDelayedScene": () => (/* binding */ introDelayedScene),
/* harmony export */   "introSceneDelayedDisplay": () => (/* binding */ introSceneDelayedDisplay),
/* harmony export */   "introSceneDisplay": () => (/* binding */ introSceneDisplay),
/* harmony export */   "introSceneFadeOut": () => (/* binding */ introSceneFadeOut),
/* harmony export */   "nextScene": () => (/* binding */ nextScene),
/* harmony export */   "presentText": () => (/* binding */ presentText),
/* harmony export */   "presentTextForChoice": () => (/* binding */ presentTextForChoice),
/* harmony export */   "presentChoices": () => (/* binding */ presentChoices),
/* harmony export */   "switchActorAsset": () => (/* binding */ switchActorAsset),
/* harmony export */   "waitForClick": () => (/* binding */ waitForClick),
/* harmony export */   "waitForChoice": () => (/* binding */ waitForChoice)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


const assetsUrl = (name) => `url(${_constants__WEBPACK_IMPORTED_MODULE_0__.AssetsDir}/${name})`;

const enterActor = (actor) => ({ state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.EnterActor, options: { actor } });
const ending = () => ({ state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.Ending });
const exitActor = (actor) => ({ state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.ExitActor, options: { actor } });
const loadScene = () => ({ state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.LoadScene });
const introScene = () => ({ state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.IntroScene });
const introFinalScene = () => ({ state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.IntroFinalScene });
const introDelayedScene = () => ({ state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.IntroDelayedScene });
const introSceneDelayedDisplay = () => ({ state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.IntroSceneDelayedDisplay });
const introSceneDisplay = () => ({ state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.IntroSceneDisplay });
const introSceneFadeOut = () => ({ state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.IntroSceneFadeOut });
const nextScene = () => ({ state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.NextScene });

// TODO Make presentText & presentTextForChoice accept the text as an option
const presentText = () => ({ state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.PresentingText });
const presentTextForChoice = () => ({ state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.PresentingTextForChoice });

const presentChoices = (choices) => ({
  state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.PresentingChoices,
  options: { choices },
});
const switchActorAsset = (actor, asset) => ({
  state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.SwitchingActorAsset,
  options: { actor, asset },
});
const waitForClick = () => ({ state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.WaitingForClick });
const waitForChoice = () => ({ state: _constants__WEBPACK_IMPORTED_MODULE_0__.GameStates.WaitingForChoice });


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _scene_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene-manager */ "./src/scene-manager.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");





// init all the game vars and build out DOM
let currentScene = (0,_scene_manager__WEBPACK_IMPORTED_MODULE_2__.default)(_constants__WEBPACK_IMPORTED_MODULE_1__.SceneNames.Intro);
let running = true;
let delayCounter = 0;

const canvas = document.createElement('div');
canvas.classList.add('canvas');

const sceneLoading = document.createElement('div');
sceneLoading.classList.add('scene-loading', 'hidden');

const sceneLoadingText = document.createElement('div');
sceneLoadingText.classList.add('scene-loading--text');

const canvasOverlayWrapper = document.createElement('div');
canvasOverlayWrapper.classList.add('canvas-overlay--wrapper');

const canvasRightOverlay = document.createElement('div');
canvasRightOverlay.classList.add('canvas-overlay', 'canvas-overlay--right', 'img-parent');

const canvasCenterOverlay = document.createElement('div');
canvasCenterOverlay.classList.add('canvas-overlay', 'canvas-overlay--center', 'img-parent');

const canvasLeftOverlay = document.createElement('div');
canvasLeftOverlay.classList.add('canvas-overlay', 'canvas-overlay--left', 'img-parent');

const canvasBottomTextWrapper = document.createElement('div');
canvasBottomTextWrapper.classList.add('canvas-bottom-text--wrapper');

const canvasBottomText = document.createElement('div');
canvasBottomText.classList.add('canvas-bottom-text');

const canvasBottomTextCursor = document.createElement('div');
canvasBottomTextCursor.classList.add('canvas-bottom-text-cursor');

const canvasBottomChoices = document.createElement('div');
canvasBottomChoices.classList.add('canvas-bottom-choices');

document.body.appendChild(canvas);
document.body.appendChild(canvasBottomTextWrapper);
document.body.appendChild(sceneLoading);

sceneLoading.appendChild(sceneLoadingText);

canvasOverlayWrapper.appendChild(canvasLeftOverlay);
canvasOverlayWrapper.appendChild(canvasCenterOverlay);
canvasOverlayWrapper.appendChild(canvasRightOverlay);

canvas.appendChild(canvasOverlayWrapper);
canvas.appendChild(canvasBottomChoices);

canvasBottomTextWrapper.appendChild(canvasBottomText);
canvasBottomTextWrapper.appendChild(canvasBottomTextCursor);

const insertScene = (helper) => {
  currentScene.sceneFlow.unshift(helper());
};

// main game logic and helper functions
const advanceSceneFlow = () => {
  currentScene.sceneFlow.shift();
};

const toggleCursor = (hide) => {
  if (hide !== undefined) {
    if (hide) {
      canvasBottomTextCursor.classList.add('hidden');
    } else {
      canvasBottomTextCursor.classList.remove('hidden');
    }

    return;
  }

  delayCounter += 1;

  if (delayCounter >= 30) {
    canvasBottomTextCursor.classList.toggle('hidden');

    delayCounter = 0;
  }
};

const updateText = () => {
  canvasBottomText.innerHTML += currentScene.text[0][0];

  currentScene.text[0] = currentScene.text[0].substr(1, currentScene.text[0].length - 1);
};

const clearText = () => {
  canvasBottomText.innerHTML = '';
};

const enterActor = (actor) => {
  switch (actor.position) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__.ScenePositions.Left:
      canvasLeftOverlay.style.backgroundImage = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.assetsUrl)(actor.asset);
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.ScenePositions.Center:
      canvasCenterOverlay.style.backgroundImage = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.assetsUrl)(actor.asset);
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.ScenePositions.Right:
      canvasRightOverlay.style.backgroundImage = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.assetsUrl)(actor.asset);
      break;

    default:
      throw new Error(`Unrecognized ScenePosition in INtroduceActor State: ${actor.position}`);
  }
};

const exitActor = (actor) => {
  switch (actor.position) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__.ScenePositions.Left:
      canvasLeftOverlay.style.backgroundImage = null;
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.ScenePositions.Center:
      canvasCenterOverlay.style.backgroundImage = null;
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.ScenePositions.Right:
      canvasRightOverlay.style.backgroundImage = null;
      break;

    default:
      throw new Error(`Unrecognized ScenePosition in ExitActor State: ${actor.position}`);
  }
};

const loadingSceneState = () => {
  if (currentScene.background) {
    canvas.style.backgroundImage = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.assetsUrl)(currentScene.background);
  }

  if (currentScene.actors && currentScene.actors.length) {
    currentScene.actors.forEach((actor) => {
      if (actor.appearsAtStart) {
        enterActor(actor);
      }
    });
  }

  advanceSceneFlow();
};

const presentingTextState = (advanceToWaitingForClick) => {
  if (currentScene.text && currentScene.text[0] && currentScene.text[0].length) {
    updateText();
  } else {
    currentScene.text.shift();
    advanceSceneFlow();

    if (advanceToWaitingForClick) {
      insertScene(_helpers__WEBPACK_IMPORTED_MODULE_3__.waitForClick);
    }
  }
};

const waitingForClickState = (event) => {
  if (event.type && event.type === _constants__WEBPACK_IMPORTED_MODULE_1__.EventTypes.Click) {
    toggleCursor(true);
    clearText();

    advanceSceneFlow();
    delayCounter = 0;
  }

  toggleCursor();
};

const clearCurrentScene = () => {
  canvas.style.backgroundImage = null;
  canvasRightOverlay.style.backgroundImage = null;
  canvasCenterOverlay.style.backgroundImage = null;
  canvasLeftOverlay.style.backgroundImage = null;

  clearText();
};

const nextSceneState = (name) => {
  currentScene = (0,_scene_manager__WEBPACK_IMPORTED_MODULE_2__.default)(name);
};

const findActorForCurrentFlow = (currentFlow) => {
  const name = currentFlow.options.actor;

  return currentScene.actors.find((actor) => actor.name === name);
};

const presentingChoicesState = (currentFlow) => {
  const { choices } = currentFlow.options;

  choices.forEach((choice) => {
    const choiceDiv = document.createElement('div');
    choiceDiv.innerHTML = choice;
    choiceDiv.classList.add(_constants__WEBPACK_IMPORTED_MODULE_1__.DomClasses.CanvasBottomChoicesOption);

    canvasBottomChoices.appendChild(choiceDiv);
  });
};

const clearChoices = () => {
  canvasBottomChoices.innerHTML = null;
};

const switchActorAssetState = (currentFlow) => {
  const { options } = currentFlow;

  const actor = findActorForCurrentFlow(currentFlow);
  actor.asset = options.asset;

  enterActor(actor);
};

const initializeIntroScene = () => {
  sceneLoadingText.innerHTML = currentScene.title;
  sceneLoading.style.opacity = 1;
  sceneLoading.classList.remove('hidden');
};

const cleanupIntroScene = () => {
  sceneLoading.classList.add('hidden');
  sceneLoadingText.innerHTML = null;

  delayCounter = 0;

  advanceSceneFlow();
};

const introSceneFadeOutState = () => {
  sceneLoading.style.opacity = 1 - delayCounter;

  delayCounter += 0.01;

  if (delayCounter > 1) {
    cleanupIntroScene();
  }
};

const introSceneState = () => {
  delayCounter += 1;

  if (delayCounter > 240) {
    advanceSceneFlow();

    delayCounter = 0;

    insertScene(_helpers__WEBPACK_IMPORTED_MODULE_3__.introSceneFadeOut);
    insertScene(_helpers__WEBPACK_IMPORTED_MODULE_3__.loadScene);
  }
};

const gameUpdate = (event) => {
  const [currentFlow] = currentScene.sceneFlow;
  switch (currentFlow.state) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.LoadScene:
      loadingSceneState();
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.PresentingTextForChoice:
    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.PresentingText:
      presentingTextState(currentFlow.state === _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.PresentingText);
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.WaitingForClick:
      if (!event) {
        break;
      }

      waitingForClickState(event);
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.NextScene:
      if (!currentScene.nextScene) {
        throw new Error('currentScene has no nextScene to move to.');
      }

      clearCurrentScene();
      nextSceneState(currentScene.nextScene);
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.EnterActor:
      enterActor(findActorForCurrentFlow(currentFlow));

      advanceSceneFlow();
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.ExitActor:
      exitActor(findActorForCurrentFlow(currentFlow));

      advanceSceneFlow();
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.PresentingChoices:
      if (
        !currentFlow.options
        || !currentFlow.options.choices
        || !currentFlow.options.choices.length
      ) {
        throw new Error("state SetupChoices currentScene doesn't have choices");
      }

      presentingChoicesState(currentFlow);
      advanceSceneFlow();
      insertScene(_helpers__WEBPACK_IMPORTED_MODULE_3__.waitForChoice);
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.WaitingForChoice:
      if (event && event.type && event.type === _constants__WEBPACK_IMPORTED_MODULE_1__.EventTypes.Click) {
        const { target } = event;

        if (target.classList && target.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_1__.DomClasses.CanvasBottomChoicesOption)) {
          clearText();
          clearChoices();
          advanceSceneFlow();
        }
      }
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.SwitchingActorAsset:
      switchActorAssetState(currentFlow);
      advanceSceneFlow();
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.IntroScene:
      initializeIntroScene();

      advanceSceneFlow();
      insertScene(_helpers__WEBPACK_IMPORTED_MODULE_3__.introSceneDisplay);
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.IntroDelayedScene:
      initializeIntroScene();

      advanceSceneFlow();
      insertScene(_helpers__WEBPACK_IMPORTED_MODULE_3__.waitForClick);
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.IntroFinalScene:
      initializeIntroScene();

      advanceSceneFlow();
      insertScene(_helpers__WEBPACK_IMPORTED_MODULE_3__.ending);
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.IntroSceneDisplay:
      introSceneState();
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.IntroSceneFadeOut:
      introSceneFadeOutState();
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.GameStates.Ending:
      // Do nothing keep showing the ending screen
      break;

    default:
      running = false;

      // eslint-disable-next-line no-console
      console.log(currentScene);
      throw new Error(`currentScene case hit that wasn't expected: ${currentScene.sceneFlow[0].state}`);
  }
};

document.addEventListener('click', gameUpdate);

// init gameloop vars
const fps = 60;
const timePerTick = 1000 / fps;
let delta = 0;
let deltaTime = 0;
let now = Date.now();
let lastTime = Date.now();
let timer = 0;

const gameCleanup = () => {
  // eslint-disable-next-line no-console
  console.log('Game Done');
};

const loop = () => {
  if (running) {
    now = Date.now();
    delta = now - lastTime;
    timer += delta;
    lastTime = now;

    if (timer >= timePerTick) {
      deltaTime = timer / 1000;
      gameUpdate(deltaTime);
      timer = 0;
    }

    window.requestAnimationFrame(loop);

    return;
  }

  gameCleanup();
};

loop();


/***/ }),

/***/ "./src/scene-manager.js":
/*!******************************!*\
  !*** ./src/scene-manager.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _scenes_nashville_fairgrounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/nashville-fairgrounds */ "./src/scenes/nashville-fairgrounds.js");
/* harmony import */ var _scenes_nss_lunchroom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/nss-lunchroom */ "./src/scenes/nss-lunchroom.js");
/* harmony import */ var _scenes_nss_parking_lot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/nss-parking-lot */ "./src/scenes/nss-parking-lot.js");
/* harmony import */ var _scenes_nashville_koi_outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/nashville-koi-outside */ "./src/scenes/nashville-koi-outside.js");
/* harmony import */ var _scenes_nashville_koi_inside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/nashville-koi-inside */ "./src/scenes/nashville-koi-inside.js");
/* harmony import */ var _scenes_ending__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scenes/ending */ "./src/scenes/ending.js");
/* harmony import */ var _scenes_intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scenes/intro */ "./src/scenes/intro.js");










const scenes = {
  [_constants__WEBPACK_IMPORTED_MODULE_0__.SceneNames.Ending]: _scenes_ending__WEBPACK_IMPORTED_MODULE_6__.default,
  [_constants__WEBPACK_IMPORTED_MODULE_0__.SceneNames.Intro]: _scenes_intro__WEBPACK_IMPORTED_MODULE_7__.default,
  [_constants__WEBPACK_IMPORTED_MODULE_0__.SceneNames.NssLunchRoom]: _scenes_nss_lunchroom__WEBPACK_IMPORTED_MODULE_2__.default,
  [_constants__WEBPACK_IMPORTED_MODULE_0__.SceneNames.OldNssParkingLot]: _scenes_nss_parking_lot__WEBPACK_IMPORTED_MODULE_3__.default,
  [_constants__WEBPACK_IMPORTED_MODULE_0__.SceneNames.NashvilleFairGrounds]: _scenes_nashville_fairgrounds__WEBPACK_IMPORTED_MODULE_1__.default,
  [_constants__WEBPACK_IMPORTED_MODULE_0__.SceneNames.KoiSushiOutside]: _scenes_nashville_koi_outside__WEBPACK_IMPORTED_MODULE_4__.default,
  [_constants__WEBPACK_IMPORTED_MODULE_0__.SceneNames.KoiSushiInside]: _scenes_nashville_koi_inside__WEBPACK_IMPORTED_MODULE_5__.default,
};

const findScene = (name) => {
  if (!scenes[name]) {
    throw new Error(`No scene with name: ${name} exists!`);
  }

  return scenes[name];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findScene);


/***/ }),

/***/ "./src/scenes/ending.js":
/*!******************************!*\
  !*** ./src/scenes/ending.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'T H E   E N D (to be continued...)',
  sceneFlow: [
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.introScene)(),
  ],
});


/***/ }),

/***/ "./src/scenes/intro.js":
/*!*****************************!*\
  !*** ./src/scenes/intro.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'V-Day 2021 The Game!\n\nClick anywhere to begin.',
  sceneFlow: [
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.introDelayedScene)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.nextScene)(),
  ],
  nextScene: _constants__WEBPACK_IMPORTED_MODULE_0__.SceneNames.NssLunchRoom,
});


/***/ }),

/***/ "./src/scenes/nashville-fairgrounds.js":
/*!*********************************************!*\
  !*** ./src/scenes/nashville-fairgrounds.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  background: _constants__WEBPACK_IMPORTED_MODULE_0__.BackgroundAssets.NashvilleFairGrounds,
  title: 'Nashville State Fairgrounds',
  actors: [
    {
      name: _constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt,
      position: _constants__WEBPACK_IMPORTED_MODULE_0__.ScenePositions.Center,
      asset: _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattWave,
      appearsAtStart: true,
    },
    {
      name: _constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Charlie,
      position: _constants__WEBPACK_IMPORTED_MODULE_0__.ScenePositions.Left,
      asset: _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.Charlie,
      appearsAtStart: false,
    },
    {
      name: _constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Stella,
      position: _constants__WEBPACK_IMPORTED_MODULE_0__.ScenePositions.Right,
      asset: _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.Stella,
      appearsAtStart: false,
    },
  ],
  text: [
    'Matt: Here we are!',
    'Matt: Hey look Charlie found a friend!',
    'Charlie: BORK! :D',
    '????: *TONGUE WHIP* :)',
    'Matt: Hello, girl! Who are you??',
    '????: My name is Stella.',
    'Stella: *scampers off*',
    'Matt: Oh My! Bye Yiddle Girl!',
    'Matt: What a cute pooper! I hope we meet her again!',
    'Matt: So, tell me a bit more about yourself',
    'Matt: Very cool. I believe it! You are way cooler than I realized at first :)',
    'Matt: While I was a musician for about 15 years, I\'m looking forward to getting away from that whole scene for a good while.',
    'Matt: Glad to be making a new friend (and a really cute one at that).',
    'Matt: How about we get dinner this weekend?',
  ],
  sceneFlow: [
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.introScene)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattPoint),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.enterActor)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Charlie),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.enterActor)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Stella),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattThink),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattSurprise),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.exitActor)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Stella),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattWave),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattThink),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentTextForChoice)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentChoices)(['I\'m an amazing musician!', 'I\'m an amazing mom to Charlie!', 'I\'m from the amazing Pacific Northwest!', 'I am an amazing plant mama!', 'I\'m just damn amazing! :D', 'All of the above! (correct choice)']),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattSmile),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.nextScene)(),
  ],
  nextScene: _constants__WEBPACK_IMPORTED_MODULE_0__.SceneNames.KoiSushiOutside,
});


/***/ }),

/***/ "./src/scenes/nashville-koi-inside.js":
/*!********************************************!*\
  !*** ./src/scenes/nashville-koi-inside.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  background: _constants__WEBPACK_IMPORTED_MODULE_0__.BackgroundAssets.NashvilleKoiSushiInside,
  title: 'Koi Sushi (inside)',
  actors: [
    {
      name: _constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt,
      position: _constants__WEBPACK_IMPORTED_MODULE_0__.ScenePositions.Center,
      asset: _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattSmile,
      appearsAtStart: false,
    },
    {
      name: _constants__WEBPACK_IMPORTED_MODULE_0__.Actors.MosDef,
      position: _constants__WEBPACK_IMPORTED_MODULE_0__.ScenePositions.Right,
      asset: _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MosDef,
      appearsAtStart: true,
    },
    {
      name: _constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Charlie,
      position: _constants__WEBPACK_IMPORTED_MODULE_0__.ScenePositions.Left,
      asset: _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.Charlie,
      appearsAtStart: false,
    },
  ],
  text: [
    'Host: *checks phone*',
    'Host: *SIGH*',
    'Host: *Exuding teenage angst* Right this way... (I hate my life)',
    '(Sometime later after the food has been served...)',
    'Matt: Hi. :)',
    'Matt: I have really enjoyed hanging out the past couple of weeks for lunch and everything.',
    'Matt: And your boy Charlie is the most cutest of all boys :D',
    'Matt: I feel a real connection forming. You really are a spectacular woman, and I can\'t wait to learn more and share more about myself with you :)',
    'Matt: *Raises glass* To us! I forsee a wonderful future!',
    '(Cheers!!) <3',
    '*BORK* (Charlie says "Cheers and I agree in doggo speak"!)',
  ],
  sceneFlow: [
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.introScene)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.exitActor)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.MosDef),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.enterActor)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattLove),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattHug),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.enterActor)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Charlie),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.nextScene)(),
  ],
  nextScene: _constants__WEBPACK_IMPORTED_MODULE_0__.SceneNames.Ending,
});


/***/ }),

/***/ "./src/scenes/nashville-koi-outside.js":
/*!*********************************************!*\
  !*** ./src/scenes/nashville-koi-outside.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  background: _constants__WEBPACK_IMPORTED_MODULE_0__.BackgroundAssets.NashvilleKoiSushiOutside,
  title: 'Koi Sushi (outside)',
  actors: [
    {
      name: _constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt,
      position: _constants__WEBPACK_IMPORTED_MODULE_0__.ScenePositions.Center,
      asset: _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattSmile,
      appearsAtStart: true,
    },
    {
      name: _constants__WEBPACK_IMPORTED_MODULE_0__.Actors.MosDef,
      position: _constants__WEBPACK_IMPORTED_MODULE_0__.ScenePositions.Left,
      asset: _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MosDef,
      appearsAtStart: false,
    },
  ],
  text: [
    'Matt: Hi! Thanks for meeting up with me.',
    'Matt: I\'ve heard this place is pretty good.',
    'Matt: How long have you lived around here??',
    'Matt: You can say that again.',
    'Matt: Where would you go if you could live anywhere??',
    'Matt: Very Cool. I can see you have that adventurer\'s spirit :)',
    'Host: Your table is ready... *SIGH*',
    'Matt: Hey that host kinda looks like...',
  ],
  sceneFlow: [
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.introScene)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattThink),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentChoices)(['I can\'t even remember now..', 'Feels like a lifetime!', 'Too long!']),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattPoint),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentTextForChoice)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentChoices)(['Seattle', 'California', 'Colorando', 'Another Country', 'Van life!', 'Not 100% sure, but I have some thoughts about it...']),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattHug),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.enterActor)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.MosDef),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.exitActor)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.MosDef),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattSurprise),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.nextScene)(),
  ],
  nextScene: _constants__WEBPACK_IMPORTED_MODULE_0__.SceneNames.KoiSushiInside,
});


/***/ }),

/***/ "./src/scenes/nss-lunchroom.js":
/*!*************************************!*\
  !*** ./src/scenes/nss-lunchroom.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  background: _constants__WEBPACK_IMPORTED_MODULE_0__.BackgroundAssets.NssLunchRoom,
  title: 'Nashville Software School 2017',
  actors: [
    {
      name: _constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt,
      position: _constants__WEBPACK_IMPORTED_MODULE_0__.ScenePositions.Right,
      asset: _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattWave,
      appearsAtStart: false,
    },
  ],
  text: [
    '????: Hey there!!',
    '????: Wait up!',
    'Matt: Hi :) ... How is your day going?',
    'Matt: I can\'t believe we only have a couple of weeks left!',
    'Matt: I\'ve been so focused on my work that I feel like we hardly got to know each other.',
    'Matt: Want to go get lunch somewhere?',
    'Matt: Okay. Let\'s get outta here!',
  ],
  sceneFlow: [
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.introScene)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.enterActor)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentTextForChoice)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentChoices)(['It\'s uh... going', 'Not bad, actually!', 'Fantasticcccc!']),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattThink),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentTextForChoice)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentChoices)(['Sure that sounds fun!', 'Yea! Lets get Charlie!']),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattSmile),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.nextScene)(),
  ],
  nextScene: _constants__WEBPACK_IMPORTED_MODULE_0__.SceneNames.OldNssParkingLot,
});


/***/ }),

/***/ "./src/scenes/nss-parking-lot.js":
/*!***************************************!*\
  !*** ./src/scenes/nss-parking-lot.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  background: _constants__WEBPACK_IMPORTED_MODULE_0__.BackgroundAssets.OldNssParkingLot,
  title: 'The Parking Lot',
  actors: [
    {
      name: _constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt,
      position: _constants__WEBPACK_IMPORTED_MODULE_0__.ScenePositions.Left,
      asset: _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattWave,
      appearsAtStart: true,
    },
    {
      name: _constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Charlie,
      position: _constants__WEBPACK_IMPORTED_MODULE_0__.ScenePositions.Right,
      asset: _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.Charlie,
      appearsAtStart: false,
    },
  ],
  text: [
    'Matt: It\'s a nice day!',
    'Matt: So, this is your boy Charlie??',
    'Matt: Do you wanna play, Charlie!?',
    'Charlie: Woof!',
    'Matt: Go fetch boy!',
    'Charlie: Wooooooooooooooooooooof!',
    'Matt: What a good boy! Look at him go!',
    'Matt: You guys make a great duo. :)',
    'Matt: Well, want to go to the fairgrounds with Charles to eat some lunch?',
    'Matt: C\'mon! It\'ll be fun!',
  ],
  sceneFlow: [
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.introScene)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattThink),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattShrug),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.enterActor)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Charlie),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattPoint),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.exitActor)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Charlie),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattLove),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentTextForChoice)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentChoices)(['That sounds good.', 'Hmm... I dunno...']),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.nextScene)(),
  ],
  nextScene: _constants__WEBPACK_IMPORTED_MODULE_0__.SceneNames.NashvilleFairGrounds,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzLy4vc3JjL3NjZW5lLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzLy4vc3JjL3NjZW5lcy9lbmRpbmcuanMiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzLy4vc3JjL3NjZW5lcy9pbnRyby5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9zcmMvc2NlbmVzL25hc2h2aWxsZS1mYWlyZ3JvdW5kcy5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9zcmMvc2NlbmVzL25hc2h2aWxsZS1rb2ktaW5zaWRlLmpzIiwid2VicGFjazovL3ZkYXlfMjAyMV9qcy8uL3NyYy9zY2VuZXMvbmFzaHZpbGxlLWtvaS1vdXRzaWRlLmpzIiwid2VicGFjazovL3ZkYXlfMjAyMV9qcy8uL3NyYy9zY2VuZXMvbnNzLWx1bmNocm9vbS5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9zcmMvc2NlbmVzL25zcy1wYXJraW5nLWxvdC5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZkYXlfMjAyMV9qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGdCQUFnQixpQkFBaUIsNkJBQTZCLEdBQUcsZ0JBQWdCLGtCQUFrQixtQkFBbUIsc0JBQXNCLDREQUE0RCx3QkFBd0IscUNBQXFDLG1CQUFtQixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QixjQUFjLEdBQUcsYUFBYSw4QkFBOEIsb0JBQW9CLGNBQWMsOEJBQThCLHlCQUF5Qiw2QkFBNkIsR0FBRyxTQUFTLHNCQUFzQixxQkFBcUIsc0JBQXNCLEdBQUcsaUJBQWlCLG1DQUFtQyxvQ0FBb0Msa0NBQWtDLEdBQUcsOEJBQThCLG9CQUFvQiwwQkFBMEIscUNBQXFDLGtCQUFrQixtQkFBbUIseUJBQXlCLGtCQUFrQixhQUFhLGNBQWMsR0FBRyxxQkFBcUIsMkJBQTJCLGtCQUFrQixpQkFBaUIsd0JBQXdCLHVCQUF1QiwrQkFBK0IsR0FBRyw0QkFBNEIsNEJBQTRCLEdBQUcsNkJBQTZCLDBCQUEwQixHQUFHLDJCQUEyQiw4QkFBOEIsR0FBRyxrQ0FBa0Msb0JBQW9CLDRCQUE0QixnQ0FBZ0MsaUNBQWlDLHlCQUF5QixpQkFBaUIsY0FBYyxnQkFBZ0IsSUFBSSx5QkFBeUIsZ0NBQWdDLHlFQUF5RSx3QkFBd0IsMEJBQTBCLG9CQUFvQixtQkFBbUIsa0JBQWtCLEdBQUcsa0NBQWtDLG1CQUFtQixrQkFBa0IsMEJBQTBCLHFDQUFxQyx1Q0FBdUMseUJBQXlCLHFFQUFxRSx5QkFBeUIsbUJBQW1CLGtCQUFrQixrQkFBa0IsR0FBRyw0QkFBNEIsb0JBQW9CLDZCQUE2Qix5QkFBeUIsOEJBQThCLGtDQUFrQyxjQUFjLGdCQUFnQixrQkFBa0IsbUJBQW1CLEdBQUcsb0NBQW9DLDhDQUE4QyxzQkFBc0Isb0JBQW9CLG1CQUFtQixrQkFBa0Isa0JBQWtCLHNCQUFzQixHQUFHLDJDQUEyQyxzQkFBc0IsbUJBQW1CLHlCQUF5QixHQUFHLG9CQUFvQix1QkFBdUIsOEJBQThCLGlCQUFpQixnQkFBZ0IsV0FBVyxZQUFZLGlCQUFpQix3QkFBd0IsNEJBQTRCLGtCQUFrQixHQUFHLDBCQUEwQixvQkFBb0IsdUJBQXVCLEdBQUcsbUNBQW1DLHNCQUFzQixtQkFBbUIsdUJBQXVCLEdBQUcsa0NBQWtDLHNCQUFzQixtQkFBbUIsc0JBQXNCLEdBQUcsNENBQTRDLDhDQUE4QyxHQUFHLGFBQWEsb0JBQW9CLEdBQUcsU0FBUywrRUFBK0UsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLDZCQUE2QixnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLGdCQUFnQixrQkFBa0IsbUJBQW1CLHNCQUFzQiw0REFBNEQsd0JBQXdCLHFDQUFxQyxtQkFBbUIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsY0FBYyxHQUFHLGFBQWEsOEJBQThCLG9CQUFvQixjQUFjLDhCQUE4Qix5QkFBeUIsNkJBQTZCLEdBQUcsU0FBUyxzQkFBc0IscUJBQXFCLHNCQUFzQixHQUFHLGlCQUFpQixtQ0FBbUMsb0NBQW9DLGtDQUFrQyxHQUFHLDhCQUE4QixvQkFBb0IsMEJBQTBCLHFDQUFxQyxrQkFBa0IsbUJBQW1CLHlCQUF5QixrQkFBa0IsYUFBYSxjQUFjLEdBQUcscUJBQXFCLDJCQUEyQixrQkFBa0IsaUJBQWlCLHdCQUF3Qix1QkFBdUIsK0JBQStCLEdBQUcsNEJBQTRCLDRCQUE0QixHQUFHLDZCQUE2QiwwQkFBMEIsR0FBRywyQkFBMkIsOEJBQThCLEdBQUcsa0NBQWtDLG9CQUFvQiw0QkFBNEIsZ0NBQWdDLGlDQUFpQyx5QkFBeUIsaUJBQWlCLGNBQWMsZ0JBQWdCLElBQUkseUJBQXlCLGdDQUFnQyx5RUFBeUUsd0JBQXdCLDBCQUEwQixvQkFBb0IsbUJBQW1CLGtCQUFrQixHQUFHLGtDQUFrQyxtQkFBbUIsa0JBQWtCLDBCQUEwQixxQ0FBcUMsdUNBQXVDLHlCQUF5QixxRUFBcUUseUJBQXlCLG1CQUFtQixrQkFBa0Isa0JBQWtCLEdBQUcsNEJBQTRCLG9CQUFvQiw2QkFBNkIseUJBQXlCLDhCQUE4QixrQ0FBa0MsY0FBYyxnQkFBZ0Isa0JBQWtCLG1CQUFtQixHQUFHLG9DQUFvQyw4Q0FBOEMsc0JBQXNCLG9CQUFvQixtQkFBbUIsa0JBQWtCLGtCQUFrQixzQkFBc0IsR0FBRywyQ0FBMkMsc0JBQXNCLG1CQUFtQix5QkFBeUIsR0FBRyxvQkFBb0IsdUJBQXVCLDhCQUE4QixpQkFBaUIsZ0JBQWdCLFdBQVcsWUFBWSxpQkFBaUIsd0JBQXdCLDRCQUE0QixrQkFBa0IsR0FBRywwQkFBMEIsb0JBQW9CLHVCQUF1QixHQUFHLG1DQUFtQyxzQkFBc0IsbUJBQW1CLHVCQUF1QixHQUFHLGtDQUFrQyxzQkFBc0IsbUJBQW1CLHNCQUFzQixHQUFHLDRDQUE0Qyw4Q0FBOEMsR0FBRyxhQUFhLG9CQUFvQixHQUFHLHFCQUFxQjtBQUNoaVE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLGdGQUFnRixlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFdmUsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CeUY7QUFDekYsWUFBc0Y7O0FBRXRGOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLGtGQUFPOzs7O0FBSXhCLGlFQUFlLHlGQUFjLE1BQU0sRTs7Ozs7Ozs7OztBQ1p0Qjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTs7QUFFQTtBQUNQO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRW1EOztBQUU3QyxtQ0FBbUMsaURBQVMsQ0FBQyxHQUFHLEtBQUs7O0FBRXJELGdDQUFnQyxRQUFRLDZEQUFxQixZQUFZLFFBQVEsRUFBRTtBQUNuRix1QkFBdUIsUUFBUSx5REFBaUIsRUFBRTtBQUNsRCwrQkFBK0IsUUFBUSw0REFBb0IsWUFBWSxRQUFRLEVBQUU7QUFDakYsMEJBQTBCLFFBQVEsNERBQW9CLEVBQUU7QUFDeEQsMkJBQTJCLFFBQVEsNkRBQXFCLEVBQUU7QUFDMUQsZ0NBQWdDLFFBQVEsa0VBQTBCLEVBQUU7QUFDcEUsa0NBQWtDLFFBQVEsb0VBQTRCLEVBQUU7QUFDeEUseUNBQXlDLFFBQVEsMkVBQW1DLEVBQUU7QUFDdEYsa0NBQWtDLFFBQVEsb0VBQTRCLEVBQUU7QUFDeEUsa0NBQWtDLFFBQVEsb0VBQTRCLEVBQUU7QUFDeEUsMEJBQTBCLFFBQVEsNERBQW9CLEVBQUU7O0FBRS9EO0FBQ08sNEJBQTRCLFFBQVEsaUVBQXlCLEVBQUU7QUFDL0QscUNBQXFDLFFBQVEsMEVBQWtDLEVBQUU7O0FBRWpGO0FBQ1AsU0FBUyxvRUFBNEI7QUFDckMsWUFBWSxVQUFVO0FBQ3RCLENBQUM7QUFDTTtBQUNQLFNBQVMsc0VBQThCO0FBQ3ZDLFlBQVksZUFBZTtBQUMzQixDQUFDO0FBQ00sNkJBQTZCLFFBQVEsa0VBQTBCLEVBQUU7QUFDakUsOEJBQThCLFFBQVEsbUVBQTJCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QnREO0FBR0M7QUFDbUI7QUFTckI7O0FBRW5CO0FBQ0EsbUJBQW1CLHVEQUFTLENBQUMsd0RBQWdCO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUywyREFBbUI7QUFDNUIsZ0RBQWdELG1EQUFTO0FBQ3pEOztBQUVBLFNBQVMsNkRBQXFCO0FBQzlCLGtEQUFrRCxtREFBUztBQUMzRDs7QUFFQSxTQUFTLDREQUFvQjtBQUM3QixpREFBaUQsbURBQVM7QUFDMUQ7O0FBRUE7QUFDQSw2RUFBNkUsZUFBZTtBQUM1RjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLDJEQUFtQjtBQUM1QjtBQUNBOztBQUVBLFNBQVMsNkRBQXFCO0FBQzlCO0FBQ0E7O0FBRUEsU0FBUyw0REFBb0I7QUFDN0I7QUFDQTs7QUFFQTtBQUNBLHdFQUF3RSxlQUFlO0FBQ3ZGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxtREFBUztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isa0RBQVk7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLHdEQUFnQjtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQix1REFBUztBQUMxQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLFVBQVU7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0RUFBb0M7O0FBRWhFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsVUFBVTs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLHVEQUFpQjtBQUNqQyxnQkFBZ0IsK0NBQVM7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDREQUFvQjtBQUM3QjtBQUNBOztBQUVBLFNBQVMsMEVBQWtDO0FBQzNDLFNBQVMsaUVBQXlCO0FBQ2xDLGdEQUFnRCxpRUFBeUI7QUFDekU7O0FBRUEsU0FBUyxrRUFBMEI7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUyw0REFBb0I7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLDZEQUFxQjtBQUM5Qjs7QUFFQTtBQUNBOztBQUVBLFNBQVMsNERBQW9CO0FBQzdCOztBQUVBO0FBQ0E7O0FBRUEsU0FBUyxvRUFBNEI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixtREFBYTtBQUMvQjs7QUFFQSxTQUFTLG1FQUEyQjtBQUNwQyxnREFBZ0Qsd0RBQWdCO0FBQ2hFLGVBQWUsU0FBUzs7QUFFeEIsMERBQTBELDRFQUFvQztBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUyxzRUFBOEI7QUFDdkM7QUFDQTtBQUNBOztBQUVBLFNBQVMsNkRBQXFCO0FBQzlCOztBQUVBO0FBQ0Esa0JBQWtCLHVEQUFpQjtBQUNuQzs7QUFFQSxTQUFTLG9FQUE0QjtBQUNyQzs7QUFFQTtBQUNBLGtCQUFrQixrREFBWTtBQUM5Qjs7QUFFQSxTQUFTLGtFQUEwQjtBQUNuQzs7QUFFQTtBQUNBLGtCQUFrQiw0Q0FBTTtBQUN4Qjs7QUFFQSxTQUFTLG9FQUE0QjtBQUNyQztBQUNBOztBQUVBLFNBQVMsb0VBQTRCO0FBQ3JDO0FBQ0E7O0FBRUEsU0FBUyx5REFBaUI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxRUFBcUUsZ0NBQWdDO0FBQ3JHO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcGF5Qzs7QUFFeUI7QUFDWDtBQUNHO0FBQ0c7QUFDRjtBQUN0QjtBQUNGOztBQUVuQztBQUNBLEdBQUcseURBQWlCLEdBQUcsbURBQU07QUFDN0IsR0FBRyx3REFBZ0IsR0FBRyxrREFBSztBQUMzQixHQUFHLCtEQUF1QixHQUFHLDBEQUFpQjtBQUM5QyxHQUFHLG1FQUEyQixHQUFHLDREQUFrQjtBQUNuRCxHQUFHLHVFQUErQixHQUFHLGtFQUFvQjtBQUN6RCxHQUFHLGtFQUEwQixHQUFHLGtFQUFlO0FBQy9DLEdBQUcsaUVBQXlCLEdBQUcsaUVBQWM7QUFDN0M7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxLQUFLO0FBQ2hEOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJlOztBQUV4QyxpRUFBZTtBQUNmO0FBQ0E7QUFDQSxJQUFJLG9EQUFVO0FBQ2Q7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHdDO0FBQ2dCOztBQUUxRCxpRUFBZTtBQUNmO0FBQ0E7QUFDQSxJQUFJLDJEQUFpQjtBQUNyQixJQUFJLG1EQUFTO0FBQ2I7QUFDQSxhQUFhLCtEQUF1QjtBQUNwQyxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm9CO0FBVUY7O0FBRXBCLGlFQUFlO0FBQ2YsY0FBYyw2RUFBcUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBVztBQUN2QixnQkFBZ0IsNkRBQXFCO0FBQ3JDLGFBQWEsNERBQW9CO0FBQ2pDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsWUFBWSxzREFBYztBQUMxQixnQkFBZ0IsMkRBQW1CO0FBQ25DLGFBQWEsMkRBQW1CO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsWUFBWSxxREFBYTtBQUN6QixnQkFBZ0IsNERBQW9CO0FBQ3BDLGFBQWEsMERBQWtCO0FBQy9CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVU7QUFDZCxJQUFJLHFEQUFXO0FBQ2YsSUFBSSwwREFBZ0IsQ0FBQyxtREFBVyxFQUFFLDZEQUFxQjtBQUN2RCxJQUFJLHFEQUFXO0FBQ2YsSUFBSSxvREFBVSxDQUFDLHNEQUFjO0FBQzdCLElBQUkscURBQVc7QUFDZixJQUFJLG9EQUFVLENBQUMscURBQWE7QUFDNUIsSUFBSSxxREFBVztBQUNmLElBQUksMERBQWdCLENBQUMsbURBQVcsRUFBRSw2REFBcUI7QUFDdkQsSUFBSSxxREFBVztBQUNmLElBQUksMERBQWdCLENBQUMsbURBQVcsRUFBRSxnRUFBd0I7QUFDMUQsSUFBSSxxREFBVztBQUNmLElBQUkscURBQVc7QUFDZixJQUFJLG1EQUFTLENBQUMscURBQWE7QUFDM0IsSUFBSSwwREFBZ0IsQ0FBQyxtREFBVyxFQUFFLDREQUFvQjtBQUN0RCxJQUFJLHFEQUFXO0FBQ2YsSUFBSSxxREFBVztBQUNmLElBQUksMERBQWdCLENBQUMsbURBQVcsRUFBRSw2REFBcUI7QUFDdkQsSUFBSSw4REFBb0I7QUFDeEIsSUFBSSx3REFBYztBQUNsQixJQUFJLHFEQUFXO0FBQ2YsSUFBSSxxREFBVztBQUNmLElBQUksMERBQWdCLENBQUMsbURBQVcsRUFBRSw2REFBcUI7QUFDdkQsSUFBSSxxREFBVztBQUNmLElBQUkscURBQVc7QUFDZixJQUFJLG1EQUFTO0FBQ2I7QUFDQSxhQUFhLGtFQUEwQjtBQUN2QyxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZvQjtBQVFGOztBQUVwQixpRUFBZTtBQUNmLGNBQWMsZ0ZBQXdDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQVc7QUFDdkIsZ0JBQWdCLDZEQUFxQjtBQUNyQyxhQUFhLDZEQUFxQjtBQUNsQztBQUNBLEtBQUs7QUFDTDtBQUNBLFlBQVkscURBQWE7QUFDekIsZ0JBQWdCLDREQUFvQjtBQUNwQyxhQUFhLDBEQUFrQjtBQUMvQjtBQUNBLEtBQUs7QUFDTDtBQUNBLFlBQVksc0RBQWM7QUFDMUIsZ0JBQWdCLDJEQUFtQjtBQUNuQyxhQUFhLDJEQUFtQjtBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFVO0FBQ2QsSUFBSSxxREFBVztBQUNmLElBQUkscURBQVc7QUFDZixJQUFJLHFEQUFXO0FBQ2YsSUFBSSxtREFBUyxDQUFDLHFEQUFhO0FBQzNCLElBQUkscURBQVc7QUFDZixJQUFJLG9EQUFVLENBQUMsbURBQVc7QUFDMUIsSUFBSSxxREFBVztBQUNmLElBQUksMERBQWdCLENBQUMsbURBQVcsRUFBRSw0REFBb0I7QUFDdEQsSUFBSSxxREFBVztBQUNmLElBQUkscURBQVc7QUFDZixJQUFJLHFEQUFXO0FBQ2YsSUFBSSwwREFBZ0IsQ0FBQyxtREFBVyxFQUFFLDJEQUFtQjtBQUNyRCxJQUFJLHFEQUFXO0FBQ2YsSUFBSSxxREFBVztBQUNmLElBQUksb0RBQVUsQ0FBQyxzREFBYztBQUM3QixJQUFJLHFEQUFXO0FBQ2YsSUFBSSxtREFBUztBQUNiO0FBQ0EsYUFBYSx5REFBaUI7QUFDOUIsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25Fb0I7QUFVRjs7QUFFcEIsaUVBQWU7QUFDZixjQUFjLGlGQUF5QztBQUN2RDtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFXO0FBQ3ZCLGdCQUFnQiw2REFBcUI7QUFDckMsYUFBYSw2REFBcUI7QUFDbEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSxZQUFZLHFEQUFhO0FBQ3pCLGdCQUFnQiwyREFBbUI7QUFDbkMsYUFBYSwwREFBa0I7QUFDL0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBVTtBQUNkLElBQUkscURBQVc7QUFDZixJQUFJLDBEQUFnQixDQUFDLG1EQUFXLEVBQUUsNkRBQXFCO0FBQ3ZELElBQUkscURBQVc7QUFDZixJQUFJLHFEQUFXO0FBQ2YsSUFBSSx3REFBYztBQUNsQixJQUFJLDBEQUFnQixDQUFDLG1EQUFXLEVBQUUsNkRBQXFCO0FBQ3ZELElBQUkscURBQVc7QUFDZixJQUFJLDhEQUFvQjtBQUN4QixJQUFJLHdEQUFjO0FBQ2xCLElBQUksMERBQWdCLENBQUMsbURBQVcsRUFBRSwyREFBbUI7QUFDckQsSUFBSSxxREFBVztBQUNmLElBQUksb0RBQVUsQ0FBQyxxREFBYTtBQUM1QixJQUFJLHFEQUFXO0FBQ2YsSUFBSSxtREFBUyxDQUFDLHFEQUFhO0FBQzNCLElBQUksMERBQWdCLENBQUMsbURBQVcsRUFBRSxnRUFBd0I7QUFDMUQsSUFBSSxxREFBVztBQUNmLElBQUksbURBQVM7QUFDYjtBQUNBLGFBQWEsaUVBQXlCO0FBQ3RDLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRG9CO0FBU0Y7O0FBRXBCLGlFQUFlO0FBQ2YsY0FBYyxxRUFBNkI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBVztBQUN2QixnQkFBZ0IsNERBQW9CO0FBQ3BDLGFBQWEsNERBQW9CO0FBQ2pDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFVO0FBQ2QsSUFBSSxxREFBVztBQUNmLElBQUkscURBQVc7QUFDZixJQUFJLG9EQUFVLENBQUMsbURBQVc7QUFDMUIsSUFBSSw4REFBb0I7QUFDeEIsSUFBSSx3REFBYztBQUNsQixJQUFJLDBEQUFnQixDQUFDLG1EQUFXLEVBQUUsNkRBQXFCO0FBQ3ZELElBQUkscURBQVc7QUFDZixJQUFJLHFEQUFXO0FBQ2YsSUFBSSw4REFBb0I7QUFDeEIsSUFBSSx3REFBYztBQUNsQixJQUFJLDBEQUFnQixDQUFDLG1EQUFXLEVBQUUsNkRBQXFCO0FBQ3ZELElBQUkscURBQVc7QUFDZixJQUFJLG1EQUFTO0FBQ2I7QUFDQSxhQUFhLG1FQUEyQjtBQUN4QyxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERvQjtBQVVGOztBQUVwQixpRUFBZTtBQUNmLGNBQWMseUVBQWlDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQVc7QUFDdkIsZ0JBQWdCLDJEQUFtQjtBQUNuQyxhQUFhLDREQUFvQjtBQUNqQztBQUNBLEtBQUs7QUFDTDtBQUNBLFlBQVksc0RBQWM7QUFDMUIsZ0JBQWdCLDREQUFvQjtBQUNwQyxhQUFhLDJEQUFtQjtBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBVTtBQUNkLElBQUkscURBQVc7QUFDZixJQUFJLDBEQUFnQixDQUFDLG1EQUFXLEVBQUUsNkRBQXFCO0FBQ3ZELElBQUkscURBQVc7QUFDZixJQUFJLDBEQUFnQixDQUFDLG1EQUFXLEVBQUUsNkRBQXFCO0FBQ3ZELElBQUkscURBQVc7QUFDZixJQUFJLG9EQUFVLENBQUMsc0RBQWM7QUFDN0IsSUFBSSxxREFBVztBQUNmLElBQUkscURBQVc7QUFDZixJQUFJLHFEQUFXO0FBQ2YsSUFBSSwwREFBZ0IsQ0FBQyxtREFBVyxFQUFFLDZEQUFxQjtBQUN2RCxJQUFJLG1EQUFTLENBQUMsc0RBQWM7QUFDNUIsSUFBSSxxREFBVztBQUNmLElBQUkscURBQVc7QUFDZixJQUFJLDBEQUFnQixDQUFDLG1EQUFXLEVBQUUsNERBQW9CO0FBQ3RELElBQUksOERBQW9CO0FBQ3hCLElBQUksd0RBQWM7QUFDbEIsSUFBSSxxREFBVztBQUNmLElBQUksbURBQVM7QUFDYjtBQUNBLGFBQWEsdUVBQStCO0FBQzVDLENBQUMsRUFBQzs7Ozs7OztVQ2xFRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY2FudmFzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmltZyB7XFxuICAgIG1heC1oZWlnaHQ6MTAwJTtcXG4gICAgbWF4LXdpZHRoOjEwMCU7XFxuICAgIG9iamVjdC1maXQ6bm9uZTtcXG59XFxuXFxuLmltZy1wYXJlbnQge1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGJvdHRvbTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBsZWZ0O1xcbn1cXG5cXG4uY2FudmFzLW92ZXJsYXktLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogOTg7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLmNhbnZhcy1vdmVybGF5IHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4uY2FudmFzLW92ZXJsYXktLXJpZ2h0IHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uY2FudmFzLW92ZXJsYXktLWNlbnRlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYW52YXMtb3ZlcmxheS0tbGVmdCB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY2FudmFzLWJvdHRvbS10ZXh0LS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBib3JkZXI6IDAuM3JlbSBzb2xpZCBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4OiAwLjI1O1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7IFxcbn1cXG5cXG4uY2FudmFzLWJvdHRvbS10ZXh0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4OTlkYztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2U4OTlkYyAwJSwgI2QzODdhYiA3NCUpO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLmNhbnZhcy1ib3R0b20tdGV4dC1jdXJzb3Ige1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItd2lkdGg6IDFyZW07XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSByb3RhdGUoNDVkZWcpIHNjYWxlWCgxLjApIHNjYWxlWSgwLjgpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNHJlbTtcXG4gICAgcmlnaHQ6IDZyZW07XFxuICAgIHotaW5kZXg6IDk5O1xcbn1cXG5cXG4uY2FudmFzLWJvdHRvbS1jaG9pY2VzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5jYW52YXMtYm90dG9tLWNob2ljZXMtLW9wdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDMzLCAzMywgMC40KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FudmFzLWJvdHRvbS1jaG9pY2VzLS1vcHRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMjY2NSc7XFxuICBjb2xvcjogI2U4OTlkYztcXG4gIG1hcmdpbi1yaWdodDogMS40cmVtO1xcbn1cXG5cXG4uc2NlbmUtbG9hZGluZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg5OWRjO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMjAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNjZW5lLWxvYWRpbmctLXRleHQge1xcbiAgZm9udC1zaXplOiA4cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4uc2NlbmUtbG9hZGluZy0tdGV4dDpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFwyNjY1JztcXG4gIGNvbG9yOiAjZTg5OWRjO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG5cXG4uc2NlbmUtbG9hZGluZy0tdGV4dDphZnRlciB7XFxuICBjb250ZW50OiAnXFxcXDI2NjUnO1xcbiAgY29sb3I6ICNlODk5ZGM7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuXFxuXFxuLmNhbnZhcy1ib3R0b20tY2hvaWNlcy0tb3B0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMzMsIDMzLCAwLjgpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixxREFBcUQ7SUFDckQsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixPQUFPO0FBQ1g7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE9BQU87SUFDUCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0VBQWtFO0lBQ2xFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsOERBQThEO0lBQzlELGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7OztBQUdBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNhbnZhcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5pbWcge1xcbiAgICBtYXgtaGVpZ2h0OjEwMCU7XFxuICAgIG1heC13aWR0aDoxMDAlO1xcbiAgICBvYmplY3QtZml0Om5vbmU7XFxufVxcblxcbi5pbWctcGFyZW50IHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBib3R0b207XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogbGVmdDtcXG59XFxuXFxuLmNhbnZhcy1vdmVybGF5LS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDk4O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5jYW52YXMtb3ZlcmxheSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWluLWhlaWdodDogNTAwcHg7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuLmNhbnZhcy1vdmVybGF5LS1yaWdodCB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmNhbnZhcy1vdmVybGF5LS1jZW50ZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FudmFzLW92ZXJsYXktLWxlZnQge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmNhbnZhcy1ib3R0b20tdGV4dC0td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYm9yZGVyOiAwLjNyZW0gc29saWQgYmxhY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleDogMC4yNTtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwOyBcXG59XFxuXFxuLmNhbnZhcy1ib3R0b20tdGV4dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODk5ZGM7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNlODk5ZGMgMCUsICNkMzg3YWIgNzQlKTtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiA0LjVyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi5jYW52YXMtYm90dG9tLXRleHQtY3Vyc29yIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcmVtO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgcm90YXRlKDQ1ZGVnKSBzY2FsZVgoMS4wKSBzY2FsZVkoMC44KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDRyZW07XFxuICAgIHJpZ2h0OiA2cmVtO1xcbiAgICB6LWluZGV4OiA5OTtcXG59XFxuXFxuLmNhbnZhcy1ib3R0b20tY2hvaWNlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uY2FudmFzLWJvdHRvbS1jaG9pY2VzLS1vcHRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAzMywgMzMsIDAuNCk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhbnZhcy1ib3R0b20tY2hvaWNlcy0tb3B0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiAnXFxcXDI2NjUnO1xcbiAgY29sb3I6ICNlODk5ZGM7XFxuICBtYXJnaW4tcmlnaHQ6IDEuNHJlbTtcXG59XFxuXFxuLnNjZW5lLWxvYWRpbmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4OTlkYztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDIwMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zY2VuZS1sb2FkaW5nLS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLnNjZW5lLWxvYWRpbmctLXRleHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMjY2NSc7XFxuICBjb2xvcjogI2U4OTlkYztcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuXFxuLnNjZW5lLWxvYWRpbmctLXRleHQ6YWZ0ZXIge1xcbiAgY29udGVudDogJ1xcXFwyNjY1JztcXG4gIGNvbG9yOiAjZTg5OWRjO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcblxcblxcbi5jYW52YXMtYm90dG9tLWNob2ljZXMtLW9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDMzLCAzMywgMC44KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gZmFrZSBlbnVtcyAhIVxuZXhwb3J0IGNvbnN0IEdhbWVTdGF0ZXMgPSBPYmplY3QuZnJlZXplKHtcbiAgRW5kaW5nOiAnRW5kaW5nJyxcbiAgRW50ZXJBY3RvcjogJ0VudGVyQWN0b3InLFxuICBFeGl0QWN0b3I6ICdFeGl0QWN0b3InLFxuICBMb2FkU2NlbmU6ICdMb2FkU2NlbmUnLFxuICBJbnRyb0RlbGF5ZWRTY2VuZTogJ0ludHJvRGVsYXllZFNjZW5lJyxcbiAgSW50cm9GaW5hbFNjZW5lOiAnSW50cm9GaW5hbFNjZW5lJyxcbiAgSW50cm9TY2VuZURlbGF5ZWREaXNwbGF5OiAnSW50cm9TY2VuZURlbGF5ZWREaXNwbGF5JyxcbiAgSW50cm9TY2VuZTogJ0ludHJvU2NlbmUnLFxuICBJbnRyb1NjZW5lRGlzcGxheTogJ0ludHJvU2NlbmVEaXNwbGF5JyxcbiAgSW50cm9TY2VuZUZhZGVPdXQ6ICdJbnRyb1NjZW5lRmFkZU91dCcsXG4gIE5leHRTY2VuZTogJ05leHRTY2VuZScsXG4gIFByZXNlbnRpbmdDaG9pY2VzOiAnUHJlc2VudGluZ0Nob2ljZXMnLFxuICBQcmVzZW50aW5nVGV4dDogJ1ByZXNlbnRpbmdUZXh0JyxcbiAgUHJlc2VudGluZ1RleHRGb3JDaG9pY2U6ICdQcmVzZW50aW5nVGV4dEZvckNob2ljZScsXG4gIFN3aXRjaGluZ0FjdG9yQXNzZXQ6ICdTd2l0Y2hpbmdBY3RvckFzc2V0JyxcbiAgV2FpdGluZ0ZvckNsaWNrOiAnV2FpdGluZ0ZvckNsaWNrJyxcbiAgV2FpdGluZ0ZvckNob2ljZTogJ1dhaXRpbmdGb3JDaG9pY2UnLFxufSk7XG5cbmV4cG9ydCBjb25zdCBFdmVudFR5cGVzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIENsaWNrOiAnY2xpY2snLFxufSk7XG5cbmV4cG9ydCBjb25zdCBTY2VuZVBvc2l0aW9ucyA9IE9iamVjdC5mcmVlemUoe1xuICBMZWZ0OiAwLFxuICBDZW50ZXI6IDEsXG4gIFJpZ2h0OiAyLFxufSk7XG5cbmV4cG9ydCBjb25zdCBBY3RvcnMgPSBPYmplY3QuZnJlZXplKHtcbiAgTWF0dDogJ01hdHQnLFxuICBNb3NEZWY6ICdNb3MgRGVmJyxcbiAgQ2hhcmxpZTogJ0NoYXJsaWUnLFxuICBTdGVsbGE6ICdTdGVsbGEnLFxufSk7XG5cbmV4cG9ydCBjb25zdCBTY2VuZU5hbWVzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIEludHJvOiAnSW50cm8nLFxuICBFbmRpbmc6ICdFbmRpbmcnLFxuICBLb2lTdXNoaU91dHNpZGU6ICdLb2lTdXNoaU91dHNpZGUnLFxuICBLb2lTdXNoaUluc2lkZTogJ0tvaVN1c2hpSW5zaWRlJyxcbiAgTmFzaHZpbGxlRmFpckdyb3VuZHM6ICdOYXNodmlsbGVGYWlyR3JvdW5kcycsXG4gIE5zc0x1bmNoUm9vbTogJ05TU0x1bmNoUm9vbScsXG4gIE9sZE5zc1BhcmtpbmdMb3Q6ICdOU1NQYXJraW5nTG90Jyxcbn0pO1xuXG5leHBvcnQgY29uc3QgQXNzZXRzRGlyID0gJ2Fzc2V0cyc7XG5cbmV4cG9ydCBjb25zdCBEb21DbGFzc2VzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIENhbnZhc0JvdHRvbUNob2ljZXNPcHRpb246ICdjYW52YXMtYm90dG9tLWNob2ljZXMtLW9wdGlvbicsXG59KTtcblxuZXhwb3J0IGNvbnN0IEFjdG9yQXNzZXRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIENoYXJsaWU6ICdjaGFybGllLnBuZycsXG4gIEpvZVNoZXA6ICdqb2Vfc2hlcC5wbmcnLFxuICBNYXR0SHVnOiAnbWF0dF9odWcucG5nJyxcbiAgTWF0dExvdmU6ICdtYXR0X2xvdmUucG5nJyxcbiAgTWF0dFBvaW50OiAnbWF0dF9wb2ludC5wbmcnLFxuICBNYXR0U2hydWc6ICdtYXR0X3NocnVnLnBuZycsXG4gIE1hdHRTbWlsZTogJ21hdHRfc21pbGUucG5nJyxcbiAgTWF0dFN1cnByaXNlOiAnbWF0dF9zdXJwcmlzZS5wbmcnLFxuICBNYXR0VGhpbms6ICdtYXR0X3RoaW5rLnBuZycsXG4gIE1hdHRXYXZlOiAnbWF0dF93YXZlLnBuZycsXG4gIE1vc0RlZjogJ21vc19kZWYucG5nJyxcbiAgU3RlbGxhOiAnc3RlbGxhLnBuZycsXG59KTtcblxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmRBc3NldHMgPSBPYmplY3QuZnJlZXplKHtcbiAgTmFzaHZpbGxlRmFpckdyb3VuZHM6ICduYXNodmlsbGVfZmFpcmdyb3VuZHMucG5nJyxcbiAgTmFzaHZpbGxlSG91c2VPdXRzaWRlOiAnbmFzaHZpbGxlX2hvdXNlX291dHNpZGUucG5nJyxcbiAgTmFzaHZpbGxlS29pU3VzaGlJbnNpZGU6ICduYXNodmlsbGVfa29pX3N1c2hpX2luc2lkZS5wbmcnLFxuICBOYXNodmlsbGVLb2lTdXNoaU91dHNpZGU6ICduYXNodmlsbGVfa29pX3N1c2hpX291dHNpZGUucG5nJyxcbiAgTmFzaHZpbGxlTGFzTWFyYWNhc0luc2lkZTogJ25hc2h2aWxsZV9sYXNfbWFyYWNhc19pbnNpZGUucG5nJyxcbiAgTmFzaHZpbGxlTGFzTWFyYWNhc091dHNpZGU6ICduYXNodmlsbGVfbGFzX21hcmFjYXNfb3V0c2lkZS5wbmcnLFxuICBOc3NHYW1lTmlnaHQ6ICduc3NfZ2FtZV9uaWdodF9zbWFsbC53ZWJwJyxcbiAgTnNzTHVuY2hSb29tOiAnbnNzX2x1bmNocm9vbS5wbmcnLFxuICBPbGROc3NQYXJraW5nTG90OiAnb2xkX25zc19wYXJraW5nX2xvdC5wbmcnLFxufSk7XG4iLCJpbXBvcnQgeyBBc3NldHNEaXIsIEdhbWVTdGF0ZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBhc3NldHNVcmwgPSAobmFtZSkgPT4gYHVybCgke0Fzc2V0c0Rpcn0vJHtuYW1lfSlgO1xuXG5leHBvcnQgY29uc3QgZW50ZXJBY3RvciA9IChhY3RvcikgPT4gKHsgc3RhdGU6IEdhbWVTdGF0ZXMuRW50ZXJBY3Rvciwgb3B0aW9uczogeyBhY3RvciB9IH0pO1xuZXhwb3J0IGNvbnN0IGVuZGluZyA9ICgpID0+ICh7IHN0YXRlOiBHYW1lU3RhdGVzLkVuZGluZyB9KTtcbmV4cG9ydCBjb25zdCBleGl0QWN0b3IgPSAoYWN0b3IpID0+ICh7IHN0YXRlOiBHYW1lU3RhdGVzLkV4aXRBY3Rvciwgb3B0aW9uczogeyBhY3RvciB9IH0pO1xuZXhwb3J0IGNvbnN0IGxvYWRTY2VuZSA9ICgpID0+ICh7IHN0YXRlOiBHYW1lU3RhdGVzLkxvYWRTY2VuZSB9KTtcbmV4cG9ydCBjb25zdCBpbnRyb1NjZW5lID0gKCkgPT4gKHsgc3RhdGU6IEdhbWVTdGF0ZXMuSW50cm9TY2VuZSB9KTtcbmV4cG9ydCBjb25zdCBpbnRyb0ZpbmFsU2NlbmUgPSAoKSA9PiAoeyBzdGF0ZTogR2FtZVN0YXRlcy5JbnRyb0ZpbmFsU2NlbmUgfSk7XG5leHBvcnQgY29uc3QgaW50cm9EZWxheWVkU2NlbmUgPSAoKSA9PiAoeyBzdGF0ZTogR2FtZVN0YXRlcy5JbnRyb0RlbGF5ZWRTY2VuZSB9KTtcbmV4cG9ydCBjb25zdCBpbnRyb1NjZW5lRGVsYXllZERpc3BsYXkgPSAoKSA9PiAoeyBzdGF0ZTogR2FtZVN0YXRlcy5JbnRyb1NjZW5lRGVsYXllZERpc3BsYXkgfSk7XG5leHBvcnQgY29uc3QgaW50cm9TY2VuZURpc3BsYXkgPSAoKSA9PiAoeyBzdGF0ZTogR2FtZVN0YXRlcy5JbnRyb1NjZW5lRGlzcGxheSB9KTtcbmV4cG9ydCBjb25zdCBpbnRyb1NjZW5lRmFkZU91dCA9ICgpID0+ICh7IHN0YXRlOiBHYW1lU3RhdGVzLkludHJvU2NlbmVGYWRlT3V0IH0pO1xuZXhwb3J0IGNvbnN0IG5leHRTY2VuZSA9ICgpID0+ICh7IHN0YXRlOiBHYW1lU3RhdGVzLk5leHRTY2VuZSB9KTtcblxuLy8gVE9ETyBNYWtlIHByZXNlbnRUZXh0ICYgcHJlc2VudFRleHRGb3JDaG9pY2UgYWNjZXB0IHRoZSB0ZXh0IGFzIGFuIG9wdGlvblxuZXhwb3J0IGNvbnN0IHByZXNlbnRUZXh0ID0gKCkgPT4gKHsgc3RhdGU6IEdhbWVTdGF0ZXMuUHJlc2VudGluZ1RleHQgfSk7XG5leHBvcnQgY29uc3QgcHJlc2VudFRleHRGb3JDaG9pY2UgPSAoKSA9PiAoeyBzdGF0ZTogR2FtZVN0YXRlcy5QcmVzZW50aW5nVGV4dEZvckNob2ljZSB9KTtcblxuZXhwb3J0IGNvbnN0IHByZXNlbnRDaG9pY2VzID0gKGNob2ljZXMpID0+ICh7XG4gIHN0YXRlOiBHYW1lU3RhdGVzLlByZXNlbnRpbmdDaG9pY2VzLFxuICBvcHRpb25zOiB7IGNob2ljZXMgfSxcbn0pO1xuZXhwb3J0IGNvbnN0IHN3aXRjaEFjdG9yQXNzZXQgPSAoYWN0b3IsIGFzc2V0KSA9PiAoe1xuICBzdGF0ZTogR2FtZVN0YXRlcy5Td2l0Y2hpbmdBY3RvckFzc2V0LFxuICBvcHRpb25zOiB7IGFjdG9yLCBhc3NldCB9LFxufSk7XG5leHBvcnQgY29uc3Qgd2FpdEZvckNsaWNrID0gKCkgPT4gKHsgc3RhdGU6IEdhbWVTdGF0ZXMuV2FpdGluZ0ZvckNsaWNrIH0pO1xuZXhwb3J0IGNvbnN0IHdhaXRGb3JDaG9pY2UgPSAoKSA9PiAoeyBzdGF0ZTogR2FtZVN0YXRlcy5XYWl0aW5nRm9yQ2hvaWNlIH0pO1xuIiwiaW1wb3J0ICcuL21haW4uY3NzJztcbmltcG9ydCB7XG4gIERvbUNsYXNzZXMsIEV2ZW50VHlwZXMsIEdhbWVTdGF0ZXMsIFNjZW5lTmFtZXMsIFNjZW5lUG9zaXRpb25zLFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgZmluZFNjZW5lIGZyb20gJy4vc2NlbmUtbWFuYWdlcic7XG5pbXBvcnQge1xuICBhc3NldHNVcmwsXG4gIGVuZGluZyxcbiAgaW50cm9TY2VuZUZhZGVPdXQsXG4gIGludHJvU2NlbmVEaXNwbGF5LFxuICBsb2FkU2NlbmUsXG4gIHdhaXRGb3JDaG9pY2UsXG4gIHdhaXRGb3JDbGljayxcbn0gZnJvbSAnLi9oZWxwZXJzJztcblxuLy8gaW5pdCBhbGwgdGhlIGdhbWUgdmFycyBhbmQgYnVpbGQgb3V0IERPTVxubGV0IGN1cnJlbnRTY2VuZSA9IGZpbmRTY2VuZShTY2VuZU5hbWVzLkludHJvKTtcbmxldCBydW5uaW5nID0gdHJ1ZTtcbmxldCBkZWxheUNvdW50ZXIgPSAwO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhbnZhcy5jbGFzc0xpc3QuYWRkKCdjYW52YXMnKTtcblxuY29uc3Qgc2NlbmVMb2FkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zY2VuZUxvYWRpbmcuY2xhc3NMaXN0LmFkZCgnc2NlbmUtbG9hZGluZycsICdoaWRkZW4nKTtcblxuY29uc3Qgc2NlbmVMb2FkaW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2NlbmVMb2FkaW5nVGV4dC5jbGFzc0xpc3QuYWRkKCdzY2VuZS1sb2FkaW5nLS10ZXh0Jyk7XG5cbmNvbnN0IGNhbnZhc092ZXJsYXlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYW52YXNPdmVybGF5V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjYW52YXMtb3ZlcmxheS0td3JhcHBlcicpO1xuXG5jb25zdCBjYW52YXNSaWdodE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhbnZhc1JpZ2h0T3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdjYW52YXMtb3ZlcmxheScsICdjYW52YXMtb3ZlcmxheS0tcmlnaHQnLCAnaW1nLXBhcmVudCcpO1xuXG5jb25zdCBjYW52YXNDZW50ZXJPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYW52YXNDZW50ZXJPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2NhbnZhcy1vdmVybGF5JywgJ2NhbnZhcy1vdmVybGF5LS1jZW50ZXInLCAnaW1nLXBhcmVudCcpO1xuXG5jb25zdCBjYW52YXNMZWZ0T3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FudmFzTGVmdE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnY2FudmFzLW92ZXJsYXknLCAnY2FudmFzLW92ZXJsYXktLWxlZnQnLCAnaW1nLXBhcmVudCcpO1xuXG5jb25zdCBjYW52YXNCb3R0b21UZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FudmFzQm90dG9tVGV4dFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2FudmFzLWJvdHRvbS10ZXh0LS13cmFwcGVyJyk7XG5cbmNvbnN0IGNhbnZhc0JvdHRvbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhbnZhc0JvdHRvbVRleHQuY2xhc3NMaXN0LmFkZCgnY2FudmFzLWJvdHRvbS10ZXh0Jyk7XG5cbmNvbnN0IGNhbnZhc0JvdHRvbVRleHRDdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhbnZhc0JvdHRvbVRleHRDdXJzb3IuY2xhc3NMaXN0LmFkZCgnY2FudmFzLWJvdHRvbS10ZXh0LWN1cnNvcicpO1xuXG5jb25zdCBjYW52YXNCb3R0b21DaG9pY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYW52YXNCb3R0b21DaG9pY2VzLmNsYXNzTGlzdC5hZGQoJ2NhbnZhcy1ib3R0b20tY2hvaWNlcycpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhc0JvdHRvbVRleHRXcmFwcGVyKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NlbmVMb2FkaW5nKTtcblxuc2NlbmVMb2FkaW5nLmFwcGVuZENoaWxkKHNjZW5lTG9hZGluZ1RleHQpO1xuXG5jYW52YXNPdmVybGF5V3JhcHBlci5hcHBlbmRDaGlsZChjYW52YXNMZWZ0T3ZlcmxheSk7XG5jYW52YXNPdmVybGF5V3JhcHBlci5hcHBlbmRDaGlsZChjYW52YXNDZW50ZXJPdmVybGF5KTtcbmNhbnZhc092ZXJsYXlXcmFwcGVyLmFwcGVuZENoaWxkKGNhbnZhc1JpZ2h0T3ZlcmxheSk7XG5cbmNhbnZhcy5hcHBlbmRDaGlsZChjYW52YXNPdmVybGF5V3JhcHBlcik7XG5jYW52YXMuYXBwZW5kQ2hpbGQoY2FudmFzQm90dG9tQ2hvaWNlcyk7XG5cbmNhbnZhc0JvdHRvbVRleHRXcmFwcGVyLmFwcGVuZENoaWxkKGNhbnZhc0JvdHRvbVRleHQpO1xuY2FudmFzQm90dG9tVGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQoY2FudmFzQm90dG9tVGV4dEN1cnNvcik7XG5cbmNvbnN0IGluc2VydFNjZW5lID0gKGhlbHBlcikgPT4ge1xuICBjdXJyZW50U2NlbmUuc2NlbmVGbG93LnVuc2hpZnQoaGVscGVyKCkpO1xufTtcblxuLy8gbWFpbiBnYW1lIGxvZ2ljIGFuZCBoZWxwZXIgZnVuY3Rpb25zXG5jb25zdCBhZHZhbmNlU2NlbmVGbG93ID0gKCkgPT4ge1xuICBjdXJyZW50U2NlbmUuc2NlbmVGbG93LnNoaWZ0KCk7XG59O1xuXG5jb25zdCB0b2dnbGVDdXJzb3IgPSAoaGlkZSkgPT4ge1xuICBpZiAoaGlkZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGhpZGUpIHtcbiAgICAgIGNhbnZhc0JvdHRvbVRleHRDdXJzb3IuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbnZhc0JvdHRvbVRleHRDdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZGVsYXlDb3VudGVyICs9IDE7XG5cbiAgaWYgKGRlbGF5Q291bnRlciA+PSAzMCkge1xuICAgIGNhbnZhc0JvdHRvbVRleHRDdXJzb3IuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG5cbiAgICBkZWxheUNvdW50ZXIgPSAwO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVUZXh0ID0gKCkgPT4ge1xuICBjYW52YXNCb3R0b21UZXh0LmlubmVySFRNTCArPSBjdXJyZW50U2NlbmUudGV4dFswXVswXTtcblxuICBjdXJyZW50U2NlbmUudGV4dFswXSA9IGN1cnJlbnRTY2VuZS50ZXh0WzBdLnN1YnN0cigxLCBjdXJyZW50U2NlbmUudGV4dFswXS5sZW5ndGggLSAxKTtcbn07XG5cbmNvbnN0IGNsZWFyVGV4dCA9ICgpID0+IHtcbiAgY2FudmFzQm90dG9tVGV4dC5pbm5lckhUTUwgPSAnJztcbn07XG5cbmNvbnN0IGVudGVyQWN0b3IgPSAoYWN0b3IpID0+IHtcbiAgc3dpdGNoIChhY3Rvci5wb3NpdGlvbikge1xuICAgIGNhc2UgU2NlbmVQb3NpdGlvbnMuTGVmdDpcbiAgICAgIGNhbnZhc0xlZnRPdmVybGF5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGFzc2V0c1VybChhY3Rvci5hc3NldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU2NlbmVQb3NpdGlvbnMuQ2VudGVyOlxuICAgICAgY2FudmFzQ2VudGVyT3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBhc3NldHNVcmwoYWN0b3IuYXNzZXQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNjZW5lUG9zaXRpb25zLlJpZ2h0OlxuICAgICAgY2FudmFzUmlnaHRPdmVybGF5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGFzc2V0c1VybChhY3Rvci5hc3NldCk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCBTY2VuZVBvc2l0aW9uIGluIElOdHJvZHVjZUFjdG9yIFN0YXRlOiAke2FjdG9yLnBvc2l0aW9ufWApO1xuICB9XG59O1xuXG5jb25zdCBleGl0QWN0b3IgPSAoYWN0b3IpID0+IHtcbiAgc3dpdGNoIChhY3Rvci5wb3NpdGlvbikge1xuICAgIGNhc2UgU2NlbmVQb3NpdGlvbnMuTGVmdDpcbiAgICAgIGNhbnZhc0xlZnRPdmVybGF5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG51bGw7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU2NlbmVQb3NpdGlvbnMuQ2VudGVyOlxuICAgICAgY2FudmFzQ2VudGVyT3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBudWxsO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNjZW5lUG9zaXRpb25zLlJpZ2h0OlxuICAgICAgY2FudmFzUmlnaHRPdmVybGF5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG51bGw7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCBTY2VuZVBvc2l0aW9uIGluIEV4aXRBY3RvciBTdGF0ZTogJHthY3Rvci5wb3NpdGlvbn1gKTtcbiAgfVxufTtcblxuY29uc3QgbG9hZGluZ1NjZW5lU3RhdGUgPSAoKSA9PiB7XG4gIGlmIChjdXJyZW50U2NlbmUuYmFja2dyb3VuZCkge1xuICAgIGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBhc3NldHNVcmwoY3VycmVudFNjZW5lLmJhY2tncm91bmQpO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRTY2VuZS5hY3RvcnMgJiYgY3VycmVudFNjZW5lLmFjdG9ycy5sZW5ndGgpIHtcbiAgICBjdXJyZW50U2NlbmUuYWN0b3JzLmZvckVhY2goKGFjdG9yKSA9PiB7XG4gICAgICBpZiAoYWN0b3IuYXBwZWFyc0F0U3RhcnQpIHtcbiAgICAgICAgZW50ZXJBY3RvcihhY3Rvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZHZhbmNlU2NlbmVGbG93KCk7XG59O1xuXG5jb25zdCBwcmVzZW50aW5nVGV4dFN0YXRlID0gKGFkdmFuY2VUb1dhaXRpbmdGb3JDbGljaykgPT4ge1xuICBpZiAoY3VycmVudFNjZW5lLnRleHQgJiYgY3VycmVudFNjZW5lLnRleHRbMF0gJiYgY3VycmVudFNjZW5lLnRleHRbMF0ubGVuZ3RoKSB7XG4gICAgdXBkYXRlVGV4dCgpO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRTY2VuZS50ZXh0LnNoaWZ0KCk7XG4gICAgYWR2YW5jZVNjZW5lRmxvdygpO1xuXG4gICAgaWYgKGFkdmFuY2VUb1dhaXRpbmdGb3JDbGljaykge1xuICAgICAgaW5zZXJ0U2NlbmUod2FpdEZvckNsaWNrKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHdhaXRpbmdGb3JDbGlja1N0YXRlID0gKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50eXBlICYmIGV2ZW50LnR5cGUgPT09IEV2ZW50VHlwZXMuQ2xpY2spIHtcbiAgICB0b2dnbGVDdXJzb3IodHJ1ZSk7XG4gICAgY2xlYXJUZXh0KCk7XG5cbiAgICBhZHZhbmNlU2NlbmVGbG93KCk7XG4gICAgZGVsYXlDb3VudGVyID0gMDtcbiAgfVxuXG4gIHRvZ2dsZUN1cnNvcigpO1xufTtcblxuY29uc3QgY2xlYXJDdXJyZW50U2NlbmUgPSAoKSA9PiB7XG4gIGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBudWxsO1xuICBjYW52YXNSaWdodE92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gbnVsbDtcbiAgY2FudmFzQ2VudGVyT3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBudWxsO1xuICBjYW52YXNMZWZ0T3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBudWxsO1xuXG4gIGNsZWFyVGV4dCgpO1xufTtcblxuY29uc3QgbmV4dFNjZW5lU3RhdGUgPSAobmFtZSkgPT4ge1xuICBjdXJyZW50U2NlbmUgPSBmaW5kU2NlbmUobmFtZSk7XG59O1xuXG5jb25zdCBmaW5kQWN0b3JGb3JDdXJyZW50RmxvdyA9IChjdXJyZW50RmxvdykgPT4ge1xuICBjb25zdCBuYW1lID0gY3VycmVudEZsb3cub3B0aW9ucy5hY3RvcjtcblxuICByZXR1cm4gY3VycmVudFNjZW5lLmFjdG9ycy5maW5kKChhY3RvcikgPT4gYWN0b3IubmFtZSA9PT0gbmFtZSk7XG59O1xuXG5jb25zdCBwcmVzZW50aW5nQ2hvaWNlc1N0YXRlID0gKGN1cnJlbnRGbG93KSA9PiB7XG4gIGNvbnN0IHsgY2hvaWNlcyB9ID0gY3VycmVudEZsb3cub3B0aW9ucztcblxuICBjaG9pY2VzLmZvckVhY2goKGNob2ljZSkgPT4ge1xuICAgIGNvbnN0IGNob2ljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNob2ljZURpdi5pbm5lckhUTUwgPSBjaG9pY2U7XG4gICAgY2hvaWNlRGl2LmNsYXNzTGlzdC5hZGQoRG9tQ2xhc3Nlcy5DYW52YXNCb3R0b21DaG9pY2VzT3B0aW9uKTtcblxuICAgIGNhbnZhc0JvdHRvbUNob2ljZXMuYXBwZW5kQ2hpbGQoY2hvaWNlRGl2KTtcbiAgfSk7XG59O1xuXG5jb25zdCBjbGVhckNob2ljZXMgPSAoKSA9PiB7XG4gIGNhbnZhc0JvdHRvbUNob2ljZXMuaW5uZXJIVE1MID0gbnVsbDtcbn07XG5cbmNvbnN0IHN3aXRjaEFjdG9yQXNzZXRTdGF0ZSA9IChjdXJyZW50RmxvdykgPT4ge1xuICBjb25zdCB7IG9wdGlvbnMgfSA9IGN1cnJlbnRGbG93O1xuXG4gIGNvbnN0IGFjdG9yID0gZmluZEFjdG9yRm9yQ3VycmVudEZsb3coY3VycmVudEZsb3cpO1xuICBhY3Rvci5hc3NldCA9IG9wdGlvbnMuYXNzZXQ7XG5cbiAgZW50ZXJBY3RvcihhY3Rvcik7XG59O1xuXG5jb25zdCBpbml0aWFsaXplSW50cm9TY2VuZSA9ICgpID0+IHtcbiAgc2NlbmVMb2FkaW5nVGV4dC5pbm5lckhUTUwgPSBjdXJyZW50U2NlbmUudGl0bGU7XG4gIHNjZW5lTG9hZGluZy5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgc2NlbmVMb2FkaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufTtcblxuY29uc3QgY2xlYW51cEludHJvU2NlbmUgPSAoKSA9PiB7XG4gIHNjZW5lTG9hZGluZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgc2NlbmVMb2FkaW5nVGV4dC5pbm5lckhUTUwgPSBudWxsO1xuXG4gIGRlbGF5Q291bnRlciA9IDA7XG5cbiAgYWR2YW5jZVNjZW5lRmxvdygpO1xufTtcblxuY29uc3QgaW50cm9TY2VuZUZhZGVPdXRTdGF0ZSA9ICgpID0+IHtcbiAgc2NlbmVMb2FkaW5nLnN0eWxlLm9wYWNpdHkgPSAxIC0gZGVsYXlDb3VudGVyO1xuXG4gIGRlbGF5Q291bnRlciArPSAwLjAxO1xuXG4gIGlmIChkZWxheUNvdW50ZXIgPiAxKSB7XG4gICAgY2xlYW51cEludHJvU2NlbmUoKTtcbiAgfVxufTtcblxuY29uc3QgaW50cm9TY2VuZVN0YXRlID0gKCkgPT4ge1xuICBkZWxheUNvdW50ZXIgKz0gMTtcblxuICBpZiAoZGVsYXlDb3VudGVyID4gMjQwKSB7XG4gICAgYWR2YW5jZVNjZW5lRmxvdygpO1xuXG4gICAgZGVsYXlDb3VudGVyID0gMDtcblxuICAgIGluc2VydFNjZW5lKGludHJvU2NlbmVGYWRlT3V0KTtcbiAgICBpbnNlcnRTY2VuZShsb2FkU2NlbmUpO1xuICB9XG59O1xuXG5jb25zdCBnYW1lVXBkYXRlID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50Rmxvd10gPSBjdXJyZW50U2NlbmUuc2NlbmVGbG93O1xuICBzd2l0Y2ggKGN1cnJlbnRGbG93LnN0YXRlKSB7XG4gICAgY2FzZSBHYW1lU3RhdGVzLkxvYWRTY2VuZTpcbiAgICAgIGxvYWRpbmdTY2VuZVN0YXRlKCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgR2FtZVN0YXRlcy5QcmVzZW50aW5nVGV4dEZvckNob2ljZTpcbiAgICBjYXNlIEdhbWVTdGF0ZXMuUHJlc2VudGluZ1RleHQ6XG4gICAgICBwcmVzZW50aW5nVGV4dFN0YXRlKGN1cnJlbnRGbG93LnN0YXRlID09PSBHYW1lU3RhdGVzLlByZXNlbnRpbmdUZXh0KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBHYW1lU3RhdGVzLldhaXRpbmdGb3JDbGljazpcbiAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHdhaXRpbmdGb3JDbGlja1N0YXRlKGV2ZW50KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBHYW1lU3RhdGVzLk5leHRTY2VuZTpcbiAgICAgIGlmICghY3VycmVudFNjZW5lLm5leHRTY2VuZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2N1cnJlbnRTY2VuZSBoYXMgbm8gbmV4dFNjZW5lIHRvIG1vdmUgdG8uJyk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFyQ3VycmVudFNjZW5lKCk7XG4gICAgICBuZXh0U2NlbmVTdGF0ZShjdXJyZW50U2NlbmUubmV4dFNjZW5lKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBHYW1lU3RhdGVzLkVudGVyQWN0b3I6XG4gICAgICBlbnRlckFjdG9yKGZpbmRBY3RvckZvckN1cnJlbnRGbG93KGN1cnJlbnRGbG93KSk7XG5cbiAgICAgIGFkdmFuY2VTY2VuZUZsb3coKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBHYW1lU3RhdGVzLkV4aXRBY3RvcjpcbiAgICAgIGV4aXRBY3RvcihmaW5kQWN0b3JGb3JDdXJyZW50RmxvdyhjdXJyZW50RmxvdykpO1xuXG4gICAgICBhZHZhbmNlU2NlbmVGbG93KCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgR2FtZVN0YXRlcy5QcmVzZW50aW5nQ2hvaWNlczpcbiAgICAgIGlmIChcbiAgICAgICAgIWN1cnJlbnRGbG93Lm9wdGlvbnNcbiAgICAgICAgfHwgIWN1cnJlbnRGbG93Lm9wdGlvbnMuY2hvaWNlc1xuICAgICAgICB8fCAhY3VycmVudEZsb3cub3B0aW9ucy5jaG9pY2VzLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInN0YXRlIFNldHVwQ2hvaWNlcyBjdXJyZW50U2NlbmUgZG9lc24ndCBoYXZlIGNob2ljZXNcIik7XG4gICAgICB9XG5cbiAgICAgIHByZXNlbnRpbmdDaG9pY2VzU3RhdGUoY3VycmVudEZsb3cpO1xuICAgICAgYWR2YW5jZVNjZW5lRmxvdygpO1xuICAgICAgaW5zZXJ0U2NlbmUod2FpdEZvckNob2ljZSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgR2FtZVN0YXRlcy5XYWl0aW5nRm9yQ2hvaWNlOlxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgJiYgZXZlbnQudHlwZSA9PT0gRXZlbnRUeXBlcy5DbGljaykge1xuICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG5cbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QgJiYgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhEb21DbGFzc2VzLkNhbnZhc0JvdHRvbUNob2ljZXNPcHRpb24pKSB7XG4gICAgICAgICAgY2xlYXJUZXh0KCk7XG4gICAgICAgICAgY2xlYXJDaG9pY2VzKCk7XG4gICAgICAgICAgYWR2YW5jZVNjZW5lRmxvdygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgR2FtZVN0YXRlcy5Td2l0Y2hpbmdBY3RvckFzc2V0OlxuICAgICAgc3dpdGNoQWN0b3JBc3NldFN0YXRlKGN1cnJlbnRGbG93KTtcbiAgICAgIGFkdmFuY2VTY2VuZUZsb3coKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBHYW1lU3RhdGVzLkludHJvU2NlbmU6XG4gICAgICBpbml0aWFsaXplSW50cm9TY2VuZSgpO1xuXG4gICAgICBhZHZhbmNlU2NlbmVGbG93KCk7XG4gICAgICBpbnNlcnRTY2VuZShpbnRyb1NjZW5lRGlzcGxheSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgR2FtZVN0YXRlcy5JbnRyb0RlbGF5ZWRTY2VuZTpcbiAgICAgIGluaXRpYWxpemVJbnRyb1NjZW5lKCk7XG5cbiAgICAgIGFkdmFuY2VTY2VuZUZsb3coKTtcbiAgICAgIGluc2VydFNjZW5lKHdhaXRGb3JDbGljayk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgR2FtZVN0YXRlcy5JbnRyb0ZpbmFsU2NlbmU6XG4gICAgICBpbml0aWFsaXplSW50cm9TY2VuZSgpO1xuXG4gICAgICBhZHZhbmNlU2NlbmVGbG93KCk7XG4gICAgICBpbnNlcnRTY2VuZShlbmRpbmcpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEdhbWVTdGF0ZXMuSW50cm9TY2VuZURpc3BsYXk6XG4gICAgICBpbnRyb1NjZW5lU3RhdGUoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBHYW1lU3RhdGVzLkludHJvU2NlbmVGYWRlT3V0OlxuICAgICAgaW50cm9TY2VuZUZhZGVPdXRTdGF0ZSgpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEdhbWVTdGF0ZXMuRW5kaW5nOlxuICAgICAgLy8gRG8gbm90aGluZyBrZWVwIHNob3dpbmcgdGhlIGVuZGluZyBzY3JlZW5cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTY2VuZSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGN1cnJlbnRTY2VuZSBjYXNlIGhpdCB0aGF0IHdhc24ndCBleHBlY3RlZDogJHtjdXJyZW50U2NlbmUuc2NlbmVGbG93WzBdLnN0YXRlfWApO1xuICB9XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWVVcGRhdGUpO1xuXG4vLyBpbml0IGdhbWVsb29wIHZhcnNcbmNvbnN0IGZwcyA9IDYwO1xuY29uc3QgdGltZVBlclRpY2sgPSAxMDAwIC8gZnBzO1xubGV0IGRlbHRhID0gMDtcbmxldCBkZWx0YVRpbWUgPSAwO1xubGV0IG5vdyA9IERhdGUubm93KCk7XG5sZXQgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xubGV0IHRpbWVyID0gMDtcblxuY29uc3QgZ2FtZUNsZWFudXAgPSAoKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIGNvbnNvbGUubG9nKCdHYW1lIERvbmUnKTtcbn07XG5cbmNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gIGlmIChydW5uaW5nKSB7XG4gICAgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBkZWx0YSA9IG5vdyAtIGxhc3RUaW1lO1xuICAgIHRpbWVyICs9IGRlbHRhO1xuICAgIGxhc3RUaW1lID0gbm93O1xuXG4gICAgaWYgKHRpbWVyID49IHRpbWVQZXJUaWNrKSB7XG4gICAgICBkZWx0YVRpbWUgPSB0aW1lciAvIDEwMDA7XG4gICAgICBnYW1lVXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICB0aW1lciA9IDA7XG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGdhbWVDbGVhbnVwKCk7XG59O1xuXG5sb29wKCk7XG4iLCJpbXBvcnQgeyBTY2VuZU5hbWVzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgTmFzaHZpbGxlRmFpckdyb3VuZHMgZnJvbSAnLi9zY2VuZXMvbmFzaHZpbGxlLWZhaXJncm91bmRzJztcbmltcG9ydCBOc3NMdW5jaFJvb21TY2VuZSBmcm9tICcuL3NjZW5lcy9uc3MtbHVuY2hyb29tJztcbmltcG9ydCBOc3NQYXJraW5nTG90U2NlbmUgZnJvbSAnLi9zY2VuZXMvbnNzLXBhcmtpbmctbG90JztcbmltcG9ydCBLb2lTdXNoaU91dHNpZGUgZnJvbSAnLi9zY2VuZXMvbmFzaHZpbGxlLWtvaS1vdXRzaWRlJztcbmltcG9ydCBLb2lTdXNoaUluc2lkZSBmcm9tICcuL3NjZW5lcy9uYXNodmlsbGUta29pLWluc2lkZSc7XG5pbXBvcnQgRW5kaW5nIGZyb20gJy4vc2NlbmVzL2VuZGluZyc7XG5pbXBvcnQgSW50cm8gZnJvbSAnLi9zY2VuZXMvaW50cm8nO1xuXG5jb25zdCBzY2VuZXMgPSB7XG4gIFtTY2VuZU5hbWVzLkVuZGluZ106IEVuZGluZyxcbiAgW1NjZW5lTmFtZXMuSW50cm9dOiBJbnRybyxcbiAgW1NjZW5lTmFtZXMuTnNzTHVuY2hSb29tXTogTnNzTHVuY2hSb29tU2NlbmUsXG4gIFtTY2VuZU5hbWVzLk9sZE5zc1BhcmtpbmdMb3RdOiBOc3NQYXJraW5nTG90U2NlbmUsXG4gIFtTY2VuZU5hbWVzLk5hc2h2aWxsZUZhaXJHcm91bmRzXTogTmFzaHZpbGxlRmFpckdyb3VuZHMsXG4gIFtTY2VuZU5hbWVzLktvaVN1c2hpT3V0c2lkZV06IEtvaVN1c2hpT3V0c2lkZSxcbiAgW1NjZW5lTmFtZXMuS29pU3VzaGlJbnNpZGVdOiBLb2lTdXNoaUluc2lkZSxcbn07XG5cbmNvbnN0IGZpbmRTY2VuZSA9IChuYW1lKSA9PiB7XG4gIGlmICghc2NlbmVzW25hbWVdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBObyBzY2VuZSB3aXRoIG5hbWU6ICR7bmFtZX0gZXhpc3RzIWApO1xuICB9XG5cbiAgcmV0dXJuIHNjZW5lc1tuYW1lXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRTY2VuZTtcbiIsImltcG9ydCB7IGludHJvU2NlbmUgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ1QgSCBFICAgRSBOIEQgKHRvIGJlIGNvbnRpbnVlZC4uLiknLFxuICBzY2VuZUZsb3c6IFtcbiAgICBpbnRyb1NjZW5lKCksXG4gIF0sXG59O1xuIiwiaW1wb3J0IHsgU2NlbmVOYW1lcyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBpbnRyb0RlbGF5ZWRTY2VuZSwgbmV4dFNjZW5lIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdWLURheSAyMDIxIFRoZSBHYW1lIVxcblxcbkNsaWNrIGFueXdoZXJlIHRvIGJlZ2luLicsXG4gIHNjZW5lRmxvdzogW1xuICAgIGludHJvRGVsYXllZFNjZW5lKCksXG4gICAgbmV4dFNjZW5lKCksXG4gIF0sXG4gIG5leHRTY2VuZTogU2NlbmVOYW1lcy5Oc3NMdW5jaFJvb20sXG59O1xuIiwiaW1wb3J0IHtcbiAgQWN0b3JBc3NldHMsXG4gIEFjdG9ycyxcbiAgQmFja2dyb3VuZEFzc2V0cyxcbiAgU2NlbmVOYW1lcyxcbiAgU2NlbmVQb3NpdGlvbnMsXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBlbnRlckFjdG9yLFxuICBleGl0QWN0b3IsXG4gIGludHJvU2NlbmUsXG4gIG5leHRTY2VuZSxcbiAgcHJlc2VudENob2ljZXMsXG4gIHByZXNlbnRUZXh0LFxuICBwcmVzZW50VGV4dEZvckNob2ljZSxcbiAgc3dpdGNoQWN0b3JBc3NldCxcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYmFja2dyb3VuZDogQmFja2dyb3VuZEFzc2V0cy5OYXNodmlsbGVGYWlyR3JvdW5kcyxcbiAgdGl0bGU6ICdOYXNodmlsbGUgU3RhdGUgRmFpcmdyb3VuZHMnLFxuICBhY3RvcnM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBBY3RvcnMuTWF0dCxcbiAgICAgIHBvc2l0aW9uOiBTY2VuZVBvc2l0aW9ucy5DZW50ZXIsXG4gICAgICBhc3NldDogQWN0b3JBc3NldHMuTWF0dFdhdmUsXG4gICAgICBhcHBlYXJzQXRTdGFydDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IEFjdG9ycy5DaGFybGllLFxuICAgICAgcG9zaXRpb246IFNjZW5lUG9zaXRpb25zLkxlZnQsXG4gICAgICBhc3NldDogQWN0b3JBc3NldHMuQ2hhcmxpZSxcbiAgICAgIGFwcGVhcnNBdFN0YXJ0OiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IEFjdG9ycy5TdGVsbGEsXG4gICAgICBwb3NpdGlvbjogU2NlbmVQb3NpdGlvbnMuUmlnaHQsXG4gICAgICBhc3NldDogQWN0b3JBc3NldHMuU3RlbGxhLFxuICAgICAgYXBwZWFyc0F0U3RhcnQ6IGZhbHNlLFxuICAgIH0sXG4gIF0sXG4gIHRleHQ6IFtcbiAgICAnTWF0dDogSGVyZSB3ZSBhcmUhJyxcbiAgICAnTWF0dDogSGV5IGxvb2sgQ2hhcmxpZSBmb3VuZCBhIGZyaWVuZCEnLFxuICAgICdDaGFybGllOiBCT1JLISA6RCcsXG4gICAgJz8/Pz86ICpUT05HVUUgV0hJUCogOiknLFxuICAgICdNYXR0OiBIZWxsbywgZ2lybCEgV2hvIGFyZSB5b3U/PycsXG4gICAgJz8/Pz86IE15IG5hbWUgaXMgU3RlbGxhLicsXG4gICAgJ1N0ZWxsYTogKnNjYW1wZXJzIG9mZionLFxuICAgICdNYXR0OiBPaCBNeSEgQnllIFlpZGRsZSBHaXJsIScsXG4gICAgJ01hdHQ6IFdoYXQgYSBjdXRlIHBvb3BlciEgSSBob3BlIHdlIG1lZXQgaGVyIGFnYWluIScsXG4gICAgJ01hdHQ6IFNvLCB0ZWxsIG1lIGEgYml0IG1vcmUgYWJvdXQgeW91cnNlbGYnLFxuICAgICdNYXR0OiBWZXJ5IGNvb2wuIEkgYmVsaWV2ZSBpdCEgWW91IGFyZSB3YXkgY29vbGVyIHRoYW4gSSByZWFsaXplZCBhdCBmaXJzdCA6KScsXG4gICAgJ01hdHQ6IFdoaWxlIEkgd2FzIGEgbXVzaWNpYW4gZm9yIGFib3V0IDE1IHllYXJzLCBJXFwnbSBsb29raW5nIGZvcndhcmQgdG8gZ2V0dGluZyBhd2F5IGZyb20gdGhhdCB3aG9sZSBzY2VuZSBmb3IgYSBnb29kIHdoaWxlLicsXG4gICAgJ01hdHQ6IEdsYWQgdG8gYmUgbWFraW5nIGEgbmV3IGZyaWVuZCAoYW5kIGEgcmVhbGx5IGN1dGUgb25lIGF0IHRoYXQpLicsXG4gICAgJ01hdHQ6IEhvdyBhYm91dCB3ZSBnZXQgZGlubmVyIHRoaXMgd2Vla2VuZD8nLFxuICBdLFxuICBzY2VuZUZsb3c6IFtcbiAgICBpbnRyb1NjZW5lKCksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBzd2l0Y2hBY3RvckFzc2V0KEFjdG9ycy5NYXR0LCBBY3RvckFzc2V0cy5NYXR0UG9pbnQpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgZW50ZXJBY3RvcihBY3RvcnMuQ2hhcmxpZSksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBlbnRlckFjdG9yKEFjdG9ycy5TdGVsbGEpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgc3dpdGNoQWN0b3JBc3NldChBY3RvcnMuTWF0dCwgQWN0b3JBc3NldHMuTWF0dFRoaW5rKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHN3aXRjaEFjdG9yQXNzZXQoQWN0b3JzLk1hdHQsIEFjdG9yQXNzZXRzLk1hdHRTdXJwcmlzZSksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIGV4aXRBY3RvcihBY3RvcnMuU3RlbGxhKSxcbiAgICBzd2l0Y2hBY3RvckFzc2V0KEFjdG9ycy5NYXR0LCBBY3RvckFzc2V0cy5NYXR0V2F2ZSksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHN3aXRjaEFjdG9yQXNzZXQoQWN0b3JzLk1hdHQsIEFjdG9yQXNzZXRzLk1hdHRUaGluayksXG4gICAgcHJlc2VudFRleHRGb3JDaG9pY2UoKSxcbiAgICBwcmVzZW50Q2hvaWNlcyhbJ0lcXCdtIGFuIGFtYXppbmcgbXVzaWNpYW4hJywgJ0lcXCdtIGFuIGFtYXppbmcgbW9tIHRvIENoYXJsaWUhJywgJ0lcXCdtIGZyb20gdGhlIGFtYXppbmcgUGFjaWZpYyBOb3J0aHdlc3QhJywgJ0kgYW0gYW4gYW1hemluZyBwbGFudCBtYW1hIScsICdJXFwnbSBqdXN0IGRhbW4gYW1hemluZyEgOkQnLCAnQWxsIG9mIHRoZSBhYm92ZSEgKGNvcnJlY3QgY2hvaWNlKSddKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgc3dpdGNoQWN0b3JBc3NldChBY3RvcnMuTWF0dCwgQWN0b3JBc3NldHMuTWF0dFNtaWxlKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgbmV4dFNjZW5lKCksXG4gIF0sXG4gIG5leHRTY2VuZTogU2NlbmVOYW1lcy5Lb2lTdXNoaU91dHNpZGUsXG59O1xuIiwiaW1wb3J0IHtcbiAgQWN0b3JBc3NldHMsXG4gIEFjdG9ycyxcbiAgQmFja2dyb3VuZEFzc2V0cyxcbiAgU2NlbmVOYW1lcyxcbiAgU2NlbmVQb3NpdGlvbnMsXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBlbnRlckFjdG9yLFxuICBleGl0QWN0b3IsXG4gIGludHJvU2NlbmUsXG4gIG5leHRTY2VuZSxcbiAgcHJlc2VudFRleHQsXG4gIHN3aXRjaEFjdG9yQXNzZXQsXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJhY2tncm91bmQ6IEJhY2tncm91bmRBc3NldHMuTmFzaHZpbGxlS29pU3VzaGlJbnNpZGUsXG4gIHRpdGxlOiAnS29pIFN1c2hpIChpbnNpZGUpJyxcbiAgYWN0b3JzOiBbXG4gICAge1xuICAgICAgbmFtZTogQWN0b3JzLk1hdHQsXG4gICAgICBwb3NpdGlvbjogU2NlbmVQb3NpdGlvbnMuQ2VudGVyLFxuICAgICAgYXNzZXQ6IEFjdG9yQXNzZXRzLk1hdHRTbWlsZSxcbiAgICAgIGFwcGVhcnNBdFN0YXJ0OiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IEFjdG9ycy5Nb3NEZWYsXG4gICAgICBwb3NpdGlvbjogU2NlbmVQb3NpdGlvbnMuUmlnaHQsXG4gICAgICBhc3NldDogQWN0b3JBc3NldHMuTW9zRGVmLFxuICAgICAgYXBwZWFyc0F0U3RhcnQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBBY3RvcnMuQ2hhcmxpZSxcbiAgICAgIHBvc2l0aW9uOiBTY2VuZVBvc2l0aW9ucy5MZWZ0LFxuICAgICAgYXNzZXQ6IEFjdG9yQXNzZXRzLkNoYXJsaWUsXG4gICAgICBhcHBlYXJzQXRTdGFydDogZmFsc2UsXG4gICAgfSxcbiAgXSxcbiAgdGV4dDogW1xuICAgICdIb3N0OiAqY2hlY2tzIHBob25lKicsXG4gICAgJ0hvc3Q6ICpTSUdIKicsXG4gICAgJ0hvc3Q6ICpFeHVkaW5nIHRlZW5hZ2UgYW5nc3QqIFJpZ2h0IHRoaXMgd2F5Li4uIChJIGhhdGUgbXkgbGlmZSknLFxuICAgICcoU29tZXRpbWUgbGF0ZXIgYWZ0ZXIgdGhlIGZvb2QgaGFzIGJlZW4gc2VydmVkLi4uKScsXG4gICAgJ01hdHQ6IEhpLiA6KScsXG4gICAgJ01hdHQ6IEkgaGF2ZSByZWFsbHkgZW5qb3llZCBoYW5naW5nIG91dCB0aGUgcGFzdCBjb3VwbGUgb2Ygd2Vla3MgZm9yIGx1bmNoIGFuZCBldmVyeXRoaW5nLicsXG4gICAgJ01hdHQ6IEFuZCB5b3VyIGJveSBDaGFybGllIGlzIHRoZSBtb3N0IGN1dGVzdCBvZiBhbGwgYm95cyA6RCcsXG4gICAgJ01hdHQ6IEkgZmVlbCBhIHJlYWwgY29ubmVjdGlvbiBmb3JtaW5nLiBZb3UgcmVhbGx5IGFyZSBhIHNwZWN0YWN1bGFyIHdvbWFuLCBhbmQgSSBjYW5cXCd0IHdhaXQgdG8gbGVhcm4gbW9yZSBhbmQgc2hhcmUgbW9yZSBhYm91dCBteXNlbGYgd2l0aCB5b3UgOiknLFxuICAgICdNYXR0OiAqUmFpc2VzIGdsYXNzKiBUbyB1cyEgSSBmb3JzZWUgYSB3b25kZXJmdWwgZnV0dXJlIScsXG4gICAgJyhDaGVlcnMhISkgPDMnLFxuICAgICcqQk9SSyogKENoYXJsaWUgc2F5cyBcIkNoZWVycyBhbmQgSSBhZ3JlZSBpbiBkb2dnbyBzcGVha1wiISknLFxuICBdLFxuICBzY2VuZUZsb3c6IFtcbiAgICBpbnRyb1NjZW5lKCksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgZXhpdEFjdG9yKEFjdG9ycy5Nb3NEZWYpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgZW50ZXJBY3RvcihBY3RvcnMuTWF0dCksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBzd2l0Y2hBY3RvckFzc2V0KEFjdG9ycy5NYXR0LCBBY3RvckFzc2V0cy5NYXR0TG92ZSksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgc3dpdGNoQWN0b3JBc3NldChBY3RvcnMuTWF0dCwgQWN0b3JBc3NldHMuTWF0dEh1ZyksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIGVudGVyQWN0b3IoQWN0b3JzLkNoYXJsaWUpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgbmV4dFNjZW5lKCksXG4gIF0sXG4gIG5leHRTY2VuZTogU2NlbmVOYW1lcy5FbmRpbmcsXG59O1xuIiwiaW1wb3J0IHtcbiAgQWN0b3JBc3NldHMsXG4gIEFjdG9ycyxcbiAgQmFja2dyb3VuZEFzc2V0cyxcbiAgU2NlbmVOYW1lcyxcbiAgU2NlbmVQb3NpdGlvbnMsXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBlbnRlckFjdG9yLFxuICBleGl0QWN0b3IsXG4gIGludHJvU2NlbmUsXG4gIG5leHRTY2VuZSxcbiAgcHJlc2VudENob2ljZXMsXG4gIHByZXNlbnRUZXh0LFxuICBwcmVzZW50VGV4dEZvckNob2ljZSxcbiAgc3dpdGNoQWN0b3JBc3NldCxcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYmFja2dyb3VuZDogQmFja2dyb3VuZEFzc2V0cy5OYXNodmlsbGVLb2lTdXNoaU91dHNpZGUsXG4gIHRpdGxlOiAnS29pIFN1c2hpIChvdXRzaWRlKScsXG4gIGFjdG9yczogW1xuICAgIHtcbiAgICAgIG5hbWU6IEFjdG9ycy5NYXR0LFxuICAgICAgcG9zaXRpb246IFNjZW5lUG9zaXRpb25zLkNlbnRlcixcbiAgICAgIGFzc2V0OiBBY3RvckFzc2V0cy5NYXR0U21pbGUsXG4gICAgICBhcHBlYXJzQXRTdGFydDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IEFjdG9ycy5Nb3NEZWYsXG4gICAgICBwb3NpdGlvbjogU2NlbmVQb3NpdGlvbnMuTGVmdCxcbiAgICAgIGFzc2V0OiBBY3RvckFzc2V0cy5Nb3NEZWYsXG4gICAgICBhcHBlYXJzQXRTdGFydDogZmFsc2UsXG4gICAgfSxcbiAgXSxcbiAgdGV4dDogW1xuICAgICdNYXR0OiBIaSEgVGhhbmtzIGZvciBtZWV0aW5nIHVwIHdpdGggbWUuJyxcbiAgICAnTWF0dDogSVxcJ3ZlIGhlYXJkIHRoaXMgcGxhY2UgaXMgcHJldHR5IGdvb2QuJyxcbiAgICAnTWF0dDogSG93IGxvbmcgaGF2ZSB5b3UgbGl2ZWQgYXJvdW5kIGhlcmU/PycsXG4gICAgJ01hdHQ6IFlvdSBjYW4gc2F5IHRoYXQgYWdhaW4uJyxcbiAgICAnTWF0dDogV2hlcmUgd291bGQgeW91IGdvIGlmIHlvdSBjb3VsZCBsaXZlIGFueXdoZXJlPz8nLFxuICAgICdNYXR0OiBWZXJ5IENvb2wuIEkgY2FuIHNlZSB5b3UgaGF2ZSB0aGF0IGFkdmVudHVyZXJcXCdzIHNwaXJpdCA6KScsXG4gICAgJ0hvc3Q6IFlvdXIgdGFibGUgaXMgcmVhZHkuLi4gKlNJR0gqJyxcbiAgICAnTWF0dDogSGV5IHRoYXQgaG9zdCBraW5kYSBsb29rcyBsaWtlLi4uJyxcbiAgXSxcbiAgc2NlbmVGbG93OiBbXG4gICAgaW50cm9TY2VuZSgpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgc3dpdGNoQWN0b3JBc3NldChBY3RvcnMuTWF0dCwgQWN0b3JBc3NldHMuTWF0dFRoaW5rKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgcHJlc2VudENob2ljZXMoWydJIGNhblxcJ3QgZXZlbiByZW1lbWJlciBub3cuLicsICdGZWVscyBsaWtlIGEgbGlmZXRpbWUhJywgJ1RvbyBsb25nISddKSxcbiAgICBzd2l0Y2hBY3RvckFzc2V0KEFjdG9ycy5NYXR0LCBBY3RvckFzc2V0cy5NYXR0UG9pbnQpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgcHJlc2VudFRleHRGb3JDaG9pY2UoKSxcbiAgICBwcmVzZW50Q2hvaWNlcyhbJ1NlYXR0bGUnLCAnQ2FsaWZvcm5pYScsICdDb2xvcmFuZG8nLCAnQW5vdGhlciBDb3VudHJ5JywgJ1ZhbiBsaWZlIScsICdOb3QgMTAwJSBzdXJlLCBidXQgSSBoYXZlIHNvbWUgdGhvdWdodHMgYWJvdXQgaXQuLi4nXSksXG4gICAgc3dpdGNoQWN0b3JBc3NldChBY3RvcnMuTWF0dCwgQWN0b3JBc3NldHMuTWF0dEh1ZyksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBlbnRlckFjdG9yKEFjdG9ycy5Nb3NEZWYpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgZXhpdEFjdG9yKEFjdG9ycy5Nb3NEZWYpLFxuICAgIHN3aXRjaEFjdG9yQXNzZXQoQWN0b3JzLk1hdHQsIEFjdG9yQXNzZXRzLk1hdHRTdXJwcmlzZSksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBuZXh0U2NlbmUoKSxcbiAgXSxcbiAgbmV4dFNjZW5lOiBTY2VuZU5hbWVzLktvaVN1c2hpSW5zaWRlLFxufTtcbiIsImltcG9ydCB7XG4gIEFjdG9yQXNzZXRzLFxuICBBY3RvcnMsIEJhY2tncm91bmRBc3NldHMsIFNjZW5lTmFtZXMsIFNjZW5lUG9zaXRpb25zLFxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgZW50ZXJBY3RvcixcbiAgaW50cm9TY2VuZSxcbiAgbmV4dFNjZW5lLFxuICBwcmVzZW50Q2hvaWNlcyxcbiAgcHJlc2VudFRleHQsXG4gIHByZXNlbnRUZXh0Rm9yQ2hvaWNlLFxuICBzd2l0Y2hBY3RvckFzc2V0LFxufSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kQXNzZXRzLk5zc0x1bmNoUm9vbSxcbiAgdGl0bGU6ICdOYXNodmlsbGUgU29mdHdhcmUgU2Nob29sIDIwMTcnLFxuICBhY3RvcnM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBBY3RvcnMuTWF0dCxcbiAgICAgIHBvc2l0aW9uOiBTY2VuZVBvc2l0aW9ucy5SaWdodCxcbiAgICAgIGFzc2V0OiBBY3RvckFzc2V0cy5NYXR0V2F2ZSxcbiAgICAgIGFwcGVhcnNBdFN0YXJ0OiBmYWxzZSxcbiAgICB9LFxuICBdLFxuICB0ZXh0OiBbXG4gICAgJz8/Pz86IEhleSB0aGVyZSEhJyxcbiAgICAnPz8/PzogV2FpdCB1cCEnLFxuICAgICdNYXR0OiBIaSA6KSAuLi4gSG93IGlzIHlvdXIgZGF5IGdvaW5nPycsXG4gICAgJ01hdHQ6IEkgY2FuXFwndCBiZWxpZXZlIHdlIG9ubHkgaGF2ZSBhIGNvdXBsZSBvZiB3ZWVrcyBsZWZ0IScsXG4gICAgJ01hdHQ6IElcXCd2ZSBiZWVuIHNvIGZvY3VzZWQgb24gbXkgd29yayB0aGF0IEkgZmVlbCBsaWtlIHdlIGhhcmRseSBnb3QgdG8ga25vdyBlYWNoIG90aGVyLicsXG4gICAgJ01hdHQ6IFdhbnQgdG8gZ28gZ2V0IGx1bmNoIHNvbWV3aGVyZT8nLFxuICAgICdNYXR0OiBPa2F5LiBMZXRcXCdzIGdldCBvdXR0YSBoZXJlIScsXG4gIF0sXG4gIHNjZW5lRmxvdzogW1xuICAgIGludHJvU2NlbmUoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgZW50ZXJBY3RvcihBY3RvcnMuTWF0dCksXG4gICAgcHJlc2VudFRleHRGb3JDaG9pY2UoKSxcbiAgICBwcmVzZW50Q2hvaWNlcyhbJ0l0XFwncyB1aC4uLiBnb2luZycsICdOb3QgYmFkLCBhY3R1YWxseSEnLCAnRmFudGFzdGljY2NjYyEnXSksXG4gICAgc3dpdGNoQWN0b3JBc3NldChBY3RvcnMuTWF0dCwgQWN0b3JBc3NldHMuTWF0dFRoaW5rKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgcHJlc2VudFRleHRGb3JDaG9pY2UoKSxcbiAgICBwcmVzZW50Q2hvaWNlcyhbJ1N1cmUgdGhhdCBzb3VuZHMgZnVuIScsICdZZWEhIExldHMgZ2V0IENoYXJsaWUhJ10pLFxuICAgIHN3aXRjaEFjdG9yQXNzZXQoQWN0b3JzLk1hdHQsIEFjdG9yQXNzZXRzLk1hdHRTbWlsZSksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBuZXh0U2NlbmUoKSxcbiAgXSxcbiAgbmV4dFNjZW5lOiBTY2VuZU5hbWVzLk9sZE5zc1BhcmtpbmdMb3QsXG59O1xuIiwiaW1wb3J0IHtcbiAgQWN0b3JBc3NldHMsXG4gIEFjdG9ycywgQmFja2dyb3VuZEFzc2V0cywgU2NlbmVOYW1lcywgU2NlbmVQb3NpdGlvbnMsXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBlbnRlckFjdG9yLFxuICBleGl0QWN0b3IsXG4gIGludHJvU2NlbmUsXG4gIG5leHRTY2VuZSxcbiAgcHJlc2VudENob2ljZXMsXG4gIHByZXNlbnRUZXh0LFxuICBwcmVzZW50VGV4dEZvckNob2ljZSxcbiAgc3dpdGNoQWN0b3JBc3NldCxcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYmFja2dyb3VuZDogQmFja2dyb3VuZEFzc2V0cy5PbGROc3NQYXJraW5nTG90LFxuICB0aXRsZTogJ1RoZSBQYXJraW5nIExvdCcsXG4gIGFjdG9yczogW1xuICAgIHtcbiAgICAgIG5hbWU6IEFjdG9ycy5NYXR0LFxuICAgICAgcG9zaXRpb246IFNjZW5lUG9zaXRpb25zLkxlZnQsXG4gICAgICBhc3NldDogQWN0b3JBc3NldHMuTWF0dFdhdmUsXG4gICAgICBhcHBlYXJzQXRTdGFydDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IEFjdG9ycy5DaGFybGllLFxuICAgICAgcG9zaXRpb246IFNjZW5lUG9zaXRpb25zLlJpZ2h0LFxuICAgICAgYXNzZXQ6IEFjdG9yQXNzZXRzLkNoYXJsaWUsXG4gICAgICBhcHBlYXJzQXRTdGFydDogZmFsc2UsXG4gICAgfSxcbiAgXSxcbiAgdGV4dDogW1xuICAgICdNYXR0OiBJdFxcJ3MgYSBuaWNlIGRheSEnLFxuICAgICdNYXR0OiBTbywgdGhpcyBpcyB5b3VyIGJveSBDaGFybGllPz8nLFxuICAgICdNYXR0OiBEbyB5b3Ugd2FubmEgcGxheSwgQ2hhcmxpZSE/JyxcbiAgICAnQ2hhcmxpZTogV29vZiEnLFxuICAgICdNYXR0OiBHbyBmZXRjaCBib3khJyxcbiAgICAnQ2hhcmxpZTogV29vb29vb29vb29vb29vb29vb29vb2YhJyxcbiAgICAnTWF0dDogV2hhdCBhIGdvb2QgYm95ISBMb29rIGF0IGhpbSBnbyEnLFxuICAgICdNYXR0OiBZb3UgZ3V5cyBtYWtlIGEgZ3JlYXQgZHVvLiA6KScsXG4gICAgJ01hdHQ6IFdlbGwsIHdhbnQgdG8gZ28gdG8gdGhlIGZhaXJncm91bmRzIHdpdGggQ2hhcmxlcyB0byBlYXQgc29tZSBsdW5jaD8nLFxuICAgICdNYXR0OiBDXFwnbW9uISBJdFxcJ2xsIGJlIGZ1biEnLFxuICBdLFxuICBzY2VuZUZsb3c6IFtcbiAgICBpbnRyb1NjZW5lKCksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBzd2l0Y2hBY3RvckFzc2V0KEFjdG9ycy5NYXR0LCBBY3RvckFzc2V0cy5NYXR0VGhpbmspLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgc3dpdGNoQWN0b3JBc3NldChBY3RvcnMuTWF0dCwgQWN0b3JBc3NldHMuTWF0dFNocnVnKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIGVudGVyQWN0b3IoQWN0b3JzLkNoYXJsaWUpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHN3aXRjaEFjdG9yQXNzZXQoQWN0b3JzLk1hdHQsIEFjdG9yQXNzZXRzLk1hdHRQb2ludCksXG4gICAgZXhpdEFjdG9yKEFjdG9ycy5DaGFybGllKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgc3dpdGNoQWN0b3JBc3NldChBY3RvcnMuTWF0dCwgQWN0b3JBc3NldHMuTWF0dExvdmUpLFxuICAgIHByZXNlbnRUZXh0Rm9yQ2hvaWNlKCksXG4gICAgcHJlc2VudENob2ljZXMoWydUaGF0IHNvdW5kcyBnb29kLicsICdIbW0uLi4gSSBkdW5uby4uLiddKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIG5leHRTY2VuZSgpLFxuICBdLFxuICBuZXh0U2NlbmU6IFNjZW5lTmFtZXMuTmFzaHZpbGxlRmFpckdyb3VuZHMsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==