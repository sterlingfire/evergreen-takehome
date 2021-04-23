webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/Flight/Flight.jsx":
/*!*********************************!*\
  !*** ./pages/Flight/Flight.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _Flight_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Flight.module.css */ \"./pages/Flight/Flight.module.css\");\n/* harmony import */ var _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Flight_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/sterling/code/takehome/evergreen/evergreen-takehome/pages/Flight/Flight.jsx\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Flight = function Flight(_ref) {\n  var itinerary = _ref.itinerary,\n      departureLeg = _ref.departureLeg,\n      returnLeg = _ref.returnLeg;\n  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"card\",\n    style: {\n      width: \"100%\",\n      marginBottom: \"20px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 3\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    width: \"32px\",\n    height: \"32px\",\n    src: \"https://logos.skyscnr.com/images/airlines/favicon/\".concat(departureLeg.airline_id, \".png\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }), __jsx(\"sub\", {\n    className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.airportCode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 8\n    }\n  }, departureLeg.departure_airport), \" \", departureLeg.departure_time.substring(11), \"\\xA0\", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaArrowRight\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 14\n    }\n  }), \"\\xA0 \", departureLeg.arrival_time.substring(11), \"\\xA0\", __jsx(\"sub\", {\n    className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.airportCode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 8\n    }\n  }, departureLeg.arrival_airport), __jsx(\"span\", {\n    className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.time,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 8\n    }\n  }, \" \", Math.floor(departureLeg.duration_mins / 60), \"h 00\", departureLeg.stops == 0 ? __jsx(\"sub\", {\n    className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.green,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, \" Direct \") : __jsx(\"sub\", {\n    className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.red,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, \" 1 Stop \"), \" \")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    width: \"32px\",\n    height: \"32px\",\n    src: \"https://logos.skyscnr.com/images/airlines/favicon/\".concat(departureLeg.airline_id, \".png\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }), __jsx(\"sub\", {\n    className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.airportCode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, returnLeg.departure_airport), \"\\xA0\", returnLeg.departure_time.substring(11), \"\\xA0\", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaArrowRight\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 14\n    }\n  }), \"\\xA0 \", returnLeg.arrival_time.substring(11), \"\\xA0\", __jsx(\"sub\", {\n    className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.airportCode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \" \", returnLeg.arrival_airport), __jsx(\"span\", {\n    className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.time,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \" \", returnLeg.duration_mins, returnLeg.stops == 0 ? __jsx(\"sub\", {\n    className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.green,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, \" Direct \") : __jsx(\"sub\", {\n    className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.red,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, \" 1 Stop \"), \" \")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    size: \"lg\",\n    className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, \" \", __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 59\n    }\n  }, \"Select\"), \" \"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.price,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, \" \", itinerary.price, \" \"), __jsx(\"span\", {\n    className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sourceSite,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, \" \", itinerary.agent, \" \"))));\n};\n\n_c = Flight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flight);\n\nvar _c;\n\n$RefreshReg$(_c, \"Flight\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRmxpZ2h0L0ZsaWdodC5qc3g/NGVhYyJdLCJuYW1lcyI6WyJGbGlnaHQiLCJpdGluZXJhcnkiLCJkZXBhcnR1cmVMZWciLCJyZXR1cm5MZWciLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsImFpcmxpbmVfaWQiLCJzdHlsZXMiLCJhaXJwb3J0Q29kZSIsImRlcGFydHVyZV9haXJwb3J0IiwiZGVwYXJ0dXJlX3RpbWUiLCJzdWJzdHJpbmciLCJhcnJpdmFsX3RpbWUiLCJhcnJpdmFsX2FpcnBvcnQiLCJ0aW1lIiwiTWF0aCIsImZsb29yIiwiZHVyYXRpb25fbWlucyIsInN0b3BzIiwiZ3JlZW4iLCJyZWQiLCJzZWxlY3RCdXR0b24iLCJwcmljZSIsInNvdXJjZVNpdGUiLCJhZ2VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLE1BQUVDLFNBQUYsUUFBRUEsU0FBRjtBQUFBLE1BQWFDLFlBQWIsUUFBYUEsWUFBYjtBQUFBLE1BQTJCQyxTQUEzQixRQUEyQkEsU0FBM0I7QUFBQSxTQUNiLE1BQUMsb0RBQUQ7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBdUIsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBQyxNQUFSO0FBQWdCQyxrQkFBWSxFQUFDO0FBQTdCLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFDLE1BRFI7QUFFRSxVQUFNLEVBQUMsTUFGVDtBQUdFLE9BQUcsOERBQXVESCxZQUFZLENBQUNJLFVBQXBFLFNBSEw7QUFBQTtBQUFBO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFNLGFBQVMsRUFBRWQseURBQU0sQ0FBQ2UsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFpQ3JCLFNBQVMsQ0FBQ3FCLEtBQTNDLE1BREEsRUFFQTtBQUFNLGFBQVMsRUFBRWYseURBQU0sQ0FBQ2dCLFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBdUN0QixTQUFTLENBQUN1QixLQUFqRCxNQUZBLENBOUJGLENBREYsQ0FEYTtBQUFBLENBQWY7O0tBQU14QixNO0FBd0NTQSxxRUFBZiIsImZpbGUiOiIuL3BhZ2VzL0ZsaWdodC9GbGlnaHQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7RmFBcnJvd1JpZ2h0fSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRmxpZ2h0Lm1vZHVsZS5jc3MnO1xuXG5jb25zdCBGbGlnaHQgPSAoe2l0aW5lcmFyeSwgZGVwYXJ0dXJlTGVnLCByZXR1cm5MZWd9KSA9PiAoXG4gIDxDYXJkIGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyB3aWR0aDpcIjEwMCVcIiwgbWFyZ2luQm90dG9tOlwiMjBweFwifX0+XG4gICAgPENhcmQuQm9keT5cbiAgICAgIDxDYXJkLlRleHQ+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICB3aWR0aD1cIjMycHhcIlxuICAgICAgICAgIGhlaWdodD1cIjMycHhcIlxuICAgICAgICAgIHNyYz17YGh0dHBzOi8vbG9nb3Muc2t5c2Nuci5jb20vaW1hZ2VzL2FpcmxpbmVzL2Zhdmljb24vJHtkZXBhcnR1cmVMZWcuYWlybGluZV9pZH0ucG5nYH1cbiAgICAgICAgIC8+XG4gICAgICAgPHN1YiBjbGFzc05hbWU9e3N0eWxlcy5haXJwb3J0Q29kZX0+e2RlcGFydHVyZUxlZy5kZXBhcnR1cmVfYWlycG9ydH08L3N1Yj4ge2RlcGFydHVyZUxlZy5kZXBhcnR1cmVfdGltZS5zdWJzdHJpbmcoMTEpfVxuICAgICAgICZuYnNwOzxGYUFycm93UmlnaHQvPiZuYnNwOyB7ZGVwYXJ0dXJlTGVnLmFycml2YWxfdGltZS5zdWJzdHJpbmcoMTEpfSZuYnNwO1xuICAgICAgIDxzdWIgY2xhc3NOYW1lPXtzdHlsZXMuYWlycG9ydENvZGV9PntkZXBhcnR1cmVMZWcuYXJyaXZhbF9haXJwb3J0fTwvc3ViPlxuICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9ID4ge01hdGguZmxvb3IoZGVwYXJ0dXJlTGVnLmR1cmF0aW9uX21pbnMvNjApfWggMDBcbiAgICAgICAgIHtkZXBhcnR1cmVMZWcuc3RvcHM9PTBcbiAgICAgICAgICA/IDxzdWIgY2xhc3NOYW1lPXtzdHlsZXMuZ3JlZW59PiBEaXJlY3QgPC9zdWI+XG4gICAgICAgICAgOiA8c3ViIGNsYXNzTmFtZT17c3R5bGVzLnJlZH0+IDEgU3RvcCA8L3N1Yj59IDwvc3Bhbj5cbiAgICAgIDwvQ2FyZC5UZXh0PlxuICAgICAgPENhcmQuVGV4dD5cbiAgICAgIDxpbWdcbiAgICAgICAgd2lkdGg9XCIzMnB4XCJcbiAgICAgICAgaGVpZ2h0PVwiMzJweFwiXG4gICAgICAgIHNyYz17YGh0dHBzOi8vbG9nb3Muc2t5c2Nuci5jb20vaW1hZ2VzL2FpcmxpbmVzL2Zhdmljb24vJHtkZXBhcnR1cmVMZWcuYWlybGluZV9pZH0ucG5nYH0gLz5cbiAgICAgICAgPHN1YiBjbGFzc05hbWU9e3N0eWxlcy5haXJwb3J0Q29kZX0gPntyZXR1cm5MZWcuZGVwYXJ0dXJlX2FpcnBvcnR9PC9zdWI+XG4gICAgICAgICZuYnNwO3tyZXR1cm5MZWcuZGVwYXJ0dXJlX3RpbWUuc3Vic3RyaW5nKDExKX1cbiAgICAgICAmbmJzcDs8RmFBcnJvd1JpZ2h0Lz4mbmJzcDsge3JldHVybkxlZy5hcnJpdmFsX3RpbWUuc3Vic3RyaW5nKDExKX0mbmJzcDtcbiAgICAgICAgPHN1YiBjbGFzc05hbWU9e3N0eWxlcy5haXJwb3J0Q29kZX0+IHtyZXR1cm5MZWcuYXJyaXZhbF9haXJwb3J0fTwvc3ViPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT4ge3JldHVybkxlZy5kdXJhdGlvbl9taW5zfVxuICAgICAgICB7cmV0dXJuTGVnLnN0b3BzPT0wXG4gICAgICAgICAgPyA8c3ViIGNsYXNzTmFtZT17c3R5bGVzLmdyZWVufT4gRGlyZWN0IDwvc3ViPlxuICAgICAgICAgIDogPHN1YiBjbGFzc05hbWU9e3N0eWxlcy5yZWR9PiAxIFN0b3AgPC9zdWI+fSA8L3NwYW4+XG4gICAgICA8L0NhcmQuVGV4dD5cbiAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0QnV0dG9ufSA+IDxiPlNlbGVjdDwvYj4gPC9CdXR0b24+XG4gICAgICA8Q2FyZC5UZXh0PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PiB7aXRpbmVyYXJ5LnByaWNlfSA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zb3VyY2VTaXRlfSA+IHtpdGluZXJhcnkuYWdlbnR9IDwvc3Bhbj5cbiAgICAgIDwvQ2FyZC5UZXh0PlxuICAgIDwvQ2FyZC5Cb2R5PlxuICA8L0NhcmQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGbGlnaHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Flight/Flight.jsx\n");

/***/ })

})