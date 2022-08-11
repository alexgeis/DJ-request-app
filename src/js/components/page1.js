import domCreate from "../helpers/domCreate";

function createPage1() {
	const page1 = domCreate("div", ["tabcontent"], { id: "tab1" });
	const header1 = domCreate("h3", ["tab-header"]);
	header1.textContent = "Tab 1";
	const text1 = domCreate("p");
	text1.textContent = "Some excellent tab 1 content";
	page1.append(header1, text1);
	return page1;
}

export default createPage1;
