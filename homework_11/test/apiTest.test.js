const axios = require('axios');
const {Validator} = require('jsonschema');
const getBooksJsonSchema = require('../testData/getBooks.v1.json');

const validator = new Validator();
const {sendHttpRequest} = require('../helpers/sendHttpRequest')
const postBooksJsonSchema = require('../testData/postBooks.v1.json');

describe ('API tests', function() {
  let result;
  beforeAll( async () => {
    result = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books', {
      headers: {
        'accept': 'text/plain; v=1.0'
      }
    })
  });

  test('GET /api/v1/Books should be status 200', async () => {
    expect(result.status).toEqual(200);
  })

  test('GET /api/v1/Books should be valid jsonschema', async () => {
    expect(result).toBeValidSchema(getBooksJsonSchema);
  })
})

describe ('API negative tests', function() {
  let result;
  beforeAll( async () => {
    const body ={
      url: 'https://fakerestapi.azurewebsites.net/api/v1/Book',
      headers: {
        'accept': 'text/plain; v=1.0'
      }
    }
    result = await sendHttpRequest(body)
  });

  test('GET /api/v1/Books should be status 404', async () => {
    expect(result.status).toEqual(404);
  })
})