const path = require("path")
const process = require("process")

module.exports = {
	SCOPES: ["https://www.googleapis.com/auth/spreadsheets.readonly"], // If modifying these scopes, delete token.json.
	TOKEN_PATH: path.join(process.cwd(), "/config/token.json"), // The file token.json stores the user's access and refresh tokens, and is
	// created automatically when the authorization flow completes for the first
	// time.
	CREDENTIALS_PATH: path.join(process.cwd(), "/config/credentials.json"),
}
