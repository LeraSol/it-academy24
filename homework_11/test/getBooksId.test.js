const axios = require('axios');
const {Validator} = require('jsonschema');
const getIdBooksJsonSchema = require('../testData/getIdBooks.v1.json');

const validator = new Validator();

describe ('API tests', function() {
  let result;
  beforeAll( async () => {
    result = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books/1', {
      headers: {
        'accept': 'text/plain; v=1.0'
      }
    })
  });

  test('GET /api/v1/Books should be status 200', async () => {
    expect(result.status).toEqual(200);
  })

  test('GET /api/v1/Books should be valid jsonschema', async () => {
    expect(result).toBeValidSchema(getIdBooksJsonSchema);
  })
})