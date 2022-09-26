import domCreate from "../helpers/domCreate";
import githubLogo from "../../assets/GitHub-Mark-64px.png";

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
	const gitLogoEl = domCreate("img", ["github-logo"], {
		id: "githubLogo",
		src: githubLogo,
	});
	githubLink.appendChild(gitLogoEl);

	const githubLinkContainer = domCreate("div", [], { id: "githubContainer" });
	githubLinkContainer.appendChild(githubLink);

	const lightToggleText = domCreate("div", [], { id: "light-toggle-text" });
	lightToggleText.textContent = "Light";

	const toggleInput = domCreate("input", [], {
		id: "theme-toggle",
		type: "checkbox",
	});
	const toggleSlider = domCreate("span", ["slider", "round"]);
	const toggleSwitch = domCreate("label", ["switch"]);
	toggleSwitch.append(toggleInput, toggleSlider);

	const darkToggleText = domCreate("div", [], { id: "dark-toggle-text" });
	darkToggleText.textContent = "Dark";

	const themeContainer = domCreate("div", ["theme"]);
	themeContainer.append(lightToggleText, toggleSwitch, darkToggleText);

	console.log(themeContainer);

	page4.append(header4, text4, githubLinkContainer, themeContainer);
	return page4;
}

export default createPage4;
