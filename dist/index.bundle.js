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
/* harmony import */ var _js_components_navMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/navMenu */ "./src/js/components/navMenu.js");




// nav menu module
const navEl = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("nav", ["nav"]);
const tabLink1 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("a", ["tab-link"], { id: "tab-link-1", href: "#" });
tabLink1.textContent = "Link 1";
const tabLink2 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("a", ["tab-link"], { id: "tab-link-2", href: "#" });
tabLink2.textContent = "Link 2";
const tabLink3 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("a", ["tab-link"], { id: "tab-link-3", href: "#" });
tabLink3.textContent = "Link 3";
const tabLink4 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("a", ["tab-link"], { id: "tab-link-4", href: "#" });
tabLink4.textContent = "Link 4";
navEl.append(tabLink1, tabLink2, tabLink3, tabLink4);
// tab content - nav
// page 1
const page1 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("div", ["tabcontent"], { id: "tab1" });
const header1 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("h3");
header1.textContent = "Tab 1";
const text1 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("p");
text1.textContent = "Some excellent tab 1 content";
page1.append(header1, text1);
// page 2
const page2 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("div", ["tabcontent"], { id: "tab2" });
const header2 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("h3");
header2.textContent = "Tab 2";
const text2 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("p");
text2.textContent = "Unparalled synergy in this tab content";
page2.append(header2, text2);
// page 3
const page3 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("div", ["tabcontent"], { id: "tab3" });
const header3 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("h3");
header3.textContent = "Tab 3";
const text3 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("p");
text3.textContent =
	"Hard to understate the degree of awesome of this tab content";
page3.append(header3, text3);
// page 4
const page4 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("div", ["tabcontent"], { id: "tab4" });
const header4 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("h3");
header4.textContent = "Tab 4";
const text4 = (0,_js_helpers_domCreate__WEBPACK_IMPORTED_MODULE_1__["default"])("p");
text4.textContent = "This tab content is humble and doesn't have an ego";
page4.append(header4, text4);

// add event listener to all tab links
tabLink1.addEventListener("click", _js_components_navMenu__WEBPACK_IMPORTED_MODULE_2__["default"]);
tabLink2.addEventListener("click", _js_components_navMenu__WEBPACK_IMPORTED_MODULE_2__["default"]);
tabLink3.addEventListener("click", _js_components_navMenu__WEBPACK_IMPORTED_MODULE_2__["default"]);
tabLink4.addEventListener("click", _js_components_navMenu__WEBPACK_IMPORTED_MODULE_2__["default"]);

// final content append
const contentEl = document.getElementById("content");
contentEl.append(navEl, page1, page2, page3, page4);


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateTab);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQ3FCO0FBQ0c7O0FBRWxEO0FBQ0EsY0FBYyxpRUFBUztBQUN2QixpQkFBaUIsaUVBQVMsc0JBQXNCLDZCQUE2QjtBQUM3RTtBQUNBLGlCQUFpQixpRUFBUyxzQkFBc0IsNkJBQTZCO0FBQzdFO0FBQ0EsaUJBQWlCLGlFQUFTLHNCQUFzQiw2QkFBNkI7QUFDN0U7QUFDQSxpQkFBaUIsaUVBQVMsc0JBQXNCLDZCQUE2QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaUVBQVMsMEJBQTBCLFlBQVk7QUFDN0QsZ0JBQWdCLGlFQUFTO0FBQ3pCO0FBQ0EsY0FBYyxpRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlFQUFTLDBCQUEwQixZQUFZO0FBQzdELGdCQUFnQixpRUFBUztBQUN6QjtBQUNBLGNBQWMsaUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpRUFBUywwQkFBMEIsWUFBWTtBQUM3RCxnQkFBZ0IsaUVBQVM7QUFDekI7QUFDQSxjQUFjLGlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpRUFBUywwQkFBMEIsWUFBWTtBQUM3RCxnQkFBZ0IsaUVBQVM7QUFDekI7QUFDQSxjQUFjLGlFQUFTO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsOERBQVc7QUFDOUMsbUNBQW1DLDhEQUFXO0FBQzlDLG1DQUFtQyw4REFBVztBQUM5QyxtQ0FBbUMsOERBQVc7O0FBRTlDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4QkFBOEI7QUFDaEQ7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hCM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RqLXJlcXVlc3QtYXBwLy4vc3JjL2Nzcy9zdHlsZS5zY3NzPzYyYWYiLCJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvanMvY29tcG9uZW50cy9uYXZNZW51LmpzIiwid2VicGFjazovL2RqLXJlcXVlc3QtYXBwLy4vc3JjL2pzL2hlbHBlcnMvZG9tQ3JlYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBcIi4vY3NzL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBkb21DcmVhdGUgZnJvbSBcIi4vanMvaGVscGVycy9kb21DcmVhdGVcIjtcbmltcG9ydCBhY3RpdmF0ZVRhYiBmcm9tIFwiLi9qcy9jb21wb25lbnRzL25hdk1lbnVcIjtcblxuLy8gbmF2IG1lbnUgbW9kdWxlXG5jb25zdCBuYXZFbCA9IGRvbUNyZWF0ZShcIm5hdlwiLCBbXCJuYXZcIl0pO1xuY29uc3QgdGFiTGluazEgPSBkb21DcmVhdGUoXCJhXCIsIFtcInRhYi1saW5rXCJdLCB7IGlkOiBcInRhYi1saW5rLTFcIiwgaHJlZjogXCIjXCIgfSk7XG50YWJMaW5rMS50ZXh0Q29udGVudCA9IFwiTGluayAxXCI7XG5jb25zdCB0YWJMaW5rMiA9IGRvbUNyZWF0ZShcImFcIiwgW1widGFiLWxpbmtcIl0sIHsgaWQ6IFwidGFiLWxpbmstMlwiLCBocmVmOiBcIiNcIiB9KTtcbnRhYkxpbmsyLnRleHRDb250ZW50ID0gXCJMaW5rIDJcIjtcbmNvbnN0IHRhYkxpbmszID0gZG9tQ3JlYXRlKFwiYVwiLCBbXCJ0YWItbGlua1wiXSwgeyBpZDogXCJ0YWItbGluay0zXCIsIGhyZWY6IFwiI1wiIH0pO1xudGFiTGluazMudGV4dENvbnRlbnQgPSBcIkxpbmsgM1wiO1xuY29uc3QgdGFiTGluazQgPSBkb21DcmVhdGUoXCJhXCIsIFtcInRhYi1saW5rXCJdLCB7IGlkOiBcInRhYi1saW5rLTRcIiwgaHJlZjogXCIjXCIgfSk7XG50YWJMaW5rNC50ZXh0Q29udGVudCA9IFwiTGluayA0XCI7XG5uYXZFbC5hcHBlbmQodGFiTGluazEsIHRhYkxpbmsyLCB0YWJMaW5rMywgdGFiTGluazQpO1xuLy8gdGFiIGNvbnRlbnQgLSBuYXZcbi8vIHBhZ2UgMVxuY29uc3QgcGFnZTEgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFiY29udGVudFwiXSwgeyBpZDogXCJ0YWIxXCIgfSk7XG5jb25zdCBoZWFkZXIxID0gZG9tQ3JlYXRlKFwiaDNcIik7XG5oZWFkZXIxLnRleHRDb250ZW50ID0gXCJUYWIgMVwiO1xuY29uc3QgdGV4dDEgPSBkb21DcmVhdGUoXCJwXCIpO1xudGV4dDEudGV4dENvbnRlbnQgPSBcIlNvbWUgZXhjZWxsZW50IHRhYiAxIGNvbnRlbnRcIjtcbnBhZ2UxLmFwcGVuZChoZWFkZXIxLCB0ZXh0MSk7XG4vLyBwYWdlIDJcbmNvbnN0IHBhZ2UyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhYmNvbnRlbnRcIl0sIHsgaWQ6IFwidGFiMlwiIH0pO1xuY29uc3QgaGVhZGVyMiA9IGRvbUNyZWF0ZShcImgzXCIpO1xuaGVhZGVyMi50ZXh0Q29udGVudCA9IFwiVGFiIDJcIjtcbmNvbnN0IHRleHQyID0gZG9tQ3JlYXRlKFwicFwiKTtcbnRleHQyLnRleHRDb250ZW50ID0gXCJVbnBhcmFsbGVkIHN5bmVyZ3kgaW4gdGhpcyB0YWIgY29udGVudFwiO1xucGFnZTIuYXBwZW5kKGhlYWRlcjIsIHRleHQyKTtcbi8vIHBhZ2UgM1xuY29uc3QgcGFnZTMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFiY29udGVudFwiXSwgeyBpZDogXCJ0YWIzXCIgfSk7XG5jb25zdCBoZWFkZXIzID0gZG9tQ3JlYXRlKFwiaDNcIik7XG5oZWFkZXIzLnRleHRDb250ZW50ID0gXCJUYWIgM1wiO1xuY29uc3QgdGV4dDMgPSBkb21DcmVhdGUoXCJwXCIpO1xudGV4dDMudGV4dENvbnRlbnQgPVxuXHRcIkhhcmQgdG8gdW5kZXJzdGF0ZSB0aGUgZGVncmVlIG9mIGF3ZXNvbWUgb2YgdGhpcyB0YWIgY29udGVudFwiO1xucGFnZTMuYXBwZW5kKGhlYWRlcjMsIHRleHQzKTtcbi8vIHBhZ2UgNFxuY29uc3QgcGFnZTQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFiY29udGVudFwiXSwgeyBpZDogXCJ0YWI0XCIgfSk7XG5jb25zdCBoZWFkZXI0ID0gZG9tQ3JlYXRlKFwiaDNcIik7XG5oZWFkZXI0LnRleHRDb250ZW50ID0gXCJUYWIgNFwiO1xuY29uc3QgdGV4dDQgPSBkb21DcmVhdGUoXCJwXCIpO1xudGV4dDQudGV4dENvbnRlbnQgPSBcIlRoaXMgdGFiIGNvbnRlbnQgaXMgaHVtYmxlIGFuZCBkb2Vzbid0IGhhdmUgYW4gZWdvXCI7XG5wYWdlNC5hcHBlbmQoaGVhZGVyNCwgdGV4dDQpO1xuXG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gYWxsIHRhYiBsaW5rc1xudGFiTGluazEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlVGFiKTtcbnRhYkxpbmsyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3RpdmF0ZVRhYik7XG50YWJMaW5rMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWN0aXZhdGVUYWIpO1xudGFiTGluazQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlVGFiKTtcblxuLy8gZmluYWwgY29udGVudCBhcHBlbmRcbmNvbnN0IGNvbnRlbnRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnRlbnRFbC5hcHBlbmQobmF2RWwsIHBhZ2UxLCBwYWdlMiwgcGFnZTMsIHBhZ2U0KTtcbiIsImZ1bmN0aW9uIGFjdGl2YXRlVGFiKGV2ZW50KSB7XG5cdC8vIENyZWF0ZSB0aGUgdGFiIGNvbnRlbnQgSUQgYnkgYWx0ZXJpbmcgdGhlIGluY29taW5nIHRhYiBsaW5rIElEXG5cdC8vIGlucHV0OiBcInRhYi1saW5rLTFcIiAgPT4gIG91dHB1dDogXCJ0YWIxXCJcblx0Y29uc3QgaWQgPSBgdGFiJHtldmVudC50YXJnZXQuaWQuc3BsaXQoXCItXCIpWzJdfWA7XG5cdC8vIEdldCBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcz1cInRhYmNvbnRlbnRcIiBhbmQgaGlkZSB0aGVtXG5cdGNvbnN0IHRhYmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiY29udGVudFwiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YWJjb250ZW50Lmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dGFiY29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0dGFiY29udGVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHR9XG5cblx0Ly8gR2V0IGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzPVwidGFiLWxpbmtcIiBhbmQgcmVtb3ZlIHRoZSBjbGFzcyBcImFjdGl2ZVwiXG5cdGNvbnN0IHRhYmxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYi1saW5rXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRhYmxpbmtzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dGFibGlua3NbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0fVxuXHQvLyBhZGQgXCJhY3RpdmVcIiBjbGFzcyB0byBzZWxlY3RlZCBsaW5rXG5cdGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHQvLyBTaG93IHRoZSBjdXJyZW50IHRhYiwgYW5kIGFkZCBhbiBcImFjdGl2ZVwiIGNsYXNzIHRvIHRoZSBidXR0b24gdGhhdCBvcGVuZWQgdGhlIHRhYlxuXHRjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdGFjdGl2ZVRhYi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRhY3RpdmVUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aXZhdGVUYWI7XG4iLCIvLyBET00gQ1JFQVRFIEZVTkNUSU9OXG5cbi8vIGFyZyAxID0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcbi8vIGFyZyAyID0gY2xhc3MgbmFtZXMgdG8gYWRkXG4vLyBhcmcgMyA9IG9iamVjdCAtIGF0dHJpYnV0ZXMgdG8gYWRkIC0+IGF0dHJpYnV0ZSA6IHZhbHVlXG5mdW5jdGlvbiBkb21DcmVhdGUoYXJnMSwgYXJnMiwgYXJnMykge1xuXHQvLy8gLyBhcmcgMSA9IFwic3RyaW5nXCIgLSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmcxKTtcblx0Ly8vIC8gYXJnIDIgPSBbXCJhcnJheSBvZiBzdHJpbmdzXCJdIC0gY2xhc3MgbmFtZXMgdG8gYWRkXG5cdGlmIChBcnJheS5pc0FycmF5KGFyZzIpICYmIGFyZzIubGVuZ3RoID4gMCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJnMi5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lID0gYXJnMltpXTtcblx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXHQvLy8gLyBhcmcgMyA9IHtvYmplY3R9IC0gYXR0cmlidXRlIG5hbWUgOiB2YWx1ZVxuXHRmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhcmczKSB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhcmczW2F0dHJpYnV0ZV0pO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkb21DcmVhdGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=