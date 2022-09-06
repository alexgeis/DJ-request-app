import domCreate from "../helpers/domCreate";

function createPage4() {
	const page4 = domCreate("div", ["tabcontent"], { id: "tab4" });
	const header4 = domCreate("h3", ["tab-header"]);
	header4.textContent = "Settings";
	const text4 = domCreate("p", ["tab-sub-header"]);
	text4.textContent = "This tab content is humble and doesn't have an ego";
	const githubLink = domCreate("a", ["link-github"], {
		href: "https://github.com/alexgeis/DJ-request-app",
		target: "_blank",
	});
	githubLink.textContent = "GITHUB REPO LINK";
	const githubLinkContainer = domCreate("div", [], { id: "githubContainer" });
	githubLinkContainer.appendChild(githubLink);
	page4.append(header4, text4, githubLinkContainer);
	return page4;
}

export default createPage4;
