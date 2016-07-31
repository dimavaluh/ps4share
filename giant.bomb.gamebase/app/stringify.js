// as giantbomb.com API return invalid JSON objects, we have to validate them, what actually is the aim of this script

'use strict';

//link the FileSystem module from node_modules
const fs = require('fs');

//idArr is the array of the game objects:
var idArr = [];

// this block is responsible for stringifying the keys in each object
idArr = JSON.stringify(idArr);
console.log(idArr);

// and this block write the array of already stringified json to file
fs.writeFile('./games_ids/fresh-ps4-games-ids.json', idArr, "UTF-8", (err) => {
    if (err) throw err;
console.log('success!');
});