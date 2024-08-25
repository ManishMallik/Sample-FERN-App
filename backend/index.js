const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors({
    origin: 'https://sample-fern-app-client.vercel.app', // Replace with your React app's URL
    methods: 'GET,POST', // Specify the HTTP methods you want to allow
}));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/hello", (req, res) => {
    res.send("Hello World!");
});

app.get("/api", async (req, res) => {
    try{
        const response = await axios.get("http://127.0.0.1:5001/sample-project-1824d/us-central1/api/getClubs");
        res.send(response.data[0]['client email']);
    } catch (error) {
        console.error(error);
    }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});