// TODO: Connect to Github API
let https = require('https');
const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/tirwanda',
    method: 'GET',
    headers: {
        'user-agent': 'nodejs'
    }
}

let request = https.request(options, res => {
    console.log(`Got response : ${res.statusCode}`);
});

request.end();
request.on('error', e => {
    console.log(e);
});

// TODO: Read the data
// TODO: Parse the data
// TODO: Print the data out
