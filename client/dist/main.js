"use strict";
(self["webpackChunkdj_request_app"] = self["webpackChunkdj_request_app"] || []).push([["main"],{

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
  const tabContent = `tab${tabNumber}`;
  const tabLink = `tab-link-${tabNumber}`;
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
  const id = `tab${event.target.id.split("-")[2]}`; // Get all elements with class="tabcontent" and hide them

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
  tabLink1.textContent = "QUEUE";
  const tabLink2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("a", ["tab-link"], {
    id: "tab-link-2",
    href: "#"
  });
  tabLink2.textContent = "REQUEST";
  const tabLink3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("a", ["tab-link"], {
    id: "tab-link-3",
    href: "#"
  });
  tabLink3.textContent = "INFO";
  const tabLink4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("a", ["tab-link"], {
    id: "tab-link-4",
    href: "#"
  });
  tabLink4.textContent = "SETTINGS"; // add event listener to all tab links

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

/***/ "./src/js/helpers/instagram.js":
/*!*************************************!*\
  !*** ./src/js/helpers/instagram.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const wrapper = document.createElement("div");
wrapper.innerHTML = '<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/ghosthopofficial/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/ghosthopofficial/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this profile on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/ghosthopofficial/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank">GhostHop</a> (@<a href="https://www.instagram.com/ghosthopofficial/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank">ghosthopofficial</a>) • Instagram photos and videos</p></div></blockquote>';
const instagramDiv = wrapper.firstChild;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instagramDiv);

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
  header1.textContent = "Request Queue"; // sub header

  const text1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p", ["tab-sub-header"]);
  text1.textContent = "display below the current list of requested songs"; // text1.textContent +=
  // 	" *A request never guarantees a play - we'll do our best!";

  const queueDiv = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", [], {
    id: "queueDiv"
  });
  const ULel = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("ul", [], {
    id: "queueList"
  }); // list item 1

  const listEl1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("li", ["queue-list-item"], {
    id: "list-item-1"
  });
  const songInfoDiv1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["song-info"]);
  const title1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["song-title"], {
    id: "title1"
  });
  title1.textContent = "Song title";
  const artist1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["song-artist"], {
    id: "artist1"
  });
  artist1.textContent = "Artist";
  songInfoDiv1.append(title1, artist1);
  listEl1.appendChild(songInfoDiv1);
  const statusImg1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("img", [], {
    id: "statusImg1",
    src: _assets_check_bold_png__WEBPACK_IMPORTED_MODULE_1__
  });
  const statusDiv1 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["queue-status"], {
    id: "queueStatus1"
  });
  statusDiv1.appendChild(statusImg1);
  listEl1.appendChild(statusDiv1); // list item 2

  const listEl2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("li", ["queue-list-item"], {
    id: "list-item-2"
  });
  const songInfoDiv2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["song-info"]);
  const title2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["song-title"], {
    id: "title2"
  });
  title2.textContent = "Song title";
  const artist2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["song-artist"], {
    id: "artist2"
  });
  artist2.textContent = "Artist";
  songInfoDiv2.append(title2, artist2);
  listEl2.appendChild(songInfoDiv2);
  const statusImg2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("img", [], {
    id: "statusImg2",
    src: _assets_close_octagon_png__WEBPACK_IMPORTED_MODULE_2__
  });
  const statusDiv2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["queue-status"], {
    id: "queueStatus2"
  });
  statusDiv2.appendChild(statusImg2);
  listEl2.appendChild(statusDiv2); // list item 3

  const listEl3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("li", ["queue-list-item"], {
    id: "list-item-3"
  });
  const songInfoDiv3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["song-info"]);
  const title3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["song-title"], {
    id: "title3"
  });
  title3.textContent = "Song title";
  const artist3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["song-artist"], {
    id: "artist3"
  });
  artist3.textContent = "Artist";
  songInfoDiv3.append(title3, artist3);
  listEl3.appendChild(songInfoDiv3);
  const statusImg3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("img", [], {
    id: "statusImg3",
    src: _assets_clock_outline_png__WEBPACK_IMPORTED_MODULE_3__
  });
  const statusDiv3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["queue-status"], {
    id: "queueStatus3"
  });
  statusDiv3.appendChild(statusImg3);
  listEl3.appendChild(statusDiv3); // list item 4

  const listEl4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("li", ["queue-list-item"], {
    id: "list-item-4"
  });
  const songInfoDiv4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["song-info"]);
  const title4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["song-title"], {
    id: "title4"
  });
  title4.textContent = "Song title";
  const artist4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["song-artist"], {
    id: "artist4"
  });
  artist4.textContent = "Artist";
  songInfoDiv4.append(title4, artist4);
  listEl4.appendChild(songInfoDiv4);
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
  header2.textContent = "Make a Request";
  const text2 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p", ["tab-sub-header"]);
  text2.textContent = "Enter the song, artist, or album to search through Spotify"; // search form

  const searchForm = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("form", [], {
    id: "searchForm",
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
/* harmony import */ var _helpers_instagram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/instagram */ "./src/js/helpers/instagram.js");



function createPage3() {
  const page3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["tabcontent"], {
    id: "tab3"
  });
  const header3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", ["tab-header"]);
  header3.textContent = "DJ Info";
  const text3 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p", ["tab-sub-header"]);
  text3.textContent = "GhostHop is a DJ duo comprised of Benjamin Hopper and Alex Geis";
  const instaContainer = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", [], {
    id: "insta-div"
  });
  instaContainer.appendChild(_helpers_instagram__WEBPACK_IMPORTED_MODULE_1__["default"]);
  page3.append(header3, text3, instaContainer);
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
/* harmony import */ var _assets_GitHub_Mark_64px_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/GitHub-Mark-64px.png */ "./src/assets/GitHub-Mark-64px.png");



function createPage4() {
  const page4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["tabcontent"], {
    id: "tab4"
  });
  const header4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", ["tab-header"]);
  header4.textContent = "Settings";
  const text4 = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p", ["tab-sub-header"]);
  text4.textContent = "This tab content is humble and doesn't have an ego";
  const githubLink = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("a", ["link-github"], {
    href: "https://github.com/alexgeis/DJ-request-app",
    target: "_blank"
  });
  const gitLogoEl = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("img", ["github-logo"], {
    id: "githubLogo",
    src: _assets_GitHub_Mark_64px_png__WEBPACK_IMPORTED_MODULE_1__
  });
  githubLink.appendChild(gitLogoEl);
  const githubLinkContainer = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", [], {
    id: "githubContainer"
  });
  githubLinkContainer.appendChild(githubLink);
  const lightToggleText = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", [], {
    id: "light-toggle-text"
  });
  lightToggleText.textContent = "Light";
  const toggleInput = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("input", [], {
    id: "theme-toggle",
    type: "checkbox"
  });
  const toggleSlider = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("span", ["slider", "round"]);
  const toggleSwitch = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("label", ["switch"]);
  toggleSwitch.append(toggleInput, toggleSlider);
  const darkToggleText = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", [], {
    id: "dark-toggle-text"
  });
  darkToggleText.textContent = "Dark";
  const themeContainer = (0,_helpers_domCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["theme"]);
  themeContainer.append(lightToggleText, toggleSwitch, darkToggleText);
  console.log(themeContainer);
  page4.append(header4, text4, githubLinkContainer, themeContainer);
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

/***/ "./src/assets/GitHub-Mark-64px.png":
/*!*****************************************!*\
  !*** ./src/assets/GitHub-Mark-64px.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b039b2d83982c8256af3.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBbEI7RUFDQStHLFNBQVMsQ0FBQ3BGLE1BQVYsQ0FBaUJtRixPQUFqQixFQUEwQmhFLEtBQTFCLEVBQWlDOEIsS0FBakMsRUFBd0NjLEtBQXhDLEVBQStDTSxLQUEvQztBQUNBOztBQUNELGlFQUFldEcsU0FBZjs7Ozs7Ozs7Ozs7QUNoQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kai1yZXF1ZXN0LWFwcC8uL3NyYy9qcy9jb21wb25lbnRzL25hdk1lbnUuanMiLCJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvanMvaGVscGVycy9kb21DcmVhdGUuanMiLCJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvanMvaGVscGVycy9pbnN0YWdyYW0uanMiLCJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvanMvcGFnZXMvcGFnZTEuanMiLCJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvanMvcGFnZXMvcGFnZTIuanMiLCJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvanMvcGFnZXMvcGFnZTMuanMiLCJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvanMvcGFnZXMvcGFnZTQuanMiLCJ3ZWJwYWNrOi8vZGotcmVxdWVzdC1hcHAvLi9zcmMvanMvcmVuZGVyLmpzIiwid2VicGFjazovL2RqLXJlcXVlc3QtYXBwLy4vc3JjL2Nzcy9zdHlsZS5zY3NzPzYyYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9jc3Mvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHJlbmRlckFwcCBmcm9tIFwiLi9qcy9yZW5kZXJcIjtcbi8vIGltcG9ydCBmZXRjaFNwb3RpZnlEYXRhIGZyb20gXCIuL2pzL2hlbHBlcnMvc3BvdGlmeVwiO1xuLy8gZmV0Y2hTcG90aWZ5RGF0YSgpO1xuXG5yZW5kZXJBcHAoKTtcblxuLy8gLy8gVEFCIEdVSURFXG4vLyAxIC0gVGFiIDFcbi8vIDIgLSBSZXF1ZXN0IFBhZ2Vcbi8vIDMgLSBUYWIgM1xuLy8gNCAtIFNldHRpbmdzXG5mdW5jdGlvbiBkZWZhdWx0VGFiU2VsZWN0KHRhYk51bWJlcikge1xuXHRjb25zdCB0YWJDb250ZW50ID0gYHRhYiR7dGFiTnVtYmVyfWA7XG5cdGNvbnN0IHRhYkxpbmsgPSBgdGFiLWxpbmstJHt0YWJOdW1iZXJ9YDtcblxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJDb250ZW50KS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJDb250ZW50KS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJMaW5rKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuZGVmYXVsdFRhYlNlbGVjdCgxKTtcbiIsImltcG9ydCBkb21DcmVhdGUgZnJvbSBcIi4uL2hlbHBlcnMvZG9tQ3JlYXRlXCI7XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVGFiKGV2ZW50KSB7XG5cdC8vIENyZWF0ZSB0aGUgdGFiIGNvbnRlbnQgSUQgYnkgYWx0ZXJpbmcgdGhlIGluY29taW5nIHRhYiBsaW5rIElEXG5cdC8vIGlucHV0OiBcInRhYi1saW5rLTFcIiAgPT4gIG91dHB1dDogXCJ0YWIxXCJcblx0Y29uc3QgaWQgPSBgdGFiJHtldmVudC50YXJnZXQuaWQuc3BsaXQoXCItXCIpWzJdfWA7XG5cdC8vIEdldCBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcz1cInRhYmNvbnRlbnRcIiBhbmQgaGlkZSB0aGVtXG5cdGNvbnN0IHRhYmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiY29udGVudFwiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YWJjb250ZW50Lmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dGFiY29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0dGFiY29udGVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHR9XG5cblx0Ly8gR2V0IGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzPVwidGFiLWxpbmtcIiBhbmQgcmVtb3ZlIHRoZSBjbGFzcyBcImFjdGl2ZVwiXG5cdGNvbnN0IHRhYmxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYi1saW5rXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRhYmxpbmtzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dGFibGlua3NbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0fVxuXHQvLyBhZGQgXCJhY3RpdmVcIiBjbGFzcyB0byBzZWxlY3RlZCBsaW5rXG5cdGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHQvLyBTaG93IHRoZSBjdXJyZW50IHRhYiwgYW5kIGFkZCBhbiBcImFjdGl2ZVwiIGNsYXNzIHRvIHRoZSBidXR0b24gdGhhdCBvcGVuZWQgdGhlIHRhYlxuXHRjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdGFjdGl2ZVRhYi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRhY3RpdmVUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2TWVudSgpIHtcblx0Y29uc3QgdGFiTGluazEgPSBkb21DcmVhdGUoXCJhXCIsIFtcInRhYi1saW5rXCJdLCB7XG5cdFx0aWQ6IFwidGFiLWxpbmstMVwiLFxuXHRcdGhyZWY6IFwiI1wiLFxuXHR9KTtcblx0dGFiTGluazEudGV4dENvbnRlbnQgPSBcIlFVRVVFXCI7XG5cdGNvbnN0IHRhYkxpbmsyID0gZG9tQ3JlYXRlKFwiYVwiLCBbXCJ0YWItbGlua1wiXSwge1xuXHRcdGlkOiBcInRhYi1saW5rLTJcIixcblx0XHRocmVmOiBcIiNcIixcblx0fSk7XG5cdHRhYkxpbmsyLnRleHRDb250ZW50ID0gXCJSRVFVRVNUXCI7XG5cdGNvbnN0IHRhYkxpbmszID0gZG9tQ3JlYXRlKFwiYVwiLCBbXCJ0YWItbGlua1wiXSwge1xuXHRcdGlkOiBcInRhYi1saW5rLTNcIixcblx0XHRocmVmOiBcIiNcIixcblx0fSk7XG5cdHRhYkxpbmszLnRleHRDb250ZW50ID0gXCJJTkZPXCI7XG5cdGNvbnN0IHRhYkxpbms0ID0gZG9tQ3JlYXRlKFwiYVwiLCBbXCJ0YWItbGlua1wiXSwge1xuXHRcdGlkOiBcInRhYi1saW5rLTRcIixcblx0XHRocmVmOiBcIiNcIixcblx0fSk7XG5cdHRhYkxpbms0LnRleHRDb250ZW50ID0gXCJTRVRUSU5HU1wiO1xuXHQvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gYWxsIHRhYiBsaW5rc1xuXHR0YWJMaW5rMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWN0aXZhdGVUYWIpO1xuXHR0YWJMaW5rMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWN0aXZhdGVUYWIpO1xuXHR0YWJMaW5rMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWN0aXZhdGVUYWIpO1xuXHR0YWJMaW5rNC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWN0aXZhdGVUYWIpO1xuXHQvLyBzZWxlY3QgdGFiIGxpbmsgMSBieSBkZWZhdWx0XG5cblx0Ly8gY3JlYXRlIG5hdiBtZW51IGFuZCBhcHBlbmRcblx0Y29uc3QgbmF2RWwgPSBkb21DcmVhdGUoXCJuYXZcIiwgW1wibmF2XCJdKTtcblx0bmF2RWwuYXBwZW5kKHRhYkxpbmsxLCB0YWJMaW5rMiwgdGFiTGluazMsIHRhYkxpbms0KTtcblx0cmV0dXJuIG5hdkVsO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2TWVudTtcbiIsIi8vIERPTSBDUkVBVEUgRlVOQ1RJT05cblxuLy8gYXJnIDEgPSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuLy8gYXJnIDIgPSBjbGFzcyBuYW1lcyB0byBhZGRcbi8vIGFyZyAzID0gb2JqZWN0IC0gYXR0cmlidXRlcyB0byBhZGQgLT4gYXR0cmlidXRlIDogdmFsdWVcbmZ1bmN0aW9uIGRvbUNyZWF0ZShhcmcxLCBhcmcyLCBhcmczKSB7XG5cdC8vLyAvIGFyZyAxID0gXCJzdHJpbmdcIiAtIG5hbWUgb2YgSFRNTCBlbGVtZW50XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZzEpO1xuXHQvLy8gLyBhcmcgMiA9IFtcImFycmF5IG9mIHN0cmluZ3NcIl0gLSBjbGFzcyBuYW1lcyB0byBhZGRcblx0aWYgKEFycmF5LmlzQXJyYXkoYXJnMikgJiYgYXJnMi5sZW5ndGggPiAwKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmcyLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSBhcmcyW2ldO1xuXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0fVxuXHR9XG5cdC8vLyAvIGFyZyAzID0ge29iamVjdH0gLSBhdHRyaWJ1dGUgbmFtZSA6IHZhbHVlXG5cdGZvciAoY29uc3QgYXR0cmlidXRlIGluIGFyZzMpIHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGFyZzNbYXR0cmlidXRlXSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUNyZWF0ZTtcbiIsImNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xud3JhcHBlci5pbm5lckhUTUwgPVxuXHQnPGJsb2NrcXVvdGUgY2xhc3M9XCJpbnN0YWdyYW0tbWVkaWFcIiBkYXRhLWluc3Rncm0tcGVybWFsaW5rPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9naG9zdGhvcG9mZmljaWFsLz91dG1fc291cmNlPWlnX2VtYmVkJmFtcDt1dG1fY2FtcGFpZ249bG9hZGluZ1wiIGRhdGEtaW5zdGdybS12ZXJzaW9uPVwiMTRcIiBzdHlsZT1cIiBiYWNrZ3JvdW5kOiNGRkY7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOjNweDsgYm94LXNoYWRvdzowIDAgMXB4IDAgcmdiYSgwLDAsMCwwLjUpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTUpOyBtYXJnaW46IDFweDsgbWF4LXdpZHRoOjU0MHB4OyBtaW4td2lkdGg6MzI2cHg7IHBhZGRpbmc6MDsgd2lkdGg6OTkuMzc1JTsgd2lkdGg6LXdlYmtpdC1jYWxjKDEwMCUgLSAycHgpOyB3aWR0aDpjYWxjKDEwMCUgLSAycHgpO1wiPjxkaXYgc3R5bGU9XCJwYWRkaW5nOjE2cHg7XCI+IDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2dob3N0aG9wb2ZmaWNpYWwvP3V0bV9zb3VyY2U9aWdfZW1iZWQmYW1wO3V0bV9jYW1wYWlnbj1sb2FkaW5nXCIgc3R5bGU9XCIgYmFja2dyb3VuZDojRkZGRkZGOyBsaW5lLWhlaWdodDowOyBwYWRkaW5nOjAgMDsgdGV4dC1hbGlnbjpjZW50ZXI7IHRleHQtZGVjb3JhdGlvbjpub25lOyB3aWR0aDoxMDAlO1wiIHRhcmdldD1cIl9ibGFua1wiPiA8ZGl2IHN0eWxlPVwiIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+IDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0OyBib3JkZXItcmFkaXVzOiA1MCU7IGZsZXgtZ3JvdzogMDsgaGVpZ2h0OiA0MHB4OyBtYXJnaW4tcmlnaHQ6IDE0cHg7IHdpZHRoOiA0MHB4O1wiPjwvZGl2PiA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZmxleC1ncm93OiAxOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj4gPGRpdiBzdHlsZT1cIiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0OyBib3JkZXItcmFkaXVzOiA0cHg7IGZsZXgtZ3JvdzogMDsgaGVpZ2h0OiAxNHB4OyBtYXJnaW4tYm90dG9tOiA2cHg7IHdpZHRoOiAxMDBweDtcIj48L2Rpdj4gPGRpdiBzdHlsZT1cIiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0OyBib3JkZXItcmFkaXVzOiA0cHg7IGZsZXgtZ3JvdzogMDsgaGVpZ2h0OiAxNHB4OyB3aWR0aDogNjBweDtcIj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IHN0eWxlPVwicGFkZGluZzogMTklIDA7XCI+PC9kaXY+IDxkaXYgc3R5bGU9XCJkaXNwbGF5OmJsb2NrOyBoZWlnaHQ6NTBweDsgbWFyZ2luOjAgYXV0byAxMnB4OyB3aWR0aDo1MHB4O1wiPjxzdmcgd2lkdGg9XCI1MHB4XCIgaGVpZ2h0PVwiNTBweFwiIHZpZXdCb3g9XCIwIDAgNjAgNjBcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwczovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHBzOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+PGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUxMS4wMDAwMDAsIC0yMC4wMDAwMDApXCIgZmlsbD1cIiMwMDAwMDBcIj48Zz48cGF0aCBkPVwiTTU1Ni44NjksMzAuNDEgQzU1NC44MTQsMzAuNDEgNTUzLjE0OCwzMi4wNzYgNTUzLjE0OCwzNC4xMzEgQzU1My4xNDgsMzYuMTg2IDU1NC44MTQsMzcuODUyIDU1Ni44NjksMzcuODUyIEM1NTguOTI0LDM3Ljg1MiA1NjAuNTksMzYuMTg2IDU2MC41OSwzNC4xMzEgQzU2MC41OSwzMi4wNzYgNTU4LjkyNCwzMC40MSA1NTYuODY5LDMwLjQxIE01NDEsNjAuNjU3IEM1MzUuMTE0LDYwLjY1NyA1MzAuMzQyLDU1Ljg4NyA1MzAuMzQyLDUwIEM1MzAuMzQyLDQ0LjExNCA1MzUuMTE0LDM5LjM0MiA1NDEsMzkuMzQyIEM1NDYuODg3LDM5LjM0MiA1NTEuNjU4LDQ0LjExNCA1NTEuNjU4LDUwIEM1NTEuNjU4LDU1Ljg4NyA1NDYuODg3LDYwLjY1NyA1NDEsNjAuNjU3IE01NDEsMzMuODg2IEM1MzIuMSwzMy44ODYgNTI0Ljg4Niw0MS4xIDUyNC44ODYsNTAgQzUyNC44ODYsNTguODk5IDUzMi4xLDY2LjExMyA1NDEsNjYuMTEzIEM1NDkuOSw2Ni4xMTMgNTU3LjExNSw1OC44OTkgNTU3LjExNSw1MCBDNTU3LjExNSw0MS4xIDU0OS45LDMzLjg4NiA1NDEsMzMuODg2IE01NjUuMzc4LDYyLjEwMSBDNTY1LjI0NCw2NS4wMjIgNTY0Ljc1Niw2Ni42MDYgNTY0LjM0Niw2Ny42NjMgQzU2My44MDMsNjkuMDYgNTYzLjE1NCw3MC4wNTcgNTYyLjEwNiw3MS4xMDYgQzU2MS4wNTgsNzIuMTU1IDU2MC4wNiw3Mi44MDMgNTU4LjY2Miw3My4zNDcgQzU1Ny42MDcsNzMuNzU3IDU1Ni4wMjEsNzQuMjQ0IDU1My4xMDIsNzQuMzc4IEM1NDkuOTQ0LDc0LjUyMSA1NDguOTk3LDc0LjU1MiA1NDEsNzQuNTUyIEM1MzMuMDAzLDc0LjU1MiA1MzIuMDU2LDc0LjUyMSA1MjguODk4LDc0LjM3OCBDNTI1Ljk3OSw3NC4yNDQgNTI0LjM5Myw3My43NTcgNTIzLjMzOCw3My4zNDcgQzUyMS45NCw3Mi44MDMgNTIwLjk0Miw3Mi4xNTUgNTE5Ljg5NCw3MS4xMDYgQzUxOC44NDYsNzAuMDU3IDUxOC4xOTcsNjkuMDYgNTE3LjY1NCw2Ny42NjMgQzUxNy4yNDQsNjYuNjA2IDUxNi43NTUsNjUuMDIyIDUxNi42MjMsNjIuMTAxIEM1MTYuNDc5LDU4Ljk0MyA1MTYuNDQ4LDU3Ljk5NiA1MTYuNDQ4LDUwIEM1MTYuNDQ4LDQyLjAwMyA1MTYuNDc5LDQxLjA1NiA1MTYuNjIzLDM3Ljg5OSBDNTE2Ljc1NSwzNC45NzggNTE3LjI0NCwzMy4zOTEgNTE3LjY1NCwzMi4zMzggQzUxOC4xOTcsMzAuOTM4IDUxOC44NDYsMjkuOTQyIDUxOS44OTQsMjguODk0IEM1MjAuOTQyLDI3Ljg0NiA1MjEuOTQsMjcuMTk2IDUyMy4zMzgsMjYuNjU0IEM1MjQuMzkzLDI2LjI0NCA1MjUuOTc5LDI1Ljc1NiA1MjguODk4LDI1LjYyMyBDNTMyLjA1NywyNS40NzkgNTMzLjAwNCwyNS40NDggNTQxLDI1LjQ0OCBDNTQ4Ljk5NywyNS40NDggNTQ5Ljk0MywyNS40NzkgNTUzLjEwMiwyNS42MjMgQzU1Ni4wMjEsMjUuNzU2IDU1Ny42MDcsMjYuMjQ0IDU1OC42NjIsMjYuNjU0IEM1NjAuMDYsMjcuMTk2IDU2MS4wNTgsMjcuODQ2IDU2Mi4xMDYsMjguODk0IEM1NjMuMTU0LDI5Ljk0MiA1NjMuODAzLDMwLjkzOCA1NjQuMzQ2LDMyLjMzOCBDNTY0Ljc1NiwzMy4zOTEgNTY1LjI0NCwzNC45NzggNTY1LjM3OCwzNy44OTkgQzU2NS41MjIsNDEuMDU2IDU2NS41NTIsNDIuMDAzIDU2NS41NTIsNTAgQzU2NS41NTIsNTcuOTk2IDU2NS41MjIsNTguOTQzIDU2NS4zNzgsNjIuMTAxIE01NzAuODIsMzcuNjMxIEM1NzAuNjc0LDM0LjQzOCA1NzAuMTY3LDMyLjI1OCA1NjkuNDI1LDMwLjM0OSBDNTY4LjY1OSwyOC4zNzcgNTY3LjYzMywyNi43MDIgNTY1Ljk2NSwyNS4wMzUgQzU2NC4yOTcsMjMuMzY4IDU2Mi42MjMsMjIuMzQyIDU2MC42NTIsMjEuNTc1IEM1NTguNzQzLDIwLjgzNCA1NTYuNTYyLDIwLjMyNiA1NTMuMzY5LDIwLjE4IEM1NTAuMTY5LDIwLjAzMyA1NDkuMTQ4LDIwIDU0MSwyMCBDNTMyLjg1MywyMCA1MzEuODMxLDIwLjAzMyA1MjguNjMxLDIwLjE4IEM1MjUuNDM4LDIwLjMyNiA1MjMuMjU3LDIwLjgzNCA1MjEuMzQ5LDIxLjU3NSBDNTE5LjM3NiwyMi4zNDIgNTE3LjcwMywyMy4zNjggNTE2LjAzNSwyNS4wMzUgQzUxNC4zNjgsMjYuNzAyIDUxMy4zNDIsMjguMzc3IDUxMi41NzQsMzAuMzQ5IEM1MTEuODM0LDMyLjI1OCA1MTEuMzI2LDM0LjQzOCA1MTEuMTgxLDM3LjYzMSBDNTExLjAzNSw0MC44MzEgNTExLDQxLjg1MSA1MTEsNTAgQzUxMSw1OC4xNDcgNTExLjAzNSw1OS4xNyA1MTEuMTgxLDYyLjM2OSBDNTExLjMyNiw2NS41NjIgNTExLjgzNCw2Ny43NDMgNTEyLjU3NCw2OS42NTEgQzUxMy4zNDIsNzEuNjI1IDUxNC4zNjgsNzMuMjk2IDUxNi4wMzUsNzQuOTY1IEM1MTcuNzAzLDc2LjYzNCA1MTkuMzc2LDc3LjY1OCA1MjEuMzQ5LDc4LjQyNSBDNTIzLjI1Nyw3OS4xNjcgNTI1LjQzOCw3OS42NzMgNTI4LjYzMSw3OS44MiBDNTMxLjgzMSw3OS45NjUgNTMyLjg1Myw4MC4wMDEgNTQxLDgwLjAwMSBDNTQ5LjE0OCw4MC4wMDEgNTUwLjE2OSw3OS45NjUgNTUzLjM2OSw3OS44MiBDNTU2LjU2Miw3OS42NzMgNTU4Ljc0Myw3OS4xNjcgNTYwLjY1Miw3OC40MjUgQzU2Mi42MjMsNzcuNjU4IDU2NC4yOTcsNzYuNjM0IDU2NS45NjUsNzQuOTY1IEM1NjcuNjMzLDczLjI5NiA1NjguNjU5LDcxLjYyNSA1NjkuNDI1LDY5LjY1MSBDNTcwLjE2Nyw2Ny43NDMgNTcwLjY3NCw2NS41NjIgNTcwLjgyLDYyLjM2OSBDNTcwLjk2Niw1OS4xNyA1NzEsNTguMTQ3IDU3MSw1MCBDNTcxLDQxLjg1MSA1NzAuOTY2LDQwLjgzMSA1NzAuODIsMzcuNjMxXCI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPjwvZGl2PjxkaXYgc3R5bGU9XCJwYWRkaW5nLXRvcDogOHB4O1wiPiA8ZGl2IHN0eWxlPVwiIGNvbG9yOiMzODk3ZjA7IGZvbnQtZmFtaWx5OkFyaWFsLHNhbnMtc2VyaWY7IGZvbnQtc2l6ZToxNHB4OyBmb250LXN0eWxlOm5vcm1hbDsgZm9udC13ZWlnaHQ6NTUwOyBsaW5lLWhlaWdodDoxOHB4O1wiPlZpZXcgdGhpcyBwcm9maWxlIG9uIEluc3RhZ3JhbTwvZGl2PjwvZGl2PjxkaXYgc3R5bGU9XCJwYWRkaW5nOiAxMi41JSAwO1wiPjwvZGl2PiA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdzsgbWFyZ2luLWJvdHRvbTogMTRweDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj48ZGl2PiA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDsgYm9yZGVyLXJhZGl1czogNTAlOyBoZWlnaHQ6IDEyLjVweDsgd2lkdGg6IDEyLjVweDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSg3cHgpO1wiPjwvZGl2PiA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDsgaGVpZ2h0OiAxMi41cHg7IHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWCgzcHgpIHRyYW5zbGF0ZVkoMXB4KTsgd2lkdGg6IDEyLjVweDsgZmxleC1ncm93OiAwOyBtYXJnaW4tcmlnaHQ6IDE0cHg7IG1hcmdpbi1sZWZ0OiAycHg7XCI+PC9kaXY+IDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0OyBib3JkZXItcmFkaXVzOiA1MCU7IGhlaWdodDogMTIuNXB4OyB3aWR0aDogMTIuNXB4OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOXB4KSB0cmFuc2xhdGVZKC0xOHB4KTtcIj48L2Rpdj48L2Rpdj48ZGl2IHN0eWxlPVwibWFyZ2luLWxlZnQ6IDhweDtcIj4gPGRpdiBzdHlsZT1cIiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0OyBib3JkZXItcmFkaXVzOiA1MCU7IGZsZXgtZ3JvdzogMDsgaGVpZ2h0OiAyMHB4OyB3aWR0aDogMjBweDtcIj48L2Rpdj4gPGRpdiBzdHlsZT1cIiB3aWR0aDogMDsgaGVpZ2h0OiAwOyBib3JkZXItdG9wOiAycHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OiA2cHggc29saWQgI2Y0ZjRmNDsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCkgdHJhbnNsYXRlWSgtNHB4KSByb3RhdGUoMzBkZWcpXCI+PC9kaXY+PC9kaXY+PGRpdiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiBhdXRvO1wiPiA8ZGl2IHN0eWxlPVwiIHdpZHRoOiAwcHg7IGJvcmRlci10b3A6IDhweCBzb2xpZCAjRjRGNEY0OyBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2cHgpO1wiPjwvZGl2PiA8ZGl2IHN0eWxlPVwiIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7IGZsZXgtZ3JvdzogMDsgaGVpZ2h0OiAxMnB4OyB3aWR0aDogMTZweDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1wiPjwvZGl2PiA8ZGl2IHN0eWxlPVwiIHdpZHRoOiAwOyBoZWlnaHQ6IDA7IGJvcmRlci10b3A6IDhweCBzb2xpZCAjRjRGNEY0OyBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgdHJhbnNsYXRlWCg4cHgpO1wiPjwvZGl2PjwvZGl2PjwvZGl2PiA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZmxleC1ncm93OiAxOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMjRweDtcIj4gPGRpdiBzdHlsZT1cIiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0OyBib3JkZXItcmFkaXVzOiA0cHg7IGZsZXgtZ3JvdzogMDsgaGVpZ2h0OiAxNHB4OyBtYXJnaW4tYm90dG9tOiA2cHg7IHdpZHRoOiAyMjRweDtcIj48L2Rpdj4gPGRpdiBzdHlsZT1cIiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0OyBib3JkZXItcmFkaXVzOiA0cHg7IGZsZXgtZ3JvdzogMDsgaGVpZ2h0OiAxNHB4OyB3aWR0aDogMTQ0cHg7XCI+PC9kaXY+PC9kaXY+PC9hPjxwIHN0eWxlPVwiIGNvbG9yOiNjOWM4Y2Q7IGZvbnQtZmFtaWx5OkFyaWFsLHNhbnMtc2VyaWY7IGZvbnQtc2l6ZToxNHB4OyBsaW5lLWhlaWdodDoxN3B4OyBtYXJnaW4tYm90dG9tOjA7IG1hcmdpbi10b3A6OHB4OyBvdmVyZmxvdzpoaWRkZW47IHBhZGRpbmc6OHB4IDAgN3B4OyB0ZXh0LWFsaWduOmNlbnRlcjsgdGV4dC1vdmVyZmxvdzplbGxpcHNpczsgd2hpdGUtc3BhY2U6bm93cmFwO1wiPjxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2dob3N0aG9wb2ZmaWNpYWwvP3V0bV9zb3VyY2U9aWdfZW1iZWQmYW1wO3V0bV9jYW1wYWlnbj1sb2FkaW5nXCIgc3R5bGU9XCIgY29sb3I6I2M5YzhjZDsgZm9udC1mYW1pbHk6QXJpYWwsc2Fucy1zZXJpZjsgZm9udC1zaXplOjE0cHg7IGZvbnQtc3R5bGU6bm9ybWFsOyBmb250LXdlaWdodDpub3JtYWw7IGxpbmUtaGVpZ2h0OjE3cHg7XCIgdGFyZ2V0PVwiX2JsYW5rXCI+R2hvc3RIb3A8L2E+IChAPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZ2hvc3Rob3BvZmZpY2lhbC8/dXRtX3NvdXJjZT1pZ19lbWJlZCZhbXA7dXRtX2NhbXBhaWduPWxvYWRpbmdcIiBzdHlsZT1cIiBjb2xvcjojYzljOGNkOyBmb250LWZhbWlseTpBcmlhbCxzYW5zLXNlcmlmOyBmb250LXNpemU6MTRweDsgZm9udC1zdHlsZTpub3JtYWw7IGZvbnQtd2VpZ2h0Om5vcm1hbDsgbGluZS1oZWlnaHQ6MTdweDtcIiB0YXJnZXQ9XCJfYmxhbmtcIj5naG9zdGhvcG9mZmljaWFsPC9hPikg4oCiIEluc3RhZ3JhbSBwaG90b3MgYW5kIHZpZGVvczwvcD48L2Rpdj48L2Jsb2NrcXVvdGU+JztcblxuY29uc3QgaW5zdGFncmFtRGl2ID0gd3JhcHBlci5maXJzdENoaWxkO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YWdyYW1EaXY7XG4iLCJpbXBvcnQgZG9tQ3JlYXRlIGZyb20gXCIuLi9oZWxwZXJzL2RvbUNyZWF0ZVwiO1xuaW1wb3J0IGNoZWNrbWFyayBmcm9tIFwiLi4vLi4vYXNzZXRzL2NoZWNrLWJvbGQucG5nXCI7XG5pbXBvcnQgcmVqZWN0TWFyayBmcm9tIFwiLi4vLi4vYXNzZXRzL2Nsb3NlLW9jdGFnb24ucG5nXCI7XG5pbXBvcnQgY2xvY2sgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jbG9jay1vdXRsaW5lLnBuZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVQYWdlMSgpIHtcblx0Y29uc3QgcGFnZTEgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFiY29udGVudFwiXSwgeyBpZDogXCJ0YWIxXCIgfSk7XG5cdGNvbnN0IGhlYWRlcjEgPSBkb21DcmVhdGUoXCJoM1wiLCBbXCJ0YWItaGVhZGVyXCJdKTtcblx0aGVhZGVyMS50ZXh0Q29udGVudCA9IFwiUmVxdWVzdCBRdWV1ZVwiO1xuXHQvLyBzdWIgaGVhZGVyXG5cdGNvbnN0IHRleHQxID0gZG9tQ3JlYXRlKFwicFwiLCBbXCJ0YWItc3ViLWhlYWRlclwiXSk7XG5cdHRleHQxLnRleHRDb250ZW50ID0gXCJkaXNwbGF5IGJlbG93IHRoZSBjdXJyZW50IGxpc3Qgb2YgcmVxdWVzdGVkIHNvbmdzXCI7XG5cdC8vIHRleHQxLnRleHRDb250ZW50ICs9XG5cdC8vIFx0XCIgKkEgcmVxdWVzdCBuZXZlciBndWFyYW50ZWVzIGEgcGxheSAtIHdlJ2xsIGRvIG91ciBiZXN0IVwiO1xuXG5cdGNvbnN0IHF1ZXVlRGl2ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtdLCB7IGlkOiBcInF1ZXVlRGl2XCIgfSk7XG5cblx0Y29uc3QgVUxlbCA9IGRvbUNyZWF0ZShcInVsXCIsIFtdLCB7IGlkOiBcInF1ZXVlTGlzdFwiIH0pO1xuXHQvLyBsaXN0IGl0ZW0gMVxuXHRjb25zdCBsaXN0RWwxID0gZG9tQ3JlYXRlKFwibGlcIiwgW1wicXVldWUtbGlzdC1pdGVtXCJdLCB7IGlkOiBcImxpc3QtaXRlbS0xXCIgfSk7XG5cdGNvbnN0IHNvbmdJbmZvRGl2MSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJzb25nLWluZm9cIl0pO1xuXHRjb25zdCB0aXRsZTEgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wic29uZy10aXRsZVwiXSwgeyBpZDogXCJ0aXRsZTFcIiB9KTtcblx0dGl0bGUxLnRleHRDb250ZW50ID0gXCJTb25nIHRpdGxlXCI7XG5cdGNvbnN0IGFydGlzdDEgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wic29uZy1hcnRpc3RcIl0sIHsgaWQ6IFwiYXJ0aXN0MVwiIH0pO1xuXHRhcnRpc3QxLnRleHRDb250ZW50ID0gXCJBcnRpc3RcIjtcblx0c29uZ0luZm9EaXYxLmFwcGVuZCh0aXRsZTEsIGFydGlzdDEpO1xuXHRsaXN0RWwxLmFwcGVuZENoaWxkKHNvbmdJbmZvRGl2MSk7XG5cblx0Y29uc3Qgc3RhdHVzSW1nMSA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXSwge1xuXHRcdGlkOiBcInN0YXR1c0ltZzFcIixcblx0XHRzcmM6IGNoZWNrbWFyayxcblx0fSk7XG5cdGNvbnN0IHN0YXR1c0RpdjEgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wicXVldWUtc3RhdHVzXCJdLCB7IGlkOiBcInF1ZXVlU3RhdHVzMVwiIH0pO1xuXHRzdGF0dXNEaXYxLmFwcGVuZENoaWxkKHN0YXR1c0ltZzEpO1xuXHRsaXN0RWwxLmFwcGVuZENoaWxkKHN0YXR1c0RpdjEpO1xuXHQvLyBsaXN0IGl0ZW0gMlxuXHRjb25zdCBsaXN0RWwyID0gZG9tQ3JlYXRlKFwibGlcIiwgW1wicXVldWUtbGlzdC1pdGVtXCJdLCB7IGlkOiBcImxpc3QtaXRlbS0yXCIgfSk7XG5cdGNvbnN0IHNvbmdJbmZvRGl2MiA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJzb25nLWluZm9cIl0pO1xuXHRjb25zdCB0aXRsZTIgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wic29uZy10aXRsZVwiXSwgeyBpZDogXCJ0aXRsZTJcIiB9KTtcblx0dGl0bGUyLnRleHRDb250ZW50ID0gXCJTb25nIHRpdGxlXCI7XG5cdGNvbnN0IGFydGlzdDIgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wic29uZy1hcnRpc3RcIl0sIHsgaWQ6IFwiYXJ0aXN0MlwiIH0pO1xuXHRhcnRpc3QyLnRleHRDb250ZW50ID0gXCJBcnRpc3RcIjtcblx0c29uZ0luZm9EaXYyLmFwcGVuZCh0aXRsZTIsIGFydGlzdDIpO1xuXHRsaXN0RWwyLmFwcGVuZENoaWxkKHNvbmdJbmZvRGl2Mik7XG5cblx0Y29uc3Qgc3RhdHVzSW1nMiA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXSwge1xuXHRcdGlkOiBcInN0YXR1c0ltZzJcIixcblx0XHRzcmM6IHJlamVjdE1hcmssXG5cdH0pO1xuXHRjb25zdCBzdGF0dXNEaXYyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInF1ZXVlLXN0YXR1c1wiXSwgeyBpZDogXCJxdWV1ZVN0YXR1czJcIiB9KTtcblx0c3RhdHVzRGl2Mi5hcHBlbmRDaGlsZChzdGF0dXNJbWcyKTtcblx0bGlzdEVsMi5hcHBlbmRDaGlsZChzdGF0dXNEaXYyKTtcblx0Ly8gbGlzdCBpdGVtIDNcblx0Y29uc3QgbGlzdEVsMyA9IGRvbUNyZWF0ZShcImxpXCIsIFtcInF1ZXVlLWxpc3QtaXRlbVwiXSwgeyBpZDogXCJsaXN0LWl0ZW0tM1wiIH0pO1xuXHRjb25zdCBzb25nSW5mb0RpdjMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wic29uZy1pbmZvXCJdKTtcblx0Y29uc3QgdGl0bGUzID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInNvbmctdGl0bGVcIl0sIHsgaWQ6IFwidGl0bGUzXCIgfSk7XG5cdHRpdGxlMy50ZXh0Q29udGVudCA9IFwiU29uZyB0aXRsZVwiO1xuXHRjb25zdCBhcnRpc3QzID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInNvbmctYXJ0aXN0XCJdLCB7IGlkOiBcImFydGlzdDNcIiB9KTtcblx0YXJ0aXN0My50ZXh0Q29udGVudCA9IFwiQXJ0aXN0XCI7XG5cdHNvbmdJbmZvRGl2My5hcHBlbmQodGl0bGUzLCBhcnRpc3QzKTtcblx0bGlzdEVsMy5hcHBlbmRDaGlsZChzb25nSW5mb0RpdjMpO1xuXG5cdGNvbnN0IHN0YXR1c0ltZzMgPSBkb21DcmVhdGUoXCJpbWdcIiwgW10sIHtcblx0XHRpZDogXCJzdGF0dXNJbWczXCIsXG5cdFx0c3JjOiBjbG9jayxcblx0fSk7XG5cdGNvbnN0IHN0YXR1c0RpdjMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wicXVldWUtc3RhdHVzXCJdLCB7IGlkOiBcInF1ZXVlU3RhdHVzM1wiIH0pO1xuXHRzdGF0dXNEaXYzLmFwcGVuZENoaWxkKHN0YXR1c0ltZzMpO1xuXHRsaXN0RWwzLmFwcGVuZENoaWxkKHN0YXR1c0RpdjMpO1xuXHQvLyBsaXN0IGl0ZW0gNFxuXHRjb25zdCBsaXN0RWw0ID0gZG9tQ3JlYXRlKFwibGlcIiwgW1wicXVldWUtbGlzdC1pdGVtXCJdLCB7IGlkOiBcImxpc3QtaXRlbS00XCIgfSk7XG5cdGNvbnN0IHNvbmdJbmZvRGl2NCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJzb25nLWluZm9cIl0pO1xuXHRjb25zdCB0aXRsZTQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wic29uZy10aXRsZVwiXSwgeyBpZDogXCJ0aXRsZTRcIiB9KTtcblx0dGl0bGU0LnRleHRDb250ZW50ID0gXCJTb25nIHRpdGxlXCI7XG5cdGNvbnN0IGFydGlzdDQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wic29uZy1hcnRpc3RcIl0sIHsgaWQ6IFwiYXJ0aXN0NFwiIH0pO1xuXHRhcnRpc3Q0LnRleHRDb250ZW50ID0gXCJBcnRpc3RcIjtcblx0c29uZ0luZm9EaXY0LmFwcGVuZCh0aXRsZTQsIGFydGlzdDQpO1xuXHRsaXN0RWw0LmFwcGVuZENoaWxkKHNvbmdJbmZvRGl2NCk7XG5cblx0VUxlbC5hcHBlbmQobGlzdEVsMSwgbGlzdEVsMiwgbGlzdEVsMywgbGlzdEVsNCk7XG5cdHF1ZXVlRGl2LmFwcGVuZENoaWxkKFVMZWwpO1xuXG5cdHBhZ2UxLmFwcGVuZChoZWFkZXIxLCB0ZXh0MSwgcXVldWVEaXYpO1xuXHRyZXR1cm4gcGFnZTE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhZ2UxO1xuIiwiaW1wb3J0IGRvbUNyZWF0ZSBmcm9tIFwiLi4vaGVscGVycy9kb21DcmVhdGVcIjtcblxuZnVuY3Rpb24gY3JlYXRlUGFnZTIoKSB7XG5cdGNvbnN0IHBhZ2UyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhYmNvbnRlbnRcIl0sIHsgaWQ6IFwidGFiMlwiIH0pO1xuXHRjb25zdCBoZWFkZXIyID0gZG9tQ3JlYXRlKFwiaDNcIiwgW1widGFiLWhlYWRlclwiXSk7XG5cdGhlYWRlcjIudGV4dENvbnRlbnQgPSBcIk1ha2UgYSBSZXF1ZXN0XCI7XG5cdGNvbnN0IHRleHQyID0gZG9tQ3JlYXRlKFwicFwiLCBbXCJ0YWItc3ViLWhlYWRlclwiXSk7XG5cdHRleHQyLnRleHRDb250ZW50ID1cblx0XHRcIkVudGVyIHRoZSBzb25nLCBhcnRpc3QsIG9yIGFsYnVtIHRvIHNlYXJjaCB0aHJvdWdoIFNwb3RpZnlcIjtcblxuXHQvLyBzZWFyY2ggZm9ybVxuXHRjb25zdCBzZWFyY2hGb3JtID0gZG9tQ3JlYXRlKFwiZm9ybVwiLCBbXSwgeyBpZDogXCJzZWFyY2hGb3JtXCIsIGFjdGlvbjogXCIvXCIgfSk7XG5cdGNvbnN0IHNlYXJjaElucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW10sIHtcblx0XHR0eXBlOiBcInNlYXJjaFwiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuXHRcdG5hbWU6IFwic2VhcmNoXCIsXG5cdH0pO1xuXHRjb25zdCBzZWFyY2hCdXR0b24gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW10sIHsgdHlwZTogXCJzdWJtaXRcIiB9KTtcblx0c2VhcmNoQnV0dG9uLnRleHRDb250ZW50ID0gXCJFbnRlclwiO1xuXHRjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wic2VhcmNoLWNvbnRhaW5lclwiXSk7XG5cdHNlYXJjaEZvcm0uYXBwZW5kKHNlYXJjaElucHV0LCBzZWFyY2hCdXR0b24pO1xuXHRzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoRm9ybSk7XG5cblx0Ly8gZGlzcGxheSBzZWFyY2ggcmVzdWx0c1xuXHRjb25zdCByZXN1bHRzSGVhZGVyID0gZG9tQ3JlYXRlKFwiaDRcIiwgW1wicmVzdWx0cy1oZWFkZXJcIl0pO1xuXHRyZXN1bHRzSGVhZGVyLnRleHRDb250ZW50ID0gXCJSZXN1bHRzXCI7XG5cdGNvbnN0IHJlc3VsdERpdiA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJyZXN1bHQtaXRlbVwiXSk7XG5cdHJlc3VsdERpdi50ZXh0Q29udGVudCA9IFwiQXJ0aXN0IC0gU29uZyBUaXRsZVwiO1xuXG5cdC8vIEZFVENIIFNFQVJDSCBSRVNVTFRTXG5cblx0Ly8gY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJyZXN1bHRzLWNvbnRhaW5lclwiXSk7XG5cdC8vIHJlc3VsdHNDb250YWluZXIuYXBwZW5kKCk7XG5cdC8vIGZpbmFsIHBhZ2UgYXBwZW5kXG5cdHBhZ2UyLmFwcGVuZChoZWFkZXIyLCB0ZXh0Miwgc2VhcmNoQ29udGFpbmVyKTtcblx0cmV0dXJuIHBhZ2UyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlMjtcbiIsImltcG9ydCBkb21DcmVhdGUgZnJvbSBcIi4uL2hlbHBlcnMvZG9tQ3JlYXRlXCI7XG5pbXBvcnQgaW5zdGFncmFtRGl2IGZyb20gXCIuLi9oZWxwZXJzL2luc3RhZ3JhbVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQYWdlMygpIHtcblx0Y29uc3QgcGFnZTMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFiY29udGVudFwiXSwgeyBpZDogXCJ0YWIzXCIgfSk7XG5cdGNvbnN0IGhlYWRlcjMgPSBkb21DcmVhdGUoXCJoM1wiLCBbXCJ0YWItaGVhZGVyXCJdKTtcblx0aGVhZGVyMy50ZXh0Q29udGVudCA9IFwiREogSW5mb1wiO1xuXHRjb25zdCB0ZXh0MyA9IGRvbUNyZWF0ZShcInBcIiwgW1widGFiLXN1Yi1oZWFkZXJcIl0pO1xuXHR0ZXh0My50ZXh0Q29udGVudCA9XG5cdFx0XCJHaG9zdEhvcCBpcyBhIERKIGR1byBjb21wcmlzZWQgb2YgQmVuamFtaW4gSG9wcGVyIGFuZCBBbGV4IEdlaXNcIjtcblxuXHRjb25zdCBpbnN0YUNvbnRhaW5lciA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXSwgeyBpZDogXCJpbnN0YS1kaXZcIiB9KTtcblx0aW5zdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdGFncmFtRGl2KTtcblx0cGFnZTMuYXBwZW5kKGhlYWRlcjMsIHRleHQzLCBpbnN0YUNvbnRhaW5lcik7XG5cdHJldHVybiBwYWdlMztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZTM7XG4iLCJpbXBvcnQgZG9tQ3JlYXRlIGZyb20gXCIuLi9oZWxwZXJzL2RvbUNyZWF0ZVwiO1xuaW1wb3J0IGdpdGh1YkxvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9HaXRIdWItTWFyay02NHB4LnBuZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVQYWdlNCgpIHtcblx0Y29uc3QgcGFnZTQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFiY29udGVudFwiXSwgeyBpZDogXCJ0YWI0XCIgfSk7XG5cdGNvbnN0IGhlYWRlcjQgPSBkb21DcmVhdGUoXCJoM1wiLCBbXCJ0YWItaGVhZGVyXCJdKTtcblx0aGVhZGVyNC50ZXh0Q29udGVudCA9IFwiU2V0dGluZ3NcIjtcblxuXHRjb25zdCB0ZXh0NCA9IGRvbUNyZWF0ZShcInBcIiwgW1widGFiLXN1Yi1oZWFkZXJcIl0pO1xuXHR0ZXh0NC50ZXh0Q29udGVudCA9IFwiVGhpcyB0YWIgY29udGVudCBpcyBodW1ibGUgYW5kIGRvZXNuJ3QgaGF2ZSBhbiBlZ29cIjtcblxuXHRjb25zdCBnaXRodWJMaW5rID0gZG9tQ3JlYXRlKFwiYVwiLCBbXCJsaW5rLWdpdGh1YlwiXSwge1xuXHRcdGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FsZXhnZWlzL0RKLXJlcXVlc3QtYXBwXCIsXG5cdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHR9KTtcblx0Y29uc3QgZ2l0TG9nb0VsID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtcImdpdGh1Yi1sb2dvXCJdLCB7XG5cdFx0aWQ6IFwiZ2l0aHViTG9nb1wiLFxuXHRcdHNyYzogZ2l0aHViTG9nbyxcblx0fSk7XG5cdGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0TG9nb0VsKTtcblxuXHRjb25zdCBnaXRodWJMaW5rQ29udGFpbmVyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtdLCB7IGlkOiBcImdpdGh1YkNvbnRhaW5lclwiIH0pO1xuXHRnaXRodWJMaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXG5cdGNvbnN0IGxpZ2h0VG9nZ2xlVGV4dCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXSwgeyBpZDogXCJsaWdodC10b2dnbGUtdGV4dFwiIH0pO1xuXHRsaWdodFRvZ2dsZVRleHQudGV4dENvbnRlbnQgPSBcIkxpZ2h0XCI7XG5cblx0Y29uc3QgdG9nZ2xlSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXSwge1xuXHRcdGlkOiBcInRoZW1lLXRvZ2dsZVwiLFxuXHRcdHR5cGU6IFwiY2hlY2tib3hcIixcblx0fSk7XG5cdGNvbnN0IHRvZ2dsZVNsaWRlciA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wic2xpZGVyXCIsIFwicm91bmRcIl0pO1xuXHRjb25zdCB0b2dnbGVTd2l0Y2ggPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBbXCJzd2l0Y2hcIl0pO1xuXHR0b2dnbGVTd2l0Y2guYXBwZW5kKHRvZ2dsZUlucHV0LCB0b2dnbGVTbGlkZXIpO1xuXG5cdGNvbnN0IGRhcmtUb2dnbGVUZXh0ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtdLCB7IGlkOiBcImRhcmstdG9nZ2xlLXRleHRcIiB9KTtcblx0ZGFya1RvZ2dsZVRleHQudGV4dENvbnRlbnQgPSBcIkRhcmtcIjtcblxuXHRjb25zdCB0aGVtZUNvbnRhaW5lciA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0aGVtZVwiXSk7XG5cdHRoZW1lQ29udGFpbmVyLmFwcGVuZChsaWdodFRvZ2dsZVRleHQsIHRvZ2dsZVN3aXRjaCwgZGFya1RvZ2dsZVRleHQpO1xuXG5cdGNvbnNvbGUubG9nKHRoZW1lQ29udGFpbmVyKTtcblxuXHRwYWdlNC5hcHBlbmQoaGVhZGVyNCwgdGV4dDQsIGdpdGh1YkxpbmtDb250YWluZXIsIHRoZW1lQ29udGFpbmVyKTtcblx0cmV0dXJuIHBhZ2U0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlNDtcbiIsImltcG9ydCBjcmVhdGVOYXZNZW51IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2TWVudVwiO1xuaW1wb3J0IGNyZWF0ZVBhZ2UxIGZyb20gXCIuL3BhZ2VzL3BhZ2UxXCI7XG5pbXBvcnQgY3JlYXRlUGFnZTIgZnJvbSBcIi4vcGFnZXMvcGFnZTJcIjtcbmltcG9ydCBjcmVhdGVQYWdlMyBmcm9tIFwiLi9wYWdlcy9wYWdlM1wiO1xuaW1wb3J0IGNyZWF0ZVBhZ2U0IGZyb20gXCIuL3BhZ2VzL3BhZ2U0XCI7XG5cbmZ1bmN0aW9uIHJlbmRlckFwcCgpIHtcblx0Y29uc3QgbmF2TWVudSA9IGNyZWF0ZU5hdk1lbnUoKTtcblx0Y29uc3QgcGFnZTEgPSBjcmVhdGVQYWdlMSgpO1xuXHRjb25zdCBwYWdlMiA9IGNyZWF0ZVBhZ2UyKCk7XG5cdGNvbnN0IHBhZ2UzID0gY3JlYXRlUGFnZTMoKTtcblx0Y29uc3QgcGFnZTQgPSBjcmVhdGVQYWdlNCgpO1xuXHQvLyBmaW5hbCBjb250ZW50IGFwcGVuZFxuXHRjb25zdCBjb250ZW50RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdGNvbnRlbnRFbC5hcHBlbmQobmF2TWVudSwgcGFnZTEsIHBhZ2UyLCBwYWdlMywgcGFnZTQpO1xufVxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQXBwO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbInJlbmRlckFwcCIsImRlZmF1bHRUYWJTZWxlY3QiLCJ0YWJOdW1iZXIiLCJ0YWJDb250ZW50IiwidGFiTGluayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsImRpc3BsYXkiLCJkb21DcmVhdGUiLCJhY3RpdmF0ZVRhYiIsImV2ZW50IiwiaWQiLCJ0YXJnZXQiLCJzcGxpdCIsInRhYmNvbnRlbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsInJlbW92ZSIsInRhYmxpbmtzIiwiYWN0aXZlVGFiIiwiY3JlYXRlTmF2TWVudSIsInRhYkxpbmsxIiwiaHJlZiIsInRleHRDb250ZW50IiwidGFiTGluazIiLCJ0YWJMaW5rMyIsInRhYkxpbms0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hdkVsIiwiYXBwZW5kIiwiYXJnMSIsImFyZzIiLCJhcmczIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ3cmFwcGVyIiwiaW5uZXJIVE1MIiwiaW5zdGFncmFtRGl2IiwiZmlyc3RDaGlsZCIsImNoZWNrbWFyayIsInJlamVjdE1hcmsiLCJjbG9jayIsImNyZWF0ZVBhZ2UxIiwicGFnZTEiLCJoZWFkZXIxIiwidGV4dDEiLCJxdWV1ZURpdiIsIlVMZWwiLCJsaXN0RWwxIiwic29uZ0luZm9EaXYxIiwidGl0bGUxIiwiYXJ0aXN0MSIsImFwcGVuZENoaWxkIiwic3RhdHVzSW1nMSIsInNyYyIsInN0YXR1c0RpdjEiLCJsaXN0RWwyIiwic29uZ0luZm9EaXYyIiwidGl0bGUyIiwiYXJ0aXN0MiIsInN0YXR1c0ltZzIiLCJzdGF0dXNEaXYyIiwibGlzdEVsMyIsInNvbmdJbmZvRGl2MyIsInRpdGxlMyIsImFydGlzdDMiLCJzdGF0dXNJbWczIiwic3RhdHVzRGl2MyIsImxpc3RFbDQiLCJzb25nSW5mb0RpdjQiLCJ0aXRsZTQiLCJhcnRpc3Q0IiwiY3JlYXRlUGFnZTIiLCJwYWdlMiIsImhlYWRlcjIiLCJ0ZXh0MiIsInNlYXJjaEZvcm0iLCJhY3Rpb24iLCJzZWFyY2hJbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJzZWFyY2hCdXR0b24iLCJzZWFyY2hDb250YWluZXIiLCJyZXN1bHRzSGVhZGVyIiwicmVzdWx0RGl2IiwiY3JlYXRlUGFnZTMiLCJwYWdlMyIsImhlYWRlcjMiLCJ0ZXh0MyIsImluc3RhQ29udGFpbmVyIiwiZ2l0aHViTG9nbyIsImNyZWF0ZVBhZ2U0IiwicGFnZTQiLCJoZWFkZXI0IiwidGV4dDQiLCJnaXRodWJMaW5rIiwiZ2l0TG9nb0VsIiwiZ2l0aHViTGlua0NvbnRhaW5lciIsImxpZ2h0VG9nZ2xlVGV4dCIsInRvZ2dsZUlucHV0IiwidG9nZ2xlU2xpZGVyIiwidG9nZ2xlU3dpdGNoIiwiZGFya1RvZ2dsZVRleHQiLCJ0aGVtZUNvbnRhaW5lciIsImNvbnNvbGUiLCJsb2ciLCJuYXZNZW51IiwiY29udGVudEVsIl0sInNvdXJjZVJvb3QiOiIifQ==