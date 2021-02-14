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
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.loadScene)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattThink),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattShrug),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.enterActor)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Charlie),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.presentText)(),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.exitActor)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Charlie),
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.switchActorAsset)(_constants__WEBPACK_IMPORTED_MODULE_0__.Actors.Matt, _constants__WEBPACK_IMPORTED_MODULE_0__.ActorAssets.MattPoint),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzLy4vc3JjL3NjZW5lLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzLy4vc3JjL3NjZW5lcy9lbmRpbmcuanMiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzLy4vc3JjL3NjZW5lcy9pbnRyby5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9zcmMvc2NlbmVzL25hc2h2aWxsZS1mYWlyZ3JvdW5kcy5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9zcmMvc2NlbmVzL25hc2h2aWxsZS1rb2ktaW5zaWRlLmpzIiwid2VicGFjazovL3ZkYXlfMjAyMV9qcy8uL3NyYy9zY2VuZXMvbmFzaHZpbGxlLWtvaS1vdXRzaWRlLmpzIiwid2VicGFjazovL3ZkYXlfMjAyMV9qcy8uL3NyYy9zY2VuZXMvbnNzLWx1bmNocm9vbS5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvLi9zcmMvc2NlbmVzL25zcy1wYXJraW5nLWxvdC5qcyIsIndlYnBhY2s6Ly92ZGF5XzIwMjFfanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZkYXlfMjAyMV9qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmRheV8yMDIxX2pzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGdCQUFnQixpQkFBaUIsNkJBQTZCLEdBQUcsZ0JBQWdCLGtCQUFrQixtQkFBbUIsc0JBQXNCLDREQUE0RCx3QkFBd0IscUNBQXFDLG1CQUFtQixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QixjQUFjLEdBQUcsYUFBYSw4QkFBOEIsb0JBQW9CLGNBQWMsOEJBQThCLHlCQUF5Qiw2QkFBNkIsR0FBRyxTQUFTLHNCQUFzQixxQkFBcUIsc0JBQXNCLEdBQUcsaUJBQWlCLG1DQUFtQyxvQ0FBb0Msa0NBQWtDLEdBQUcsOEJBQThCLG9CQUFvQiwwQkFBMEIscUNBQXFDLGtCQUFrQixtQkFBbUIseUJBQXlCLGtCQUFrQixhQUFhLGNBQWMsR0FBRyxxQkFBcUIsMkJBQTJCLGtCQUFrQixpQkFBaUIsd0JBQXdCLHVCQUF1QiwrQkFBK0IsR0FBRyw0QkFBNEIsNEJBQTRCLEdBQUcsNkJBQTZCLDBCQUEwQixHQUFHLDJCQUEyQiw4QkFBOEIsR0FBRyxr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WTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNhbnZhcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5pbWcge1xcbiAgICBtYXgtaGVpZ2h0OjEwMCU7XFxuICAgIG1heC13aWR0aDoxMDAlO1xcbiAgICBvYmplY3QtZml0Om5vbmU7XFxufVxcblxcbi5pbWctcGFyZW50IHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBib3R0b207XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogbGVmdDtcXG59XFxuXFxuLmNhbnZhcy1vdmVybGF5LS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDk4O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5jYW52YXMtb3ZlcmxheSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWluLWhlaWdodDogNTAwcHg7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuLmNhbnZhcy1vdmVybGF5LS1yaWdodCB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmNhbnZhcy1vdmVybGF5LS1jZW50ZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FudmFzLW92ZXJsYXktLWxlZnQge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmNhbnZhcy1ib3R0b20tdGV4dC0td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYm9yZGVyOiAwLjNyZW0gc29saWQgYmxhY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleDogMC4yNTtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwOyBcXG59XFxuXFxuLmNhbnZhcy1ib3R0b20tdGV4dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODk5ZGM7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNlODk5ZGMgMCUsICNkMzg3YWIgNzQlKTtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiA0LjVyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi5jYW52YXMtYm90dG9tLXRleHQtY3Vyc29yIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcmVtO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgcm90YXRlKDQ1ZGVnKSBzY2FsZVgoMS4wKSBzY2FsZVkoMC44KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDRyZW07XFxuICAgIHJpZ2h0OiA2cmVtO1xcbiAgICB6LWluZGV4OiA5OTtcXG59XFxuXFxuLmNhbnZhcy1ib3R0b20tY2hvaWNlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uY2FudmFzLWJvdHRvbS1jaG9pY2VzLS1vcHRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAzMywgMzMsIDAuNCk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhbnZhcy1ib3R0b20tY2hvaWNlcy0tb3B0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiAnXFxcXDI2NjUnO1xcbiAgY29sb3I6ICNlODk5ZGM7XFxuICBtYXJnaW4tcmlnaHQ6IDEuNHJlbTtcXG59XFxuXFxuLnNjZW5lLWxvYWRpbmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4OTlkYztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDIwMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zY2VuZS1sb2FkaW5nLS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLnNjZW5lLWxvYWRpbmctLXRleHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMjY2NSc7XFxuICBjb2xvcjogI2U4OTlkYztcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuXFxuLnNjZW5lLWxvYWRpbmctLXRleHQ6YWZ0ZXIge1xcbiAgY29udGVudDogJ1xcXFwyNjY1JztcXG4gIGNvbG9yOiAjZTg5OWRjO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcblxcblxcbi5jYW52YXMtYm90dG9tLWNob2ljZXMtLW9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDMzLCAzMywgMC44KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YscURBQXFEO0lBQ3JELGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsT0FBTztBQUNYOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztBQUNYOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixPQUFPO0lBQ1AsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtFQUFrRTtJQUNsRSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztBQUNmOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLDhEQUE4RDtJQUM5RCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COzs7QUFHQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5jYW52YXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuaW1nIHtcXG4gICAgbWF4LWhlaWdodDoxMDAlO1xcbiAgICBtYXgtd2lkdGg6MTAwJTtcXG4gICAgb2JqZWN0LWZpdDpub25lO1xcbn1cXG5cXG4uaW1nLXBhcmVudCB7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogYm90dG9tO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGxlZnQ7XFxufVxcblxcbi5jYW52YXMtb3ZlcmxheS0td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiA5ODtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4uY2FudmFzLW92ZXJsYXkge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbi5jYW52YXMtb3ZlcmxheS0tcmlnaHQge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5jYW52YXMtb3ZlcmxheS0tY2VudGVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhbnZhcy1vdmVybGF5LS1sZWZ0IHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jYW52YXMtYm90dG9tLXRleHQtLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGJvcmRlcjogMC4zcmVtIHNvbGlkIGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXg6IDAuMjU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDsgXFxufVxcblxcbi5jYW52YXMtYm90dG9tLXRleHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg5OWRjO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZTg5OWRjIDAlLCAjZDM4N2FiIDc0JSk7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogNC41cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4uY2FudmFzLWJvdHRvbS10ZXh0LWN1cnNvciB7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci13aWR0aDogMXJlbTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHJvdGF0ZSg0NWRlZykgc2NhbGVYKDEuMCkgc2NhbGVZKDAuOCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA0cmVtO1xcbiAgICByaWdodDogNnJlbTtcXG4gICAgei1pbmRleDogOTk7XFxufVxcblxcbi5jYW52YXMtYm90dG9tLWNob2ljZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmNhbnZhcy1ib3R0b20tY2hvaWNlcy0tb3B0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMzMsIDMzLCAwLjQpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYW52YXMtYm90dG9tLWNob2ljZXMtLW9wdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFwyNjY1JztcXG4gIGNvbG9yOiAjZTg5OWRjO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjRyZW07XFxufVxcblxcbi5zY2VuZS1sb2FkaW5nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlODk5ZGM7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAyMDA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2NlbmUtbG9hZGluZy0tdGV4dCB7XFxuICBmb250LXNpemU6IDhyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5zY2VuZS1sb2FkaW5nLS10ZXh0OmJlZm9yZSB7XFxuICBjb250ZW50OiAnXFxcXDI2NjUnO1xcbiAgY29sb3I6ICNlODk5ZGM7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcblxcblxcbi5zY2VuZS1sb2FkaW5nLS10ZXh0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMjY2NSc7XFxuICBjb2xvcjogI2U4OTlkYztcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5cXG5cXG4uY2FudmFzLWJvdHRvbS1jaG9pY2VzLS1vcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAzMywgMzMsIDAuOCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIGZha2UgZW51bXMgISFcbmV4cG9ydCBjb25zdCBHYW1lU3RhdGVzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIEVuZGluZzogJ0VuZGluZycsXG4gIEVudGVyQWN0b3I6ICdFbnRlckFjdG9yJyxcbiAgRXhpdEFjdG9yOiAnRXhpdEFjdG9yJyxcbiAgTG9hZFNjZW5lOiAnTG9hZFNjZW5lJyxcbiAgSW50cm9EZWxheWVkU2NlbmU6ICdJbnRyb0RlbGF5ZWRTY2VuZScsXG4gIEludHJvRmluYWxTY2VuZTogJ0ludHJvRmluYWxTY2VuZScsXG4gIEludHJvU2NlbmVEZWxheWVkRGlzcGxheTogJ0ludHJvU2NlbmVEZWxheWVkRGlzcGxheScsXG4gIEludHJvU2NlbmU6ICdJbnRyb1NjZW5lJyxcbiAgSW50cm9TY2VuZURpc3BsYXk6ICdJbnRyb1NjZW5lRGlzcGxheScsXG4gIEludHJvU2NlbmVGYWRlT3V0OiAnSW50cm9TY2VuZUZhZGVPdXQnLFxuICBOZXh0U2NlbmU6ICdOZXh0U2NlbmUnLFxuICBQcmVzZW50aW5nQ2hvaWNlczogJ1ByZXNlbnRpbmdDaG9pY2VzJyxcbiAgUHJlc2VudGluZ1RleHQ6ICdQcmVzZW50aW5nVGV4dCcsXG4gIFByZXNlbnRpbmdUZXh0Rm9yQ2hvaWNlOiAnUHJlc2VudGluZ1RleHRGb3JDaG9pY2UnLFxuICBTd2l0Y2hpbmdBY3RvckFzc2V0OiAnU3dpdGNoaW5nQWN0b3JBc3NldCcsXG4gIFdhaXRpbmdGb3JDbGljazogJ1dhaXRpbmdGb3JDbGljaycsXG4gIFdhaXRpbmdGb3JDaG9pY2U6ICdXYWl0aW5nRm9yQ2hvaWNlJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgRXZlbnRUeXBlcyA9IE9iamVjdC5mcmVlemUoe1xuICBDbGljazogJ2NsaWNrJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgU2NlbmVQb3NpdGlvbnMgPSBPYmplY3QuZnJlZXplKHtcbiAgTGVmdDogMCxcbiAgQ2VudGVyOiAxLFxuICBSaWdodDogMixcbn0pO1xuXG5leHBvcnQgY29uc3QgQWN0b3JzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIE1hdHQ6ICdNYXR0JyxcbiAgTW9zRGVmOiAnTW9zIERlZicsXG4gIENoYXJsaWU6ICdDaGFybGllJyxcbiAgU3RlbGxhOiAnU3RlbGxhJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgU2NlbmVOYW1lcyA9IE9iamVjdC5mcmVlemUoe1xuICBJbnRybzogJ0ludHJvJyxcbiAgRW5kaW5nOiAnRW5kaW5nJyxcbiAgS29pU3VzaGlPdXRzaWRlOiAnS29pU3VzaGlPdXRzaWRlJyxcbiAgS29pU3VzaGlJbnNpZGU6ICdLb2lTdXNoaUluc2lkZScsXG4gIE5hc2h2aWxsZUZhaXJHcm91bmRzOiAnTmFzaHZpbGxlRmFpckdyb3VuZHMnLFxuICBOc3NMdW5jaFJvb206ICdOU1NMdW5jaFJvb20nLFxuICBPbGROc3NQYXJraW5nTG90OiAnTlNTUGFya2luZ0xvdCcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEFzc2V0c0RpciA9ICdhc3NldHMnO1xuXG5leHBvcnQgY29uc3QgRG9tQ2xhc3NlcyA9IE9iamVjdC5mcmVlemUoe1xuICBDYW52YXNCb3R0b21DaG9pY2VzT3B0aW9uOiAnY2FudmFzLWJvdHRvbS1jaG9pY2VzLS1vcHRpb24nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBBY3RvckFzc2V0cyA9IE9iamVjdC5mcmVlemUoe1xuICBDaGFybGllOiAnY2hhcmxpZS5wbmcnLFxuICBKb2VTaGVwOiAnam9lX3NoZXAucG5nJyxcbiAgTWF0dEh1ZzogJ21hdHRfaHVnLnBuZycsXG4gIE1hdHRMb3ZlOiAnbWF0dF9sb3ZlLnBuZycsXG4gIE1hdHRQb2ludDogJ21hdHRfcG9pbnQucG5nJyxcbiAgTWF0dFNocnVnOiAnbWF0dF9zaHJ1Zy5wbmcnLFxuICBNYXR0U21pbGU6ICdtYXR0X3NtaWxlLnBuZycsXG4gIE1hdHRTdXJwcmlzZTogJ21hdHRfc3VycHJpc2UucG5nJyxcbiAgTWF0dFRoaW5rOiAnbWF0dF90aGluay5wbmcnLFxuICBNYXR0V2F2ZTogJ21hdHRfd2F2ZS5wbmcnLFxuICBNb3NEZWY6ICdtb3NfZGVmLnBuZycsXG4gIFN0ZWxsYTogJ3N0ZWxsYS5wbmcnLFxufSk7XG5cbmV4cG9ydCBjb25zdCBCYWNrZ3JvdW5kQXNzZXRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIE5hc2h2aWxsZUZhaXJHcm91bmRzOiAnbmFzaHZpbGxlX2ZhaXJncm91bmRzLnBuZycsXG4gIE5hc2h2aWxsZUhvdXNlT3V0c2lkZTogJ25hc2h2aWxsZV9ob3VzZV9vdXRzaWRlLnBuZycsXG4gIE5hc2h2aWxsZUtvaVN1c2hpSW5zaWRlOiAnbmFzaHZpbGxlX2tvaV9zdXNoaV9pbnNpZGUucG5nJyxcbiAgTmFzaHZpbGxlS29pU3VzaGlPdXRzaWRlOiAnbmFzaHZpbGxlX2tvaV9zdXNoaV9vdXRzaWRlLnBuZycsXG4gIE5hc2h2aWxsZUxhc01hcmFjYXNJbnNpZGU6ICduYXNodmlsbGVfbGFzX21hcmFjYXNfaW5zaWRlLnBuZycsXG4gIE5hc2h2aWxsZUxhc01hcmFjYXNPdXRzaWRlOiAnbmFzaHZpbGxlX2xhc19tYXJhY2FzX291dHNpZGUucG5nJyxcbiAgTnNzR2FtZU5pZ2h0OiAnbnNzX2dhbWVfbmlnaHRfc21hbGwud2VicCcsXG4gIE5zc0x1bmNoUm9vbTogJ25zc19sdW5jaHJvb20ucG5nJyxcbiAgT2xkTnNzUGFya2luZ0xvdDogJ29sZF9uc3NfcGFya2luZ19sb3QucG5nJyxcbn0pO1xuIiwiaW1wb3J0IHsgQXNzZXRzRGlyLCBHYW1lU3RhdGVzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYXNzZXRzVXJsID0gKG5hbWUpID0+IGB1cmwoJHtBc3NldHNEaXJ9LyR7bmFtZX0pYDtcblxuZXhwb3J0IGNvbnN0IGVudGVyQWN0b3IgPSAoYWN0b3IpID0+ICh7IHN0YXRlOiBHYW1lU3RhdGVzLkVudGVyQWN0b3IsIG9wdGlvbnM6IHsgYWN0b3IgfSB9KTtcbmV4cG9ydCBjb25zdCBlbmRpbmcgPSAoKSA9PiAoeyBzdGF0ZTogR2FtZVN0YXRlcy5FbmRpbmcgfSk7XG5leHBvcnQgY29uc3QgZXhpdEFjdG9yID0gKGFjdG9yKSA9PiAoeyBzdGF0ZTogR2FtZVN0YXRlcy5FeGl0QWN0b3IsIG9wdGlvbnM6IHsgYWN0b3IgfSB9KTtcbmV4cG9ydCBjb25zdCBsb2FkU2NlbmUgPSAoKSA9PiAoeyBzdGF0ZTogR2FtZVN0YXRlcy5Mb2FkU2NlbmUgfSk7XG5leHBvcnQgY29uc3QgaW50cm9TY2VuZSA9ICgpID0+ICh7IHN0YXRlOiBHYW1lU3RhdGVzLkludHJvU2NlbmUgfSk7XG5leHBvcnQgY29uc3QgaW50cm9GaW5hbFNjZW5lID0gKCkgPT4gKHsgc3RhdGU6IEdhbWVTdGF0ZXMuSW50cm9GaW5hbFNjZW5lIH0pO1xuZXhwb3J0IGNvbnN0IGludHJvRGVsYXllZFNjZW5lID0gKCkgPT4gKHsgc3RhdGU6IEdhbWVTdGF0ZXMuSW50cm9EZWxheWVkU2NlbmUgfSk7XG5leHBvcnQgY29uc3QgaW50cm9TY2VuZURlbGF5ZWREaXNwbGF5ID0gKCkgPT4gKHsgc3RhdGU6IEdhbWVTdGF0ZXMuSW50cm9TY2VuZURlbGF5ZWREaXNwbGF5IH0pO1xuZXhwb3J0IGNvbnN0IGludHJvU2NlbmVEaXNwbGF5ID0gKCkgPT4gKHsgc3RhdGU6IEdhbWVTdGF0ZXMuSW50cm9TY2VuZURpc3BsYXkgfSk7XG5leHBvcnQgY29uc3QgaW50cm9TY2VuZUZhZGVPdXQgPSAoKSA9PiAoeyBzdGF0ZTogR2FtZVN0YXRlcy5JbnRyb1NjZW5lRmFkZU91dCB9KTtcbmV4cG9ydCBjb25zdCBuZXh0U2NlbmUgPSAoKSA9PiAoeyBzdGF0ZTogR2FtZVN0YXRlcy5OZXh0U2NlbmUgfSk7XG5cbi8vIFRPRE8gTWFrZSBwcmVzZW50VGV4dCAmIHByZXNlbnRUZXh0Rm9yQ2hvaWNlIGFjY2VwdCB0aGUgdGV4dCBhcyBhbiBvcHRpb25cbmV4cG9ydCBjb25zdCBwcmVzZW50VGV4dCA9ICgpID0+ICh7IHN0YXRlOiBHYW1lU3RhdGVzLlByZXNlbnRpbmdUZXh0IH0pO1xuZXhwb3J0IGNvbnN0IHByZXNlbnRUZXh0Rm9yQ2hvaWNlID0gKCkgPT4gKHsgc3RhdGU6IEdhbWVTdGF0ZXMuUHJlc2VudGluZ1RleHRGb3JDaG9pY2UgfSk7XG5cbmV4cG9ydCBjb25zdCBwcmVzZW50Q2hvaWNlcyA9IChjaG9pY2VzKSA9PiAoe1xuICBzdGF0ZTogR2FtZVN0YXRlcy5QcmVzZW50aW5nQ2hvaWNlcyxcbiAgb3B0aW9uczogeyBjaG9pY2VzIH0sXG59KTtcbmV4cG9ydCBjb25zdCBzd2l0Y2hBY3RvckFzc2V0ID0gKGFjdG9yLCBhc3NldCkgPT4gKHtcbiAgc3RhdGU6IEdhbWVTdGF0ZXMuU3dpdGNoaW5nQWN0b3JBc3NldCxcbiAgb3B0aW9uczogeyBhY3RvciwgYXNzZXQgfSxcbn0pO1xuZXhwb3J0IGNvbnN0IHdhaXRGb3JDbGljayA9ICgpID0+ICh7IHN0YXRlOiBHYW1lU3RhdGVzLldhaXRpbmdGb3JDbGljayB9KTtcbmV4cG9ydCBjb25zdCB3YWl0Rm9yQ2hvaWNlID0gKCkgPT4gKHsgc3RhdGU6IEdhbWVTdGF0ZXMuV2FpdGluZ0ZvckNob2ljZSB9KTtcbiIsImltcG9ydCAnLi9tYWluLmNzcyc7XG5pbXBvcnQge1xuICBEb21DbGFzc2VzLCBFdmVudFR5cGVzLCBHYW1lU3RhdGVzLCBTY2VuZU5hbWVzLCBTY2VuZVBvc2l0aW9ucyxcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IGZpbmRTY2VuZSBmcm9tICcuL3NjZW5lLW1hbmFnZXInO1xuaW1wb3J0IHtcbiAgYXNzZXRzVXJsLFxuICBlbmRpbmcsXG4gIGludHJvU2NlbmVGYWRlT3V0LFxuICBpbnRyb1NjZW5lRGlzcGxheSxcbiAgbG9hZFNjZW5lLFxuICB3YWl0Rm9yQ2hvaWNlLFxuICB3YWl0Rm9yQ2xpY2ssXG59IGZyb20gJy4vaGVscGVycyc7XG5cbi8vIGluaXQgYWxsIHRoZSBnYW1lIHZhcnMgYW5kIGJ1aWxkIG91dCBET01cbmxldCBjdXJyZW50U2NlbmUgPSBmaW5kU2NlbmUoU2NlbmVOYW1lcy5JbnRybyk7XG5sZXQgcnVubmluZyA9IHRydWU7XG5sZXQgZGVsYXlDb3VudGVyID0gMDtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYW52YXMuY2xhc3NMaXN0LmFkZCgnY2FudmFzJyk7XG5cbmNvbnN0IHNjZW5lTG9hZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2NlbmVMb2FkaW5nLmNsYXNzTGlzdC5hZGQoJ3NjZW5lLWxvYWRpbmcnLCAnaGlkZGVuJyk7XG5cbmNvbnN0IHNjZW5lTG9hZGluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNjZW5lTG9hZGluZ1RleHQuY2xhc3NMaXN0LmFkZCgnc2NlbmUtbG9hZGluZy0tdGV4dCcpO1xuXG5jb25zdCBjYW52YXNPdmVybGF5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FudmFzT3ZlcmxheVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2FudmFzLW92ZXJsYXktLXdyYXBwZXInKTtcblxuY29uc3QgY2FudmFzUmlnaHRPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYW52YXNSaWdodE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnY2FudmFzLW92ZXJsYXknLCAnY2FudmFzLW92ZXJsYXktLXJpZ2h0JywgJ2ltZy1wYXJlbnQnKTtcblxuY29uc3QgY2FudmFzQ2VudGVyT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FudmFzQ2VudGVyT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdjYW52YXMtb3ZlcmxheScsICdjYW52YXMtb3ZlcmxheS0tY2VudGVyJywgJ2ltZy1wYXJlbnQnKTtcblxuY29uc3QgY2FudmFzTGVmdE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhbnZhc0xlZnRPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2NhbnZhcy1vdmVybGF5JywgJ2NhbnZhcy1vdmVybGF5LS1sZWZ0JywgJ2ltZy1wYXJlbnQnKTtcblxuY29uc3QgY2FudmFzQm90dG9tVGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhbnZhc0JvdHRvbVRleHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NhbnZhcy1ib3R0b20tdGV4dC0td3JhcHBlcicpO1xuXG5jb25zdCBjYW52YXNCb3R0b21UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYW52YXNCb3R0b21UZXh0LmNsYXNzTGlzdC5hZGQoJ2NhbnZhcy1ib3R0b20tdGV4dCcpO1xuXG5jb25zdCBjYW52YXNCb3R0b21UZXh0Q3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYW52YXNCb3R0b21UZXh0Q3Vyc29yLmNsYXNzTGlzdC5hZGQoJ2NhbnZhcy1ib3R0b20tdGV4dC1jdXJzb3InKTtcblxuY29uc3QgY2FudmFzQm90dG9tQ2hvaWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FudmFzQm90dG9tQ2hvaWNlcy5jbGFzc0xpc3QuYWRkKCdjYW52YXMtYm90dG9tLWNob2ljZXMnKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXNCb3R0b21UZXh0V3JhcHBlcik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjZW5lTG9hZGluZyk7XG5cbnNjZW5lTG9hZGluZy5hcHBlbmRDaGlsZChzY2VuZUxvYWRpbmdUZXh0KTtcblxuY2FudmFzT3ZlcmxheVdyYXBwZXIuYXBwZW5kQ2hpbGQoY2FudmFzTGVmdE92ZXJsYXkpO1xuY2FudmFzT3ZlcmxheVdyYXBwZXIuYXBwZW5kQ2hpbGQoY2FudmFzQ2VudGVyT3ZlcmxheSk7XG5jYW52YXNPdmVybGF5V3JhcHBlci5hcHBlbmRDaGlsZChjYW52YXNSaWdodE92ZXJsYXkpO1xuXG5jYW52YXMuYXBwZW5kQ2hpbGQoY2FudmFzT3ZlcmxheVdyYXBwZXIpO1xuY2FudmFzLmFwcGVuZENoaWxkKGNhbnZhc0JvdHRvbUNob2ljZXMpO1xuXG5jYW52YXNCb3R0b21UZXh0V3JhcHBlci5hcHBlbmRDaGlsZChjYW52YXNCb3R0b21UZXh0KTtcbmNhbnZhc0JvdHRvbVRleHRXcmFwcGVyLmFwcGVuZENoaWxkKGNhbnZhc0JvdHRvbVRleHRDdXJzb3IpO1xuXG5jb25zdCBpbnNlcnRTY2VuZSA9IChoZWxwZXIpID0+IHtcbiAgY3VycmVudFNjZW5lLnNjZW5lRmxvdy51bnNoaWZ0KGhlbHBlcigpKTtcbn07XG5cbi8vIG1haW4gZ2FtZSBsb2dpYyBhbmQgaGVscGVyIGZ1bmN0aW9uc1xuY29uc3QgYWR2YW5jZVNjZW5lRmxvdyA9ICgpID0+IHtcbiAgY3VycmVudFNjZW5lLnNjZW5lRmxvdy5zaGlmdCgpO1xufTtcblxuY29uc3QgdG9nZ2xlQ3Vyc29yID0gKGhpZGUpID0+IHtcbiAgaWYgKGhpZGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChoaWRlKSB7XG4gICAgICBjYW52YXNCb3R0b21UZXh0Q3Vyc29yLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW52YXNCb3R0b21UZXh0Q3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGRlbGF5Q291bnRlciArPSAxO1xuXG4gIGlmIChkZWxheUNvdW50ZXIgPj0gMzApIHtcbiAgICBjYW52YXNCb3R0b21UZXh0Q3Vyc29yLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXG4gICAgZGVsYXlDb3VudGVyID0gMDtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlVGV4dCA9ICgpID0+IHtcbiAgY2FudmFzQm90dG9tVGV4dC5pbm5lckhUTUwgKz0gY3VycmVudFNjZW5lLnRleHRbMF1bMF07XG5cbiAgY3VycmVudFNjZW5lLnRleHRbMF0gPSBjdXJyZW50U2NlbmUudGV4dFswXS5zdWJzdHIoMSwgY3VycmVudFNjZW5lLnRleHRbMF0ubGVuZ3RoIC0gMSk7XG59O1xuXG5jb25zdCBjbGVhclRleHQgPSAoKSA9PiB7XG4gIGNhbnZhc0JvdHRvbVRleHQuaW5uZXJIVE1MID0gJyc7XG59O1xuXG5jb25zdCBlbnRlckFjdG9yID0gKGFjdG9yKSA9PiB7XG4gIHN3aXRjaCAoYWN0b3IucG9zaXRpb24pIHtcbiAgICBjYXNlIFNjZW5lUG9zaXRpb25zLkxlZnQ6XG4gICAgICBjYW52YXNMZWZ0T3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBhc3NldHNVcmwoYWN0b3IuYXNzZXQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNjZW5lUG9zaXRpb25zLkNlbnRlcjpcbiAgICAgIGNhbnZhc0NlbnRlck92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYXNzZXRzVXJsKGFjdG9yLmFzc2V0KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTY2VuZVBvc2l0aW9ucy5SaWdodDpcbiAgICAgIGNhbnZhc1JpZ2h0T3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBhc3NldHNVcmwoYWN0b3IuYXNzZXQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgU2NlbmVQb3NpdGlvbiBpbiBJTnRyb2R1Y2VBY3RvciBTdGF0ZTogJHthY3Rvci5wb3NpdGlvbn1gKTtcbiAgfVxufTtcblxuY29uc3QgZXhpdEFjdG9yID0gKGFjdG9yKSA9PiB7XG4gIHN3aXRjaCAoYWN0b3IucG9zaXRpb24pIHtcbiAgICBjYXNlIFNjZW5lUG9zaXRpb25zLkxlZnQ6XG4gICAgICBjYW52YXNMZWZ0T3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBudWxsO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNjZW5lUG9zaXRpb25zLkNlbnRlcjpcbiAgICAgIGNhbnZhc0NlbnRlck92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTY2VuZVBvc2l0aW9ucy5SaWdodDpcbiAgICAgIGNhbnZhc1JpZ2h0T3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBudWxsO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgU2NlbmVQb3NpdGlvbiBpbiBFeGl0QWN0b3IgU3RhdGU6ICR7YWN0b3IucG9zaXRpb259YCk7XG4gIH1cbn07XG5cbmNvbnN0IGxvYWRpbmdTY2VuZVN0YXRlID0gKCkgPT4ge1xuICBpZiAoY3VycmVudFNjZW5lLmJhY2tncm91bmQpIHtcbiAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYXNzZXRzVXJsKGN1cnJlbnRTY2VuZS5iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gIGlmIChjdXJyZW50U2NlbmUuYWN0b3JzICYmIGN1cnJlbnRTY2VuZS5hY3RvcnMubGVuZ3RoKSB7XG4gICAgY3VycmVudFNjZW5lLmFjdG9ycy5mb3JFYWNoKChhY3RvcikgPT4ge1xuICAgICAgaWYgKGFjdG9yLmFwcGVhcnNBdFN0YXJ0KSB7XG4gICAgICAgIGVudGVyQWN0b3IoYWN0b3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWR2YW5jZVNjZW5lRmxvdygpO1xufTtcblxuY29uc3QgcHJlc2VudGluZ1RleHRTdGF0ZSA9IChhZHZhbmNlVG9XYWl0aW5nRm9yQ2xpY2spID0+IHtcbiAgaWYgKGN1cnJlbnRTY2VuZS50ZXh0ICYmIGN1cnJlbnRTY2VuZS50ZXh0WzBdICYmIGN1cnJlbnRTY2VuZS50ZXh0WzBdLmxlbmd0aCkge1xuICAgIHVwZGF0ZVRleHQoKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50U2NlbmUudGV4dC5zaGlmdCgpO1xuICAgIGFkdmFuY2VTY2VuZUZsb3coKTtcblxuICAgIGlmIChhZHZhbmNlVG9XYWl0aW5nRm9yQ2xpY2spIHtcbiAgICAgIGluc2VydFNjZW5lKHdhaXRGb3JDbGljayk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCB3YWl0aW5nRm9yQ2xpY2tTdGF0ZSA9IChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudHlwZSAmJiBldmVudC50eXBlID09PSBFdmVudFR5cGVzLkNsaWNrKSB7XG4gICAgdG9nZ2xlQ3Vyc29yKHRydWUpO1xuICAgIGNsZWFyVGV4dCgpO1xuXG4gICAgYWR2YW5jZVNjZW5lRmxvdygpO1xuICAgIGRlbGF5Q291bnRlciA9IDA7XG4gIH1cblxuICB0b2dnbGVDdXJzb3IoKTtcbn07XG5cbmNvbnN0IGNsZWFyQ3VycmVudFNjZW5lID0gKCkgPT4ge1xuICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gbnVsbDtcbiAgY2FudmFzUmlnaHRPdmVybGF5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG51bGw7XG4gIGNhbnZhc0NlbnRlck92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gbnVsbDtcbiAgY2FudmFzTGVmdE92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gbnVsbDtcblxuICBjbGVhclRleHQoKTtcbn07XG5cbmNvbnN0IG5leHRTY2VuZVN0YXRlID0gKG5hbWUpID0+IHtcbiAgY3VycmVudFNjZW5lID0gZmluZFNjZW5lKG5hbWUpO1xufTtcblxuY29uc3QgZmluZEFjdG9yRm9yQ3VycmVudEZsb3cgPSAoY3VycmVudEZsb3cpID0+IHtcbiAgY29uc3QgbmFtZSA9IGN1cnJlbnRGbG93Lm9wdGlvbnMuYWN0b3I7XG5cbiAgcmV0dXJuIGN1cnJlbnRTY2VuZS5hY3RvcnMuZmluZCgoYWN0b3IpID0+IGFjdG9yLm5hbWUgPT09IG5hbWUpO1xufTtcblxuY29uc3QgcHJlc2VudGluZ0Nob2ljZXNTdGF0ZSA9IChjdXJyZW50RmxvdykgPT4ge1xuICBjb25zdCB7IGNob2ljZXMgfSA9IGN1cnJlbnRGbG93Lm9wdGlvbnM7XG5cbiAgY2hvaWNlcy5mb3JFYWNoKChjaG9pY2UpID0+IHtcbiAgICBjb25zdCBjaG9pY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaG9pY2VEaXYuaW5uZXJIVE1MID0gY2hvaWNlO1xuICAgIGNob2ljZURpdi5jbGFzc0xpc3QuYWRkKERvbUNsYXNzZXMuQ2FudmFzQm90dG9tQ2hvaWNlc09wdGlvbik7XG5cbiAgICBjYW52YXNCb3R0b21DaG9pY2VzLmFwcGVuZENoaWxkKGNob2ljZURpdik7XG4gIH0pO1xufTtcblxuY29uc3QgY2xlYXJDaG9pY2VzID0gKCkgPT4ge1xuICBjYW52YXNCb3R0b21DaG9pY2VzLmlubmVySFRNTCA9IG51bGw7XG59O1xuXG5jb25zdCBzd2l0Y2hBY3RvckFzc2V0U3RhdGUgPSAoY3VycmVudEZsb3cpID0+IHtcbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjdXJyZW50RmxvdztcblxuICBjb25zdCBhY3RvciA9IGZpbmRBY3RvckZvckN1cnJlbnRGbG93KGN1cnJlbnRGbG93KTtcbiAgYWN0b3IuYXNzZXQgPSBvcHRpb25zLmFzc2V0O1xuXG4gIGVudGVyQWN0b3IoYWN0b3IpO1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZUludHJvU2NlbmUgPSAoKSA9PiB7XG4gIHNjZW5lTG9hZGluZ1RleHQuaW5uZXJIVE1MID0gY3VycmVudFNjZW5lLnRpdGxlO1xuICBzY2VuZUxvYWRpbmcuc3R5bGUub3BhY2l0eSA9IDE7XG4gIHNjZW5lTG9hZGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn07XG5cbmNvbnN0IGNsZWFudXBJbnRyb1NjZW5lID0gKCkgPT4ge1xuICBzY2VuZUxvYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIHNjZW5lTG9hZGluZ1RleHQuaW5uZXJIVE1MID0gbnVsbDtcblxuICBkZWxheUNvdW50ZXIgPSAwO1xuXG4gIGFkdmFuY2VTY2VuZUZsb3coKTtcbn07XG5cbmNvbnN0IGludHJvU2NlbmVGYWRlT3V0U3RhdGUgPSAoKSA9PiB7XG4gIHNjZW5lTG9hZGluZy5zdHlsZS5vcGFjaXR5ID0gMSAtIGRlbGF5Q291bnRlcjtcblxuICBkZWxheUNvdW50ZXIgKz0gMC4wMTtcblxuICBpZiAoZGVsYXlDb3VudGVyID4gMSkge1xuICAgIGNsZWFudXBJbnRyb1NjZW5lKCk7XG4gIH1cbn07XG5cbmNvbnN0IGludHJvU2NlbmVTdGF0ZSA9ICgpID0+IHtcbiAgZGVsYXlDb3VudGVyICs9IDE7XG5cbiAgaWYgKGRlbGF5Q291bnRlciA+IDI0MCkge1xuICAgIGFkdmFuY2VTY2VuZUZsb3coKTtcblxuICAgIGRlbGF5Q291bnRlciA9IDA7XG5cbiAgICBpbnNlcnRTY2VuZShpbnRyb1NjZW5lRmFkZU91dCk7XG4gICAgaW5zZXJ0U2NlbmUobG9hZFNjZW5lKTtcbiAgfVxufTtcblxuY29uc3QgZ2FtZVVwZGF0ZSA9IChldmVudCkgPT4ge1xuICBjb25zdCBbY3VycmVudEZsb3ddID0gY3VycmVudFNjZW5lLnNjZW5lRmxvdztcbiAgc3dpdGNoIChjdXJyZW50Rmxvdy5zdGF0ZSkge1xuICAgIGNhc2UgR2FtZVN0YXRlcy5Mb2FkU2NlbmU6XG4gICAgICBsb2FkaW5nU2NlbmVTdGF0ZSgpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEdhbWVTdGF0ZXMuUHJlc2VudGluZ1RleHRGb3JDaG9pY2U6XG4gICAgY2FzZSBHYW1lU3RhdGVzLlByZXNlbnRpbmdUZXh0OlxuICAgICAgcHJlc2VudGluZ1RleHRTdGF0ZShjdXJyZW50Rmxvdy5zdGF0ZSA9PT0gR2FtZVN0YXRlcy5QcmVzZW50aW5nVGV4dCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgR2FtZVN0YXRlcy5XYWl0aW5nRm9yQ2xpY2s6XG4gICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB3YWl0aW5nRm9yQ2xpY2tTdGF0ZShldmVudCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgR2FtZVN0YXRlcy5OZXh0U2NlbmU6XG4gICAgICBpZiAoIWN1cnJlbnRTY2VuZS5uZXh0U2NlbmUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjdXJyZW50U2NlbmUgaGFzIG5vIG5leHRTY2VuZSB0byBtb3ZlIHRvLicpO1xuICAgICAgfVxuXG4gICAgICBjbGVhckN1cnJlbnRTY2VuZSgpO1xuICAgICAgbmV4dFNjZW5lU3RhdGUoY3VycmVudFNjZW5lLm5leHRTY2VuZSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgR2FtZVN0YXRlcy5FbnRlckFjdG9yOlxuICAgICAgZW50ZXJBY3RvcihmaW5kQWN0b3JGb3JDdXJyZW50RmxvdyhjdXJyZW50RmxvdykpO1xuXG4gICAgICBhZHZhbmNlU2NlbmVGbG93KCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgR2FtZVN0YXRlcy5FeGl0QWN0b3I6XG4gICAgICBleGl0QWN0b3IoZmluZEFjdG9yRm9yQ3VycmVudEZsb3coY3VycmVudEZsb3cpKTtcblxuICAgICAgYWR2YW5jZVNjZW5lRmxvdygpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEdhbWVTdGF0ZXMuUHJlc2VudGluZ0Nob2ljZXM6XG4gICAgICBpZiAoXG4gICAgICAgICFjdXJyZW50Rmxvdy5vcHRpb25zXG4gICAgICAgIHx8ICFjdXJyZW50Rmxvdy5vcHRpb25zLmNob2ljZXNcbiAgICAgICAgfHwgIWN1cnJlbnRGbG93Lm9wdGlvbnMuY2hvaWNlcy5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzdGF0ZSBTZXR1cENob2ljZXMgY3VycmVudFNjZW5lIGRvZXNuJ3QgaGF2ZSBjaG9pY2VzXCIpO1xuICAgICAgfVxuXG4gICAgICBwcmVzZW50aW5nQ2hvaWNlc1N0YXRlKGN1cnJlbnRGbG93KTtcbiAgICAgIGFkdmFuY2VTY2VuZUZsb3coKTtcbiAgICAgIGluc2VydFNjZW5lKHdhaXRGb3JDaG9pY2UpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEdhbWVTdGF0ZXMuV2FpdGluZ0ZvckNob2ljZTpcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlICYmIGV2ZW50LnR5cGUgPT09IEV2ZW50VHlwZXMuQ2xpY2spIHtcbiAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0ICYmIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoRG9tQ2xhc3Nlcy5DYW52YXNCb3R0b21DaG9pY2VzT3B0aW9uKSkge1xuICAgICAgICAgIGNsZWFyVGV4dCgpO1xuICAgICAgICAgIGNsZWFyQ2hvaWNlcygpO1xuICAgICAgICAgIGFkdmFuY2VTY2VuZUZsb3coKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEdhbWVTdGF0ZXMuU3dpdGNoaW5nQWN0b3JBc3NldDpcbiAgICAgIHN3aXRjaEFjdG9yQXNzZXRTdGF0ZShjdXJyZW50Rmxvdyk7XG4gICAgICBhZHZhbmNlU2NlbmVGbG93KCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgR2FtZVN0YXRlcy5JbnRyb1NjZW5lOlxuICAgICAgaW5pdGlhbGl6ZUludHJvU2NlbmUoKTtcblxuICAgICAgYWR2YW5jZVNjZW5lRmxvdygpO1xuICAgICAgaW5zZXJ0U2NlbmUoaW50cm9TY2VuZURpc3BsYXkpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEdhbWVTdGF0ZXMuSW50cm9EZWxheWVkU2NlbmU6XG4gICAgICBpbml0aWFsaXplSW50cm9TY2VuZSgpO1xuXG4gICAgICBhZHZhbmNlU2NlbmVGbG93KCk7XG4gICAgICBpbnNlcnRTY2VuZSh3YWl0Rm9yQ2xpY2spO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEdhbWVTdGF0ZXMuSW50cm9GaW5hbFNjZW5lOlxuICAgICAgaW5pdGlhbGl6ZUludHJvU2NlbmUoKTtcblxuICAgICAgYWR2YW5jZVNjZW5lRmxvdygpO1xuICAgICAgaW5zZXJ0U2NlbmUoZW5kaW5nKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBHYW1lU3RhdGVzLkludHJvU2NlbmVEaXNwbGF5OlxuICAgICAgaW50cm9TY2VuZVN0YXRlKCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgR2FtZVN0YXRlcy5JbnRyb1NjZW5lRmFkZU91dDpcbiAgICAgIGludHJvU2NlbmVGYWRlT3V0U3RhdGUoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBHYW1lU3RhdGVzLkVuZGluZzpcbiAgICAgIC8vIERvIG5vdGhpbmcga2VlcCBzaG93aW5nIHRoZSBlbmRpbmcgc2NyZWVuXG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBydW5uaW5nID0gZmFsc2U7XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50U2NlbmUpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBjdXJyZW50U2NlbmUgY2FzZSBoaXQgdGhhdCB3YXNuJ3QgZXhwZWN0ZWQ6ICR7Y3VycmVudFNjZW5lLnNjZW5lRmxvd1swXS5zdGF0ZX1gKTtcbiAgfVxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lVXBkYXRlKTtcblxuLy8gaW5pdCBnYW1lbG9vcCB2YXJzXG5jb25zdCBmcHMgPSA2MDtcbmNvbnN0IHRpbWVQZXJUaWNrID0gMTAwMCAvIGZwcztcbmxldCBkZWx0YSA9IDA7XG5sZXQgZGVsdGFUaW1lID0gMDtcbmxldCBub3cgPSBEYXRlLm5vdygpO1xubGV0IGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcbmxldCB0aW1lciA9IDA7XG5cbmNvbnN0IGdhbWVDbGVhbnVwID0gKCkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLmxvZygnR2FtZSBEb25lJyk7XG59O1xuXG5jb25zdCBsb29wID0gKCkgPT4ge1xuICBpZiAocnVubmluZykge1xuICAgIG5vdyA9IERhdGUubm93KCk7XG4gICAgZGVsdGEgPSBub3cgLSBsYXN0VGltZTtcbiAgICB0aW1lciArPSBkZWx0YTtcbiAgICBsYXN0VGltZSA9IG5vdztcblxuICAgIGlmICh0aW1lciA+PSB0aW1lUGVyVGljaykge1xuICAgICAgZGVsdGFUaW1lID0gdGltZXIgLyAxMDAwO1xuICAgICAgZ2FtZVVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgdGltZXIgPSAwO1xuICAgIH1cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBnYW1lQ2xlYW51cCgpO1xufTtcblxubG9vcCgpO1xuIiwiaW1wb3J0IHsgU2NlbmVOYW1lcyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IE5hc2h2aWxsZUZhaXJHcm91bmRzIGZyb20gJy4vc2NlbmVzL25hc2h2aWxsZS1mYWlyZ3JvdW5kcyc7XG5pbXBvcnQgTnNzTHVuY2hSb29tU2NlbmUgZnJvbSAnLi9zY2VuZXMvbnNzLWx1bmNocm9vbSc7XG5pbXBvcnQgTnNzUGFya2luZ0xvdFNjZW5lIGZyb20gJy4vc2NlbmVzL25zcy1wYXJraW5nLWxvdCc7XG5pbXBvcnQgS29pU3VzaGlPdXRzaWRlIGZyb20gJy4vc2NlbmVzL25hc2h2aWxsZS1rb2ktb3V0c2lkZSc7XG5pbXBvcnQgS29pU3VzaGlJbnNpZGUgZnJvbSAnLi9zY2VuZXMvbmFzaHZpbGxlLWtvaS1pbnNpZGUnO1xuaW1wb3J0IEVuZGluZyBmcm9tICcuL3NjZW5lcy9lbmRpbmcnO1xuaW1wb3J0IEludHJvIGZyb20gJy4vc2NlbmVzL2ludHJvJztcblxuY29uc3Qgc2NlbmVzID0ge1xuICBbU2NlbmVOYW1lcy5FbmRpbmddOiBFbmRpbmcsXG4gIFtTY2VuZU5hbWVzLkludHJvXTogSW50cm8sXG4gIFtTY2VuZU5hbWVzLk5zc0x1bmNoUm9vbV06IE5zc0x1bmNoUm9vbVNjZW5lLFxuICBbU2NlbmVOYW1lcy5PbGROc3NQYXJraW5nTG90XTogTnNzUGFya2luZ0xvdFNjZW5lLFxuICBbU2NlbmVOYW1lcy5OYXNodmlsbGVGYWlyR3JvdW5kc106IE5hc2h2aWxsZUZhaXJHcm91bmRzLFxuICBbU2NlbmVOYW1lcy5Lb2lTdXNoaU91dHNpZGVdOiBLb2lTdXNoaU91dHNpZGUsXG4gIFtTY2VuZU5hbWVzLktvaVN1c2hpSW5zaWRlXTogS29pU3VzaGlJbnNpZGUsXG59O1xuXG5jb25zdCBmaW5kU2NlbmUgPSAobmFtZSkgPT4ge1xuICBpZiAoIXNjZW5lc1tuYW1lXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm8gc2NlbmUgd2l0aCBuYW1lOiAke25hbWV9IGV4aXN0cyFgKTtcbiAgfVxuXG4gIHJldHVybiBzY2VuZXNbbmFtZV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kU2NlbmU7XG4iLCJpbXBvcnQgeyBpbnRyb1NjZW5lIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdUIEggRSAgIEUgTiBEICh0byBiZSBjb250aW51ZWQuLi4pJyxcbiAgc2NlbmVGbG93OiBbXG4gICAgaW50cm9TY2VuZSgpLFxuICBdLFxufTtcbiIsImltcG9ydCB7IFNjZW5lTmFtZXMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgaW50cm9EZWxheWVkU2NlbmUsIG5leHRTY2VuZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnVi1EYXkgMjAyMSBUaGUgR2FtZSFcXG5cXG5DbGljayBhbnl3aGVyZSB0byBiZWdpbi4nLFxuICBzY2VuZUZsb3c6IFtcbiAgICBpbnRyb0RlbGF5ZWRTY2VuZSgpLFxuICAgIG5leHRTY2VuZSgpLFxuICBdLFxuICBuZXh0U2NlbmU6IFNjZW5lTmFtZXMuTnNzTHVuY2hSb29tLFxufTtcbiIsImltcG9ydCB7XG4gIEFjdG9yQXNzZXRzLFxuICBBY3RvcnMsXG4gIEJhY2tncm91bmRBc3NldHMsXG4gIFNjZW5lTmFtZXMsXG4gIFNjZW5lUG9zaXRpb25zLFxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgZW50ZXJBY3RvcixcbiAgZXhpdEFjdG9yLFxuICBpbnRyb1NjZW5lLFxuICBuZXh0U2NlbmUsXG4gIHByZXNlbnRDaG9pY2VzLFxuICBwcmVzZW50VGV4dCxcbiAgcHJlc2VudFRleHRGb3JDaG9pY2UsXG4gIHN3aXRjaEFjdG9yQXNzZXQsXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJhY2tncm91bmQ6IEJhY2tncm91bmRBc3NldHMuTmFzaHZpbGxlRmFpckdyb3VuZHMsXG4gIHRpdGxlOiAnTmFzaHZpbGxlIFN0YXRlIEZhaXJncm91bmRzJyxcbiAgYWN0b3JzOiBbXG4gICAge1xuICAgICAgbmFtZTogQWN0b3JzLk1hdHQsXG4gICAgICBwb3NpdGlvbjogU2NlbmVQb3NpdGlvbnMuQ2VudGVyLFxuICAgICAgYXNzZXQ6IEFjdG9yQXNzZXRzLk1hdHRXYXZlLFxuICAgICAgYXBwZWFyc0F0U3RhcnQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBBY3RvcnMuQ2hhcmxpZSxcbiAgICAgIHBvc2l0aW9uOiBTY2VuZVBvc2l0aW9ucy5MZWZ0LFxuICAgICAgYXNzZXQ6IEFjdG9yQXNzZXRzLkNoYXJsaWUsXG4gICAgICBhcHBlYXJzQXRTdGFydDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBBY3RvcnMuU3RlbGxhLFxuICAgICAgcG9zaXRpb246IFNjZW5lUG9zaXRpb25zLlJpZ2h0LFxuICAgICAgYXNzZXQ6IEFjdG9yQXNzZXRzLlN0ZWxsYSxcbiAgICAgIGFwcGVhcnNBdFN0YXJ0OiBmYWxzZSxcbiAgICB9LFxuICBdLFxuICB0ZXh0OiBbXG4gICAgJ01hdHQ6IEhlcmUgd2UgYXJlIScsXG4gICAgJ01hdHQ6IEhleSBsb29rIENoYXJsaWUgZm91bmQgYSBmcmllbmQhJyxcbiAgICAnQ2hhcmxpZTogQk9SSyEgOkQnLFxuICAgICc/Pz8/OiAqVE9OR1VFIFdISVAqIDopJyxcbiAgICAnTWF0dDogSGVsbG8sIGdpcmwhIFdobyBhcmUgeW91Pz8nLFxuICAgICc/Pz8/OiBNeSBuYW1lIGlzIFN0ZWxsYS4nLFxuICAgICdTdGVsbGE6ICpzY2FtcGVycyBvZmYqJyxcbiAgICAnTWF0dDogT2ggTXkhIEJ5ZSBZaWRkbGUgR2lybCEnLFxuICAgICdNYXR0OiBXaGF0IGEgY3V0ZSBwb29wZXIhIEkgaG9wZSB3ZSBtZWV0IGhlciBhZ2FpbiEnLFxuICAgICdNYXR0OiBTbywgdGVsbCBtZSBhIGJpdCBtb3JlIGFib3V0IHlvdXJzZWxmJyxcbiAgICAnTWF0dDogVmVyeSBjb29sLiBJIGJlbGlldmUgaXQhIFlvdSBhcmUgd2F5IGNvb2xlciB0aGFuIEkgcmVhbGl6ZWQgYXQgZmlyc3QgOiknLFxuICAgICdNYXR0OiBXaGlsZSBJIHdhcyBhIG11c2ljaWFuIGZvciBhYm91dCAxNSB5ZWFycywgSVxcJ20gbG9va2luZyBmb3J3YXJkIHRvIGdldHRpbmcgYXdheSBmcm9tIHRoYXQgd2hvbGUgc2NlbmUgZm9yIGEgZ29vZCB3aGlsZS4nLFxuICAgICdNYXR0OiBHbGFkIHRvIGJlIG1ha2luZyBhIG5ldyBmcmllbmQgKGFuZCBhIHJlYWxseSBjdXRlIG9uZSBhdCB0aGF0KS4nLFxuICAgICdNYXR0OiBIb3cgYWJvdXQgd2UgZ2V0IGRpbm5lciB0aGlzIHdlZWtlbmQ/JyxcbiAgXSxcbiAgc2NlbmVGbG93OiBbXG4gICAgaW50cm9TY2VuZSgpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgc3dpdGNoQWN0b3JBc3NldChBY3RvcnMuTWF0dCwgQWN0b3JBc3NldHMuTWF0dFBvaW50KSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIGVudGVyQWN0b3IoQWN0b3JzLkNoYXJsaWUpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgZW50ZXJBY3RvcihBY3RvcnMuU3RlbGxhKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHN3aXRjaEFjdG9yQXNzZXQoQWN0b3JzLk1hdHQsIEFjdG9yQXNzZXRzLk1hdHRUaGluayksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBzd2l0Y2hBY3RvckFzc2V0KEFjdG9ycy5NYXR0LCBBY3RvckFzc2V0cy5NYXR0U3VycHJpc2UpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBleGl0QWN0b3IoQWN0b3JzLlN0ZWxsYSksXG4gICAgc3dpdGNoQWN0b3JBc3NldChBY3RvcnMuTWF0dCwgQWN0b3JBc3NldHMuTWF0dFdhdmUpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBzd2l0Y2hBY3RvckFzc2V0KEFjdG9ycy5NYXR0LCBBY3RvckFzc2V0cy5NYXR0VGhpbmspLFxuICAgIHByZXNlbnRUZXh0Rm9yQ2hvaWNlKCksXG4gICAgcHJlc2VudENob2ljZXMoWydJXFwnbSBhbiBhbWF6aW5nIG11c2ljaWFuIScsICdJXFwnbSBhbiBhbWF6aW5nIG1vbSB0byBDaGFybGllIScsICdJXFwnbSBmcm9tIHRoZSBhbWF6aW5nIFBhY2lmaWMgTm9ydGh3ZXN0IScsICdJIGFtIGFuIGFtYXppbmcgcGxhbnQgbWFtYSEnLCAnSVxcJ20ganVzdCBkYW1uIGFtYXppbmchIDpEJywgJ0FsbCBvZiB0aGUgYWJvdmUhIChjb3JyZWN0IGNob2ljZSknXSksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHN3aXRjaEFjdG9yQXNzZXQoQWN0b3JzLk1hdHQsIEFjdG9yQXNzZXRzLk1hdHRTbWlsZSksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIG5leHRTY2VuZSgpLFxuICBdLFxuICBuZXh0U2NlbmU6IFNjZW5lTmFtZXMuS29pU3VzaGlPdXRzaWRlLFxufTtcbiIsImltcG9ydCB7XG4gIEFjdG9yQXNzZXRzLFxuICBBY3RvcnMsXG4gIEJhY2tncm91bmRBc3NldHMsXG4gIFNjZW5lTmFtZXMsXG4gIFNjZW5lUG9zaXRpb25zLFxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgZW50ZXJBY3RvcixcbiAgZXhpdEFjdG9yLFxuICBpbnRyb1NjZW5lLFxuICBuZXh0U2NlbmUsXG4gIHByZXNlbnRUZXh0LFxuICBzd2l0Y2hBY3RvckFzc2V0LFxufSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kQXNzZXRzLk5hc2h2aWxsZUtvaVN1c2hpSW5zaWRlLFxuICB0aXRsZTogJ0tvaSBTdXNoaSAoaW5zaWRlKScsXG4gIGFjdG9yczogW1xuICAgIHtcbiAgICAgIG5hbWU6IEFjdG9ycy5NYXR0LFxuICAgICAgcG9zaXRpb246IFNjZW5lUG9zaXRpb25zLkNlbnRlcixcbiAgICAgIGFzc2V0OiBBY3RvckFzc2V0cy5NYXR0U21pbGUsXG4gICAgICBhcHBlYXJzQXRTdGFydDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBBY3RvcnMuTW9zRGVmLFxuICAgICAgcG9zaXRpb246IFNjZW5lUG9zaXRpb25zLlJpZ2h0LFxuICAgICAgYXNzZXQ6IEFjdG9yQXNzZXRzLk1vc0RlZixcbiAgICAgIGFwcGVhcnNBdFN0YXJ0OiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogQWN0b3JzLkNoYXJsaWUsXG4gICAgICBwb3NpdGlvbjogU2NlbmVQb3NpdGlvbnMuTGVmdCxcbiAgICAgIGFzc2V0OiBBY3RvckFzc2V0cy5DaGFybGllLFxuICAgICAgYXBwZWFyc0F0U3RhcnQ6IGZhbHNlLFxuICAgIH0sXG4gIF0sXG4gIHRleHQ6IFtcbiAgICAnSG9zdDogKmNoZWNrcyBwaG9uZSonLFxuICAgICdIb3N0OiAqU0lHSConLFxuICAgICdIb3N0OiAqRXh1ZGluZyB0ZWVuYWdlIGFuZ3N0KiBSaWdodCB0aGlzIHdheS4uLiAoSSBoYXRlIG15IGxpZmUpJyxcbiAgICAnKFNvbWV0aW1lIGxhdGVyIGFmdGVyIHRoZSBmb29kIGhhcyBiZWVuIHNlcnZlZC4uLiknLFxuICAgICdNYXR0OiBIaS4gOiknLFxuICAgICdNYXR0OiBJIGhhdmUgcmVhbGx5IGVuam95ZWQgaGFuZ2luZyBvdXQgdGhlIHBhc3QgY291cGxlIG9mIHdlZWtzIGZvciBsdW5jaCBhbmQgZXZlcnl0aGluZy4nLFxuICAgICdNYXR0OiBBbmQgeW91ciBib3kgQ2hhcmxpZSBpcyB0aGUgbW9zdCBjdXRlc3Qgb2YgYWxsIGJveXMgOkQnLFxuICAgICdNYXR0OiBJIGZlZWwgYSByZWFsIGNvbm5lY3Rpb24gZm9ybWluZy4gWW91IHJlYWxseSBhcmUgYSBzcGVjdGFjdWxhciB3b21hbiwgYW5kIEkgY2FuXFwndCB3YWl0IHRvIGxlYXJuIG1vcmUgYW5kIHNoYXJlIG1vcmUgYWJvdXQgbXlzZWxmIHdpdGggeW91IDopJyxcbiAgICAnTWF0dDogKlJhaXNlcyBnbGFzcyogVG8gdXMhIEkgZm9yc2VlIGEgd29uZGVyZnVsIGZ1dHVyZSEnLFxuICAgICcoQ2hlZXJzISEpIDwzJyxcbiAgICAnKkJPUksqIChDaGFybGllIHNheXMgXCJDaGVlcnMgYW5kIEkgYWdyZWUgaW4gZG9nZ28gc3BlYWtcIiEpJyxcbiAgXSxcbiAgc2NlbmVGbG93OiBbXG4gICAgaW50cm9TY2VuZSgpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIGV4aXRBY3RvcihBY3RvcnMuTW9zRGVmKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIGVudGVyQWN0b3IoQWN0b3JzLk1hdHQpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgc3dpdGNoQWN0b3JBc3NldChBY3RvcnMuTWF0dCwgQWN0b3JBc3NldHMuTWF0dExvdmUpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHN3aXRjaEFjdG9yQXNzZXQoQWN0b3JzLk1hdHQsIEFjdG9yQXNzZXRzLk1hdHRIdWcpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBlbnRlckFjdG9yKEFjdG9ycy5DaGFybGllKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIG5leHRTY2VuZSgpLFxuICBdLFxuICBuZXh0U2NlbmU6IFNjZW5lTmFtZXMuRW5kaW5nLFxufTtcbiIsImltcG9ydCB7XG4gIEFjdG9yQXNzZXRzLFxuICBBY3RvcnMsXG4gIEJhY2tncm91bmRBc3NldHMsXG4gIFNjZW5lTmFtZXMsXG4gIFNjZW5lUG9zaXRpb25zLFxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgZW50ZXJBY3RvcixcbiAgZXhpdEFjdG9yLFxuICBpbnRyb1NjZW5lLFxuICBuZXh0U2NlbmUsXG4gIHByZXNlbnRDaG9pY2VzLFxuICBwcmVzZW50VGV4dCxcbiAgcHJlc2VudFRleHRGb3JDaG9pY2UsXG4gIHN3aXRjaEFjdG9yQXNzZXQsXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJhY2tncm91bmQ6IEJhY2tncm91bmRBc3NldHMuTmFzaHZpbGxlS29pU3VzaGlPdXRzaWRlLFxuICB0aXRsZTogJ0tvaSBTdXNoaSAob3V0c2lkZSknLFxuICBhY3RvcnM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBBY3RvcnMuTWF0dCxcbiAgICAgIHBvc2l0aW9uOiBTY2VuZVBvc2l0aW9ucy5DZW50ZXIsXG4gICAgICBhc3NldDogQWN0b3JBc3NldHMuTWF0dFNtaWxlLFxuICAgICAgYXBwZWFyc0F0U3RhcnQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBBY3RvcnMuTW9zRGVmLFxuICAgICAgcG9zaXRpb246IFNjZW5lUG9zaXRpb25zLkxlZnQsXG4gICAgICBhc3NldDogQWN0b3JBc3NldHMuTW9zRGVmLFxuICAgICAgYXBwZWFyc0F0U3RhcnQ6IGZhbHNlLFxuICAgIH0sXG4gIF0sXG4gIHRleHQ6IFtcbiAgICAnTWF0dDogSGkhIFRoYW5rcyBmb3IgbWVldGluZyB1cCB3aXRoIG1lLicsXG4gICAgJ01hdHQ6IElcXCd2ZSBoZWFyZCB0aGlzIHBsYWNlIGlzIHByZXR0eSBnb29kLicsXG4gICAgJ01hdHQ6IEhvdyBsb25nIGhhdmUgeW91IGxpdmVkIGFyb3VuZCBoZXJlPz8nLFxuICAgICdNYXR0OiBZb3UgY2FuIHNheSB0aGF0IGFnYWluLicsXG4gICAgJ01hdHQ6IFdoZXJlIHdvdWxkIHlvdSBnbyBpZiB5b3UgY291bGQgbGl2ZSBhbnl3aGVyZT8/JyxcbiAgICAnTWF0dDogVmVyeSBDb29sLiBJIGNhbiBzZWUgeW91IGhhdmUgdGhhdCBhZHZlbnR1cmVyXFwncyBzcGlyaXQgOiknLFxuICAgICdIb3N0OiBZb3VyIHRhYmxlIGlzIHJlYWR5Li4uICpTSUdIKicsXG4gICAgJ01hdHQ6IEhleSB0aGF0IGhvc3Qga2luZGEgbG9va3MgbGlrZS4uLicsXG4gIF0sXG4gIHNjZW5lRmxvdzogW1xuICAgIGludHJvU2NlbmUoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHN3aXRjaEFjdG9yQXNzZXQoQWN0b3JzLk1hdHQsIEFjdG9yQXNzZXRzLk1hdHRUaGluayksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHByZXNlbnRDaG9pY2VzKFsnSSBjYW5cXCd0IGV2ZW4gcmVtZW1iZXIgbm93Li4nLCAnRmVlbHMgbGlrZSBhIGxpZmV0aW1lIScsICdUb28gbG9uZyEnXSksXG4gICAgc3dpdGNoQWN0b3JBc3NldChBY3RvcnMuTWF0dCwgQWN0b3JBc3NldHMuTWF0dFBvaW50KSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHByZXNlbnRUZXh0Rm9yQ2hvaWNlKCksXG4gICAgcHJlc2VudENob2ljZXMoWydTZWF0dGxlJywgJ0NhbGlmb3JuaWEnLCAnQ29sb3JhbmRvJywgJ0Fub3RoZXIgQ291bnRyeScsICdWYW4gbGlmZSEnLCAnTm90IDEwMCUgc3VyZSwgYnV0IEkgaGF2ZSBzb21lIHRob3VnaHRzIGFib3V0IGl0Li4uJ10pLFxuICAgIHN3aXRjaEFjdG9yQXNzZXQoQWN0b3JzLk1hdHQsIEFjdG9yQXNzZXRzLk1hdHRIdWcpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgZW50ZXJBY3RvcihBY3RvcnMuTW9zRGVmKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIGV4aXRBY3RvcihBY3RvcnMuTW9zRGVmKSxcbiAgICBzd2l0Y2hBY3RvckFzc2V0KEFjdG9ycy5NYXR0LCBBY3RvckFzc2V0cy5NYXR0U3VycHJpc2UpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgbmV4dFNjZW5lKCksXG4gIF0sXG4gIG5leHRTY2VuZTogU2NlbmVOYW1lcy5Lb2lTdXNoaUluc2lkZSxcbn07XG4iLCJpbXBvcnQge1xuICBBY3RvckFzc2V0cyxcbiAgQWN0b3JzLCBCYWNrZ3JvdW5kQXNzZXRzLCBTY2VuZU5hbWVzLCBTY2VuZVBvc2l0aW9ucyxcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIGVudGVyQWN0b3IsXG4gIGludHJvU2NlbmUsXG4gIG5leHRTY2VuZSxcbiAgcHJlc2VudENob2ljZXMsXG4gIHByZXNlbnRUZXh0LFxuICBwcmVzZW50VGV4dEZvckNob2ljZSxcbiAgc3dpdGNoQWN0b3JBc3NldCxcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYmFja2dyb3VuZDogQmFja2dyb3VuZEFzc2V0cy5Oc3NMdW5jaFJvb20sXG4gIHRpdGxlOiAnTmFzaHZpbGxlIFNvZnR3YXJlIFNjaG9vbCAyMDE3JyxcbiAgYWN0b3JzOiBbXG4gICAge1xuICAgICAgbmFtZTogQWN0b3JzLk1hdHQsXG4gICAgICBwb3NpdGlvbjogU2NlbmVQb3NpdGlvbnMuUmlnaHQsXG4gICAgICBhc3NldDogQWN0b3JBc3NldHMuTWF0dFdhdmUsXG4gICAgICBhcHBlYXJzQXRTdGFydDogZmFsc2UsXG4gICAgfSxcbiAgXSxcbiAgdGV4dDogW1xuICAgICc/Pz8/OiBIZXkgdGhlcmUhIScsXG4gICAgJz8/Pz86IFdhaXQgdXAhJyxcbiAgICAnTWF0dDogSGkgOikgLi4uIEhvdyBpcyB5b3VyIGRheSBnb2luZz8nLFxuICAgICdNYXR0OiBJIGNhblxcJ3QgYmVsaWV2ZSB3ZSBvbmx5IGhhdmUgYSBjb3VwbGUgb2Ygd2Vla3MgbGVmdCEnLFxuICAgICdNYXR0OiBJXFwndmUgYmVlbiBzbyBmb2N1c2VkIG9uIG15IHdvcmsgdGhhdCBJIGZlZWwgbGlrZSB3ZSBoYXJkbHkgZ290IHRvIGtub3cgZWFjaCBvdGhlci4nLFxuICAgICdNYXR0OiBXYW50IHRvIGdvIGdldCBsdW5jaCBzb21ld2hlcmU/JyxcbiAgICAnTWF0dDogT2theS4gTGV0XFwncyBnZXQgb3V0dGEgaGVyZSEnLFxuICBdLFxuICBzY2VuZUZsb3c6IFtcbiAgICBpbnRyb1NjZW5lKCksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIGVudGVyQWN0b3IoQWN0b3JzLk1hdHQpLFxuICAgIHByZXNlbnRUZXh0Rm9yQ2hvaWNlKCksXG4gICAgcHJlc2VudENob2ljZXMoWydJdFxcJ3MgdWguLi4gZ29pbmcnLCAnTm90IGJhZCwgYWN0dWFsbHkhJywgJ0ZhbnRhc3RpY2NjY2MhJ10pLFxuICAgIHN3aXRjaEFjdG9yQXNzZXQoQWN0b3JzLk1hdHQsIEFjdG9yQXNzZXRzLk1hdHRUaGluayksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHByZXNlbnRUZXh0Rm9yQ2hvaWNlKCksXG4gICAgcHJlc2VudENob2ljZXMoWydTdXJlIHRoYXQgc291bmRzIGZ1biEnLCAnWWVhISBMZXRzIGdldCBDaGFybGllISddKSxcbiAgICBzd2l0Y2hBY3RvckFzc2V0KEFjdG9ycy5NYXR0LCBBY3RvckFzc2V0cy5NYXR0U21pbGUpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgbmV4dFNjZW5lKCksXG4gIF0sXG4gIG5leHRTY2VuZTogU2NlbmVOYW1lcy5PbGROc3NQYXJraW5nTG90LFxufTtcbiIsImltcG9ydCB7XG4gIEFjdG9yQXNzZXRzLFxuICBBY3RvcnMsIEJhY2tncm91bmRBc3NldHMsIFNjZW5lTmFtZXMsIFNjZW5lUG9zaXRpb25zLFxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgZW50ZXJBY3RvcixcbiAgZXhpdEFjdG9yLFxuICBsb2FkU2NlbmUsXG4gIG5leHRTY2VuZSxcbiAgcHJlc2VudENob2ljZXMsXG4gIHByZXNlbnRUZXh0LFxuICBwcmVzZW50VGV4dEZvckNob2ljZSxcbiAgc3dpdGNoQWN0b3JBc3NldCxcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYmFja2dyb3VuZDogQmFja2dyb3VuZEFzc2V0cy5PbGROc3NQYXJraW5nTG90LFxuICBhY3RvcnM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBBY3RvcnMuTWF0dCxcbiAgICAgIHBvc2l0aW9uOiBTY2VuZVBvc2l0aW9ucy5MZWZ0LFxuICAgICAgYXNzZXQ6IEFjdG9yQXNzZXRzLk1hdHRXYXZlLFxuICAgICAgYXBwZWFyc0F0U3RhcnQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBBY3RvcnMuQ2hhcmxpZSxcbiAgICAgIHBvc2l0aW9uOiBTY2VuZVBvc2l0aW9ucy5SaWdodCxcbiAgICAgIGFzc2V0OiBBY3RvckFzc2V0cy5DaGFybGllLFxuICAgICAgYXBwZWFyc0F0U3RhcnQ6IGZhbHNlLFxuICAgIH0sXG4gIF0sXG4gIHRleHQ6IFtcbiAgICAnTWF0dDogSXRcXCdzIGEgbmljZSBkYXkhJyxcbiAgICAnTWF0dDogU28sIHRoaXMgaXMgeW91ciBib3kgQ2hhcmxpZT8/JyxcbiAgICAnTWF0dDogRG8geW91IHdhbm5hIHBsYXksIENoYXJsaWUhPycsXG4gICAgJ0NoYXJsaWU6IFdvb2YhJyxcbiAgICAnTWF0dDogR28gZmV0Y2ggYm95IScsXG4gICAgJ0NoYXJsaWU6IFdvb29vb29vb29vb29vb29vb29vb29mIScsXG4gICAgJ01hdHQ6IFdoYXQgYSBnb29kIGJveSEgTG9vayBhdCBoaW0gZ28hJyxcbiAgICAnTWF0dDogWW91IGd1eXMgbWFrZSBhIGdyZWF0IGR1by4gOiknLFxuICAgICdNYXR0OiBXZWxsLCB3YW50IHRvIGdvIHRvIHRoZSBmYWlyZ3JvdW5kcyB3aXRoIENoYXJsZXMgdG8gZWF0IHNvbWUgbHVuY2g/JyxcbiAgICAnTWF0dDogQ1xcJ21vbiEgSXRcXCdsbCBiZSBmdW4hJyxcbiAgXSxcbiAgc2NlbmVGbG93OiBbXG4gICAgbG9hZFNjZW5lKCksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBzd2l0Y2hBY3RvckFzc2V0KEFjdG9ycy5NYXR0LCBBY3RvckFzc2V0cy5NYXR0VGhpbmspLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgc3dpdGNoQWN0b3JBc3NldChBY3RvcnMuTWF0dCwgQWN0b3JBc3NldHMuTWF0dFNocnVnKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIGVudGVyQWN0b3IoQWN0b3JzLkNoYXJsaWUpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgcHJlc2VudFRleHQoKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIGV4aXRBY3RvcihBY3RvcnMuQ2hhcmxpZSksXG4gICAgc3dpdGNoQWN0b3JBc3NldChBY3RvcnMuTWF0dCwgQWN0b3JBc3NldHMuTWF0dFBvaW50KSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIHByZXNlbnRUZXh0KCksXG4gICAgc3dpdGNoQWN0b3JBc3NldChBY3RvcnMuTWF0dCwgQWN0b3JBc3NldHMuTWF0dExvdmUpLFxuICAgIHByZXNlbnRUZXh0Rm9yQ2hvaWNlKCksXG4gICAgcHJlc2VudENob2ljZXMoWydUaGF0IHNvdW5kcyBnb29kLicsICdIbW0uLi4gSSBkdW5uby4uLiddKSxcbiAgICBwcmVzZW50VGV4dCgpLFxuICAgIG5leHRTY2VuZSgpLFxuICBdLFxuICBuZXh0U2NlbmU6IFNjZW5lTmFtZXMuTmFzaHZpbGxlRmFpckdyb3VuZHMsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==