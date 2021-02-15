/**
 * @jest-environment node
 */

var path = require('path');
var sassTrue = require('sass-true');

sassTrue.runSass({ file: path.join(__dirname, 'lists.spec.scss') }, { describe, it });