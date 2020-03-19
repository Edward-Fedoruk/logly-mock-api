const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();

app.get("/test-status", (req, res) => {
	res.sendStatus(200);
});

app.get("/test-data", (req, res) => {
	res.send('Some data');
});

app.listen(8080, () => {
	console.log("Server is started...");
});