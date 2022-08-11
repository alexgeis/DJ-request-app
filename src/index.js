import "./css/style.scss";
import createNavMenu from "./js/components/navMenu";
import createPage1 from "./js/pages/page1";
import createPage2 from "./js/pages/page2";
import createPage3 from "./js/pages/page3";
import createPage4 from "./js/pages/page4";

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

// feed in a number 1-4 to select a default tab on pageload;
function defaultTabSelect(tabNumber) {
	const tabContent = `tab${tabNumber}`;
	const tabLink = `tab-link-${tabNumber}`;

	document.getElementById(tabContent).classList.add("active");
	document.getElementById(tabContent).style.display = "block";
	document.getElementById(tabLink).classList.add("active");
}
defaultTabSelect(2);
