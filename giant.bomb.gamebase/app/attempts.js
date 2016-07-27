/**
 * Created by SHONIE on 26.07.2016.
 */

"use strict";

const data = require('./games_ids/ps4-games-ids.json');
const _ = require('lodash');
const request = require('request');
const jsonfile = require('jsonfile');
const async = require('async');

const baseUrl = "http://www.giantbomb.com/api/game/";
const format = "/?format=json";
const apiKey = "&api_key=aaba549e362b68c090bbc073b0bde1cf799d1468";
const fieldList = "&field_list=name,description,deck,id,original_release_date,image,images,genres,platforms,publishers,developers,videos,releases,api_detail_url,site_detail_url";

//EXAMPLE OF LOOP WITH DELAY BETWEEN ITERATIONS
//function doSetTimeout(i) {
//    setTimeout(function() { console.log(data.results[i].id); }, i * 2000);
//}
//
//for (var i = 1; i < data.results.length; i++) {
//    doSetTimeout(i);
//}

function requestLoop() {
    for (var i = 0; i < data.results.length; i++) {
        doSetTimeout(i);
    }
}

function doSetTimeout(i) {
    setTimeout( (game, done) => {

        request(baseUrl + data.results[i].id + format + apiKey + fieldList, (err, resp, body) => {
            if (err) done(err);

            if (resp.statusCode === 200) {
                console.log('statusCode === 200');
                done(null, JSON.parse(body).results);
            }
        })
    }, i * 10000);
}

//function doRequest(i) {
//    console.log(data.results[i].id);
//    request(baseUrl + data.results[i].id + format + apiKey + fieldList, function (err, resp, body) {
//        if (err) done(err);
//
//        if (resp.statusCode === 200) {
//            console.log('statusCode === 200');
//            done(null, JSON.parse(body).results);
//        }
//    })
//}

requestLoop();




//
//async.map(data.results, requestLoop, function (err, results) {
//
//    if (err) console.error(err);
//
//    jsonfile.writeFile('./games/ps4-games.json', results, {spaces: 2}, function (err) {
//        if (err) {
//            console.error(err);
//        }
//    })
//} );












//async.map(data.results, (game, done) => {
//    request( baseUrl + game.id + format + apiKey + fieldList, ( err, resp, body ) => {
//
//        if (err);
//{
//    console.error(err);
//    done(err);
//}
//
//if (resp.statusCode === 200) {
//    console.log('statusCode === 200');
//    done(null, JSON.parse(body).results); /// WHAT IS IT? o/O
//}
//} )


//)


// async.map(['a', 'b', 'c'], (value, done) => {
//  console.log(value);
//
//  if (value === 'b') {
//      return done(true);
//  }
//
//  done(false, value + '!');
// }, (err, result) => {
//  if (err) console.error(err);
//  else console.log(result);
// });