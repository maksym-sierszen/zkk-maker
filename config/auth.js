const { google } = require("googleapis")

const path = require("path")
const fs = require("fs")

const createAuthClient = async () => {
	const auth = new google.auth.GoogleAuth({
		keyFile: path.join(__dirname, "./credentials.json"),
		scopes: "https://www.googleapis.com/auth/spreadsheets.readonly",
	})

	return await auth.getClient()
}

const googleSheetsInstance = async () => {
	const authClient = await createAuthClient()
	return google.sheets({ version: "v4", auth: authClient })
}

module.exports = {
	googleSheetsInstance,
}
