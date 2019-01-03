webpackHotUpdate("static/development/pages/market.js",{

/***/ "./pages/market.js":
/*!*************************!*\
  !*** ./pages/market.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_PcHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/PcHead */ "./src/components/PcHead.js");
/* harmony import */ var _src_components_PcFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/PcFooter */ "./src/components/PcFooter.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles_zIndex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles/zIndex */ "./node_modules/@material-ui/core/styles/zIndex.js");
/* harmony import */ var _material_ui_core_styles_zIndex__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_zIndex__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/home/simon/fangWeb/pages/market.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/anchor-is-valid */














var styles = function styles(theme) {
  return {
    card: {
      maxWidth: 345,
      width: "400px",
      minWidth: 150,
      margin: 5
    },
    media: {
      height: 140
    },
    layout: _defineProperty({
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2), {
      width: "100%",
      marginLeft: 'auto',
      marginRight: 'auto'
    }),
    heroContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: "".concat(theme.spacing.unit * 8, "px 0 ").concat(theme.spacing.unit * 6, "px")
    }
  };
};

var cards = [{
  image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225684/zhengjue/imgs/vip1.jpg",
  title: "正觉会员卡",
  subTile: "多种功能，能够挣钱的会员卡",
  price: "365/张",
  btnText1: "立即购买",
  btnText2: "加入购物车"
}, {
  image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225684/zhengjue/imgs/shop1.jpg",
  title: "电商套餐基础版",
  subTile: "基础社交微商城",
  price: "99.89/月",
  btnText1: "立即购买",
  btnText2: "加入购物车"
}, {
  image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225682/zhengjue/imgs/cust3.jpg",
  title: "WooCommerce本土化电商解决方案",
  subTile: "帮助搭建开源而功能强大的电商体系",
  price: "400/月",
  btnText1: "立即购买",
  btnText2: "加入购物车"
}, {
  image: 'https://res.cloudinary.com/da7efhqvt/image/upload/v1545225683/zhengjue/imgs/upgrade.png',
  title: "电商套餐升级包",
  subTile: "对基础电商的功能的升级和加强，需要先购买电商套餐基础版，特色为分销系统",
  price: "58/月",
  btnText1: "立即购买",
  btnText2: "加入购物车"
}, {
  image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225683/zhengjue/imgs/wechatpay.jpg",
  title: "微信支付服务代申请服务",
  subTile: "为电商和其他有订单系统的应用提供微信服务号以及微信支付功能",
  price: "199/次",
  btnText1: "立即购买",
  btnText2: "加入购物车"
}, {
  image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225682/zhengjue/imgs/alipay.jpg",
  title: "支付宝支付服务代申请服务",
  subTile: "为电商和其他有订单系统的应用提供支付宝商家号以及支付宝支付功能",
  price: "199/次",
  btnText1: "立即购买",
  btnText2: "加入购物车"
}, {
  image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225684/zhengjue/imgs/weixin1.jpg",
  title: "微信电商小程序",
  subTile: "配合我们的电商应用，一键拥有微信小程序客户端",
  price: "39/月",
  btnText1: "立即购买",
  btnText2: "加入购物车"
}, {
  image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225683/zhengjue/imgs/store1.jpg",
  title: "定制服务",
  subTile: "有更多复杂需求的技术支持",
  price: "",
  btnText1: "立即询价",
  btnText2: "沟通"
}, {
  image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225682/zhengjue/imgs/ios1.jpg",
  title: "IOS原生电商应用",
  subTile: "配合我们的电商应用，快速拥有自己的IOS应用",
  price: "600/月",
  btnText1: "立即购买",
  btnText2: "加入购物车"
}, {
  image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225682/zhengjue/imgs/android1.jpg",
  title: "Android原生电商应用",
  subTile: "配合我们的电商应用，快速拥有自己的android应用",
  price: "400/月",
  btnText1: "立即购买",
  btnText2: "加入购物车"
}, {
  image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225683/zhengjue/imgs/store1.jpg",
  title: "小企业私有云存储",
  subTile: "基于区块链的廉价而高效的文件图片视频存储服务",
  price: "1/G/月",
  btnText1: "立即购买",
  btnText2: "加入购物车"
}, {
  image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225683/zhengjue/imgs/wechat2.jpg",
  title: "新开公众号粉丝运营",
  subTile: "承诺达到15000人",
  price: "8000/次",
  btnText1: "立即购买",
  btnText2: "加入购物车"
}];

var Market =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Market, _React$Component);

  function Market() {
    _classCallCheck(this, Market);

    return _possibleConstructorReturn(this, _getPrototypeOf(Market).apply(this, arguments));
  }

  _createClass(Market, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_PcHead__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: classes.layout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.heroContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
        component: "h1",
        variant: "h2",
        align: "center",
        color: "textPrimary",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "\u5E02\u573A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
        variant: "h6",
        align: "center",
        color: "textSecondary",
        component: "p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "\u63A2\u7D22\u6211\u4EEC\u7684\u4EA7\u54C1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'flex',
          flexWrap: "wrap",
          width: "100%",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, cards.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6___default.a, {
          key: index,
          className: classes.card,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10___default.a, {
          className: classes.media,
          image: item.image,
          title: item.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
          gutterBottom: true,
          variant: "h5",
          component: "h2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, item.title, "\xA0\uFFE5", item.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
          component: "p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, item.subTile))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
          size: "small",
          color: "primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, item.btnText1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
          size: "small",
          color: "primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, item.btnText2)));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_PcFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }));
    }
  }]);

  return Market;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Market.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(Market));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/market")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=market.js.b530cf3a8120c0649b27.hot-update.js.map