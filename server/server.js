const express = require("express");
const path = require("path");
// SPOTIFY REQS
// const request = require('request'); // "Request" library
// const cors = require("cors");
// const querystring = require('querystring');
// const cookieParser = require("cookie-parser");

// const client_id = 'CLIENT_ID'; // Your client id
// const client_secret = 'CLIENT_SECRET'; // Your secret
// const redirect_uri = 'REDIRECT_URI'; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
// const generateRandomString = function (length) {
// 	let text = "";
// 	const possible =
// 		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// 	for (let i = 0; i < length; i++) {
// 		text += possible.charAt(Math.floor(Math.random() * possible.length));
// 	}
// 	return text;
// };

// const stateKey = "spotify_auth_state";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.static("../client/dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors()).use(cookieParser());
// app.use(express.static("public"));
// app.use("/api", api);

// EXAMPLE ROUTES
// GET Route for homepage
// console.log({ __dirname }); // '/Users/alex/Documents/CODING/REPOS/DJ-request-app/server'
// console.log(path.join(__dirname, "..", "client", "dist", "index.html"));

app.get("/", (req, res) => {
	// res.sendFile(path.join(__dirname, "../client/dist/index.html"));
	res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

// // GET Route for feedback page
// app.get("/feedback", (req, res) => {
// 	res.sendFile(path.join(__dirname, "/public/pages/feedback.html"));
// });

// // Wildcard route to direct users to a 404 page
// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "public/pages/404.html"));
// });

app.listen(PORT, () => {
	console.log(`App listening at http://localhost:${PORT} 🚀`);
});
