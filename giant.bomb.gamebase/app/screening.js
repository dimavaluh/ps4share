"use strict";

var fs = require('fs');
var async = require('async');
var jsonfile = require('jsonfile')

var physicalList = require('./physicalGamesList.js');
var globalList = require('./games/fresh-ps4-games.json');


var arr = [];
var newObj = {};

var deleted = 0;

var cloner = {
    _clone: function _clone(obj) {
        if (obj instanceof Array) {
            var out = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                var value = obj[i];
                out[i] = (value !== null && typeof value === "object") ? _clone(value) : value;
            }
        } else {
            var out = {};
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var value = obj[key];
                    out[key] = (value !== null && typeof value === "object") ? _clone(value) : value;
                }
            }
        }
        return out;
    },

    clone: function(it) {
        return this._clone({
            it: it
        }).it;
    }
};


for (var i = 0; i < physicalList.length; i++) {
    for (var j = 0; j < globalList.length; j++) {
        if (globalList[j]["name"].match(physicalList[i])) {
            newObj = cloner.clone(globalList[j]);
            arr.push(newObj);
            console.log(newObj);
        }
    }
}

console.log('\n' + 'the length of output array', arr.length);

jsonfile.writeFile('physicalGamesBase.js', arr, {spaces: 2}, (err) => {
                if ( err ) {
                console.error( err );
                }
                console.log("success!")
            } )


//for (var k = 0; k < arr.length; k++) {
//    fs.appendFile('physicalGamesBase.js', arr[k], (err) => {
//        if (err) throw err;
//        console.log('The "data to append" was appended to file!');
//    });
//}
