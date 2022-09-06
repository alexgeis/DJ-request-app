"use strict";
(self["webpackChunkdj_request_app"] = self["webpackChunkdj_request_app"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _js_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/render */ "./src/js/render.js");

 // import fetchSpotifyData from "./js/helpers/spotify";
// fetchSpotifyData();

(0,_js_render__WEBPACK_IMPORTED_MODULE_1__["default"])(); // // TAB GUIDE
// 1 - Tab 1
// 2 - Request Page
// 3 - Tab 3
// 4 - Settings

function defaultTabSelect(tabNumber) {
  const tabContent = "tab".concat(tabNumber);
  const tabLink = "tab-link-".concat(tabNumber);
  document.getElementById(tabContent).classList.add("active");
  document.getElementById(tabContent).style.display = "block";
  document.getElementById(tabLink).classList.add("active");
}

defaultTabSelect(1);

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
  const id = "tab".concat(event.target.id.split("-")[2]); // Get all elements with class="tabcontent" and hide them

  const tabcontent = document.getElementsByClassName("tabcontent");

  for (let i = 0; i < tabcontent.length; i += 1) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("active");
  } // Get all elements with class="tab-link" and remove the class "active"


  const tablinks = document.getElementsByClassName("tab-link");

  for (let i = 0; i < tablinks.length; i += 1) {
    tablinks[i].classList.remove("active");
  } // add "active" class to selected link


  event.target.classList.add("active"); // Show the current tab, and add an "active" class to the button that opened the tab

  const activeTab = document.getElementById(id);
  activeTab.style.display = "block";
  activeTab.classList.add("active");
}

function createNavMenu() {
  const tabLink1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("a", ["tab-link"], {
    id: "tab-link-1",
    href: "#"
  });
  tabLink1.textContent = "Link 1";
  const tabLink2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("a", ["tab-link"], {
    id: "tab-link-2",
    href: "#"
  });
  tabLink2.textContent = "Requests";
  const tabLink3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("a", ["tab-link"], {
    id: "tab-link-3",
    href: "#"
  });
  tabLink3.textContent = "Link 3";
  const tabLink4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("a", ["tab-link"], {
    id: "tab-link-4",
    href: "#"
  });
  tabLink4.textContent = "Settings"; // add event listener to all tab links

  tabLink1.addEventListener("click", activateTab);
  tabLink2.addEventListener("click", activateTab);
  tabLink3.addEventListener("click", activateTab);
  tabLink4.addEventListener("click", activateTab); // select tab link 1 by default
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
  const element = document.createElement(arg1); /// / arg 2 = ["array of strings"] - class names to add

  if (Array.isArray(arg2) && arg2.length > 0) {
    for (let i = 0; i < arg2.length; i += 1) {
      const className = arg2[i];
      element.classList.add(className);
    }
  } /// / arg 3 = {object} - attribute name : value


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
/* harmony import */ var _assets_check_bold_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/check-bold.png */ "./src/assets/check-bold.png");
/* harmony import */ var _assets_close_octagon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/close-octagon.png */ "./src/assets/close-octagon.png");
/* harmony import */ var _assets_clock_outline_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/clock-outline.png */ "./src/assets/clock-outline.png");





function createPage1() {
  const page1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["tabcontent"], {
    id: "tab1"
  });
  const header1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", ["tab-header"]);
  header1.textContent = "Request Queue";
  const text1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p");
  text1.textContent = "display below the current list of requested songs";
  const queueDiv = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", [], {
    id: "queueDiv"
  });
  const ULel = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("ul", [], {
    id: "queueList"
  });
  const listEl1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("li", ["queue-list-item"], {
    id: "list-item-1"
  });
  listEl1.textContent = "Song title / Artist";
  const statusImg1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("img", [], {
    id: "statusImg1",
    src: _assets_check_bold_png__WEBPACK_IMPORTED_MODULE_1__
  });
  const statusDiv1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["queue-status"], {
    id: "queueStatus1"
  });
  statusDiv1.appendChild(statusImg1);
  listEl1.appendChild(statusDiv1);
  const listEl2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("li", ["queue-list-item"], {
    id: "list-item-2"
  });
  listEl2.textContent = "Song title / Artist";
  const statusImg2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("img", [], {
    id: "statusImg2",
    src: _assets_close_octagon_png__WEBPACK_IMPORTED_MODULE_2__
  });
  const statusDiv2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["queue-status"], {
    id: "queueStatus2"
  });
  statusDiv2.appendChild(statusImg2);
  listEl2.appendChild(statusDiv2);
  const listEl3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("li", ["queue-list-item"], {
    id: "list-item-3"
  });
  listEl3.textContent = "Song title / Artist";
  const statusImg3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("img", [], {
    id: "statusImg3",
    src: _assets_clock_outline_png__WEBPACK_IMPORTED_MODULE_3__
  });
  const statusDiv3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["queue-status"], {
    id: "queueStatus3"
  });
  statusDiv3.appendChild(statusImg3);
  listEl3.appendChild(statusDiv3);
  const listEl4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("li", ["queue-list-item"], {
    id: "list-item-4"
  });
  listEl4.textContent = "Song title / Artist";
  ULel.append(listEl1, listEl2, listEl3, listEl4);
  queueDiv.appendChild(ULel);
  page1.append(header1, text1, queueDiv);
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
  const page2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["tabcontent"], {
    id: "tab2"
  });
  const header2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", ["tab-header"]);
  header2.textContent = "Request";
  const text2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p");
  text2.textContent = "Enter the song, artist, or album to search through Spotify"; // search form

  const searchForm = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("form", [], {
    action: "/"
  });
  const searchInput = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("input", [], {
    type: "search",
    placeholder: "Search...",
    name: "search"
  });
  const searchButton = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("button", [], {
    type: "submit"
  });
  searchButton.textContent = "Enter";
  const searchContainer = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["search-container"]);
  searchForm.append(searchInput, searchButton);
  searchContainer.appendChild(searchForm); // display search results

  const resultsHeader = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h4", ["results-header"]);
  resultsHeader.textContent = "Results";
  const resultDiv = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["result-item"]);
  resultDiv.textContent = "Artist - Song Title"; // FETCH SEARCH RESULTS
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
  const page3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["tabcontent"], {
    id: "tab3"
  });
  const header3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", ["tab-header"]);
  header3.textContent = "Tab 3";
  const text3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p");
  text3.textContent = "Hard to understate the degree of awesome of this tab content";
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
  const page4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["tabcontent"], {
    id: "tab4"
  });
  const header4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", ["tab-header"]);
  header4.textContent = "Settings";
  const text4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p");
  text4.textContent = "This tab content is humble and doesn't have an ego";
  const githubLink = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("a", ["link-github"], {
    href: "https://github.com/alexgeis/DJ-request-app",
    target: "_blank"
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
  const page4 = (0,_pages_page4__WEBPACK_IMPORTED_MODULE_4__["default"])(); // final content append

  const contentEl = document.getElementById("content");
  contentEl.append(navMenu, page1, page2, page3, page4);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderApp);

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/check-bold.png":
/*!***********************************!*\
  !*** ./src/assets/check-bold.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a858dd24ca84e206c2e7.png";

/***/ }),

/***/ "./src/assets/clock-outline.png":
/*!**************************************!*\
  !*** ./src/assets/clock-outline.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55bf2c6d48582f501e4a.png";

/***/ }),

/***/ "./src/assets/close-octagon.png":
/*!**************************************!*\
  !*** ./src/assets/close-octagon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "303240d7994c53162b92.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUUsOERBQVMsQ0FBQyxHQUFELEVBQU0sQ0FBQyxhQUFELENBQU4sRUFBdUI7SUFDbERlLElBQUksRUFBRSw0Q0FENEM7SUFFbERYLE1BQU0sRUFBRTtFQUYwQyxDQUF2QixDQUE1QjtFQUlBd0UsVUFBVSxDQUFDNUQsV0FBWCxHQUF5QixrQkFBekI7RUFDQSxNQUFNNkQsbUJBQW1CLEdBQUc3RSw4REFBUyxDQUFDLEtBQUQsQ0FBckM7RUFDQTZFLG1CQUFtQixDQUFDL0IsV0FBcEIsQ0FBZ0M4QixVQUFoQztFQUNBSCxLQUFLLENBQUNuRCxNQUFOLENBQWFvRCxPQUFiLEVBQXNCQyxLQUF0QixFQUE2QkUsbUJBQTdCO0VBQ0EsT0FBT0osS0FBUDtBQUNBOztBQUVELGlFQUFlRCxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU25GLFNBQVQsR0FBcUI7RUFDcEIsTUFBTXlGLE9BQU8sR0FBR2pFLCtEQUFhLEVBQTdCO0VBQ0EsTUFBTXdCLEtBQUssR0FBR0Qsd0RBQVcsRUFBekI7RUFDQSxNQUFNbUIsS0FBSyxHQUFHRCx3REFBVyxFQUF6QjtFQUNBLE1BQU1lLEtBQUssR0FBR0Qsd0RBQVcsRUFBekI7RUFDQSxNQUFNSyxLQUFLLEdBQUdELHdEQUFXLEVBQXpCLENBTG9CLENBTXBCOztFQUNBLE1BQU1PLFNBQVMsR0FBR3JGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFsQjtFQUNBb0YsU0FBUyxDQUFDekQsTUFBVixDQUFpQndELE9BQWpCLEVBQTBCekMsS0FBMUIsRUFBaUNrQixLQUFqQyxFQUF3Q2MsS0FBeEMsRUFBK0NJLEtBQS9DO0FBQ0E7O0FBQ0QsaUVBQWVwRixTQUFmOzs7Ozs7Ozs7OztBQ2hCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RqLXJlcXVlc3QtYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2RqLXJlcXVlc3QtYXBwLy4vc3JjL2pzL2NvbXBvbmVudHMvbmF2TWVudS5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9oZWxwZXJzL2RvbUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9wYWdlcy9wYWdlMS5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9wYWdlcy9wYWdlMi5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9wYWdlcy9wYWdlMy5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9wYWdlcy9wYWdlNC5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvY3NzL3N0eWxlLnNjc3M/NjJhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2Nzcy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgcmVuZGVyQXBwIGZyb20gXCIuL2pzL3JlbmRlclwiO1xuLy8gaW1wb3J0IGZldGNoU3BvdGlmeURhdGEgZnJvbSBcIi4vanMvaGVscGVycy9zcG90aWZ5XCI7XG4vLyBmZXRjaFNwb3RpZnlEYXRhKCk7XG5cbnJlbmRlckFwcCgpO1xuXG4vLyAvLyBUQUIgR1VJREVcbi8vIDEgLSBUYWIgMVxuLy8gMiAtIFJlcXVlc3QgUGFnZVxuLy8gMyAtIFRhYiAzXG4vLyA0IC0gU2V0dGluZ3NcbmZ1bmN0aW9uIGRlZmF1bHRUYWJTZWxlY3QodGFiTnVtYmVyKSB7XG5cdGNvbnN0IHRhYkNvbnRlbnQgPSBgdGFiJHt0YWJOdW1iZXJ9YDtcblx0Y29uc3QgdGFiTGluayA9IGB0YWItbGluay0ke3RhYk51bWJlcn1gO1xuXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYkNvbnRlbnQpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYkNvbnRlbnQpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYkxpbmspLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5kZWZhdWx0VGFiU2VsZWN0KDEpO1xuIiwiaW1wb3J0IGRvbUNyZWF0ZSBmcm9tIFwiLi4vaGVscGVycy9kb21DcmVhdGVcIjtcblxuZnVuY3Rpb24gYWN0aXZhdGVUYWIoZXZlbnQpIHtcblx0Ly8gQ3JlYXRlIHRoZSB0YWIgY29udGVudCBJRCBieSBhbHRlcmluZyB0aGUgaW5jb21pbmcgdGFiIGxpbmsgSURcblx0Ly8gaW5wdXQ6IFwidGFiLWxpbmstMVwiICA9PiAgb3V0cHV0OiBcInRhYjFcIlxuXHRjb25zdCBpZCA9IGB0YWIke2V2ZW50LnRhcmdldC5pZC5zcGxpdChcIi1cIilbMl19YDtcblx0Ly8gR2V0IGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzPVwidGFiY29udGVudFwiIGFuZCBoaWRlIHRoZW1cblx0Y29uc3QgdGFiY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJjb250ZW50XCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRhYmNvbnRlbnQubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR0YWJjb250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR0YWJjb250ZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdH1cblxuXHQvLyBHZXQgYWxsIGVsZW1lbnRzIHdpdGggY2xhc3M9XCJ0YWItbGlua1wiIGFuZCByZW1vdmUgdGhlIGNsYXNzIFwiYWN0aXZlXCJcblx0Y29uc3QgdGFibGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiLWxpbmtcIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdGFibGlua3MubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR0YWJsaW5rc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHR9XG5cdC8vIGFkZCBcImFjdGl2ZVwiIGNsYXNzIHRvIHNlbGVjdGVkIGxpbmtcblx0ZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdC8vIFNob3cgdGhlIGN1cnJlbnQgdGFiLCBhbmQgYWRkIGFuIFwiYWN0aXZlXCIgY2xhc3MgdG8gdGhlIGJ1dHRvbiB0aGF0IG9wZW5lZCB0aGUgdGFiXG5cdGNvbnN0IGFjdGl2ZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0YWN0aXZlVGFiLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdGFjdGl2ZVRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZNZW51KCkge1xuXHRjb25zdCB0YWJMaW5rMSA9IGRvbUNyZWF0ZShcImFcIiwgW1widGFiLWxpbmtcIl0sIHtcblx0XHRpZDogXCJ0YWItbGluay0xXCIsXG5cdFx0aHJlZjogXCIjXCIsXG5cdH0pO1xuXHR0YWJMaW5rMS50ZXh0Q29udGVudCA9IFwiTGluayAxXCI7XG5cdGNvbnN0IHRhYkxpbmsyID0gZG9tQ3JlYXRlKFwiYVwiLCBbXCJ0YWItbGlua1wiXSwge1xuXHRcdGlkOiBcInRhYi1saW5rLTJcIixcblx0XHRocmVmOiBcIiNcIixcblx0fSk7XG5cdHRhYkxpbmsyLnRleHRDb250ZW50ID0gXCJSZXF1ZXN0c1wiO1xuXHRjb25zdCB0YWJMaW5rMyA9IGRvbUNyZWF0ZShcImFcIiwgW1widGFiLWxpbmtcIl0sIHtcblx0XHRpZDogXCJ0YWItbGluay0zXCIsXG5cdFx0aHJlZjogXCIjXCIsXG5cdH0pO1xuXHR0YWJMaW5rMy50ZXh0Q29udGVudCA9IFwiTGluayAzXCI7XG5cdGNvbnN0IHRhYkxpbms0ID0gZG9tQ3JlYXRlKFwiYVwiLCBbXCJ0YWItbGlua1wiXSwge1xuXHRcdGlkOiBcInRhYi1saW5rLTRcIixcblx0XHRocmVmOiBcIiNcIixcblx0fSk7XG5cdHRhYkxpbms0LnRleHRDb250ZW50ID0gXCJTZXR0aW5nc1wiO1xuXHQvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gYWxsIHRhYiBsaW5rc1xuXHR0YWJMaW5rMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWN0aXZhdGVUYWIpO1xuXHR0YWJMaW5rMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWN0aXZhdGVUYWIpO1xuXHR0YWJMaW5rMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWN0aXZhdGVUYWIpO1xuXHR0YWJMaW5rNC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWN0aXZhdGVUYWIpO1xuXHQvLyBzZWxlY3QgdGFiIGxpbmsgMSBieSBkZWZhdWx0XG5cblx0Ly8gY3JlYXRlIG5hdiBtZW51IGFuZCBhcHBlbmRcblx0Y29uc3QgbmF2RWwgPSBkb21DcmVhdGUoXCJuYXZcIiwgW1wibmF2XCJdKTtcblx0bmF2RWwuYXBwZW5kKHRhYkxpbmsxLCB0YWJMaW5rMiwgdGFiTGluazMsIHRhYkxpbms0KTtcblx0cmV0dXJuIG5hdkVsO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2TWVudTtcbiIsIi8vIERPTSBDUkVBVEUgRlVOQ1RJT05cblxuLy8gYXJnIDEgPSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuLy8gYXJnIDIgPSBjbGFzcyBuYW1lcyB0byBhZGRcbi8vIGFyZyAzID0gb2JqZWN0IC0gYXR0cmlidXRlcyB0byBhZGQgLT4gYXR0cmlidXRlIDogdmFsdWVcbmZ1bmN0aW9uIGRvbUNyZWF0ZShhcmcxLCBhcmcyLCBhcmczKSB7XG5cdC8vLyAvIGFyZyAxID0gXCJzdHJpbmdcIiAtIG5hbWUgb2YgSFRNTCBlbGVtZW50XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZzEpO1xuXHQvLy8gLyBhcmcgMiA9IFtcImFycmF5IG9mIHN0cmluZ3NcIl0gLSBjbGFzcyBuYW1lcyB0byBhZGRcblx0aWYgKEFycmF5LmlzQXJyYXkoYXJnMikgJiYgYXJnMi5sZW5ndGggPiAwKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmcyLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSBhcmcyW2ldO1xuXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0fVxuXHR9XG5cdC8vLyAvIGFyZyAzID0ge29iamVjdH0gLSBhdHRyaWJ1dGUgbmFtZSA6IHZhbHVlXG5cdGZvciAoY29uc3QgYXR0cmlidXRlIGluIGFyZzMpIHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGFyZzNbYXR0cmlidXRlXSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUNyZWF0ZTtcbiIsImltcG9ydCBkb21DcmVhdGUgZnJvbSBcIi4uL2hlbHBlcnMvZG9tQ3JlYXRlXCI7XG5pbXBvcnQgY2hlY2ttYXJrIGZyb20gXCIuLi8uLi9hc3NldHMvY2hlY2stYm9sZC5wbmdcIjtcbmltcG9ydCByZWplY3RNYXJrIGZyb20gXCIuLi8uLi9hc3NldHMvY2xvc2Utb2N0YWdvbi5wbmdcIjtcbmltcG9ydCBjbG9jayBmcm9tIFwiLi4vLi4vYXNzZXRzL2Nsb2NrLW91dGxpbmUucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2UxKCkge1xuXHRjb25zdCBwYWdlMSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YWJjb250ZW50XCJdLCB7IGlkOiBcInRhYjFcIiB9KTtcblx0Y29uc3QgaGVhZGVyMSA9IGRvbUNyZWF0ZShcImgzXCIsIFtcInRhYi1oZWFkZXJcIl0pO1xuXHRoZWFkZXIxLnRleHRDb250ZW50ID0gXCJSZXF1ZXN0IFF1ZXVlXCI7XG5cblx0Y29uc3QgdGV4dDEgPSBkb21DcmVhdGUoXCJwXCIpO1xuXHR0ZXh0MS50ZXh0Q29udGVudCA9IFwiZGlzcGxheSBiZWxvdyB0aGUgY3VycmVudCBsaXN0IG9mIHJlcXVlc3RlZCBzb25nc1wiO1xuXG5cdGNvbnN0IHF1ZXVlRGl2ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtdLCB7IGlkOiBcInF1ZXVlRGl2XCIgfSk7XG5cblx0Y29uc3QgVUxlbCA9IGRvbUNyZWF0ZShcInVsXCIsIFtdLCB7IGlkOiBcInF1ZXVlTGlzdFwiIH0pO1xuXHRjb25zdCBsaXN0RWwxID0gZG9tQ3JlYXRlKFwibGlcIiwgW1wicXVldWUtbGlzdC1pdGVtXCJdLCB7IGlkOiBcImxpc3QtaXRlbS0xXCIgfSk7XG5cdGxpc3RFbDEudGV4dENvbnRlbnQgPSBcIlNvbmcgdGl0bGUgLyBBcnRpc3RcIjtcblxuXHRjb25zdCBzdGF0dXNJbWcxID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtdLCB7XG5cdFx0aWQ6IFwic3RhdHVzSW1nMVwiLFxuXHRcdHNyYzogY2hlY2ttYXJrLFxuXHR9KTtcblx0Y29uc3Qgc3RhdHVzRGl2MSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJxdWV1ZS1zdGF0dXNcIl0sIHsgaWQ6IFwicXVldWVTdGF0dXMxXCIgfSk7XG5cdHN0YXR1c0RpdjEuYXBwZW5kQ2hpbGQoc3RhdHVzSW1nMSk7XG5cdGxpc3RFbDEuYXBwZW5kQ2hpbGQoc3RhdHVzRGl2MSk7XG5cblx0Y29uc3QgbGlzdEVsMiA9IGRvbUNyZWF0ZShcImxpXCIsIFtcInF1ZXVlLWxpc3QtaXRlbVwiXSwgeyBpZDogXCJsaXN0LWl0ZW0tMlwiIH0pO1xuXHRsaXN0RWwyLnRleHRDb250ZW50ID0gXCJTb25nIHRpdGxlIC8gQXJ0aXN0XCI7XG5cblx0Y29uc3Qgc3RhdHVzSW1nMiA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXSwge1xuXHRcdGlkOiBcInN0YXR1c0ltZzJcIixcblx0XHRzcmM6IHJlamVjdE1hcmssXG5cdH0pO1xuXHRjb25zdCBzdGF0dXNEaXYyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInF1ZXVlLXN0YXR1c1wiXSwgeyBpZDogXCJxdWV1ZVN0YXR1czJcIiB9KTtcblx0c3RhdHVzRGl2Mi5hcHBlbmRDaGlsZChzdGF0dXNJbWcyKTtcblx0bGlzdEVsMi5hcHBlbmRDaGlsZChzdGF0dXNEaXYyKTtcblxuXHRjb25zdCBsaXN0RWwzID0gZG9tQ3JlYXRlKFwibGlcIiwgW1wicXVldWUtbGlzdC1pdGVtXCJdLCB7IGlkOiBcImxpc3QtaXRlbS0zXCIgfSk7XG5cdGxpc3RFbDMudGV4dENvbnRlbnQgPSBcIlNvbmcgdGl0bGUgLyBBcnRpc3RcIjtcblxuXHRjb25zdCBzdGF0dXNJbWczID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtdLCB7XG5cdFx0aWQ6IFwic3RhdHVzSW1nM1wiLFxuXHRcdHNyYzogY2xvY2ssXG5cdH0pO1xuXHRjb25zdCBzdGF0dXNEaXYzID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInF1ZXVlLXN0YXR1c1wiXSwgeyBpZDogXCJxdWV1ZVN0YXR1czNcIiB9KTtcblx0c3RhdHVzRGl2My5hcHBlbmRDaGlsZChzdGF0dXNJbWczKTtcblx0bGlzdEVsMy5hcHBlbmRDaGlsZChzdGF0dXNEaXYzKTtcblxuXHRjb25zdCBsaXN0RWw0ID0gZG9tQ3JlYXRlKFwibGlcIiwgW1wicXVldWUtbGlzdC1pdGVtXCJdLCB7IGlkOiBcImxpc3QtaXRlbS00XCIgfSk7XG5cdGxpc3RFbDQudGV4dENvbnRlbnQgPSBcIlNvbmcgdGl0bGUgLyBBcnRpc3RcIjtcblxuXHRVTGVsLmFwcGVuZChsaXN0RWwxLCBsaXN0RWwyLCBsaXN0RWwzLCBsaXN0RWw0KTtcblx0cXVldWVEaXYuYXBwZW5kQ2hpbGQoVUxlbCk7XG5cblx0cGFnZTEuYXBwZW5kKGhlYWRlcjEsIHRleHQxLCBxdWV1ZURpdik7XG5cdHJldHVybiBwYWdlMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZTE7XG4iLCJpbXBvcnQgZG9tQ3JlYXRlIGZyb20gXCIuLi9oZWxwZXJzL2RvbUNyZWF0ZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQYWdlMigpIHtcblx0Y29uc3QgcGFnZTIgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFiY29udGVudFwiXSwgeyBpZDogXCJ0YWIyXCIgfSk7XG5cdGNvbnN0IGhlYWRlcjIgPSBkb21DcmVhdGUoXCJoM1wiLCBbXCJ0YWItaGVhZGVyXCJdKTtcblx0aGVhZGVyMi50ZXh0Q29udGVudCA9IFwiUmVxdWVzdFwiO1xuXHRjb25zdCB0ZXh0MiA9IGRvbUNyZWF0ZShcInBcIik7XG5cdHRleHQyLnRleHRDb250ZW50ID1cblx0XHRcIkVudGVyIHRoZSBzb25nLCBhcnRpc3QsIG9yIGFsYnVtIHRvIHNlYXJjaCB0aHJvdWdoIFNwb3RpZnlcIjtcblxuXHQvLyBzZWFyY2ggZm9ybVxuXHRjb25zdCBzZWFyY2hGb3JtID0gZG9tQ3JlYXRlKFwiZm9ybVwiLCBbXSwgeyBhY3Rpb246IFwiL1wiIH0pO1xuXHRjb25zdCBzZWFyY2hJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtdLCB7XG5cdFx0dHlwZTogXCJzZWFyY2hcIixcblx0XHRwbGFjZWhvbGRlcjogXCJTZWFyY2guLi5cIixcblx0XHRuYW1lOiBcInNlYXJjaFwiLFxuXHR9KTtcblx0Y29uc3Qgc2VhcmNoQnV0dG9uID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtdLCB7IHR5cGU6IFwic3VibWl0XCIgfSk7XG5cdHNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRW50ZXJcIjtcblx0Y29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInNlYXJjaC1jb250YWluZXJcIl0pO1xuXHRzZWFyY2hGb3JtLmFwcGVuZChzZWFyY2hJbnB1dCwgc2VhcmNoQnV0dG9uKTtcblx0c2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEZvcm0pO1xuXG5cdC8vIGRpc3BsYXkgc2VhcmNoIHJlc3VsdHNcblx0Y29uc3QgcmVzdWx0c0hlYWRlciA9IGRvbUNyZWF0ZShcImg0XCIsIFtcInJlc3VsdHMtaGVhZGVyXCJdKTtcblx0cmVzdWx0c0hlYWRlci50ZXh0Q29udGVudCA9IFwiUmVzdWx0c1wiO1xuXHRjb25zdCByZXN1bHREaXYgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wicmVzdWx0LWl0ZW1cIl0pO1xuXHRyZXN1bHREaXYudGV4dENvbnRlbnQgPSBcIkFydGlzdCAtIFNvbmcgVGl0bGVcIjtcblxuXHQvLyBGRVRDSCBTRUFSQ0ggUkVTVUxUU1xuXG5cdC8vIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wicmVzdWx0cy1jb250YWluZXJcIl0pO1xuXHQvLyByZXN1bHRzQ29udGFpbmVyLmFwcGVuZCgpO1xuXHQvLyBmaW5hbCBwYWdlIGFwcGVuZFxuXHRwYWdlMi5hcHBlbmQoaGVhZGVyMiwgdGV4dDIsIHNlYXJjaENvbnRhaW5lcik7XG5cdHJldHVybiBwYWdlMjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZTI7XG4iLCJpbXBvcnQgZG9tQ3JlYXRlIGZyb20gXCIuLi9oZWxwZXJzL2RvbUNyZWF0ZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQYWdlMygpIHtcblx0Y29uc3QgcGFnZTMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFiY29udGVudFwiXSwgeyBpZDogXCJ0YWIzXCIgfSk7XG5cdGNvbnN0IGhlYWRlcjMgPSBkb21DcmVhdGUoXCJoM1wiLCBbXCJ0YWItaGVhZGVyXCJdKTtcblx0aGVhZGVyMy50ZXh0Q29udGVudCA9IFwiVGFiIDNcIjtcblx0Y29uc3QgdGV4dDMgPSBkb21DcmVhdGUoXCJwXCIpO1xuXHR0ZXh0My50ZXh0Q29udGVudCA9XG5cdFx0XCJIYXJkIHRvIHVuZGVyc3RhdGUgdGhlIGRlZ3JlZSBvZiBhd2Vzb21lIG9mIHRoaXMgdGFiIGNvbnRlbnRcIjtcblx0cGFnZTMuYXBwZW5kKGhlYWRlcjMsIHRleHQzKTtcblx0cmV0dXJuIHBhZ2UzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlMztcbiIsImltcG9ydCBkb21DcmVhdGUgZnJvbSBcIi4uL2hlbHBlcnMvZG9tQ3JlYXRlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2U0KCkge1xuXHRjb25zdCBwYWdlNCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YWJjb250ZW50XCJdLCB7IGlkOiBcInRhYjRcIiB9KTtcblx0Y29uc3QgaGVhZGVyNCA9IGRvbUNyZWF0ZShcImgzXCIsIFtcInRhYi1oZWFkZXJcIl0pO1xuXHRoZWFkZXI0LnRleHRDb250ZW50ID0gXCJTZXR0aW5nc1wiO1xuXHRjb25zdCB0ZXh0NCA9IGRvbUNyZWF0ZShcInBcIik7XG5cdHRleHQ0LnRleHRDb250ZW50ID0gXCJUaGlzIHRhYiBjb250ZW50IGlzIGh1bWJsZSBhbmQgZG9lc24ndCBoYXZlIGFuIGVnb1wiO1xuXHRjb25zdCBnaXRodWJMaW5rID0gZG9tQ3JlYXRlKFwiYVwiLCBbXCJsaW5rLWdpdGh1YlwiXSwge1xuXHRcdGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FsZXhnZWlzL0RKLXJlcXVlc3QtYXBwXCIsXG5cdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHR9KTtcblx0Z2l0aHViTGluay50ZXh0Q29udGVudCA9IFwiR0lUSFVCIFJFUE8gTElOS1wiO1xuXHRjb25zdCBnaXRodWJMaW5rQ29udGFpbmVyID0gZG9tQ3JlYXRlKFwiZGl2XCIpO1xuXHRnaXRodWJMaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXHRwYWdlNC5hcHBlbmQoaGVhZGVyNCwgdGV4dDQsIGdpdGh1YkxpbmtDb250YWluZXIpO1xuXHRyZXR1cm4gcGFnZTQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhZ2U0O1xuIiwiaW1wb3J0IGNyZWF0ZU5hdk1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZNZW51XCI7XG5pbXBvcnQgY3JlYXRlUGFnZTEgZnJvbSBcIi4vcGFnZXMvcGFnZTFcIjtcbmltcG9ydCBjcmVhdGVQYWdlMiBmcm9tIFwiLi9wYWdlcy9wYWdlMlwiO1xuaW1wb3J0IGNyZWF0ZVBhZ2UzIGZyb20gXCIuL3BhZ2VzL3BhZ2UzXCI7XG5pbXBvcnQgY3JlYXRlUGFnZTQgZnJvbSBcIi4vcGFnZXMvcGFnZTRcIjtcblxuZnVuY3Rpb24gcmVuZGVyQXBwKCkge1xuXHRjb25zdCBuYXZNZW51ID0gY3JlYXRlTmF2TWVudSgpO1xuXHRjb25zdCBwYWdlMSA9IGNyZWF0ZVBhZ2UxKCk7XG5cdGNvbnN0IHBhZ2UyID0gY3JlYXRlUGFnZTIoKTtcblx0Y29uc3QgcGFnZTMgPSBjcmVhdGVQYWdlMygpO1xuXHRjb25zdCBwYWdlNCA9IGNyZWF0ZVBhZ2U0KCk7XG5cdC8vIGZpbmFsIGNvbnRlbnQgYXBwZW5kXG5cdGNvbnN0IGNvbnRlbnRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblx0Y29udGVudEVsLmFwcGVuZChuYXZNZW51LCBwYWdlMSwgcGFnZTIsIHBhZ2UzLCBwYWdlNCk7XG59XG5leHBvcnQgZGVmYXVsdCByZW5kZXJBcHA7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsicmVuZGVyQXBwIiwiZGVmYXVsdFRhYlNlbGVjdCIsInRhYk51bWJlciIsInRhYkNvbnRlbnQiLCJ0YWJMaW5rIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiZGlzcGxheSIsImRvbUNyZWF0ZSIsImFjdGl2YXRlVGFiIiwiZXZlbnQiLCJpZCIsInRhcmdldCIsInNwbGl0IiwidGFiY29udGVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwicmVtb3ZlIiwidGFibGlua3MiLCJhY3RpdmVUYWIiLCJjcmVhdGVOYXZNZW51IiwidGFiTGluazEiLCJocmVmIiwidGV4dENvbnRlbnQiLCJ0YWJMaW5rMiIsInRhYkxpbmszIiwidGFiTGluazQiLCJhZGRFdmVudExpc3RlbmVyIiwibmF2RWwiLCJhcHBlbmQiLCJhcmcxIiwiYXJnMiIsImFyZzMiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsImNsYXNzTmFtZSIsImF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImNoZWNrbWFyayIsInJlamVjdE1hcmsiLCJjbG9jayIsImNyZWF0ZVBhZ2UxIiwicGFnZTEiLCJoZWFkZXIxIiwidGV4dDEiLCJxdWV1ZURpdiIsIlVMZWwiLCJsaXN0RWwxIiwic3RhdHVzSW1nMSIsInNyYyIsInN0YXR1c0RpdjEiLCJhcHBlbmRDaGlsZCIsImxpc3RFbDIiLCJzdGF0dXNJbWcyIiwic3RhdHVzRGl2MiIsImxpc3RFbDMiLCJzdGF0dXNJbWczIiwic3RhdHVzRGl2MyIsImxpc3RFbDQiLCJjcmVhdGVQYWdlMiIsInBhZ2UyIiwiaGVhZGVyMiIsInRleHQyIiwic2VhcmNoRm9ybSIsImFjdGlvbiIsInNlYXJjaElucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsInNlYXJjaEJ1dHRvbiIsInNlYXJjaENvbnRhaW5lciIsInJlc3VsdHNIZWFkZXIiLCJyZXN1bHREaXYiLCJjcmVhdGVQYWdlMyIsInBhZ2UzIiwiaGVhZGVyMyIsInRleHQzIiwiY3JlYXRlUGFnZTQiLCJwYWdlNCIsImhlYWRlcjQiLCJ0ZXh0NCIsImdpdGh1YkxpbmsiLCJnaXRodWJMaW5rQ29udGFpbmVyIiwibmF2TWVudSIsImNvbnRlbnRFbCJdLCJzb3VyY2VSb290IjoiIn0=