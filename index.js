const express = require('express');
const app = express();
require('dotenv').config()


const urls = process.env.URLS.split(';') || [];
console.log(urls)

async function fetchURLS(urls) {
    console.log("Fetching URLS")
    const data = await Promise.all(urls.map(async (url) => {
        await fetch(url);
    }));
    return data
}

app.get('/test', async (req, res) => {
    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    setInterval(() => { fetchURLS(urls) }, 10 * 60 * 1)
});
