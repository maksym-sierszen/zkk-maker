const express = require("express")
const { googleSheetsInstance } = require("./config/auth")
const config = require("./config/config.json")
const app = express()

app.get("/", async (req, res) => {
	try {
		const googleSheets = await googleSheetsInstance()

		// read rows from spreadsheet
		const getColumns = await googleSheets.spreadsheets.values.get({
			spreadsheetId: config.SPREADSHEET_ID,
			range: "Arkusz1!A9:M18",
			majorDimension: "COLUMNS",
		})
		res.send(getColumns.data)
	} catch (error) {
		console.error("Error fetching data from Google Sheets", error)
		res.status(500).send("An error occurred while fetching data.")
	}
})

app.listen(1337, (req, res) => console.log("running on 1337"))
