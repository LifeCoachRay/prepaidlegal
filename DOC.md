# Web Scraper API Documentation

## Introduction

The Web Scraper API is a RESTful API built using Express.js that allows you to scrape legal information from a specific webpage. This API utilizes Axios for making HTTP requests and Cheerio for web scraping.

## API Endpoints

### GET /legal

Retrieves the legal information from the specified webpage.

#### Request

- Method: GET
- Endpoint: `/legal`
- Response Format: JSON

#### Response

The response from the `/legal` endpoint is a JSON object with a single property:

- `legalInfo` (string): The extracted legal information from the webpage.

#### Example

Request:
```
GET /legal
```

Response:
```json
{
  "legalInfo": "This is the legal information you want to scrape."
}
```

## Installation and Setup

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

## Configuration

In the `app.js` file, you can modify the following variables:

- `url`: The URL of the webpage to scrape.
- `port`: The port on which the server will run.

## Error Handling

If an error occurs during the scraping process, the API will return a JSON response with an error message and a status code of 500.

## Legal Disclaimer

Please ensure that you respect the terms of service and legal rights of the website you are scraping. Web scraping may have legal implications, and it's important to comply with the applicable laws and regulations.

## License

This project is licensed under the MIT License.

Feel free to modify and extend the code according to your needs.

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [Axios Documentation](https://axios-http.com/)
- [Cheerio Documentation](https://cheerio.js.org/)