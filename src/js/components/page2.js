import domCreate from "../helpers/domCreate";

function createPage2() {
	const page2 = domCreate("div", ["tabcontent"], { id: "tab2" });
	const header2 = domCreate("h3");
	header2.textContent = "Request";
	const text2 = domCreate("p");
	text2.textContent =
		"Enter the song, artist, or album to search through Spotify";
	page2.append(header2, text2);
	return page2;
}

export default createPage2;
