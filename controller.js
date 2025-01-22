const { googleSheetsInstance } = require("./config/auth")
const config = require("./config/config.json")

let keyValueObject = {}
// router
const getSheetData = async () => {
	try {
		const googleSheets = await googleSheetsInstance()

		const getColumns = await googleSheets.spreadsheets.values.get({
			spreadsheetId: config.SPREADSHEET_ID,
			range: "Arkusz1!A9:M18",
			majorDimension: "COLUMNS",
		})

		const values = getColumns.data.values || []
		keyValueObject = values.reduce((acc, column) => {
			if (column.length > 1) {
				const [key, ...data] = column
				acc[key] = data
			}
			return acc
		}, {}) // empty object as initial value
        console.log(keyValueObject)
		return keyValueObject
		
	} catch (error) {
		console.error("Error fetching data from Google Sheets", error)
		res.status(500).send("An error occurred while fetching data.")
	}
}

// const printData = async () => {
// 	const data = await getSheetData()
// 	console.log(data) // Tutaj dane będą dostępne
// }

// printData()

module.exports = { getSheetData }
