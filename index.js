const express = require('express');
const app = express();
require('dotenv').config()


const urls = process.env.URLS.split(';') || [];
console.log(urls)

async function fetchURLS(urls) {
    try {
        for (url of urls) {
            fetch(url);
        }
    } catch (error) {
        console.error(error)
    }
}

app.get('/test', async (req, res) => {
    console.log("FETCHED!")
    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    setInterval(() => { fetchURLS(urls) }, 5 * 60 * 1000)
});
