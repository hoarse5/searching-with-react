const express = require("express");
const app = express();
const PORT = 8000;
const students = require("./data/students.json");
const cors = require("cors");

app.use(cors());

//test whether the backend is working
app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/api/students", (req, res) => {
    res.send(JSON.stringify(students));
});

app.listen(PORT, () => {
    console.log(`The app is listening at http://localhost:${PORT}`);
});