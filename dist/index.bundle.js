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
  tabLink1.textContent = "Queue";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUUsOERBQVMsQ0FBQyxHQUFELEVBQU0sQ0FBQyxhQUFELENBQU4sRUFBdUI7SUFDbERlLElBQUksRUFBRSw0Q0FENEM7SUFFbERYLE1BQU0sRUFBRTtFQUYwQyxDQUF2QixDQUE1QjtFQUlBd0UsVUFBVSxDQUFDNUQsV0FBWCxHQUF5QixrQkFBekI7RUFDQSxNQUFNNkQsbUJBQW1CLEdBQUc3RSw4REFBUyxDQUFDLEtBQUQsQ0FBckM7RUFDQTZFLG1CQUFtQixDQUFDL0IsV0FBcEIsQ0FBZ0M4QixVQUFoQztFQUNBSCxLQUFLLENBQUNuRCxNQUFOLENBQWFvRCxPQUFiLEVBQXNCQyxLQUF0QixFQUE2QkUsbUJBQTdCO0VBQ0EsT0FBT0osS0FBUDtBQUNBOztBQUVELGlFQUFlRCxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU25GLFNBQVQsR0FBcUI7RUFDcEIsTUFBTXlGLE9BQU8sR0FBR2pFLCtEQUFhLEVBQTdCO0VBQ0EsTUFBTXdCLEtBQUssR0FBR0Qsd0RBQVcsRUFBekI7RUFDQSxNQUFNbUIsS0FBSyxHQUFHRCx3REFBVyxFQUF6QjtFQUNBLE1BQU1lLEtBQUssR0FBR0Qsd0RBQVcsRUFBekI7RUFDQSxNQUFNSyxLQUFLLEdBQUdELHdEQUFXLEVBQXpCLENBTG9CLENBTXBCOztFQUNBLE1BQU1PLFNBQVMsR0FBR3JGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFsQjtFQUNBb0YsU0FBUyxDQUFDekQsTUFBVixDQUFpQndELE9BQWpCLEVBQTBCekMsS0FBMUIsRUFBaUNrQixLQUFqQyxFQUF3Q2MsS0FBeEMsRUFBK0NJLEtBQS9DO0FBQ0E7O0FBQ0QsaUVBQWVwRixTQUFmOzs7Ozs7Ozs7OztBQ2hCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RqLXJlcXVlc3QtYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2RqLXJlcXVlc3QtYXBwLy4vc3JjL2pzL2NvbXBvbmVudHMvbmF2TWVudS5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9oZWxwZXJzL2RvbUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9wYWdlcy9wYWdlMS5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9wYWdlcy9wYWdlMi5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9wYWdlcy9wYWdlMy5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9wYWdlcy9wYWdlNC5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvY3NzL3N0eWxlLnNjc3M/NjJhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2Nzcy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgcmVuZGVyQXBwIGZyb20gXCIuL2pzL3JlbmRlclwiO1xuLy8gaW1wb3J0IGZldGNoU3BvdGlmeURhdGEgZnJvbSBcIi4vanMvaGVscGVycy9zcG90aWZ5XCI7XG4vLyBmZXRjaFNwb3RpZnlEYXRhKCk7XG5cbnJlbmRlckFwcCgpO1xuXG4vLyAvLyBUQUIgR1VJREVcbi8vIDEgLSBUYWIgMVxuLy8gMiAtIFJlcXVlc3QgUGFnZVxuLy8gMyAtIFRhYiAzXG4vLyA0IC0gU2V0dGluZ3NcbmZ1bmN0aW9uIGRlZmF1bHRUYWJTZWxlY3QodGFiTnVtYmVyKSB7XG5cdGNvbnN0IHRhYkNvbnRlbnQgPSBgdGFiJHt0YWJOdW1iZXJ9YDtcblx0Y29uc3QgdGFiTGluayA9IGB0YWItbGluay0ke3RhYk51bWJlcn1gO1xuXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYkNvbnRlbnQpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYkNvbnRlbnQpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYkxpbmspLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5kZWZhdWx0VGFiU2VsZWN0KDEpO1xuIiwiaW1wb3J0IGRvbUNyZWF0ZSBmcm9tIFwiLi4vaGVscGVycy9kb21DcmVhdGVcIjtcblxuZnVuY3Rpb24gYWN0aXZhdGVUYWIoZXZlbnQpIHtcblx0Ly8gQ3JlYXRlIHRoZSB0YWIgY29udGVudCBJRCBieSBhbHRlcmluZyB0aGUgaW5jb21pbmcgdGFiIGxpbmsgSURcblx0Ly8gaW5wdXQ6IFwidGFiLWxpbmstMVwiICA9PiAgb3V0cHV0OiBcInRhYjFcIlxuXHRjb25zdCBpZCA9IGB0YWIke2V2ZW50LnRhcmdldC5pZC5zcGxpdChcIi1cIilbMl19YDtcblx0Ly8gR2V0IGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzPVwidGFiY29udGVudFwiIGFuZCBoaWRlIHRoZW1cblx0Y29uc3QgdGFiY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJjb250ZW50XCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRhYmNvbnRlbnQubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR0YWJjb250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR0YWJjb250ZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdH1cblxuXHQvLyBHZXQgYWxsIGVsZW1lbnRzIHdpdGggY2xhc3M9XCJ0YWItbGlua1wiIGFuZCByZW1vdmUgdGhlIGNsYXNzIFwiYWN0aXZlXCJcblx0Y29uc3QgdGFibGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiLWxpbmtcIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdGFibGlua3MubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR0YWJsaW5rc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHR9XG5cdC8vIGFkZCBcImFjdGl2ZVwiIGNsYXNzIHRvIHNlbGVjdGVkIGxpbmtcblx0ZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdC8vIFNob3cgdGhlIGN1cnJlbnQgdGFiLCBhbmQgYWRkIGFuIFwiYWN0aXZlXCIgY2xhc3MgdG8gdGhlIGJ1dHRvbiB0aGF0IG9wZW5lZCB0aGUgdGFiXG5cdGNvbnN0IGFjdGl2ZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0YWN0aXZlVGFiLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdGFjdGl2ZVRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZNZW51KCkge1xuXHRjb25zdCB0YWJMaW5rMSA9IGRvbUNyZWF0ZShcImFcIiwgW1widGFiLWxpbmtcIl0sIHtcblx0XHRpZDogXCJ0YWItbGluay0xXCIsXG5cdFx0aHJlZjogXCIjXCIsXG5cdH0pO1xuXHR0YWJMaW5rMS50ZXh0Q29udGVudCA9IFwiUXVldWVcIjtcblx0Y29uc3QgdGFiTGluazIgPSBkb21DcmVhdGUoXCJhXCIsIFtcInRhYi1saW5rXCJdLCB7XG5cdFx0aWQ6IFwidGFiLWxpbmstMlwiLFxuXHRcdGhyZWY6IFwiI1wiLFxuXHR9KTtcblx0dGFiTGluazIudGV4dENvbnRlbnQgPSBcIlJlcXVlc3RzXCI7XG5cdGNvbnN0IHRhYkxpbmszID0gZG9tQ3JlYXRlKFwiYVwiLCBbXCJ0YWItbGlua1wiXSwge1xuXHRcdGlkOiBcInRhYi1saW5rLTNcIixcblx0XHRocmVmOiBcIiNcIixcblx0fSk7XG5cdHRhYkxpbmszLnRleHRDb250ZW50ID0gXCJMaW5rIDNcIjtcblx0Y29uc3QgdGFiTGluazQgPSBkb21DcmVhdGUoXCJhXCIsIFtcInRhYi1saW5rXCJdLCB7XG5cdFx0aWQ6IFwidGFiLWxpbmstNFwiLFxuXHRcdGhyZWY6IFwiI1wiLFxuXHR9KTtcblx0dGFiTGluazQudGV4dENvbnRlbnQgPSBcIlNldHRpbmdzXCI7XG5cdC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBhbGwgdGFiIGxpbmtzXG5cdHRhYkxpbmsxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3RpdmF0ZVRhYik7XG5cdHRhYkxpbmsyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3RpdmF0ZVRhYik7XG5cdHRhYkxpbmszLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3RpdmF0ZVRhYik7XG5cdHRhYkxpbms0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3RpdmF0ZVRhYik7XG5cdC8vIHNlbGVjdCB0YWIgbGluayAxIGJ5IGRlZmF1bHRcblxuXHQvLyBjcmVhdGUgbmF2IG1lbnUgYW5kIGFwcGVuZFxuXHRjb25zdCBuYXZFbCA9IGRvbUNyZWF0ZShcIm5hdlwiLCBbXCJuYXZcIl0pO1xuXHRuYXZFbC5hcHBlbmQodGFiTGluazEsIHRhYkxpbmsyLCB0YWJMaW5rMywgdGFiTGluazQpO1xuXHRyZXR1cm4gbmF2RWw7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXZNZW51O1xuIiwiLy8gRE9NIENSRUFURSBGVU5DVElPTlxuXG4vLyBhcmcgMSA9IG5hbWUgb2YgSFRNTCBlbGVtZW50XG4vLyBhcmcgMiA9IGNsYXNzIG5hbWVzIHRvIGFkZFxuLy8gYXJnIDMgPSBvYmplY3QgLSBhdHRyaWJ1dGVzIHRvIGFkZCAtPiBhdHRyaWJ1dGUgOiB2YWx1ZVxuZnVuY3Rpb24gZG9tQ3JlYXRlKGFyZzEsIGFyZzIsIGFyZzMpIHtcblx0Ly8vIC8gYXJnIDEgPSBcInN0cmluZ1wiIC0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJnMSk7XG5cdC8vLyAvIGFyZyAyID0gW1wiYXJyYXkgb2Ygc3RyaW5nc1wiXSAtIGNsYXNzIG5hbWVzIHRvIGFkZFxuXHRpZiAoQXJyYXkuaXNBcnJheShhcmcyKSAmJiBhcmcyLmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyZzIubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IGFyZzJbaV07XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0XHR9XG5cdH1cblx0Ly8vIC8gYXJnIDMgPSB7b2JqZWN0fSAtIGF0dHJpYnV0ZSBuYW1lIDogdmFsdWVcblx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgaW4gYXJnMykge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXJnM1thdHRyaWJ1dGVdKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tQ3JlYXRlO1xuIiwiaW1wb3J0IGRvbUNyZWF0ZSBmcm9tIFwiLi4vaGVscGVycy9kb21DcmVhdGVcIjtcbmltcG9ydCBjaGVja21hcmsgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jaGVjay1ib2xkLnBuZ1wiO1xuaW1wb3J0IHJlamVjdE1hcmsgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jbG9zZS1vY3RhZ29uLnBuZ1wiO1xuaW1wb3J0IGNsb2NrIGZyb20gXCIuLi8uLi9hc3NldHMvY2xvY2stb3V0bGluZS5wbmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlUGFnZTEoKSB7XG5cdGNvbnN0IHBhZ2UxID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhYmNvbnRlbnRcIl0sIHsgaWQ6IFwidGFiMVwiIH0pO1xuXHRjb25zdCBoZWFkZXIxID0gZG9tQ3JlYXRlKFwiaDNcIiwgW1widGFiLWhlYWRlclwiXSk7XG5cdGhlYWRlcjEudGV4dENvbnRlbnQgPSBcIlJlcXVlc3QgUXVldWVcIjtcblxuXHRjb25zdCB0ZXh0MSA9IGRvbUNyZWF0ZShcInBcIik7XG5cdHRleHQxLnRleHRDb250ZW50ID0gXCJkaXNwbGF5IGJlbG93IHRoZSBjdXJyZW50IGxpc3Qgb2YgcmVxdWVzdGVkIHNvbmdzXCI7XG5cblx0Y29uc3QgcXVldWVEaXYgPSBkb21DcmVhdGUoXCJkaXZcIiwgW10sIHsgaWQ6IFwicXVldWVEaXZcIiB9KTtcblxuXHRjb25zdCBVTGVsID0gZG9tQ3JlYXRlKFwidWxcIiwgW10sIHsgaWQ6IFwicXVldWVMaXN0XCIgfSk7XG5cdGNvbnN0IGxpc3RFbDEgPSBkb21DcmVhdGUoXCJsaVwiLCBbXCJxdWV1ZS1saXN0LWl0ZW1cIl0sIHsgaWQ6IFwibGlzdC1pdGVtLTFcIiB9KTtcblx0bGlzdEVsMS50ZXh0Q29udGVudCA9IFwiU29uZyB0aXRsZSAvIEFydGlzdFwiO1xuXG5cdGNvbnN0IHN0YXR1c0ltZzEgPSBkb21DcmVhdGUoXCJpbWdcIiwgW10sIHtcblx0XHRpZDogXCJzdGF0dXNJbWcxXCIsXG5cdFx0c3JjOiBjaGVja21hcmssXG5cdH0pO1xuXHRjb25zdCBzdGF0dXNEaXYxID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInF1ZXVlLXN0YXR1c1wiXSwgeyBpZDogXCJxdWV1ZVN0YXR1czFcIiB9KTtcblx0c3RhdHVzRGl2MS5hcHBlbmRDaGlsZChzdGF0dXNJbWcxKTtcblx0bGlzdEVsMS5hcHBlbmRDaGlsZChzdGF0dXNEaXYxKTtcblxuXHRjb25zdCBsaXN0RWwyID0gZG9tQ3JlYXRlKFwibGlcIiwgW1wicXVldWUtbGlzdC1pdGVtXCJdLCB7IGlkOiBcImxpc3QtaXRlbS0yXCIgfSk7XG5cdGxpc3RFbDIudGV4dENvbnRlbnQgPSBcIlNvbmcgdGl0bGUgLyBBcnRpc3RcIjtcblxuXHRjb25zdCBzdGF0dXNJbWcyID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtdLCB7XG5cdFx0aWQ6IFwic3RhdHVzSW1nMlwiLFxuXHRcdHNyYzogcmVqZWN0TWFyayxcblx0fSk7XG5cdGNvbnN0IHN0YXR1c0RpdjIgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wicXVldWUtc3RhdHVzXCJdLCB7IGlkOiBcInF1ZXVlU3RhdHVzMlwiIH0pO1xuXHRzdGF0dXNEaXYyLmFwcGVuZENoaWxkKHN0YXR1c0ltZzIpO1xuXHRsaXN0RWwyLmFwcGVuZENoaWxkKHN0YXR1c0RpdjIpO1xuXG5cdGNvbnN0IGxpc3RFbDMgPSBkb21DcmVhdGUoXCJsaVwiLCBbXCJxdWV1ZS1saXN0LWl0ZW1cIl0sIHsgaWQ6IFwibGlzdC1pdGVtLTNcIiB9KTtcblx0bGlzdEVsMy50ZXh0Q29udGVudCA9IFwiU29uZyB0aXRsZSAvIEFydGlzdFwiO1xuXG5cdGNvbnN0IHN0YXR1c0ltZzMgPSBkb21DcmVhdGUoXCJpbWdcIiwgW10sIHtcblx0XHRpZDogXCJzdGF0dXNJbWczXCIsXG5cdFx0c3JjOiBjbG9jayxcblx0fSk7XG5cdGNvbnN0IHN0YXR1c0RpdjMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wicXVldWUtc3RhdHVzXCJdLCB7IGlkOiBcInF1ZXVlU3RhdHVzM1wiIH0pO1xuXHRzdGF0dXNEaXYzLmFwcGVuZENoaWxkKHN0YXR1c0ltZzMpO1xuXHRsaXN0RWwzLmFwcGVuZENoaWxkKHN0YXR1c0RpdjMpO1xuXG5cdGNvbnN0IGxpc3RFbDQgPSBkb21DcmVhdGUoXCJsaVwiLCBbXCJxdWV1ZS1saXN0LWl0ZW1cIl0sIHsgaWQ6IFwibGlzdC1pdGVtLTRcIiB9KTtcblx0bGlzdEVsNC50ZXh0Q29udGVudCA9IFwiU29uZyB0aXRsZSAvIEFydGlzdFwiO1xuXG5cdFVMZWwuYXBwZW5kKGxpc3RFbDEsIGxpc3RFbDIsIGxpc3RFbDMsIGxpc3RFbDQpO1xuXHRxdWV1ZURpdi5hcHBlbmRDaGlsZChVTGVsKTtcblxuXHRwYWdlMS5hcHBlbmQoaGVhZGVyMSwgdGV4dDEsIHF1ZXVlRGl2KTtcblx0cmV0dXJuIHBhZ2UxO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlMTtcbiIsImltcG9ydCBkb21DcmVhdGUgZnJvbSBcIi4uL2hlbHBlcnMvZG9tQ3JlYXRlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2UyKCkge1xuXHRjb25zdCBwYWdlMiA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YWJjb250ZW50XCJdLCB7IGlkOiBcInRhYjJcIiB9KTtcblx0Y29uc3QgaGVhZGVyMiA9IGRvbUNyZWF0ZShcImgzXCIsIFtcInRhYi1oZWFkZXJcIl0pO1xuXHRoZWFkZXIyLnRleHRDb250ZW50ID0gXCJSZXF1ZXN0XCI7XG5cdGNvbnN0IHRleHQyID0gZG9tQ3JlYXRlKFwicFwiKTtcblx0dGV4dDIudGV4dENvbnRlbnQgPVxuXHRcdFwiRW50ZXIgdGhlIHNvbmcsIGFydGlzdCwgb3IgYWxidW0gdG8gc2VhcmNoIHRocm91Z2ggU3BvdGlmeVwiO1xuXG5cdC8vIHNlYXJjaCBmb3JtXG5cdGNvbnN0IHNlYXJjaEZvcm0gPSBkb21DcmVhdGUoXCJmb3JtXCIsIFtdLCB7IGFjdGlvbjogXCIvXCIgfSk7XG5cdGNvbnN0IHNlYXJjaElucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW10sIHtcblx0XHR0eXBlOiBcInNlYXJjaFwiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuXHRcdG5hbWU6IFwic2VhcmNoXCIsXG5cdH0pO1xuXHRjb25zdCBzZWFyY2hCdXR0b24gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW10sIHsgdHlwZTogXCJzdWJtaXRcIiB9KTtcblx0c2VhcmNoQnV0dG9uLnRleHRDb250ZW50ID0gXCJFbnRlclwiO1xuXHRjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wic2VhcmNoLWNvbnRhaW5lclwiXSk7XG5cdHNlYXJjaEZvcm0uYXBwZW5kKHNlYXJjaElucHV0LCBzZWFyY2hCdXR0b24pO1xuXHRzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoRm9ybSk7XG5cblx0Ly8gZGlzcGxheSBzZWFyY2ggcmVzdWx0c1xuXHRjb25zdCByZXN1bHRzSGVhZGVyID0gZG9tQ3JlYXRlKFwiaDRcIiwgW1wicmVzdWx0cy1oZWFkZXJcIl0pO1xuXHRyZXN1bHRzSGVhZGVyLnRleHRDb250ZW50ID0gXCJSZXN1bHRzXCI7XG5cdGNvbnN0IHJlc3VsdERpdiA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJyZXN1bHQtaXRlbVwiXSk7XG5cdHJlc3VsdERpdi50ZXh0Q29udGVudCA9IFwiQXJ0aXN0IC0gU29uZyBUaXRsZVwiO1xuXG5cdC8vIEZFVENIIFNFQVJDSCBSRVNVTFRTXG5cblx0Ly8gY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJyZXN1bHRzLWNvbnRhaW5lclwiXSk7XG5cdC8vIHJlc3VsdHNDb250YWluZXIuYXBwZW5kKCk7XG5cdC8vIGZpbmFsIHBhZ2UgYXBwZW5kXG5cdHBhZ2UyLmFwcGVuZChoZWFkZXIyLCB0ZXh0Miwgc2VhcmNoQ29udGFpbmVyKTtcblx0cmV0dXJuIHBhZ2UyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlMjtcbiIsImltcG9ydCBkb21DcmVhdGUgZnJvbSBcIi4uL2hlbHBlcnMvZG9tQ3JlYXRlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2UzKCkge1xuXHRjb25zdCBwYWdlMyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YWJjb250ZW50XCJdLCB7IGlkOiBcInRhYjNcIiB9KTtcblx0Y29uc3QgaGVhZGVyMyA9IGRvbUNyZWF0ZShcImgzXCIsIFtcInRhYi1oZWFkZXJcIl0pO1xuXHRoZWFkZXIzLnRleHRDb250ZW50ID0gXCJUYWIgM1wiO1xuXHRjb25zdCB0ZXh0MyA9IGRvbUNyZWF0ZShcInBcIik7XG5cdHRleHQzLnRleHRDb250ZW50ID1cblx0XHRcIkhhcmQgdG8gdW5kZXJzdGF0ZSB0aGUgZGVncmVlIG9mIGF3ZXNvbWUgb2YgdGhpcyB0YWIgY29udGVudFwiO1xuXHRwYWdlMy5hcHBlbmQoaGVhZGVyMywgdGV4dDMpO1xuXHRyZXR1cm4gcGFnZTM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhZ2UzO1xuIiwiaW1wb3J0IGRvbUNyZWF0ZSBmcm9tIFwiLi4vaGVscGVycy9kb21DcmVhdGVcIjtcblxuZnVuY3Rpb24gY3JlYXRlUGFnZTQoKSB7XG5cdGNvbnN0IHBhZ2U0ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhYmNvbnRlbnRcIl0sIHsgaWQ6IFwidGFiNFwiIH0pO1xuXHRjb25zdCBoZWFkZXI0ID0gZG9tQ3JlYXRlKFwiaDNcIiwgW1widGFiLWhlYWRlclwiXSk7XG5cdGhlYWRlcjQudGV4dENvbnRlbnQgPSBcIlNldHRpbmdzXCI7XG5cdGNvbnN0IHRleHQ0ID0gZG9tQ3JlYXRlKFwicFwiKTtcblx0dGV4dDQudGV4dENvbnRlbnQgPSBcIlRoaXMgdGFiIGNvbnRlbnQgaXMgaHVtYmxlIGFuZCBkb2Vzbid0IGhhdmUgYW4gZWdvXCI7XG5cdGNvbnN0IGdpdGh1YkxpbmsgPSBkb21DcmVhdGUoXCJhXCIsIFtcImxpbmstZ2l0aHViXCJdLCB7XG5cdFx0aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vYWxleGdlaXMvREotcmVxdWVzdC1hcHBcIixcblx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXG5cdH0pO1xuXHRnaXRodWJMaW5rLnRleHRDb250ZW50ID0gXCJHSVRIVUIgUkVQTyBMSU5LXCI7XG5cdGNvbnN0IGdpdGh1YkxpbmtDb250YWluZXIgPSBkb21DcmVhdGUoXCJkaXZcIik7XG5cdGdpdGh1YkxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cdHBhZ2U0LmFwcGVuZChoZWFkZXI0LCB0ZXh0NCwgZ2l0aHViTGlua0NvbnRhaW5lcik7XG5cdHJldHVybiBwYWdlNDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZTQ7XG4iLCJpbXBvcnQgY3JlYXRlTmF2TWVudSBmcm9tIFwiLi9jb21wb25lbnRzL25hdk1lbnVcIjtcbmltcG9ydCBjcmVhdGVQYWdlMSBmcm9tIFwiLi9wYWdlcy9wYWdlMVwiO1xuaW1wb3J0IGNyZWF0ZVBhZ2UyIGZyb20gXCIuL3BhZ2VzL3BhZ2UyXCI7XG5pbXBvcnQgY3JlYXRlUGFnZTMgZnJvbSBcIi4vcGFnZXMvcGFnZTNcIjtcbmltcG9ydCBjcmVhdGVQYWdlNCBmcm9tIFwiLi9wYWdlcy9wYWdlNFwiO1xuXG5mdW5jdGlvbiByZW5kZXJBcHAoKSB7XG5cdGNvbnN0IG5hdk1lbnUgPSBjcmVhdGVOYXZNZW51KCk7XG5cdGNvbnN0IHBhZ2UxID0gY3JlYXRlUGFnZTEoKTtcblx0Y29uc3QgcGFnZTIgPSBjcmVhdGVQYWdlMigpO1xuXHRjb25zdCBwYWdlMyA9IGNyZWF0ZVBhZ2UzKCk7XG5cdGNvbnN0IHBhZ2U0ID0gY3JlYXRlUGFnZTQoKTtcblx0Ly8gZmluYWwgY29udGVudCBhcHBlbmRcblx0Y29uc3QgY29udGVudEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRjb250ZW50RWwuYXBwZW5kKG5hdk1lbnUsIHBhZ2UxLCBwYWdlMiwgcGFnZTMsIHBhZ2U0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckFwcDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJyZW5kZXJBcHAiLCJkZWZhdWx0VGFiU2VsZWN0IiwidGFiTnVtYmVyIiwidGFiQ29udGVudCIsInRhYkxpbmsiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJkaXNwbGF5IiwiZG9tQ3JlYXRlIiwiYWN0aXZhdGVUYWIiLCJldmVudCIsImlkIiwidGFyZ2V0Iiwic3BsaXQiLCJ0YWJjb250ZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJyZW1vdmUiLCJ0YWJsaW5rcyIsImFjdGl2ZVRhYiIsImNyZWF0ZU5hdk1lbnUiLCJ0YWJMaW5rMSIsImhyZWYiLCJ0ZXh0Q29udGVudCIsInRhYkxpbmsyIiwidGFiTGluazMiLCJ0YWJMaW5rNCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYXZFbCIsImFwcGVuZCIsImFyZzEiLCJhcmcyIiwiYXJnMyIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiQXJyYXkiLCJpc0FycmF5IiwiY2xhc3NOYW1lIiwiYXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiY2hlY2ttYXJrIiwicmVqZWN0TWFyayIsImNsb2NrIiwiY3JlYXRlUGFnZTEiLCJwYWdlMSIsImhlYWRlcjEiLCJ0ZXh0MSIsInF1ZXVlRGl2IiwiVUxlbCIsImxpc3RFbDEiLCJzdGF0dXNJbWcxIiwic3JjIiwic3RhdHVzRGl2MSIsImFwcGVuZENoaWxkIiwibGlzdEVsMiIsInN0YXR1c0ltZzIiLCJzdGF0dXNEaXYyIiwibGlzdEVsMyIsInN0YXR1c0ltZzMiLCJzdGF0dXNEaXYzIiwibGlzdEVsNCIsImNyZWF0ZVBhZ2UyIiwicGFnZTIiLCJoZWFkZXIyIiwidGV4dDIiLCJzZWFyY2hGb3JtIiwiYWN0aW9uIiwic2VhcmNoSW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwic2VhcmNoQnV0dG9uIiwic2VhcmNoQ29udGFpbmVyIiwicmVzdWx0c0hlYWRlciIsInJlc3VsdERpdiIsImNyZWF0ZVBhZ2UzIiwicGFnZTMiLCJoZWFkZXIzIiwidGV4dDMiLCJjcmVhdGVQYWdlNCIsInBhZ2U0IiwiaGVhZGVyNCIsInRleHQ0IiwiZ2l0aHViTGluayIsImdpdGh1YkxpbmtDb250YWluZXIiLCJuYXZNZW51IiwiY29udGVudEVsIl0sInNvdXJjZVJvb3QiOiIifQ==