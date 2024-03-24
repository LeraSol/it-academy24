const axios = require('axios');

describe('API DELETE tests', function() {
  let result;
  beforeAll( async () => {
    result = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Books/1', {
      "id": 0,
      "title": "string",
      "description": "string",
      "pageCount": 0,
      "excerpt": "string",
      "publishDate": "2024-03-24T17:38:21.045Z"
    }, {
      headers: {
        'accept': '*/*',
  },
    })
  });

  test('DELETE /api/v1/Books should be status 200', async () => {
    expect(result.status).toEqual(200);
  })
});