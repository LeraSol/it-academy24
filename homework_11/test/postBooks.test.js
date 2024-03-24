const axios = require('axios');
const {Validator} = require('jsonschema');
const postBooksJsonSchema = require('../testData/postBooks.v1.json');
const { post } = require('axios');

const validator = new Validator();
const {sendHttpRequest} = require('../helpers/sendHttpRequest')

describe('API POST tests', function() {
  let result;
  beforeAll( async () => {
    result = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books', {
      "id": 0,
      "title": "string",
      "description": "string",
      "pageCount": 0,
      "excerpt": "string",
      "publishDate": "2024-03-23T11:40:25.145Z"
    }, {
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json; v=1.0',
      }
    })
  });

  test('POST /api/v1/Books should be status 200', async () => {
    expect(result.status).toEqual(200);
  })

  test('POST /api/v1/Books should be valid jsonschema', async () => {
    expect(result).toBeValidSchema(postBooksJsonSchema);
  })
});

describe('API POST negative tests', function() {
  let result;
  beforeAll( async () => {
    const body = {
      url: 'https://fakerestapi.azurewebsites.net/api/v1/Book',
      data: {
        "id": 0,
        "title": "string",
        "description": "string",
        "pageCount": 0,
        "excerpt": "string",
        "publishDate": "2024-03-23T11:40:25.145Z"
      },
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json; v=1.0',
      }
    }
    result = await sendHttpRequest(body)
  });

  test('POST /api/v1/Books should be status 404', async () => {
    expect(result.status).toEqual(404);
  })
})