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

async.map(data.results, (game, done) => {
    //setTimeout(requestNotification, 5000); WRONG!!!
    request( doTimeout() + game.id + format + apiKey + fieldList, (err, resp, body) => {
        if (err) done (err);

        if (resp.statusCode === 200) {
            console.log('statusCode === 200');
            done(null, JSON.parse(body).results);
        }
        })
    }, (err, results) => {
            if (err) console.error(err);
            jsonfile.writeFile('./games/ps4-games.json+', results, {spaces: 2}, (err) => {
                if ( err ) {
                console.error( err );
                }
            } )
        })

function doTimeout() {
    setTimeout(function returnBaseUrl() {
        return "http://www.giantbomb.com/api/game/";
    }, 1000);
}

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



