/**
 * Creates a valid URL query string from an object
 * @param  {object} object parameter keys/values
 * ensure object keys are using SNAKE_CASE
 * @return {string} The generated query string
 */

function queryify(params) {
	if (
		typeof params !== "object" ||
		params === null ||
		Object.entries(params).length === 0
	) {
		return;
	}
	// pseudo
	// valid query string = ?param_name=value&param_name2=value2&...
	// ? + key + = + value +
	const keys = Object.keys(params);
	let queryString = `?${keys[0]}=${params[keys[0]]}`;
	for (let i = 1; i < keys.length; i += 1) {
		const key = keys[i];
		const string = `&${key}=${params[key]}`;
		queryString += string;
	}
	return queryString;
}
// // test
// const objEx = {
// 	response_type: "code",
// 	client_id: "1234",
// 	redirect_uri: "https://alexgeis.github.io/DJ-request-app/",
// 	state: "1234567890abcdef",
// };
// console.log(queryify(objEx));

export default queryify;
