# Web Scraper API

This is a simple API built with Express.js that scrapes legal information from a specific webpage. The API makes use of Axios for HTTP requests and Cheerio for web scraping.

## Prerequisites

Make sure you have the following dependencies installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
```

2. Install the dependencies:

```bash
cd your-repo
npm install
```

## Usage

1. Start the server:

```bash
npm start
```

2. Access the legal information by making a GET request to `http://localhost:5001/legal`.

## API Endpoints

### GET /legal

Retrieves the legal information from the specified webpage.

- **URL**: `/legal`
- **Method**: GET
- **Response format**: JSON

#### Response

The response will be a JSON object with the following structure:

```json
{
  "legalInfo": "..."
}
```

- `legalInfo`: The extracted legal information from the webpage.

## Configuration

In the `server.js` file, you can modify the following variables:

- `url`: The URL of the webpage to scrape.
- `port`: The port on which the server will run.

## Error Handling

If an error occurs during the scraping process, the API will return a JSON response with an error message and a status code of 500.

## Legal Disclaimer

Please ensure that you respect the terms of service and legal rights of the website you are scraping. Web scraping may have legal implications, and it's important to comply with the applicable laws and regulations.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Feel free to modify and extend the code according to your needs.