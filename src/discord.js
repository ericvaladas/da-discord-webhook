const https = require('https');

export default class {
  constructor(url) {
    this.url = url;
  }

  send(message) {
    const body = JSON.stringify({
      content: message
    });

    const request = https.request(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    });

    request.write(body);
    request.end();
  }
}

