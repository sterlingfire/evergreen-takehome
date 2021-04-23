webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./pages/Header/index.js\");\n/* harmony import */ var _Flight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Flight */ \"./pages/Flight/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _public_static_flights_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/static/flights.json */ \"./public/static/flights.json\");\nvar _public_static_flights_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/static/flights.json */ \"./public/static/flights.json\", 1);\nvar _jsxFileName = \"/Users/sterling/code/takehome/evergreen/evergreen-takehome/pages/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Home() {\n  var _this = this;\n\n  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    className: \"md-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    className: \"justify-content-md-between\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, _public_static_flights_json__WEBPACK_IMPORTED_MODULE_5__[\"itineraries\"].map(function (itinerary) {\n    var leg1 = _public_static_flights_json__WEBPACK_IMPORTED_MODULE_5__[\"legs\"].find(function (leg) {\n      return leg.id == itinerary.legs[0];\n    });\n    var leg2 = _public_static_flights_json__WEBPACK_IMPORTED_MODULE_5__[\"legs\"].find(function (leg) {\n      return leg.id == itinerary.legs[1];\n    });\n    return __jsx(_Flight__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      itinerary: itinerary,\n      departureLeg: leg1,\n      returnLeg: leg2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 22\n      }\n    });\n  })))), __jsx(\"footer\", {\n    className: \"cntr-footer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"Written by Sterling Bishop as a take home assignment for Evergreen.\")));\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiSG9tZSIsIml0aW5lcmFyaWVzIiwibWFwIiwiaXRpbmVyYXJ5IiwibGVnMSIsImxlZ3MiLCJmaW5kIiwibGVnIiwiaWQiLCJsZWcyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLFNBQ0UsTUFBQyx5REFBRDtBQUFXLGFBQVMsRUFBQyxjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyx1RUFBVyxDQUFDQyxHQUFaLENBQWdCLFVBQUFDLFNBQVMsRUFBSTtBQUM1QixRQUFNQyxJQUFJLEdBQUdDLGdFQUFJLENBQUNDLElBQUwsQ0FBVSxVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxFQUFKLElBQVVMLFNBQVMsQ0FBQ0UsSUFBVixDQUFlLENBQWYsQ0FBZDtBQUFBLEtBQWIsQ0FBYjtBQUNBLFFBQU1JLElBQUksR0FBR0osZ0VBQUksQ0FBQ0MsSUFBTCxDQUFVLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLEVBQUosSUFBVUwsU0FBUyxDQUFDRSxJQUFWLENBQWUsQ0FBZixDQUFkO0FBQUEsS0FBYixDQUFiO0FBRUEsV0FBTyxNQUFDLCtDQUFEO0FBQ0MsZUFBUyxFQUFFRixTQURaO0FBRUMsa0JBQVksRUFBRUMsSUFGZjtBQUdDLGVBQVMsRUFBRUssSUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFHNkIsR0FQOUIsQ0FESCxDQURGLENBREYsQ0FKRixFQW1CRTtBQUFRLGFBQVMsRUFBQyxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsa0dBRFA7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQyxxQkFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJFQURGLENBbkJGLENBREY7QUErQkQ7S0FoQ3VCVCxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBGbGlnaHQgZnJvbSAnLi9GbGlnaHQnXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ2FyZCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHtpdGluZXJhcmllcyxsZWdzfSBmcm9tICcuLi9wdWJsaWMvc3RhdGljL2ZsaWdodHMuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJtZC1jb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWJldHdlZW5cIj5cbiAgICAgICAgICAgIHtpdGluZXJhcmllcy5tYXAoaXRpbmVyYXJ5ID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbGVnMSA9IGxlZ3MuZmluZChsZWcgPT4gbGVnLmlkID09IGl0aW5lcmFyeS5sZWdzWzBdKTtcbiAgICAgICAgICAgICAgY29uc3QgbGVnMiA9IGxlZ3MuZmluZChsZWcgPT4gbGVnLmlkID09IGl0aW5lcmFyeS5sZWdzWzFdKTtcblxuICAgICAgICAgICAgICByZXR1cm4gPEZsaWdodFxuICAgICAgICAgICAgICAgICAgICAgIGl0aW5lcmFyeT17aXRpbmVyYXJ5fVxuICAgICAgICAgICAgICAgICAgICAgIGRlcGFydHVyZUxlZz17bGVnMX1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5MZWc9e2xlZzJ9ICAvPn0pfVxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImNudHItZm9vdGVyXCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT9maWx0ZXI9bmV4dC5qcyZ1dG1fc291cmNlPWdpdGh1YiZ1dG1fbWVkaXVtPWV4YW1wbGUmdXRtX2NhbXBhaWduPW5leHQtZXhhbXBsZVwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFdyaXR0ZW4gYnkgU3RlcmxpbmcgQmlzaG9wIGFzIGEgdGFrZSBob21lIGFzc2lnbm1lbnQgZm9yIEV2ZXJncmVlbi5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})