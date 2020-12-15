let profile = require('./profile.js');

// let profiles = ['tirwanda', 'rizafahmi'];

// profiles.map(e => {
//     return profile.get(e);
// });

let profiles = process.argv.slice(2);
profiles.map(profile.get);