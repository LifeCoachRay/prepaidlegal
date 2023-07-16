const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

app.get('/legal', (req, res) => {
  const url = 'https://tthompsonray.wearelegalshield.com/legal';

  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      // Use jQuery-like selectors to extract the desired information
      const legalInfo = $('#legal').text(); // Replace 'element-id' with the actual ID or class of the legal information element

      res.json({ legalInfo });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});
