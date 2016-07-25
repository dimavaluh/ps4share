'use strict';

const data = require('./games_ids/ps4-games-ids.json');
const fs = require("fs");
const underscore = require("underscore");
const _ = require('lodash');
const request = require('request');
const jsonfile = require('jsonfile');
const async = require('async');

const baseUrl = "http://www.giantbomb.com/api/game/";
const format = "/?format=json";
const apiKey = "&api_key=aaba549e362b68c090bbc073b0bde1cf799d1468";
const fieldList = "&field_list=name,description,deck,id,original_release_date,image,images,genres,platforms,publishers,developers,videos,releases,api_detail_url,site_detail_url";

var idsArr = [];
var gamesArrOutput = [];

for (var i = 0; i < data.length; i++) {
    console.log(data[i].id);
    idsArr.push(data[i].id);
}

i = -1;
async.each(idsArr, function requestGameObject() {

    i++;
    if (i % 100 === 0 && i !== 0) {
        setTimeout(
        function requestGames() {
            request(baseUrl + idsArr[i] + format + apiKey + fieldList, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    fs.appendFile('./games/ps4-games.json', JSON.stringify(JSON.parse(body).results) + ",", (err) => {
                        if(err) throw err;
                    console.log('Wrote!');
                })
                }
            })
        }, 3600000)
    } else {
        request(baseUrl + idsArr[i] + format + apiKey + fieldList, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                fs.appendFile('./games/ps4-games.json', JSON.stringify(JSON.parse(body).results) + ",", (err) => {
                    if(err) throw err;
                console.log('Wrote!');
            })
            }
        })
    }

}, function callback(error, done) {
        if (error) {
            console.log('Access restricted!');
            throw error;
        }
        console.log('Hacker!');
        return done;
    }
);





