const axios = require('axios');
const {Validator} = require('jsonschema');
const putBooksJsonSchema = require('../testData/putBooks.v1.json');
const { put } = require('axios');

const validator = new Validator();

describe('API PUT tests', function() {
  let result;
  beforeAll( async () => {
    result = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Books/1', {
      "id": 0,
      "title": "string",
      "description": "string",
      "pageCount": 0,
      "excerpt": "string",
      "publishDate": "2024-03-24T17:38:21.045Z"
    }, {
      headers: {
        'access-control-allow-origin': '*',
        'content-type': 'application/json; charset=utf-8; v=1.0',
  },
    })
  });

  test('PUT /api/v1/Books should be status 200', async () => {
    expect(result.status).toEqual(200);
  })

  test('PUT /api/v1/Books should be valid jsonschema', async () => {
    expect(result).toBeValidSchema(putBooksJsonSchema);
  })
});