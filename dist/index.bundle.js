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
/* harmony import */ var _js_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/render */ "./src/js/render.js");



(0,_js_render__WEBPACK_IMPORTED_MODULE_1__["default"])();

// // TAB GUIDE
// 1 - Tab 1
// 2 - Request Page
// 3 - Tab 3
// 4 - Settings
function defaultTabSelect(tabNumber) {
	const tabContent = `tab${tabNumber}`;
	const tabLink = `tab-link-${tabNumber}`;

	document.getElementById(tabContent).classList.add("active");
	document.getElementById(tabContent).style.display = "block";
	document.getElementById(tabLink).classList.add("active");
}
defaultTabSelect(2);


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
	// select tab link 1 by default

	// create nav menu and append
	const navEl = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("nav", ["nav"]);
	navEl.append(tabLink1, tabLink2, tabLink3, tabLink4);
	return navEl;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavMenu);


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


/***/ }),

/***/ "./src/js/pages/page1.js":
/*!*******************************!*\
  !*** ./src/js/pages/page1.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/domCreate */ "./src/js/helpers/domCreate.js");


function createPage1() {
	const page1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["tabcontent"], { id: "tab1" });
	const header1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", ["tab-header"]);
	header1.textContent = "Tab 1";
	const text1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p");
	text1.textContent = "Some excellent tab 1 content";
	page1.append(header1, text1);
	return page1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage1);


/***/ }),

/***/ "./src/js/pages/page2.js":
/*!*******************************!*\
  !*** ./src/js/pages/page2.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/domCreate */ "./src/js/helpers/domCreate.js");


function createPage2() {
	const page2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["tabcontent"], { id: "tab2" });
	const header2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", ["tab-header"]);
	header2.textContent = "Request";
	const text2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p");
	text2.textContent =
		"Enter the song, artist, or album to search through Spotify";
	// search form
	const searchForm = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("form", [], { action: "/" });
	const searchInput = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("input", [], {
		type: "search",
		placeholder: "Search...",
		name: "search",
	});
	const searchButton = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("button", [], { type: "submit" });
	searchButton.textContent = "Enter";
	const searchContainer = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["search-container"]);
	searchForm.append(searchInput, searchButton);
	searchContainer.appendChild(searchForm);
	// display search results
	const resultsHeader = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h4", ["results-header"]);
	resultsHeader.textContent = "Results";
	const resultDiv = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["result-item"]);
	resultDiv.textContent = "Artist - Song Title";
	// FETCH SEARCH RESULTS

	// const resultsContainer = domCreate("div", ["results-container"]);
	// resultsContainer.append();
	// final page append
	page2.append(header2, text2, searchContainer);
	return page2;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage2);


/***/ }),

/***/ "./src/js/pages/page3.js":
/*!*******************************!*\
  !*** ./src/js/pages/page3.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/domCreate */ "./src/js/helpers/domCreate.js");


function createPage3() {
	const page3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["tabcontent"], { id: "tab3" });
	const header3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", ["tab-header"]);
	header3.textContent = "Tab 3";
	const text3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p");
	text3.textContent =
		"Hard to understate the degree of awesome of this tab content";
	page3.append(header3, text3);
	return page3;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage3);


/***/ }),

/***/ "./src/js/pages/page4.js":
/*!*******************************!*\
  !*** ./src/js/pages/page4.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/domCreate */ "./src/js/helpers/domCreate.js");


function createPage4() {
	const page4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["tabcontent"], { id: "tab4" });
	const header4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", ["tab-header"]);
	header4.textContent = "Settings";
	const text4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p");
	text4.textContent = "This tab content is humble and doesn't have an ego";
	const githubLink = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("a", ["link-github"], {
		href: "https://github.com/alexgeis/DJ-request-app",
		target: "_blank",
	});
	githubLink.textContent = "GITHUB REPO LINK";
	const githubLinkContainer = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div");
	githubLinkContainer.appendChild(githubLink);
	page4.append(header4, text4, githubLinkContainer);
	return page4;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage4);


/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_navMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navMenu */ "./src/js/components/navMenu.js");
/* harmony import */ var _pages_page1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page1 */ "./src/js/pages/page1.js");
/* harmony import */ var _pages_page2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page2 */ "./src/js/pages/page2.js");
/* harmony import */ var _pages_page3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page3 */ "./src/js/pages/page3.js");
/* harmony import */ var _pages_page4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page4 */ "./src/js/pages/page4.js");






function renderApp() {
	const navMenu = (0,_components_navMenu__WEBPACK_IMPORTED_MODULE_0__["default"])();
	const page1 = (0,_pages_page1__WEBPACK_IMPORTED_MODULE_1__["default"])();
	const page2 = (0,_pages_page2__WEBPACK_IMPORTED_MODULE_2__["default"])();
	const page3 = (0,_pages_page3__WEBPACK_IMPORTED_MODULE_3__["default"])();
	const page4 = (0,_pages_page4__WEBPACK_IMPORTED_MODULE_4__["default"])();
	// final content append
	const contentEl = document.getElementById("content");
	contentEl.append(navMenu, page1, page2, page3, page4);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderApp);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFBZSx3REFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RqLXJlcXVlc3QtYXBwLy4vc3JjL2Nzcy9zdHlsZS5zY3NzPzYyYWYiLCJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvanMvY29tcG9uZW50cy9uYXZNZW51LmpzIiwid2VicGFjazovL2RqLXJlcXVlc3QtYXBwLy4vc3JjL2pzL2hlbHBlcnMvZG9tQ3JlYXRlLmpzIiwid2VicGFjazovL2RqLXJlcXVlc3QtYXBwLy4vc3JjL2pzL3BhZ2VzL3BhZ2UxLmpzIiwid2VicGFjazovL2RqLXJlcXVlc3QtYXBwLy4vc3JjL2pzL3BhZ2VzL3BhZ2UyLmpzIiwid2VicGFjazovL2RqLXJlcXVlc3QtYXBwLy4vc3JjL2pzL3BhZ2VzL3BhZ2UzLmpzIiwid2VicGFjazovL2RqLXJlcXVlc3QtYXBwLy4vc3JjL2pzL3BhZ2VzL3BhZ2U0LmpzIiwid2VicGFjazovL2RqLXJlcXVlc3QtYXBwLy4vc3JjL2pzL3JlbmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgXCIuL2Nzcy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgcmVuZGVyQXBwIGZyb20gXCIuL2pzL3JlbmRlclwiO1xuXG5yZW5kZXJBcHAoKTtcblxuLy8gLy8gVEFCIEdVSURFXG4vLyAxIC0gVGFiIDFcbi8vIDIgLSBSZXF1ZXN0IFBhZ2Vcbi8vIDMgLSBUYWIgM1xuLy8gNCAtIFNldHRpbmdzXG5mdW5jdGlvbiBkZWZhdWx0VGFiU2VsZWN0KHRhYk51bWJlcikge1xuXHRjb25zdCB0YWJDb250ZW50ID0gYHRhYiR7dGFiTnVtYmVyfWA7XG5cdGNvbnN0IHRhYkxpbmsgPSBgdGFiLWxpbmstJHt0YWJOdW1iZXJ9YDtcblxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJDb250ZW50KS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJDb250ZW50KS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJMaW5rKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuZGVmYXVsdFRhYlNlbGVjdCgyKTtcbiIsImltcG9ydCBkb21DcmVhdGUgZnJvbSBcIi4uL2hlbHBlcnMvZG9tQ3JlYXRlXCI7XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVGFiKGV2ZW50KSB7XG5cdC8vIENyZWF0ZSB0aGUgdGFiIGNvbnRlbnQgSUQgYnkgYWx0ZXJpbmcgdGhlIGluY29taW5nIHRhYiBsaW5rIElEXG5cdC8vIGlucHV0OiBcInRhYi1saW5rLTFcIiAgPT4gIG91dHB1dDogXCJ0YWIxXCJcblx0Y29uc3QgaWQgPSBgdGFiJHtldmVudC50YXJnZXQuaWQuc3BsaXQoXCItXCIpWzJdfWA7XG5cdC8vIEdldCBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcz1cInRhYmNvbnRlbnRcIiBhbmQgaGlkZSB0aGVtXG5cdGNvbnN0IHRhYmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiY29udGVudFwiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YWJjb250ZW50Lmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dGFiY29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0dGFiY29udGVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHR9XG5cblx0Ly8gR2V0IGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzPVwidGFiLWxpbmtcIiBhbmQgcmVtb3ZlIHRoZSBjbGFzcyBcImFjdGl2ZVwiXG5cdGNvbnN0IHRhYmxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYi1saW5rXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRhYmxpbmtzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dGFibGlua3NbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0fVxuXHQvLyBhZGQgXCJhY3RpdmVcIiBjbGFzcyB0byBzZWxlY3RlZCBsaW5rXG5cdGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHQvLyBTaG93IHRoZSBjdXJyZW50IHRhYiwgYW5kIGFkZCBhbiBcImFjdGl2ZVwiIGNsYXNzIHRvIHRoZSBidXR0b24gdGhhdCBvcGVuZWQgdGhlIHRhYlxuXHRjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdGFjdGl2ZVRhYi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRhY3RpdmVUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2TWVudSgpIHtcblx0Y29uc3QgdGFiTGluazEgPSBkb21DcmVhdGUoXCJhXCIsIFtcInRhYi1saW5rXCJdLCB7XG5cdFx0aWQ6IFwidGFiLWxpbmstMVwiLFxuXHRcdGhyZWY6IFwiI1wiLFxuXHR9KTtcblx0dGFiTGluazEudGV4dENvbnRlbnQgPSBcIkxpbmsgMVwiO1xuXHRjb25zdCB0YWJMaW5rMiA9IGRvbUNyZWF0ZShcImFcIiwgW1widGFiLWxpbmtcIl0sIHtcblx0XHRpZDogXCJ0YWItbGluay0yXCIsXG5cdFx0aHJlZjogXCIjXCIsXG5cdH0pO1xuXHR0YWJMaW5rMi50ZXh0Q29udGVudCA9IFwiUmVxdWVzdHNcIjtcblx0Y29uc3QgdGFiTGluazMgPSBkb21DcmVhdGUoXCJhXCIsIFtcInRhYi1saW5rXCJdLCB7XG5cdFx0aWQ6IFwidGFiLWxpbmstM1wiLFxuXHRcdGhyZWY6IFwiI1wiLFxuXHR9KTtcblx0dGFiTGluazMudGV4dENvbnRlbnQgPSBcIkxpbmsgM1wiO1xuXHRjb25zdCB0YWJMaW5rNCA9IGRvbUNyZWF0ZShcImFcIiwgW1widGFiLWxpbmtcIl0sIHtcblx0XHRpZDogXCJ0YWItbGluay00XCIsXG5cdFx0aHJlZjogXCIjXCIsXG5cdH0pO1xuXHR0YWJMaW5rNC50ZXh0Q29udGVudCA9IFwiU2V0dGluZ3NcIjtcblx0Ly8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCB0YWIgbGlua3Ncblx0dGFiTGluazEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlVGFiKTtcblx0dGFiTGluazIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlVGFiKTtcblx0dGFiTGluazMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlVGFiKTtcblx0dGFiTGluazQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlVGFiKTtcblx0Ly8gc2VsZWN0IHRhYiBsaW5rIDEgYnkgZGVmYXVsdFxuXG5cdC8vIGNyZWF0ZSBuYXYgbWVudSBhbmQgYXBwZW5kXG5cdGNvbnN0IG5hdkVsID0gZG9tQ3JlYXRlKFwibmF2XCIsIFtcIm5hdlwiXSk7XG5cdG5hdkVsLmFwcGVuZCh0YWJMaW5rMSwgdGFiTGluazIsIHRhYkxpbmszLCB0YWJMaW5rNCk7XG5cdHJldHVybiBuYXZFbDtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdk1lbnU7XG4iLCIvLyBET00gQ1JFQVRFIEZVTkNUSU9OXG5cbi8vIGFyZyAxID0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcbi8vIGFyZyAyID0gY2xhc3MgbmFtZXMgdG8gYWRkXG4vLyBhcmcgMyA9IG9iamVjdCAtIGF0dHJpYnV0ZXMgdG8gYWRkIC0+IGF0dHJpYnV0ZSA6IHZhbHVlXG5mdW5jdGlvbiBkb21DcmVhdGUoYXJnMSwgYXJnMiwgYXJnMykge1xuXHQvLy8gLyBhcmcgMSA9IFwic3RyaW5nXCIgLSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmcxKTtcblx0Ly8vIC8gYXJnIDIgPSBbXCJhcnJheSBvZiBzdHJpbmdzXCJdIC0gY2xhc3MgbmFtZXMgdG8gYWRkXG5cdGlmIChBcnJheS5pc0FycmF5KGFyZzIpICYmIGFyZzIubGVuZ3RoID4gMCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJnMi5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lID0gYXJnMltpXTtcblx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXHQvLy8gLyBhcmcgMyA9IHtvYmplY3R9IC0gYXR0cmlidXRlIG5hbWUgOiB2YWx1ZVxuXHRmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhcmczKSB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhcmczW2F0dHJpYnV0ZV0pO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkb21DcmVhdGU7XG4iLCJpbXBvcnQgZG9tQ3JlYXRlIGZyb20gXCIuLi9oZWxwZXJzL2RvbUNyZWF0ZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQYWdlMSgpIHtcblx0Y29uc3QgcGFnZTEgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFiY29udGVudFwiXSwgeyBpZDogXCJ0YWIxXCIgfSk7XG5cdGNvbnN0IGhlYWRlcjEgPSBkb21DcmVhdGUoXCJoM1wiLCBbXCJ0YWItaGVhZGVyXCJdKTtcblx0aGVhZGVyMS50ZXh0Q29udGVudCA9IFwiVGFiIDFcIjtcblx0Y29uc3QgdGV4dDEgPSBkb21DcmVhdGUoXCJwXCIpO1xuXHR0ZXh0MS50ZXh0Q29udGVudCA9IFwiU29tZSBleGNlbGxlbnQgdGFiIDEgY29udGVudFwiO1xuXHRwYWdlMS5hcHBlbmQoaGVhZGVyMSwgdGV4dDEpO1xuXHRyZXR1cm4gcGFnZTE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhZ2UxO1xuIiwiaW1wb3J0IGRvbUNyZWF0ZSBmcm9tIFwiLi4vaGVscGVycy9kb21DcmVhdGVcIjtcblxuZnVuY3Rpb24gY3JlYXRlUGFnZTIoKSB7XG5cdGNvbnN0IHBhZ2UyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhYmNvbnRlbnRcIl0sIHsgaWQ6IFwidGFiMlwiIH0pO1xuXHRjb25zdCBoZWFkZXIyID0gZG9tQ3JlYXRlKFwiaDNcIiwgW1widGFiLWhlYWRlclwiXSk7XG5cdGhlYWRlcjIudGV4dENvbnRlbnQgPSBcIlJlcXVlc3RcIjtcblx0Y29uc3QgdGV4dDIgPSBkb21DcmVhdGUoXCJwXCIpO1xuXHR0ZXh0Mi50ZXh0Q29udGVudCA9XG5cdFx0XCJFbnRlciB0aGUgc29uZywgYXJ0aXN0LCBvciBhbGJ1bSB0byBzZWFyY2ggdGhyb3VnaCBTcG90aWZ5XCI7XG5cdC8vIHNlYXJjaCBmb3JtXG5cdGNvbnN0IHNlYXJjaEZvcm0gPSBkb21DcmVhdGUoXCJmb3JtXCIsIFtdLCB7IGFjdGlvbjogXCIvXCIgfSk7XG5cdGNvbnN0IHNlYXJjaElucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW10sIHtcblx0XHR0eXBlOiBcInNlYXJjaFwiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuXHRcdG5hbWU6IFwic2VhcmNoXCIsXG5cdH0pO1xuXHRjb25zdCBzZWFyY2hCdXR0b24gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW10sIHsgdHlwZTogXCJzdWJtaXRcIiB9KTtcblx0c2VhcmNoQnV0dG9uLnRleHRDb250ZW50ID0gXCJFbnRlclwiO1xuXHRjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wic2VhcmNoLWNvbnRhaW5lclwiXSk7XG5cdHNlYXJjaEZvcm0uYXBwZW5kKHNlYXJjaElucHV0LCBzZWFyY2hCdXR0b24pO1xuXHRzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoRm9ybSk7XG5cdC8vIGRpc3BsYXkgc2VhcmNoIHJlc3VsdHNcblx0Y29uc3QgcmVzdWx0c0hlYWRlciA9IGRvbUNyZWF0ZShcImg0XCIsIFtcInJlc3VsdHMtaGVhZGVyXCJdKTtcblx0cmVzdWx0c0hlYWRlci50ZXh0Q29udGVudCA9IFwiUmVzdWx0c1wiO1xuXHRjb25zdCByZXN1bHREaXYgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wicmVzdWx0LWl0ZW1cIl0pO1xuXHRyZXN1bHREaXYudGV4dENvbnRlbnQgPSBcIkFydGlzdCAtIFNvbmcgVGl0bGVcIjtcblx0Ly8gRkVUQ0ggU0VBUkNIIFJFU1VMVFNcblxuXHQvLyBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInJlc3VsdHMtY29udGFpbmVyXCJdKTtcblx0Ly8gcmVzdWx0c0NvbnRhaW5lci5hcHBlbmQoKTtcblx0Ly8gZmluYWwgcGFnZSBhcHBlbmRcblx0cGFnZTIuYXBwZW5kKGhlYWRlcjIsIHRleHQyLCBzZWFyY2hDb250YWluZXIpO1xuXHRyZXR1cm4gcGFnZTI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhZ2UyO1xuIiwiaW1wb3J0IGRvbUNyZWF0ZSBmcm9tIFwiLi4vaGVscGVycy9kb21DcmVhdGVcIjtcblxuZnVuY3Rpb24gY3JlYXRlUGFnZTMoKSB7XG5cdGNvbnN0IHBhZ2UzID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhYmNvbnRlbnRcIl0sIHsgaWQ6IFwidGFiM1wiIH0pO1xuXHRjb25zdCBoZWFkZXIzID0gZG9tQ3JlYXRlKFwiaDNcIiwgW1widGFiLWhlYWRlclwiXSk7XG5cdGhlYWRlcjMudGV4dENvbnRlbnQgPSBcIlRhYiAzXCI7XG5cdGNvbnN0IHRleHQzID0gZG9tQ3JlYXRlKFwicFwiKTtcblx0dGV4dDMudGV4dENvbnRlbnQgPVxuXHRcdFwiSGFyZCB0byB1bmRlcnN0YXRlIHRoZSBkZWdyZWUgb2YgYXdlc29tZSBvZiB0aGlzIHRhYiBjb250ZW50XCI7XG5cdHBhZ2UzLmFwcGVuZChoZWFkZXIzLCB0ZXh0Myk7XG5cdHJldHVybiBwYWdlMztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZTM7XG4iLCJpbXBvcnQgZG9tQ3JlYXRlIGZyb20gXCIuLi9oZWxwZXJzL2RvbUNyZWF0ZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQYWdlNCgpIHtcblx0Y29uc3QgcGFnZTQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFiY29udGVudFwiXSwgeyBpZDogXCJ0YWI0XCIgfSk7XG5cdGNvbnN0IGhlYWRlcjQgPSBkb21DcmVhdGUoXCJoM1wiLCBbXCJ0YWItaGVhZGVyXCJdKTtcblx0aGVhZGVyNC50ZXh0Q29udGVudCA9IFwiU2V0dGluZ3NcIjtcblx0Y29uc3QgdGV4dDQgPSBkb21DcmVhdGUoXCJwXCIpO1xuXHR0ZXh0NC50ZXh0Q29udGVudCA9IFwiVGhpcyB0YWIgY29udGVudCBpcyBodW1ibGUgYW5kIGRvZXNuJ3QgaGF2ZSBhbiBlZ29cIjtcblx0Y29uc3QgZ2l0aHViTGluayA9IGRvbUNyZWF0ZShcImFcIiwgW1wibGluay1naXRodWJcIl0sIHtcblx0XHRocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbGV4Z2Vpcy9ESi1yZXF1ZXN0LWFwcFwiLFxuXHRcdHRhcmdldDogXCJfYmxhbmtcIixcblx0fSk7XG5cdGdpdGh1YkxpbmsudGV4dENvbnRlbnQgPSBcIkdJVEhVQiBSRVBPIExJTktcIjtcblx0Y29uc3QgZ2l0aHViTGlua0NvbnRhaW5lciA9IGRvbUNyZWF0ZShcImRpdlwiKTtcblx0Z2l0aHViTGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblx0cGFnZTQuYXBwZW5kKGhlYWRlcjQsIHRleHQ0LCBnaXRodWJMaW5rQ29udGFpbmVyKTtcblx0cmV0dXJuIHBhZ2U0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlNDtcbiIsImltcG9ydCBjcmVhdGVOYXZNZW51IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2TWVudVwiO1xuaW1wb3J0IGNyZWF0ZVBhZ2UxIGZyb20gXCIuL3BhZ2VzL3BhZ2UxXCI7XG5pbXBvcnQgY3JlYXRlUGFnZTIgZnJvbSBcIi4vcGFnZXMvcGFnZTJcIjtcbmltcG9ydCBjcmVhdGVQYWdlMyBmcm9tIFwiLi9wYWdlcy9wYWdlM1wiO1xuaW1wb3J0IGNyZWF0ZVBhZ2U0IGZyb20gXCIuL3BhZ2VzL3BhZ2U0XCI7XG5cbmZ1bmN0aW9uIHJlbmRlckFwcCgpIHtcblx0Y29uc3QgbmF2TWVudSA9IGNyZWF0ZU5hdk1lbnUoKTtcblx0Y29uc3QgcGFnZTEgPSBjcmVhdGVQYWdlMSgpO1xuXHRjb25zdCBwYWdlMiA9IGNyZWF0ZVBhZ2UyKCk7XG5cdGNvbnN0IHBhZ2UzID0gY3JlYXRlUGFnZTMoKTtcblx0Y29uc3QgcGFnZTQgPSBjcmVhdGVQYWdlNCgpO1xuXHQvLyBmaW5hbCBjb250ZW50IGFwcGVuZFxuXHRjb25zdCBjb250ZW50RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdGNvbnRlbnRFbC5hcHBlbmQobmF2TWVudSwgcGFnZTEsIHBhZ2UyLCBwYWdlMywgcGFnZTQpO1xufVxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQXBwO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9