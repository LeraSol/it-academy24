const axios = require('axios');
const {Validator} = require('jsonschema');
const getOzJsonSchema = require('../testData/getOz.v1.json');

const validator = new Validator();

describe ('API GET tests', function() {
  let result;
  beforeEach(async () => {
    result = await axios.get('https://oz.by/goods/ajax/html_box.php?idGoods=101334231&type=html&sm=true&searchToken=&secondGoodsFromSet=1069870', {
      headers: {
        'accept': 'application/json, text/javascript, */*; q=0.01'
      }
    })
  });

  test('GET /oz.by/goods/ajax/html_box.php?idGoods=101334231&type=html&sm=true&searchToken=&secondGoodsFromSet=1069870 should be status 200', async () => {
    expect(result.status).toEqual(200);
  });

  test('GET /oz.by/goods/ajax/html_box.php?idGoods=101334231&type=html&sm=true&searchToken=&secondGoodsFromSet=1069870 should be valid jsonschema', async () => {
    expect(result).toBeValidSchema(getOzJsonSchema);
  })
})