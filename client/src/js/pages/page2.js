import domCreate from "../helpers/domCreate";
import spottyImg from "../../assets/Spotify_Logo_RGB_White.png";

function createPage2() {
	const page2 = domCreate("div", ["tabcontent"], { id: "tab2" });
	const header2 = domCreate("h3", ["tab-header"]);
	header2.textContent = "Make a Request";
	const text2 = domCreate("p", ["tab-sub-header"]);
	text2.textContent =
		"Enter the song, artist, or album to search through Spotify";

	// search form
	const searchForm = domCreate("form", [], { id: "searchForm", action: "/" });
	const searchInput = domCreate("input", [], {
		type: "search",
		placeholder: "Search...",
		name: "search",
	});
	const searchButton = domCreate("button", [], { type: "submit" });
	searchButton.textContent = "Enter";
	const searchContainer = domCreate("div", ["search-container"]);
	searchForm.append(searchInput, searchButton);
	searchContainer.appendChild(searchForm);

	// spotify login button
	const loginDiv = domCreate("div", ["login-container"]);
	const spotifyImg = domCreate("img", [], { src: spottyImg });
	const spotifyLink = domCreate("a", ["login-link"]);
	spotifyLink.textContent = "Login to Spotify";
	loginDiv.append(spotifyImg, spotifyLink);

	// display search results
	const resultsHeader = domCreate("h4", ["results-header"]);
	resultsHeader.textContent = "Results";
	const resultDiv = domCreate("div", ["result-item"]);
	resultDiv.textContent = "Artist - Song Title";

	// FETCH SEARCH RESULTS

	// const resultsContainer = domCreate("div", ["results-container"]);
	// resultsContainer.append();
	// final page append
	page2.append(header2, text2, searchContainer, loginDiv);
	return page2;
}

export default createPage2;
