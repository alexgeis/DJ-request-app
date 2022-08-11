import domCreate from "../helpers/domCreate";

function createPage4() {
	const page4 = domCreate("div", ["tabcontent"], { id: "tab4" });
	const header4 = domCreate("h3");
	header4.textContent = "Settings";
	const text4 = domCreate("p");
	text4.textContent = "This tab content is humble and doesn't have an ego";
	page4.append(header4, text4);
	return page4;
}

export default createPage4;
