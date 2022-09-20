const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

// const webpack = require("webpack");
// const config = require("../client/webpack.config");

// const compiler = webpack(config);

// await new Promise((resolve, reject) => {
// 	compiler.run((err, res) => {
// 		if (err) {
// 			console.log(err);
// 			return reject(err);
// 		}
// 		resolve(res);
// 	});
// });

// middleware example
// const { clog } = require("./middleware/clog");
// Import custom middleware, "cLog"
// app.use(clog);
// API example
// const api = require("./routes/index.js");

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api", api);

app.use(express.static("public"));

// EXAMPLE ROUTES
// GET Route for homepage
app.get("/", (req, res) => {
	// res.sendFile(path.join(__dirname, "../public/index.html"));
	res.sendFile(path.join(__dirname, "../client/dist/index.html"));
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
