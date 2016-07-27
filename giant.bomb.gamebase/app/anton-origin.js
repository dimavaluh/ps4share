/**
 * Created by SHONIE on 27.07.2016.
 */
"use strict";

const data = require( './data.json' );
const _ = require( 'lodash' );
const request = require( 'request' );
const jsonfile = require('jsonfile');
const async = require('async');


async.map(data.results, (game, done) => {
    request( 'http://www.giantbomb.com/api/game/' + game.id + '/?format=json&api_key=aaba549e362b68c090bbc073b0bde1cf799d1468&field_list=genres', ( err, resp, body ) => {
        if (err) done(err);

if ( resp.statusCode === 200 ) {
    done(null, JSON.parse(body).results);
}
} );
}, (err, results) => {
    if (err) console.error(err);

    jsonfile.writeFile('./result.json', results, {spaces: 2}, (err) => {
        if ( err ) {
        console.error( err );
    }
} );
});


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

