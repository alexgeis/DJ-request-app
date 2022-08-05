"use strict";
(self["webpackChunkdj_request_app"] = self["webpackChunkdj_request_app"] || []).push([["index"],{

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/helpers/domCreate */ "./src/js/helpers/domCreate.js");



const navEl = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("nav", ["nav"]);
const tabLink1 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("a", ["tab-link"], { id: "tab-link-1", href: "#" });
const tabLink2 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("a", ["tab-link"], { id: "tab-link-2", href: "#" });
const tabLink3 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("a", ["tab-link"], { id: "tab-link-3", href: "#" });
const tabLink4 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("a", ["tab-link"], { id: "tab-link-4", href: "#" });
navEl.append(tabLink1, tabLink2, tabLink3, tabLink4);

const contentEl = document.getElementById("content");
contentEl.appendChild(navEl);


/***/ }),

/***/ "./src/js/helpers/domCreate.js":
/*!*************************************!*\
  !*** ./src/js/helpers/domCreate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// DOM CREATE FUNCTION

// arg 1 = name of HTML element
// arg 2 = class names to add
// arg 3 = object - attributes to add -> attribute : value
function domCreate(arg1, arg2, arg3) {
	/// / arg 1 = "string" - name of HTML element
	const element = document.createElement(arg1);
	/// / arg 2 = ["array of strings"] - class names to add
	if (Array.isArray(arg2) && arg2.length > 0) {
		for (let i = 0; i < arg2.length; i += 1) {
			const className = arg2[i];
			element.classList.add(className);
		}
	}
	/// / arg 3 = {object} - attribute name : value
	for (const attribute in arg3) {
		element.setAttribute(attribute, arg3[attribute]);
	}
	return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ domCreate });


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDcUI7O0FBRS9DLGNBQWMsaUVBQVM7QUFDdkIsaUJBQWlCLGlFQUFTLHNCQUFzQiw2QkFBNkI7QUFDN0UsaUJBQWlCLGlFQUFTLHNCQUFzQiw2QkFBNkI7QUFDN0UsaUJBQWlCLGlFQUFTLHNCQUFzQiw2QkFBNkI7QUFDN0UsaUJBQWlCLGlFQUFTLHNCQUFzQiw2QkFBNkI7QUFDN0U7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEVBQUUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvY3NzL3N0eWxlLnNjc3M/NjJhZiIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9oZWxwZXJzL2RvbUNyZWF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgXCIuL2Nzcy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgZG9tQ3JlYXRlIGZyb20gXCIuL2pzL2hlbHBlcnMvZG9tQ3JlYXRlXCI7XG5cbmNvbnN0IG5hdkVsID0gZG9tQ3JlYXRlKFwibmF2XCIsIFtcIm5hdlwiXSk7XG5jb25zdCB0YWJMaW5rMSA9IGRvbUNyZWF0ZShcImFcIiwgW1widGFiLWxpbmtcIl0sIHsgaWQ6IFwidGFiLWxpbmstMVwiLCBocmVmOiBcIiNcIiB9KTtcbmNvbnN0IHRhYkxpbmsyID0gZG9tQ3JlYXRlKFwiYVwiLCBbXCJ0YWItbGlua1wiXSwgeyBpZDogXCJ0YWItbGluay0yXCIsIGhyZWY6IFwiI1wiIH0pO1xuY29uc3QgdGFiTGluazMgPSBkb21DcmVhdGUoXCJhXCIsIFtcInRhYi1saW5rXCJdLCB7IGlkOiBcInRhYi1saW5rLTNcIiwgaHJlZjogXCIjXCIgfSk7XG5jb25zdCB0YWJMaW5rNCA9IGRvbUNyZWF0ZShcImFcIiwgW1widGFiLWxpbmtcIl0sIHsgaWQ6IFwidGFiLWxpbmstNFwiLCBocmVmOiBcIiNcIiB9KTtcbm5hdkVsLmFwcGVuZCh0YWJMaW5rMSwgdGFiTGluazIsIHRhYkxpbmszLCB0YWJMaW5rNCk7XG5cbmNvbnN0IGNvbnRlbnRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnRlbnRFbC5hcHBlbmRDaGlsZChuYXZFbCk7XG4iLCIvLyBET00gQ1JFQVRFIEZVTkNUSU9OXG5cbi8vIGFyZyAxID0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcbi8vIGFyZyAyID0gY2xhc3MgbmFtZXMgdG8gYWRkXG4vLyBhcmcgMyA9IG9iamVjdCAtIGF0dHJpYnV0ZXMgdG8gYWRkIC0+IGF0dHJpYnV0ZSA6IHZhbHVlXG5mdW5jdGlvbiBkb21DcmVhdGUoYXJnMSwgYXJnMiwgYXJnMykge1xuXHQvLy8gLyBhcmcgMSA9IFwic3RyaW5nXCIgLSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmcxKTtcblx0Ly8vIC8gYXJnIDIgPSBbXCJhcnJheSBvZiBzdHJpbmdzXCJdIC0gY2xhc3MgbmFtZXMgdG8gYWRkXG5cdGlmIChBcnJheS5pc0FycmF5KGFyZzIpICYmIGFyZzIubGVuZ3RoID4gMCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJnMi5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lID0gYXJnMltpXTtcblx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXHQvLy8gLyBhcmcgMyA9IHtvYmplY3R9IC0gYXR0cmlidXRlIG5hbWUgOiB2YWx1ZVxuXHRmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhcmczKSB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhcmczW2F0dHJpYnV0ZV0pO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGRvbUNyZWF0ZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9