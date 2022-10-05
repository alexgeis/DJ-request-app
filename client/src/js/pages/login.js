import domCreate from "../helpers/domCreate";
// import spottyImg from "../../assets/assets/Spotify_Logo_RGB_White.png";

function createLoginPage() {
	const content = domCreate("div", ["tabcontent"], { id: "loginPage" });
	const header = domCreate("h3", ["tab-header"]);
	header.textContent = "Login to Spotify";
	// const subHeader = domCreate("p", ["tab-sub-header"]);
	// subHeader.textContent =
	// 	"Enter the song, artist, or album to search through Spotify";

	// login section
	// const loginDiv = domCreate("div", ["login-container"]);
	// const spotifyImg = domCreate("img", [], { src: spottyImg });
	// const spotifyLink = domCreate("a", ["login-link"]);
	// loginDiv.append(spotifyImg, spotifyLink);

	// content.append(header, loginDiv);
	return content;
}

export default createLoginPage;
