import queryify from "./queryify";

async function fetchSpotifyData() {
	try {
		const authURL = "https://accounts.spotify.com/api/authorize";
		// const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
		const fetchParams = {
			client_id: process.env.SPOTIFY_CLIENT_ID,
			response_type: "code",
			redirect_uri: "http://localhost:8080",
			show_dialog: "false",
		};
		const fetchURL = `${authURL}${queryify(fetchParams)}`;
		const response = await fetch(fetchURL, {
			method: "GET",
			mode: "cors",
		});
		return response.json(); // parses JSON response into native JavaScript objects

		// const tokenResponse = await fetch(tokenURL);
		// const data = await tokenResponse.json();
		// console.log(data);

		// const authOptions = {
		// 	url: "https://accounts.spotify.com/api/token",
		// 	headers: {
		// 		Authorization: `Basic ${new Buffer(
		// 			`${clientId}:${clientSecret}`
		// 		).toString("base64")}`,
		// 	},
		// 	form: {
		// 		grant_type: "client_credentials",
		// 	},
		// 	json: true,
		// };
	} catch (error) {
		console.log(error);
	}
}

export default fetchSpotifyData;
