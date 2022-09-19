import domCreate from "../helpers/domCreate";
import instagramDiv from "../helpers/instagram";

function createPage3() {
	const page3 = domCreate("div", ["tabcontent"], { id: "tab3" });
	const header3 = domCreate("h3", ["tab-header"]);
	header3.textContent = "DJ Info";
	const text3 = domCreate("p", ["tab-sub-header"]);
	text3.textContent =
		"GhostHop is a DJ duo comprised of Benjamin Hopper and Alex Geis";

	const instaContainer = domCreate("div", [], { id: "insta-div" });
	instaContainer.appendChild(instagramDiv);
	page3.append(header3, text3, instaContainer);
	return page3;
}

export default createPage3;
