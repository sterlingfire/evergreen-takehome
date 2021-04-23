module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Flight/Flight.jsx":
/*!*********************************!*\
  !*** ./pages/Flight/Flight.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Flight_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Flight.module.css */ \"./pages/Flight/Flight.module.css\");\n/* harmony import */ var _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Flight_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/sterling/code/takehome/evergreen/evergreen-takehome/pages/Flight/Flight.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Flight = ({\n  itinerary,\n  departureLeg,\n  returnLeg\n}) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n  className: \"card\",\n  style: {\n    width: \"100%\",\n    marginBottom: \"20px\"\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }\n}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }\n}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 7\n  }\n}, __jsx(\"img\", {\n  width: \"32px\",\n  height: \"32px\",\n  src: `https://logos.skyscnr.com/images/airlines/favicon/${departureLeg.airline_id}.png`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }\n}), __jsx(\"sub\", {\n  className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.airportCode,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 8\n  }\n}, departureLeg.departure_airport), \" \", departureLeg.departure_time.substring(11), \"\\xA0\", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaArrowRight\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 14\n  }\n}), \"\\xA0 \", departureLeg.arrival_time.substring(11), \"\\xA0\", __jsx(\"sub\", {\n  className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.airportCode,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 8\n  }\n}, departureLeg.arrival_airport), __jsx(\"span\", {\n  className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.time,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 8\n  }\n}, \" \", Math.floor(departureLeg.duration_mins / 60), \"h \", departureLeg.duration_mins % 60, departureLeg.stops == 0 ? __jsx(\"sub\", {\n  className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.green,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 13\n  }\n}, \" Direct \") : __jsx(\"sub\", {\n  className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.red,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 13\n  }\n}, \" 1 Stop \"), \" \")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 7\n  }\n}, __jsx(\"img\", {\n  width: \"32px\",\n  height: \"32px\",\n  src: `https://logos.skyscnr.com/images/airlines/favicon/${departureLeg.airline_id}.png`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 7\n  }\n}), __jsx(\"sub\", {\n  className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.airportCode,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }\n}, returnLeg.departure_airport), \"\\xA0\", returnLeg.departure_time.substring(11), \"\\xA0\", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaArrowRight\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 14\n  }\n}), \"\\xA0 \", returnLeg.arrival_time.substring(11), \"\\xA0\", __jsx(\"sub\", {\n  className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.airportCode,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }\n}, \" \", returnLeg.arrival_airport), __jsx(\"span\", {\n  className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.time,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }\n}, Math.floor(returnLeg.duration_mins / 60), \"h \", returnLeg.duration_mins % 60, returnLeg.stops == 0 ? __jsx(\"sub\", {\n  className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.green,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 13\n  }\n}, \" Direct \") : __jsx(\"sub\", {\n  className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.red,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 13\n  }\n}, \" 1 Stop \"), \" \")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n  size: \"lg\",\n  className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectButton,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 7\n  }\n}, \" \", __jsx(\"b\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 59\n  }\n}, \"Select\"), \" \"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 7\n  }\n}, __jsx(\"span\", {\n  className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.price,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 7\n  }\n}, \" \", itinerary.price, \" \"), __jsx(\"span\", {\n  className: _Flight_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sourceSite,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 7\n  }\n}, \" \", itinerary.agent, \" \"))));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flight);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9GbGlnaHQvRmxpZ2h0LmpzeD80ZWFjIl0sIm5hbWVzIjpbIkZsaWdodCIsIml0aW5lcmFyeSIsImRlcGFydHVyZUxlZyIsInJldHVybkxlZyIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwiYWlybGluZV9pZCIsInN0eWxlcyIsImFpcnBvcnRDb2RlIiwiZGVwYXJ0dXJlX2FpcnBvcnQiLCJkZXBhcnR1cmVfdGltZSIsInN1YnN0cmluZyIsImFycml2YWxfdGltZSIsImFycml2YWxfYWlycG9ydCIsInRpbWUiLCJNYXRoIiwiZmxvb3IiLCJkdXJhdGlvbl9taW5zIiwic3RvcHMiLCJncmVlbiIsInJlZCIsInNlbGVjdEJ1dHRvbiIsInByaWNlIiwic291cmNlU2l0ZSIsImFnZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUNDLFdBQUQ7QUFBWUMsY0FBWjtBQUEwQkM7QUFBMUIsQ0FBRCxLQUNiLE1BQUMsb0RBQUQ7QUFBTSxXQUFTLEVBQUMsTUFBaEI7QUFBdUIsT0FBSyxFQUFFO0FBQUVDLFNBQUssRUFBQyxNQUFSO0FBQWdCQyxnQkFBWSxFQUFDO0FBQTdCLEdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQ0UsT0FBSyxFQUFDLE1BRFI7QUFFRSxRQUFNLEVBQUMsTUFGVDtBQUdFLEtBQUcsRUFBRyxxREFBb0RILFlBQVksQ0FBQ0ksVUFBVyxNQUhwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFNQztBQUFLLFdBQVMsRUFBRUMseURBQU0s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QSxZQUFwRCxNQTdCRixFQThCRSxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0E7QUFBTSxXQUFTLEVBQUVkLHlEQUFNLENBQUNlLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBaUNyQixTQUFTLENBQUNxQixLQUEzQyxNQURBLEVBRUE7QUFBTSxXQUFTLEVBQUVmLHlEQUFNLENBQUNnQixVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXVDdEIsU0FBUyxDQUFDdUIsS0FBakQsTUFGQSxDQTlCRixDQURGLENBREY7O0FBd0NleEIscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9GbGlnaHQvRmxpZ2h0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkLCBCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQge0ZhQXJyb3dSaWdodH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZsaWdodC5tb2R1bGUuY3NzJztcblxuY29uc3QgRmxpZ2h0ID0gKHtpdGluZXJhcnksIGRlcGFydHVyZUxlZywgcmV0dXJuTGVnfSkgPT4gKFxuICA8Q2FyZCBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgd2lkdGg6XCIxMDAlXCIsIG1hcmdpbkJvdHRvbTpcIjIwcHhcIn19PlxuICAgIDxDYXJkLkJvZHk+XG4gICAgICA8Q2FyZC5UZXh0PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgd2lkdGg9XCIzMnB4XCJcbiAgICAgICAgICBoZWlnaHQ9XCIzMnB4XCJcbiAgICAgICAgICBzcmM9e2BodHRwczovL2xvZ29zLnNreXNjbnIuY29tL2ltYWdlcy9haXJsaW5lcy9mYXZpY29uLyR7ZGVwYXJ0dXJlTGVnLmFpcmxpbmVfaWR9LnBuZ2B9XG4gICAgICAgICAvPlxuICAgICAgIDxzdWIgY2xhc3NOYW1lPXtzdHlsZXMuYWlycG9ydENvZGV9PntkZXBhcnR1cmVMZWcuZGVwYXJ0dXJlX2FpcnBvcnR9PC9zdWI+IHtkZXBhcnR1cmVMZWcuZGVwYXJ0dXJlX3RpbWUuc3Vic3RyaW5nKDExKX1cbiAgICAgICAmbmJzcDs8RmFBcnJvd1JpZ2h0Lz4mbmJzcDsge2RlcGFydHVyZUxlZy5hcnJpdmFsX3RpbWUuc3Vic3RyaW5nKDExKX0mbmJzcDtcbiAgICAgICA8c3ViIGNsYXNzTmFtZT17c3R5bGVzLmFpcnBvcnRDb2RlfT57ZGVwYXJ0dXJlTGVnLmFycml2YWxfYWlycG9ydH08L3N1Yj5cbiAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfSA+IHtNYXRoLmZsb29yKGRlcGFydHVyZUxlZy5kdXJhdGlvbl9taW5zLzYwKX1oIHtkZXBhcnR1cmVMZWcuZHVyYXRpb25fbWlucyAlIDYwfVxuICAgICAgICAge2RlcGFydHVyZUxlZy5zdG9wcz09MFxuICAgICAgICAgID8gPHN1YiBjbGFzc05hbWU9e3N0eWxlcy5ncmVlbn0+IERpcmVjdCA8L3N1Yj5cbiAgICAgICAgICA6IDxzdWIgY2xhc3NOYW1lPXtzdHlsZXMucmVkfT4gMSBTdG9wIDwvc3ViPn0gPC9zcGFuPlxuICAgICAgPC9DYXJkLlRleHQ+XG4gICAgICA8Q2FyZC5UZXh0PlxuICAgICAgPGltZ1xuICAgICAgICB3aWR0aD1cIjMycHhcIlxuICAgICAgICBoZWlnaHQ9XCIzMnB4XCJcbiAgICAgICAgc3JjPXtgaHR0cHM6Ly9sb2dvcy5za3lzY25yLmNvbS9pbWFnZXMvYWlybGluZXMvZmF2aWNvbi8ke2RlcGFydHVyZUxlZy5haXJsaW5lX2lkfS5wbmdgfSAvPlxuICAgICAgICA8c3ViIGNsYXNzTmFtZT17c3R5bGVzLmFpcnBvcnRDb2RlfSA+e3JldHVybkxlZy5kZXBhcnR1cmVfYWlycG9ydH08L3N1Yj5cbiAgICAgICAgJm5ic3A7e3JldHVybkxlZy5kZXBhcnR1cmVfdGltZS5zdWJzdHJpbmcoMTEpfVxuICAgICAgICZuYnNwOzxGYUFycm93UmlnaHQvPiZuYnNwOyB7cmV0dXJuTGVnLmFycml2YWxfdGltZS5zdWJzdHJpbmcoMTEpfSZuYnNwO1xuICAgICAgICA8c3ViIGNsYXNzTmFtZT17c3R5bGVzLmFpcnBvcnRDb2RlfT4ge3JldHVybkxlZy5hcnJpdmFsX2FpcnBvcnR9PC9zdWI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PntNYXRoLmZsb29yKHJldHVybkxlZy5kdXJhdGlvbl9taW5zLzYwKX1oIHtyZXR1cm5MZWcuZHVyYXRpb25fbWlucyAlIDYwfVxuICAgICAgICB7cmV0dXJuTGVnLnN0b3BzPT0wXG4gICAgICAgICAgPyA8c3ViIGNsYXNzTmFtZT17c3R5bGVzLmdyZWVufT4gRGlyZWN0IDwvc3ViPlxuICAgICAgICAgIDogPHN1YiBjbGFzc05hbWU9e3N0eWxlcy5yZWR9PiAxIFN0b3AgPC9zdWI+fSA8L3NwYW4+XG4gICAgICA8L0NhcmQuVGV4dD5cbiAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0QnV0dG9ufSA+IDxiPlNlbGVjdDwvYj4gPC9CdXR0b24+XG4gICAgICA8Q2FyZC5UZXh0PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PiB7aXRpbmVyYXJ5LnByaWNlfSA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zb3VyY2VTaXRlfSA+IHtpdGluZXJhcnkuYWdlbnR9IDwvc3Bhbj5cbiAgICAgIDwvQ2FyZC5UZXh0PlxuICAgIDwvQ2FyZC5Cb2R5PlxuICA8L0NhcmQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGbGlnaHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Flight/Flight.jsx\n");

/***/ }),

/***/ "./pages/Flight/Flight.module.css":
/*!****************************************!*\
  !*** ./pages/Flight/Flight.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"airportCode\": \"Flight_airportCode__33id0\",\n\t\"sourceSite\": \"Flight_sourceSite__H58eG\",\n\t\"time\": \"Flight_time__qr9Qb\",\n\t\"selectButton\": \"Flight_selectButton__3qHX4\",\n\t\"green\": \"Flight_green__2AQu3\",\n\t\"red\": \"Flight_red__1McBF\",\n\t\"price\": \"Flight_price__2cT2T\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9GbGlnaHQvRmxpZ2h0Lm1vZHVsZS5jc3M/OWM2MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL0ZsaWdodC9GbGlnaHQubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFpcnBvcnRDb2RlXCI6IFwiRmxpZ2h0X2FpcnBvcnRDb2RlX18zM2lkMFwiLFxuXHRcInNvdXJjZVNpdGVcIjogXCJGbGlnaHRfc291cmNlU2l0ZV9fSDU4ZUdcIixcblx0XCJ0aW1lXCI6IFwiRmxpZ2h0X3RpbWVfX3FyOVFiXCIsXG5cdFwic2VsZWN0QnV0dG9uXCI6IFwiRmxpZ2h0X3NlbGVjdEJ1dHRvbl9fM3FIWDRcIixcblx0XCJncmVlblwiOiBcIkZsaWdodF9ncmVlbl9fMkFRdTNcIixcblx0XCJyZWRcIjogXCJGbGlnaHRfcmVkX18xTWNCRlwiLFxuXHRcInByaWNlXCI6IFwiRmxpZ2h0X3ByaWNlX18yY1QyVFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Flight/Flight.module.css\n");

/***/ }),

/***/ "./pages/Flight/index.js":
/*!*******************************!*\
  !*** ./pages/Flight/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Flight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flight */ \"./pages/Flight/Flight.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Flight__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9GbGlnaHQvaW5kZXguanM/ZDMyZSJdLCJuYW1lcyI6WyJGbGlnaHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlQSw4R0FBZiIsImZpbGUiOiIuL3BhZ2VzL0ZsaWdodC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbGlnaHQgZnJvbSAnLi9GbGlnaHQnO1xuXG5leHBvcnQgZGVmYXVsdCBGbGlnaHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Flight/index.js\n");

/***/ }),

/***/ "./pages/Header/Header.jsx":
/*!*********************************!*\
  !*** ./pages/Header/Header.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/sterling/code/takehome/evergreen/evergreen-takehome/pages/Header/Header.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Header = () => __jsx(\"header\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 2\n  }\n}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"], {\n  style: {\n    padding: 0,\n    filter: \"drop-shadow(0px 5px 3px #ccc)\"\n  },\n  bg: \"light\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }\n}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Brand, {\n  href: \"/\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 7\n  }\n}, __jsx(\"img\", {\n  src: \"/logo.png\",\n  className: \"img\",\n  alt: \"Skyscanner logo\",\n  style: {\n    margin: 0\n  },\n  width: 150,\n  height: 50,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }\n}))));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9IZWFkZXIvSGVhZGVyLmpzeD81NzI3Il0sIm5hbWVzIjpbIkhlYWRlciIsInBhZGRpbmciLCJmaWx0ZXIiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRyxNQUFDLHNEQUFEO0FBQVEsT0FBSyxFQUFFO0FBQUNDLFdBQU8sRUFBQyxDQUFUO0FBQVlDLFVBQU0sRUFBRTtBQUFwQixHQUFmO0FBQXFFLElBQUUsRUFBQyxPQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxzREFBRCxDQUFRLEtBQVI7QUFBYyxNQUFJLEVBQUMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQ0UsS0FBRyxFQUFDLFdBRE47QUFFRSxXQUFTLEVBQUMsS0FGWjtBQUdFLEtBQUcsRUFBQyxpQkFITjtBQUlFLE9BQUssRUFBRTtBQUFDQyxVQUFNLEVBQUM7QUFBUixHQUpUO0FBS0UsT0FBSyxFQUFFLEdBTFQ7QUFNRSxRQUFNLEVBQUUsRUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERixDQURILENBREQ7O0FBaUJlSCxxRUFBZiIsImZpbGUiOiIuL3BhZ2VzL0hlYWRlci9IZWFkZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtOYXZiYXJ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuIDxoZWFkZXI+XG4gICAgPE5hdmJhciBzdHlsZT17e3BhZGRpbmc6MCwgZmlsdGVyOiBcImRyb3Atc2hhZG93KDBweCA1cHggM3B4ICNjY2MpXCJ9fSBiZz1cImxpZ2h0XCI+XG4gICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvbG9nby5wbmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT0naW1nJ1xuICAgICAgICAgIGFsdD1cIlNreXNjYW5uZXIgbG9nb1wiXG4gICAgICAgICAgc3R5bGU9e3ttYXJnaW46MH19XG4gICAgICAgICAgd2lkdGg9ezE1MH1cbiAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAvPlxuICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICA8L05hdmJhcj5cbiAgPC9oZWFkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Header/Header.jsx\n");

/***/ }),

/***/ "./pages/Header/index.js":
/*!*******************************!*\
  !*** ./pages/Header/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./pages/Header/Header.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9IZWFkZXIvaW5kZXguanM/NDRhZCJdLCJuYW1lcyI6WyJIZWFkZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlQSw4R0FBZiIsImZpbGUiOiIuL3BhZ2VzL0hlYWRlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Header/index.js\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./pages/Header/index.js\");\n/* harmony import */ var _Flight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Flight */ \"./pages/Flight/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_static_flights_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/static/flights.json */ \"./public/static/flights.json\");\nvar _public_static_flights_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/static/flights.json */ \"./public/static/flights.json\", 1);\nvar _jsxFileName = \"/Users/sterling/code/takehome/evergreen/evergreen-takehome/pages/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Home() {\n  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    className: \"md-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    className: \"justify-content-md-between\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, _public_static_flights_json__WEBPACK_IMPORTED_MODULE_5__[\"itineraries\"].map(itinerary => {\n    const leg1 = _public_static_flights_json__WEBPACK_IMPORTED_MODULE_5__[\"legs\"].find(leg => leg.id == itinerary.legs[0]);\n    const leg2 = _public_static_flights_json__WEBPACK_IMPORTED_MODULE_5__[\"legs\"].find(leg => leg.id == itinerary.legs[1]);\n    return __jsx(_Flight__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      itinerary: itinerary,\n      departureLeg: leg1,\n      returnLeg: leg2,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 22\n      }\n    });\n  })))), __jsx(\"footer\", {\n    className: \"cntr-footer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"Written by Sterling Bishop as a take home assignment for Evergreen.\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJIb21lIiwiaXRpbmVyYXJpZXMiLCJtYXAiLCJpdGluZXJhcnkiLCJsZWcxIiwibGVncyIsImZpbmQiLCJsZWciLCJpZCIsImxlZzIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLFNBQ0UsTUFBQyx5REFBRDtBQUFXLGFBQVMsRUFBQyxjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyx1RUFBVyxDQUFDQyxHQUFaLENBQWdCQyxTQUFTLElBQUk7QUFDNUIsVUFBTUMsSUFBSSxHQUFHQyxnRUFBSSxDQUFDQyxJQUFMLENBQVVDLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxFQUFKLElBQVVMLFNBQVMsQ0FBQ0UsSUFBVixDQUFlLENBQWYsQ0FBM0IsQ0FBYjtBQUNBLFVBQU1JLElBQUksR0FBR0osZ0VBQUksQ0FBQ0MsSUFBTCxDQUFVQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsRUFBSixJQUFVTCxTQUFTLENBQUNFLElBQVYsQ0FBZSxDQUFmLENBQTNCLENBQWI7QUFFQSxXQUFPLE1BQUMsK0NBQUQ7QUFDQyxlQUFTLEVBQUVGLFNBRFo7QUFFQyxrQkFBWSxFQUFFQyxJQUZmO0FBR0MsZUFBUyxFQUFFSyxJQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUc2QixHQVA5QixDQURILENBREYsQ0FERixDQUpGLEVBbUJFO0FBQVEsYUFBUyxFQUFDLGFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxrR0FEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLHFCQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkVBREYsQ0FuQkYsQ0FERjtBQStCRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgRmxpZ2h0IGZyb20gJy4vRmxpZ2h0J1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENhcmQsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7aXRpbmVyYXJpZXMsbGVnc30gZnJvbSAnLi4vcHVibGljL3N0YXRpYy9mbGlnaHRzLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWQtY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICB7aXRpbmVyYXJpZXMubWFwKGl0aW5lcmFyeSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGxlZzEgPSBsZWdzLmZpbmQobGVnID0+IGxlZy5pZCA9PSBpdGluZXJhcnkubGVnc1swXSk7XG4gICAgICAgICAgICAgIGNvbnN0IGxlZzIgPSBsZWdzLmZpbmQobGVnID0+IGxlZy5pZCA9PSBpdGluZXJhcnkubGVnc1sxXSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIDxGbGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICBpdGluZXJhcnk9e2l0aW5lcmFyeX1cbiAgICAgICAgICAgICAgICAgICAgICBkZXBhcnR1cmVMZWc9e2xlZzF9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuTGVnPXtsZWcyfSAgLz59KX1cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJjbnRyLWZvb3RlclwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/ZmlsdGVyPW5leHQuanMmdXRtX3NvdXJjZT1naXRodWImdXRtX21lZGl1bT1leGFtcGxlJnV0bV9jYW1wYWlnbj1uZXh0LWV4YW1wbGVcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBXcml0dGVuIGJ5IFN0ZXJsaW5nIEJpc2hvcCBhcyBhIHRha2UgaG9tZSBhc3NpZ25tZW50IGZvciBFdmVyZ3JlZW4uXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "./public/static/flights.json":
/*!************************************!*\
  !*** ./public/static/flights.json ***!
  \************************************/
/*! exports provided: itineraries, legs, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"itineraries\\\":[{\\\"id\\\":\\\"it_1\\\",\\\"legs\\\":[\\\"leg_1\\\",\\\"leg_4\\\"],\\\"price\\\":\\\"£35\\\",\\\"agent\\\":\\\"Wizzair.com\\\",\\\"agent_rating\\\":9.1},{\\\"id\\\":\\\"it_2\\\",\\\"legs\\\":[\\\"leg_2\\\",\\\"leg_5\\\"],\\\"price\\\":\\\"£115\\\",\\\"agent\\\":\\\"British Airways\\\",\\\"agent_rating\\\":9.3},{\\\"id\\\":\\\"it_3\\\",\\\"legs\\\":[\\\"leg_3\\\",\\\"leg_6\\\"],\\\"price\\\":\\\"£90\\\",\\\"agent\\\":\\\"Lufthansa\\\",\\\"agent_rating\\\":8.9},{\\\"id\\\":\\\"it_4\\\",\\\"legs\\\":[\\\"leg_1\\\",\\\"leg_5\\\"],\\\"price\\\":\\\"£105\\\",\\\"agent\\\":\\\"Trip.com\\\",\\\"agent_rating\\\":9.5},{\\\"id\\\":\\\"it_5\\\",\\\"legs\\\":[\\\"leg_1\\\",\\\"leg_6\\\"],\\\"price\\\":\\\"£195\\\",\\\"agent\\\":\\\"Trip.com\\\",\\\"agent_rating\\\":9.5},{\\\"id\\\":\\\"it_6\\\",\\\"legs\\\":[\\\"leg_2\\\",\\\"leg_4\\\"],\\\"price\\\":\\\"£93\\\",\\\"agent\\\":\\\"Kiwi.com\\\",\\\"agent_rating\\\":8},{\\\"id\\\":\\\"it_7\\\",\\\"legs\\\":[\\\"leg_3\\\",\\\"leg_4\\\"],\\\"price\\\":\\\"£42\\\",\\\"agent\\\":\\\"CheapFligths\\\",\\\"agent_rating\\\":10}],\\\"legs\\\":[{\\\"id\\\":\\\"leg_1\\\",\\\"departure_airport\\\":\\\"BUD\\\",\\\"arrival_airport\\\":\\\"LTN\\\",\\\"departure_time\\\":\\\"2020-10-31T15:35\\\",\\\"arrival_time\\\":\\\"2020-10-31T17:00\\\",\\\"stops\\\":0,\\\"airline_name\\\":\\\"Wizz Air\\\",\\\"airline_id\\\":\\\"WZ\\\",\\\"duration_mins\\\":145},{\\\"id\\\":\\\"leg_2\\\",\\\"departure_airport\\\":\\\"BUD\\\",\\\"arrival_airport\\\":\\\"LHR\\\",\\\"departure_time\\\":\\\"2020-10-31T12:05\\\",\\\"arrival_time\\\":\\\"2020-10-31T17:00\\\",\\\"stops\\\":1,\\\"airline_name\\\":\\\"British Airways\\\",\\\"airline_id\\\":\\\"BA\\\",\\\"duration_mins\\\":190},{\\\"id\\\":\\\"leg_3\\\",\\\"departure_airport\\\":\\\"BUD\\\",\\\"arrival_airport\\\":\\\"LGW\\\",\\\"departure_time\\\":\\\"2020-10-31T22:35\\\",\\\"arrival_time\\\":\\\"2020-11-01T00:10\\\",\\\"stops\\\":0,\\\"airline_name\\\":\\\"Lufthansa\\\",\\\"airline_id\\\":\\\"LH\\\",\\\"duration_mins\\\":155},{\\\"id\\\":\\\"leg_4\\\",\\\"departure_airport\\\":\\\"LTN\\\",\\\"arrival_airport\\\":\\\"BUD\\\",\\\"departure_time\\\":\\\"2020-11-11T19:45\\\",\\\"arrival_time\\\":\\\"2020-11-11T21:10\\\",\\\"stops\\\":0,\\\"airline_name\\\":\\\"Wizz Air\\\",\\\"airline_id\\\":\\\"WZ\\\",\\\"duration_mins\\\":145},{\\\"id\\\":\\\"leg_5\\\",\\\"departure_airport\\\":\\\"LHR\\\",\\\"arrival_airport\\\":\\\"BUD\\\",\\\"departure_time\\\":\\\"2020-11-11T11:25\\\",\\\"arrival_time\\\":\\\"2020-11-11T19:10\\\",\\\"stops\\\":1,\\\"airline_name\\\":\\\"British Airways\\\",\\\"airline_id\\\":\\\"BA\\\",\\\"duration_mins\\\":190},{\\\"id\\\":\\\"leg_6\\\",\\\"departure_airport\\\":\\\"LGW\\\",\\\"arrival_airport\\\":\\\"BUD\\\",\\\"departure_time\\\":\\\"2020-11-11T08:10\\\",\\\"arrival_time\\\":\\\"2020-11-11T11:40\\\",\\\"stops\\\":0,\\\"airline_name\\\":\\\"Lufthansa\\\",\\\"airline_id\\\":\\\"LH\\\",\\\"duration_mins\\\":150}]}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3B1YmxpYy9zdGF0aWMvZmxpZ2h0cy5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/static/flights.json\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiP2Q2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fa\n");

/***/ })

/******/ });