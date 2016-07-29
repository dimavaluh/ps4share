'use strict';

const data = require('./games_ids/ps4-games-ids.json');
const fs = require("fs");
const async = require("async");
const underscore = require("underscore");
const _ = require('lodash');
const request = require('request');
const jsonfile = require('jsonfile');

const baseUrl = "http://www.giantbomb.com/api/game/";
const format = "/?format=json";
const apiKey = "&api_key=aaba549e362b68c090bbc073b0bde1cf799d1468";
const fieldList = "&field_list=name,description,deck,id,original_release_date,image,images,genres,platforms,publishers,developers,videos,releases,api_detail_url,site_detail_url";

var i = 0;
async.map(data.results, (game, done) => {
    i++;
    setTimeout( function(gameId) {
        return function() {
            console.log(gameId);
            request( baseUrl + gameId + format + apiKey + fieldList, (err, resp, body) => {
                if (err) done (err);

            if (resp.statusCode === 200) {
                console.log('statusCode === 200');
                done(null, JSON.parse(body).results);
            }
        })
        }
     }(game.id), i * 2000)
    }, (err, results) => {
            if (err) console.error(err);
            jsonfile.writeFile('./games/ps4-games1.json', results, {spaces: 2}, (err) => {
                if ( err ) {
                console.error( err );
                }
            } )
        })


// THIS TRULY WORKS BUT HERE NEED TO IMPLEMENT BREAK BETWEEN EACH REQUEST
//async.map(data.results, (game, done) => {
//    request(baseUrl + game.id + format + apiKey + fieldList, (err, resp, body) => {
//        if (err) done (err);
//
//if (resp.statusCode === 200) {
//    console.log('statusCode === 200');
//    done(null, JSON.parse(body).results);
//}
//})
//}, (err, results) => {
//    if (err) console.error(err);
//    jsonfile.writeFile('./games/ps4-games.json+', results, {spaces: 2}, (err) => {
//        if ( err ) {
//        console.error( err );
//    }
//} )
//})



