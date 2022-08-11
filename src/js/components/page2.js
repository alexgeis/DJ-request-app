import domCreate from "../helpers/domCreate";

function createPage2() {
	const page2 = domCreate("div", ["tabcontent"], { id: "tab2" });
	const header2 = domCreate("h3", ["tab-header"]);
	header2.textContent = "Request";
	const text2 = domCreate("p");
	text2.textContent =
		"Enter the song, artist, or album to search through Spotify";
	// search
	const searchForm = domCreate("form", [], { action: "/" });
	const searchInput = domCreate("input", [], {
		type: "search",
		placeholder: "Search...",
		name: "search",
	});
	const searchButton = domCreate("button", [], { type: "submit" });
	const searchContainer = domCreate("div", ["search-container"]);
	searchForm.append(searchInput, searchButton);
	searchContainer.appendChild(searchForm);
	page2.append(header2, text2, searchContainer);
	return page2;
}

export default createPage2;
