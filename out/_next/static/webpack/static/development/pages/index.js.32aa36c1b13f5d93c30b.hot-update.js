webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/services/dataProvider.js":
/*!**************************************!*\
  !*** ./src/services/dataProvider.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dataProvider; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);

var basicUri = 'http://localhost:8000/api/v1';
var defaultAppQuery = {
  secret: "fc7417a0-0f14-11e9-a240-69195a03fe0f",
  appId: "5c2d97c213baef6e18d86456"
};
function dataProvider(httpMethod, sourceName, query) {
  switch (httpMethod) {
    case "GET":
      console.log("".concat(basicUri, "/").concat(sourceName, "?").concat(query));
      return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(basicUri, "/").concat(sourceName, "?").concat(query), {
        method: 'GET'
      });

    default:
      return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(basicUri);
  }
}

/***/ })

})
//# sourceMappingURL=index.js.32aa36c1b13f5d93c30b.hot-update.js.map