async function fetchSpotifyData() {
	try {
		const clientId = process.env.SPOTIFY_CLIENT_ID;
		const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
		const authOptions = {
			url: "https://accounts.spotify.com/api/token",
			headers: {
				Authorization: `Basic ${new Buffer(
					`${clientId}:${clientSecret}`
				).toString("base64")}`,
			},
			form: {
				grant_type: "client_credentials",
			},
			json: true,
		};
		const tokenURL = "https://accounts.spotify.com/api/token";

		const tokenResponse = await fetch(tokenURL);
		const data = await tokenResponse.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

export default fetchSpotifyData;
