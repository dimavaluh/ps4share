'use strict';

const baseUrl = "http://www.giantbomb.com/api/game/";
var gameId;
var format = "/?format=json";
const apiKey = "&api_key=aaba549e362b68c090bbc073b0bde1cf799d1468";
const fieldList = "&field_list=name,description,deck,id,original_release_date,image,images,genres,platforms,publishers,developers,videos,releases,api_detail_url,site_detail_url";

const data = require('./games_ids/ps4-games-ids.json');
const fs = require("fs");
const underscore = require("underscore");
const _ = require('lodash');
const request = require('request');
const jsonfile = require('jsonfile');
const async = require('async');

var idsArr = [];
var gamesArrOutput = [];

for (var i = 0; i < data.length; i++) {
    console.log(data[i].id);
    idsArr.push(data[i].id);
}

i = -1;
async.each(idsArr, function requestGameObject() {
    i++;
    request(baseUrl + idsArr[i] + format + apiKey + fieldList, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            fs.appendFile('./games/' + idsArr[i] + '.json', JSON.stringify(JSON.parse(body).results) + ",", (err) => {
                if(err) throw err;
                console.log('Wrote!');
            })

            //console.log(body);
        }
    })
}, function callback(error, done) {
        if (error) {
            console.log('Access restricted!')
            throw error;
        }
        console.log('Hacker!');
        return done;
    }
);


//for (var key in gamesArr) {
//    gameId = key;
//    var gameFileName = './games_files/' + gameId + '.json';
//    request(baseUrl + gameId + format + apiKey + fieldList, function (error, response, body) {
//
//        if (error) throw error;
//
//        if (response.statusCode === 200) {
//            //fs.writeFileSync('./games_files/games.json', JSON.stringify(JSON.parse(body).results), "UTF-8", (err) => {
//            //    if (err) throw err;
//            //console.log('appended');    this works too, but this overwrite the existing text
//            //});
//
//
//            //console.log(JSON.parse(body).results.genres);   this works
//            //    fs.writeFile(gameFileName, '', (err) => {
//            //        if (err) throw err;
//            //    console.log('It\'s saved!');
//            //});
//
//            //fs.appendFile('./games_files/games.json', JSON.parse(body).results, (err) => {
//            //    if (err) throw err;
//
//            //fs.appendFile('./games_files/games.json', '/n', (err) => {
//            //    if (err) throw err;
//            //console.log('New line was successfully appended!');
//            //});
//            //console.log('The "data to append" was appended to file!');
//        }
//    });
//}


//_.forEach(data.results, function (game) {
//    request(endPoint + game.id + format + apiKey + fieldList, function (error, resp, body) {
//        if (!error && resp.statusCode === 200){
//            jsonfile.writeFile("./result.json", JSON.parse(body), {spaces: 2}, function (err) {
//                if (err) {
//                console.error(err);
//            }
//        })
//            //console.log(JSON.parse(body).results.genres);
//        }
//    } );
//} );



