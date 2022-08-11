import "./css/style.scss";
import renderApp from "./js/render";
import fetchSpotifyData from "./js/helpers/spotify";

renderApp();
fetchSpotifyData();
// // TAB GUIDE
// 1 - Tab 1
// 2 - Request Page
// 3 - Tab 3
// 4 - Settings
function defaultTabSelect(tabNumber) {
	const tabContent = `tab${tabNumber}`;
	const tabLink = `tab-link-${tabNumber}`;

	document.getElementById(tabContent).classList.add("active");
	document.getElementById(tabContent).style.display = "block";
	document.getElementById(tabLink).classList.add("active");
}
defaultTabSelect(2);
