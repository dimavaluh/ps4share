"use strict";

// in this file I create the array of genres,
// but there a lot of repeating genres, therefore i check if the array already contain the element
// and if true, just miss it and go to the next iteration

var fs = require('fs');
var async = require('async');
var jsonfile = require('jsonfile');
var games = require('./physicalGamesBase.json');
var _ = require('underscore');

var genresArr = [];

_.each(games, function (element) {
    var genres = element.genres;

    _.each(genres, function (genresEl) {
        if (_.contains(genresArr, genresEl.name)) return;
        else genresArr.push(genresEl.name);
    })
});

console.log(genresArr); // will print not repeating genres


// the result must be something like this
var output = ['Platformer',
    'Action-Adventure',
    'First-Person Shooter',
    'Sports',
    'Soccer',
    'Music/Rhythm',
    'Action',
    'Brawler',
    'Football',
    'Basketball',
    'Driving/Racing',
    'Shooter',
    'Baseball',
    'Adventure',
    'Fighting',
    'Puzzle',
    'Role-Playing',
    'Compilation',
    'Simulation',
    'Hockey',
    'Strategy',
    'Wrestling',
    'Golf'
];
