const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API endpoint to scrape a website
app.post('/scrape', async (req, res) => {
    const { url } = req.body;
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const scrapedData = [];
        $('h1').each((i, element) => {
            scrapedData.push($(element).text());
        });
        res.json({ success: true, data: scrapedData });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// API endpoint to manage websites
app.post('/websites', (req, res) => {
    // Logic to manage websites (add, delete, update)
    res.json({ message: 'Manage websites endpoint' });
});

// API endpoint to search for websites
app.get('/search', (req, res) => {
    const { query } = req;
    // Logic to search for websites
    res.json({ message: 'Search endpoint', results: [] });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
