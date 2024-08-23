const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
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