// this script looks to the list of games' ids and download each game
'use strict';

const data = require('./games_ids/fresh-ps4-games-ids.json'); // INPUT FILE WITH LIST OF REQUIRED IDS
const async = require("async");
const request = require('request');
const jsonfile = require('jsonfile');

const baseUrl = "http://www.giantbomb.com/api/game/";
const format = "/?format=json";
const apiKey = "&api_key=aaba549e362b68c090bbc073b0bde1cf799d1468";
const fieldList = "&field_list=name,deck,id,original_release_date,image,images,genres,platforms,videos,releases,api_detail_url,site_detail_url";

var i = 0;
var j = 0;
async.map(data.results, (game, done) => {
    i++;
    setTimeout( function(gameId) {
        return function() {
            request( baseUrl + gameId + format + apiKey + fieldList, (err, resp, body) => {
                if (err) done (err);

            if (resp.statusCode === 200) {
                j++;
                console.log(j + '. ' + 'gameId ' + gameId + ': statusCode 200');
                var unaryResults = JSON.parse(body).results;
                jsonfile.writeFile('./games/fresh-ps4-games/' + gameId + '.json', unaryResults, {spaces: 2}, (err) => {
                    if ( err ) {
                    console.error( err );
                }
                done(null, JSON.parse(body).results);
            } )
            }
        })
        }
     }(game.id), i * 2000)
    }, (err, results) => {
            if (err) console.error(err);
    // OUTPUT FILE WITH ALL GAMES INSIDE:
            jsonfile.writeFile('./games/fresh-ps4-games.json', results, {spaces: 2}, (err) => {
                if ( err ) {
                console.error( err );
                }
                console.log("success!")
            } )
        })





