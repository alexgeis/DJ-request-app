import domCreate from "../helpers/domCreate";

function createPage3() {
	const page3 = domCreate("div", ["tabcontent"], { id: "tab3" });
	const header3 = domCreate("h3", ["tab-header"]);
	header3.textContent = "Tab 3";
	const text3 = domCreate("p");
	text3.textContent =
		"Hard to understate the degree of awesome of this tab content";
	page3.append(header3, text3);
	return page3;
}

export default createPage3;
