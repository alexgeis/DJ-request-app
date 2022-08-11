import domCreate from "../helpers/domCreate";

function createPage4() {
	const page4 = domCreate("div", ["tabcontent"], { id: "tab4" });
	const header4 = domCreate("h3");
	header4.textContent = "Settings";
	const text4 = domCreate("p");
	text4.textContent = "This tab content is humble and doesn't have an ego";
	const githubLink = domCreate("a", [], {
		href: "https://github.com/alexgeis/DJ-request-app",
		target: "_blank",
	});
	githubLink.textContent = "GITHUB REPO LINK";
	page4.append(header4, text4, githubLink);
	return page4;
}

export default createPage4;
