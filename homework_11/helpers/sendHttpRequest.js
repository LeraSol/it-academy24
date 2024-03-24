const axios = require('axios');
const https = require('https');

async function sendHttpRequest(param, httpMethod = 'GET', statusCode, testTimeout = 10000) {
  const conf = {
    method: httpMethod,
    headers: {
      'Conent-Type': 'application/json',
    },
    ...param,
    validateStatus(status) {
      return statusCode ? statusCode === status : true;
    },
    httpsAgent: new https.Agent( {
      rejectUnauthorized: false,
    }),
    timeout: testTimeout,
  };
  return axios(conf);
}

module.exports = {sendHttpRequest}