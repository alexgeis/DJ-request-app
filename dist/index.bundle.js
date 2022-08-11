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
/* harmony import */ var _js_components_navMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/navMenu */ "./src/js/components/navMenu.js");
/* harmony import */ var _js_components_page1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/page1 */ "./src/js/components/page1.js");
/* harmony import */ var _js_components_page2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/components/page2 */ "./src/js/components/page2.js");
/* harmony import */ var _js_components_page3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/components/page3 */ "./src/js/components/page3.js");
/* harmony import */ var _js_components_page4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/components/page4 */ "./src/js/components/page4.js");







// nav menu
const navMenu = (0,_js_components_navMenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
// page 1
const page1 = (0,_js_components_page1__WEBPACK_IMPORTED_MODULE_2__["default"])();
// page 2
const page2 = (0,_js_components_page2__WEBPACK_IMPORTED_MODULE_3__["default"])();
// page 3
const page3 = (0,_js_components_page3__WEBPACK_IMPORTED_MODULE_4__["default"])();
// page 4
const page4 = (0,_js_components_page4__WEBPACK_IMPORTED_MODULE_5__["default"])();

// final content append
const contentEl = document.getElementById("content");
contentEl.append(navMenu, page1, page2, page3, page4);


/***/ }),

/***/ "./src/js/components/navMenu.js":
/*!**************************************!*\
  !*** ./src/js/components/navMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/domCreate */ "./src/js/helpers/domCreate.js");


function activateTab(event) {
	// Create the tab content ID by altering the incoming tab link ID
	// input: "tab-link-1"  =>  output: "tab1"
	const id = `tab${event.target.id.split("-")[2]}`;
	// Get all elements with class="tabcontent" and hide them
	const tabcontent = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabcontent.length; i += 1) {
		tabcontent[i].style.display = "none";
		tabcontent[i].classList.remove("active");
	}

	// Get all elements with class="tab-link" and remove the class "active"
	const tablinks = document.getElementsByClassName("tab-link");
	for (let i = 0; i < tablinks.length; i += 1) {
		tablinks[i].classList.remove("active");
	}
	// add "active" class to selected link
	event.target.classList.add("active");
	// Show the current tab, and add an "active" class to the button that opened the tab
	const activeTab = document.getElementById(id);
	activeTab.style.display = "block";
	activeTab.classList.add("active");
}

function createNavMenu() {
	const tabLink1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("a", ["tab-link"], {
		id: "tab-link-1",
		href: "#",
	});
	tabLink1.textContent = "Link 1";
	const tabLink2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("a", ["tab-link"], {
		id: "tab-link-2",
		href: "#",
	});
	tabLink2.textContent = "Requests";
	const tabLink3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("a", ["tab-link"], {
		id: "tab-link-3",
		href: "#",
	});
	tabLink3.textContent = "Link 3";
	const tabLink4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("a", ["tab-link"], {
		id: "tab-link-4",
		href: "#",
	});
	tabLink4.textContent = "Settings";
	// add event listener to all tab links
	tabLink1.addEventListener("click", activateTab);
	tabLink2.addEventListener("click", activateTab);
	tabLink3.addEventListener("click", activateTab);
	tabLink4.addEventListener("click", activateTab);
	// create nav menu and append
	const navEl = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("nav", ["nav"]);
	navEl.append(tabLink1, tabLink2, tabLink3, tabLink4);
	return navEl;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavMenu);


/***/ }),

/***/ "./src/js/components/page1.js":
/*!************************************!*\
  !*** ./src/js/components/page1.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/domCreate */ "./src/js/helpers/domCreate.js");


function createPage1() {
	const page1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["tabcontent"], { id: "tab1" });
	const header1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h3");
	header1.textContent = "Tab 1";
	const text1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p");
	text1.textContent = "Some excellent tab 1 content";
	page1.append(header1, text1);
	return page1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage1);


/***/ }),

/***/ "./src/js/components/page2.js":
/*!************************************!*\
  !*** ./src/js/components/page2.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/domCreate */ "./src/js/helpers/domCreate.js");


function createPage2() {
	const page2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["tabcontent"], { id: "tab2" });
	const header2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h3");
	header2.textContent = "Request";
	const text2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p");
	text2.textContent =
		"Enter the song, artist, or album to search through Spotify";
	page2.append(header2, text2);
	return page2;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage2);


/***/ }),

/***/ "./src/js/components/page3.js":
/*!************************************!*\
  !*** ./src/js/components/page3.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/domCreate */ "./src/js/helpers/domCreate.js");


function createPage3() {
	const page3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["tabcontent"], { id: "tab3" });
	const header3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h3");
	header3.textContent = "Tab 3";
	const text3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p");
	text3.textContent =
		"Hard to understate the degree of awesome of this tab content";
	page3.append(header3, text3);
	return page3;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage3);


/***/ }),

/***/ "./src/js/components/page4.js":
/*!************************************!*\
  !*** ./src/js/components/page4.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/domCreate */ "./src/js/helpers/domCreate.js");


function createPage4() {
	const page4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["tabcontent"], { id: "tab4" });
	const header4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h3");
	header4.textContent = "Settings";
	const text4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p");
	text4.textContent = "This tab content is humble and doesn't have an ego";
	page4.append(header4, text4);
	return page4;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage4);


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domCreate);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQzBCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRWhEO0FBQ0EsZ0JBQWdCLGtFQUFhO0FBQzdCO0FBQ0EsY0FBYyxnRUFBVztBQUN6QjtBQUNBLGNBQWMsZ0VBQVc7QUFDekI7QUFDQSxjQUFjLGdFQUFXO0FBQ3pCO0FBQ0EsY0FBYyxnRUFBVzs7QUFFekI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEI2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhCQUE4QjtBQUNoRDtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDhEQUFTO0FBQzNCO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxrQkFBa0IsOERBQVM7QUFDM0I7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGtCQUFrQiw4REFBUztBQUMzQjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0Esa0JBQWtCLDhEQUFTO0FBQzNCO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhEQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEZ0I7O0FBRTdDO0FBQ0EsZUFBZSw4REFBUywwQkFBMEIsWUFBWTtBQUM5RCxpQkFBaUIsOERBQVM7QUFDMUI7QUFDQSxlQUFlLDhEQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1prQjs7QUFFN0M7QUFDQSxlQUFlLDhEQUFTLDBCQUEwQixZQUFZO0FBQzlELGlCQUFpQiw4REFBUztBQUMxQjtBQUNBLGVBQWUsOERBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNia0I7O0FBRTdDO0FBQ0EsZUFBZSw4REFBUywwQkFBMEIsWUFBWTtBQUM5RCxpQkFBaUIsOERBQVM7QUFDMUI7QUFDQSxlQUFlLDhEQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDYmtCOztBQUU3QztBQUNBLGVBQWUsOERBQVMsMEJBQTBCLFlBQVk7QUFDOUQsaUJBQWlCLDhEQUFTO0FBQzFCO0FBQ0EsZUFBZSw4REFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1ozQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvY3NzL3N0eWxlLnNjc3M/NjJhZiIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9jb21wb25lbnRzL25hdk1lbnUuanMiLCJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvanMvY29tcG9uZW50cy9wYWdlMS5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9jb21wb25lbnRzL3BhZ2UyLmpzIiwid2VicGFjazovL2RqLXJlcXVlc3QtYXBwLy4vc3JjL2pzL2NvbXBvbmVudHMvcGFnZTMuanMiLCJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvanMvY29tcG9uZW50cy9wYWdlNC5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9oZWxwZXJzL2RvbUNyZWF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgXCIuL2Nzcy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgY3JlYXRlTmF2TWVudSBmcm9tIFwiLi9qcy9jb21wb25lbnRzL25hdk1lbnVcIjtcbmltcG9ydCBjcmVhdGVQYWdlMSBmcm9tIFwiLi9qcy9jb21wb25lbnRzL3BhZ2UxXCI7XG5pbXBvcnQgY3JlYXRlUGFnZTIgZnJvbSBcIi4vanMvY29tcG9uZW50cy9wYWdlMlwiO1xuaW1wb3J0IGNyZWF0ZVBhZ2UzIGZyb20gXCIuL2pzL2NvbXBvbmVudHMvcGFnZTNcIjtcbmltcG9ydCBjcmVhdGVQYWdlNCBmcm9tIFwiLi9qcy9jb21wb25lbnRzL3BhZ2U0XCI7XG5cbi8vIG5hdiBtZW51XG5jb25zdCBuYXZNZW51ID0gY3JlYXRlTmF2TWVudSgpO1xuLy8gcGFnZSAxXG5jb25zdCBwYWdlMSA9IGNyZWF0ZVBhZ2UxKCk7XG4vLyBwYWdlIDJcbmNvbnN0IHBhZ2UyID0gY3JlYXRlUGFnZTIoKTtcbi8vIHBhZ2UgM1xuY29uc3QgcGFnZTMgPSBjcmVhdGVQYWdlMygpO1xuLy8gcGFnZSA0XG5jb25zdCBwYWdlNCA9IGNyZWF0ZVBhZ2U0KCk7XG5cbi8vIGZpbmFsIGNvbnRlbnQgYXBwZW5kXG5jb25zdCBjb250ZW50RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5jb250ZW50RWwuYXBwZW5kKG5hdk1lbnUsIHBhZ2UxLCBwYWdlMiwgcGFnZTMsIHBhZ2U0KTtcbiIsImltcG9ydCBkb21DcmVhdGUgZnJvbSBcIi4uL2hlbHBlcnMvZG9tQ3JlYXRlXCI7XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVGFiKGV2ZW50KSB7XG5cdC8vIENyZWF0ZSB0aGUgdGFiIGNvbnRlbnQgSUQgYnkgYWx0ZXJpbmcgdGhlIGluY29taW5nIHRhYiBsaW5rIElEXG5cdC8vIGlucHV0OiBcInRhYi1saW5rLTFcIiAgPT4gIG91dHB1dDogXCJ0YWIxXCJcblx0Y29uc3QgaWQgPSBgdGFiJHtldmVudC50YXJnZXQuaWQuc3BsaXQoXCItXCIpWzJdfWA7XG5cdC8vIEdldCBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcz1cInRhYmNvbnRlbnRcIiBhbmQgaGlkZSB0aGVtXG5cdGNvbnN0IHRhYmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiY29udGVudFwiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YWJjb250ZW50Lmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dGFiY29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0dGFiY29udGVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHR9XG5cblx0Ly8gR2V0IGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzPVwidGFiLWxpbmtcIiBhbmQgcmVtb3ZlIHRoZSBjbGFzcyBcImFjdGl2ZVwiXG5cdGNvbnN0IHRhYmxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYi1saW5rXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRhYmxpbmtzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dGFibGlua3NbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0fVxuXHQvLyBhZGQgXCJhY3RpdmVcIiBjbGFzcyB0byBzZWxlY3RlZCBsaW5rXG5cdGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHQvLyBTaG93IHRoZSBjdXJyZW50IHRhYiwgYW5kIGFkZCBhbiBcImFjdGl2ZVwiIGNsYXNzIHRvIHRoZSBidXR0b24gdGhhdCBvcGVuZWQgdGhlIHRhYlxuXHRjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdGFjdGl2ZVRhYi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRhY3RpdmVUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2TWVudSgpIHtcblx0Y29uc3QgdGFiTGluazEgPSBkb21DcmVhdGUoXCJhXCIsIFtcInRhYi1saW5rXCJdLCB7XG5cdFx0aWQ6IFwidGFiLWxpbmstMVwiLFxuXHRcdGhyZWY6IFwiI1wiLFxuXHR9KTtcblx0dGFiTGluazEudGV4dENvbnRlbnQgPSBcIkxpbmsgMVwiO1xuXHRjb25zdCB0YWJMaW5rMiA9IGRvbUNyZWF0ZShcImFcIiwgW1widGFiLWxpbmtcIl0sIHtcblx0XHRpZDogXCJ0YWItbGluay0yXCIsXG5cdFx0aHJlZjogXCIjXCIsXG5cdH0pO1xuXHR0YWJMaW5rMi50ZXh0Q29udGVudCA9IFwiUmVxdWVzdHNcIjtcblx0Y29uc3QgdGFiTGluazMgPSBkb21DcmVhdGUoXCJhXCIsIFtcInRhYi1saW5rXCJdLCB7XG5cdFx0aWQ6IFwidGFiLWxpbmstM1wiLFxuXHRcdGhyZWY6IFwiI1wiLFxuXHR9KTtcblx0dGFiTGluazMudGV4dENvbnRlbnQgPSBcIkxpbmsgM1wiO1xuXHRjb25zdCB0YWJMaW5rNCA9IGRvbUNyZWF0ZShcImFcIiwgW1widGFiLWxpbmtcIl0sIHtcblx0XHRpZDogXCJ0YWItbGluay00XCIsXG5cdFx0aHJlZjogXCIjXCIsXG5cdH0pO1xuXHR0YWJMaW5rNC50ZXh0Q29udGVudCA9IFwiU2V0dGluZ3NcIjtcblx0Ly8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCB0YWIgbGlua3Ncblx0dGFiTGluazEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlVGFiKTtcblx0dGFiTGluazIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlVGFiKTtcblx0dGFiTGluazMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlVGFiKTtcblx0dGFiTGluazQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlVGFiKTtcblx0Ly8gY3JlYXRlIG5hdiBtZW51IGFuZCBhcHBlbmRcblx0Y29uc3QgbmF2RWwgPSBkb21DcmVhdGUoXCJuYXZcIiwgW1wibmF2XCJdKTtcblx0bmF2RWwuYXBwZW5kKHRhYkxpbmsxLCB0YWJMaW5rMiwgdGFiTGluazMsIHRhYkxpbms0KTtcblx0cmV0dXJuIG5hdkVsO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2TWVudTtcbiIsImltcG9ydCBkb21DcmVhdGUgZnJvbSBcIi4uL2hlbHBlcnMvZG9tQ3JlYXRlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2UxKCkge1xuXHRjb25zdCBwYWdlMSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YWJjb250ZW50XCJdLCB7IGlkOiBcInRhYjFcIiB9KTtcblx0Y29uc3QgaGVhZGVyMSA9IGRvbUNyZWF0ZShcImgzXCIpO1xuXHRoZWFkZXIxLnRleHRDb250ZW50ID0gXCJUYWIgMVwiO1xuXHRjb25zdCB0ZXh0MSA9IGRvbUNyZWF0ZShcInBcIik7XG5cdHRleHQxLnRleHRDb250ZW50ID0gXCJTb21lIGV4Y2VsbGVudCB0YWIgMSBjb250ZW50XCI7XG5cdHBhZ2UxLmFwcGVuZChoZWFkZXIxLCB0ZXh0MSk7XG5cdHJldHVybiBwYWdlMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZTE7XG4iLCJpbXBvcnQgZG9tQ3JlYXRlIGZyb20gXCIuLi9oZWxwZXJzL2RvbUNyZWF0ZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQYWdlMigpIHtcblx0Y29uc3QgcGFnZTIgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFiY29udGVudFwiXSwgeyBpZDogXCJ0YWIyXCIgfSk7XG5cdGNvbnN0IGhlYWRlcjIgPSBkb21DcmVhdGUoXCJoM1wiKTtcblx0aGVhZGVyMi50ZXh0Q29udGVudCA9IFwiUmVxdWVzdFwiO1xuXHRjb25zdCB0ZXh0MiA9IGRvbUNyZWF0ZShcInBcIik7XG5cdHRleHQyLnRleHRDb250ZW50ID1cblx0XHRcIkVudGVyIHRoZSBzb25nLCBhcnRpc3QsIG9yIGFsYnVtIHRvIHNlYXJjaCB0aHJvdWdoIFNwb3RpZnlcIjtcblx0cGFnZTIuYXBwZW5kKGhlYWRlcjIsIHRleHQyKTtcblx0cmV0dXJuIHBhZ2UyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlMjtcbiIsImltcG9ydCBkb21DcmVhdGUgZnJvbSBcIi4uL2hlbHBlcnMvZG9tQ3JlYXRlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2UzKCkge1xuXHRjb25zdCBwYWdlMyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YWJjb250ZW50XCJdLCB7IGlkOiBcInRhYjNcIiB9KTtcblx0Y29uc3QgaGVhZGVyMyA9IGRvbUNyZWF0ZShcImgzXCIpO1xuXHRoZWFkZXIzLnRleHRDb250ZW50ID0gXCJUYWIgM1wiO1xuXHRjb25zdCB0ZXh0MyA9IGRvbUNyZWF0ZShcInBcIik7XG5cdHRleHQzLnRleHRDb250ZW50ID1cblx0XHRcIkhhcmQgdG8gdW5kZXJzdGF0ZSB0aGUgZGVncmVlIG9mIGF3ZXNvbWUgb2YgdGhpcyB0YWIgY29udGVudFwiO1xuXHRwYWdlMy5hcHBlbmQoaGVhZGVyMywgdGV4dDMpO1xuXHRyZXR1cm4gcGFnZTM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhZ2UzO1xuIiwiaW1wb3J0IGRvbUNyZWF0ZSBmcm9tIFwiLi4vaGVscGVycy9kb21DcmVhdGVcIjtcblxuZnVuY3Rpb24gY3JlYXRlUGFnZTQoKSB7XG5cdGNvbnN0IHBhZ2U0ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhYmNvbnRlbnRcIl0sIHsgaWQ6IFwidGFiNFwiIH0pO1xuXHRjb25zdCBoZWFkZXI0ID0gZG9tQ3JlYXRlKFwiaDNcIik7XG5cdGhlYWRlcjQudGV4dENvbnRlbnQgPSBcIlNldHRpbmdzXCI7XG5cdGNvbnN0IHRleHQ0ID0gZG9tQ3JlYXRlKFwicFwiKTtcblx0dGV4dDQudGV4dENvbnRlbnQgPSBcIlRoaXMgdGFiIGNvbnRlbnQgaXMgaHVtYmxlIGFuZCBkb2Vzbid0IGhhdmUgYW4gZWdvXCI7XG5cdHBhZ2U0LmFwcGVuZChoZWFkZXI0LCB0ZXh0NCk7XG5cdHJldHVybiBwYWdlNDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZTQ7XG4iLCIvLyBET00gQ1JFQVRFIEZVTkNUSU9OXG5cbi8vIGFyZyAxID0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcbi8vIGFyZyAyID0gY2xhc3MgbmFtZXMgdG8gYWRkXG4vLyBhcmcgMyA9IG9iamVjdCAtIGF0dHJpYnV0ZXMgdG8gYWRkIC0+IGF0dHJpYnV0ZSA6IHZhbHVlXG5mdW5jdGlvbiBkb21DcmVhdGUoYXJnMSwgYXJnMiwgYXJnMykge1xuXHQvLy8gLyBhcmcgMSA9IFwic3RyaW5nXCIgLSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmcxKTtcblx0Ly8vIC8gYXJnIDIgPSBbXCJhcnJheSBvZiBzdHJpbmdzXCJdIC0gY2xhc3MgbmFtZXMgdG8gYWRkXG5cdGlmIChBcnJheS5pc0FycmF5KGFyZzIpICYmIGFyZzIubGVuZ3RoID4gMCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJnMi5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lID0gYXJnMltpXTtcblx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXHQvLy8gLyBhcmcgMyA9IHtvYmplY3R9IC0gYXR0cmlidXRlIG5hbWUgOiB2YWx1ZVxuXHRmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhcmczKSB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhcmczW2F0dHJpYnV0ZV0pO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkb21DcmVhdGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=