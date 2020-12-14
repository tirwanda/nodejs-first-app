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
        //TODO: Parse the data => Convert String to JSON (Javascript Object)
        let profile = JSON.parse(body);
        console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} followers`);
    });
});

request.end();
request.on('error', e => {
    console.log(e);
});

