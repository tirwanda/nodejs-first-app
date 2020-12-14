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
    // console.log(`Got response : ${res.statusCode}`);
    let body = '';
    res.on('data', data => {
        body += data;
    });

    res.on('end', () => {
        console.log(body);
    });

    //TODO: Parse the data
    
});

request.end();
request.on('error', e => {
    console.log(e);
});

