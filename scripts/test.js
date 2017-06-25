#! /usr/bin/env node

var UglifyJS = require("uglify-js");
var fs = require('fs');

var files = [
    'themes/informaat/js/bundle.js',
    'themes/informaat/js/libs/jquery.xdomainrequest.js',
    'themes/informaat/js/libs/fastclick.js',
    'themes/informaat/js/libs/jquery.appear.js',
    'themes/informaat/js/libs/jquery.wait.js',
    'themes/informaat/js/patterns/pat-cycle-content.js',
    'themes/informaat/js/patterns/pat-scroll-top.js',
    'themes/informaat/js/patterns/pat-appear.js',
    'themes/informaat/js/patterns/pat-sliding-menu.js',
    'themes/informaat/js/patterns/pat-reponsive-image.js',
    'themes/informaat/js/patterns/pat-external-anchor.js',
    'themes/informaat/js/patterns/pat-collapsible.js',
    'themes/informaat/js/patterns/pat-smooth-anchor.js',
    'themes/informaat/js/set-keyboard-focus.js' 
];

var result = UglifyJS.minify(files, {
//   outSourceMap: "/themes/informaat/js/base.min.map",
  outFileName: "/themes/informaat/js/base.min.js"
});

fs.writeFileSync('themes/informaat/js/base.min.js', result.code);
fs.writeFileSync('themes/informaat/js/base.min.map', result.map);
