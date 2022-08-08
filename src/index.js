import "./css/style.scss";
import domCreate from "./js/helpers/domCreate";
import activateTab from "./js/components/navMenu";

// nav menu module
const navEl = domCreate("nav", ["nav"]);
const tabLink1 = domCreate("a", ["tab-link"], { id: "tab-link-1", href: "#" });
tabLink1.textContent = "Link 1";
const tabLink2 = domCreate("a", ["tab-link"], { id: "tab-link-2", href: "#" });
tabLink2.textContent = "Link 2";
const tabLink3 = domCreate("a", ["tab-link"], { id: "tab-link-3", href: "#" });
tabLink3.textContent = "Link 3";
const tabLink4 = domCreate("a", ["tab-link"], { id: "tab-link-4", href: "#" });
tabLink4.textContent = "Link 4";
navEl.append(tabLink1, tabLink2, tabLink3, tabLink4);
// tab content - nav
// page 1
const page1 = domCreate("div", ["tabcontent"], { id: "tab1" });
const header1 = domCreate("h3");
header1.textContent = "Tab 1";
const text1 = domCreate("p");
text1.textContent = "Some excellent tab 1 content";
page1.append(header1, text1);
// page 2
const page2 = domCreate("div", ["tabcontent"], { id: "tab2" });
const header2 = domCreate("h3");
header2.textContent = "Tab 2";
const text2 = domCreate("p");
text2.textContent = "Unparalled synergy in this tab content";
page2.append(header2, text2);
// page 3
const page3 = domCreate("div", ["tabcontent"], { id: "tab3" });
const header3 = domCreate("h3");
header3.textContent = "Tab 3";
const text3 = domCreate("p");
text3.textContent =
	"Hard to understate the degree of awesome of this tab content";
page3.append(header3, text3);
// page 4
const page4 = domCreate("div", ["tabcontent"], { id: "tab4" });
const header4 = domCreate("h3");
header4.textContent = "Tab 4";
const text4 = domCreate("p");
text4.textContent = "This tab content is humble and doesn't have an ego";
page4.append(header4, text4);
// add event listener to all tab links
const tablinks = document.getElementsByClassName("tab-link");
for (let i = 0; i < tablinks.length; i += 1) {
	tablinks[i].addEventListener("click", activateTab);
}

// final content append
const contentEl = document.getElementById("content");
contentEl.appendChild(navEl, page1, page2, page3, page4);
