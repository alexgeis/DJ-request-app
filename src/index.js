import "./css/style.scss";
import createNavMenu from "./js/components/navMenu";
import createPage1 from "./js/components/page1";
import createPage2 from "./js/components/page2";
import createPage3 from "./js/components/page3";
import createPage4 from "./js/components/page4";

// nav menu
const navMenu = createNavMenu();
// page 1
const page1 = createPage1();
// page 2
const page2 = createPage2();
// page 3
const page3 = createPage3();
// page 4
const page4 = createPage4();

// final content append
const contentEl = document.getElementById("content");
contentEl.append(navMenu, page1, page2, page3, page4);
