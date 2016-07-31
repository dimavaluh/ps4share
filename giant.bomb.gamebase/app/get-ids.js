// this script should get the list of ids of the specified platform (actually here could be
// any parameter of the game, as release_date etc.). and then save it to the ./games_ids directory

// DONT USE IT
// IT MUST BE FINALIZED

'use strict';

const data = require('./games_ids/ps4-games-ids.json');
const fs = require("fs");
const async = require("async");
const request = require('request');
const jsonfile = require('jsonfile');

const baseUrl = "http://www.giantbomb.com/api/games/";
const format = "?format=json";
const apiKey = "&api_key=aaba549e362b68c090bbc073b0bde1cf799d1468";
const filter = "&filter=platforms:146,original_release_date:2013-01-01%2000:00:00|2016-07-31%2023:59:59";
const sort = "&sort=original_release_date:desc";
const offset = "&offset=";
var offsetValue = 0;
const fieldList = "&field_list=name,id,original_release_date";

request(baseUrl + format + apiKey + filter + sort + offset + offsetValue + fieldList, (err, resp, body) => {

        if (err) throw (err);

        if (resp.statusCode === 200) {
            var resultsNum = JSON.parse(body).number_of_total_results;
            console.log("Number of total results: " + resultsNum);
            return resultsNum;
        }
    });

//console.log(resultsNum);

//var totalResultsNum = request();

//var totalRequestNum = 100 * Math.floor(totalResultsNum / 100);
//console.log("totalRequestNum = " + totalRequestNum);



//for (offsetValue = 0; offsetValue <= totalRequestNum; offsetValue + 100) {
//    (offsetValue) => {
//        return function() {
//            request(baseUrl + format + apiKey + filter + sort + offset + offsetValue + fieldList, (err, resp, body) => {
//                if (err) throw (err);
//
//            if (resp.statusCode === 200) {
//                console.log("statusCode === 200");
//                fs.appendFileSync("fresh-ps4-games-ids.json", JSON.parse(body).results, (err) => {
//                    if (err) throw (err);
//                    console.log("Page was successfully saved and appended!")
//                });
//            }
//        })
//        }; } (offsetValue);
//}






