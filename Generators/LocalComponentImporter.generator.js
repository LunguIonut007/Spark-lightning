
const process = require('process')
const EjsParser = require('./../EjsParser')
const {getFilesByType} = require('./../FileParser');
const {fileTypes} = require('./../Constants');

module.exports.run = function run (path) {
  const list = getFilesByType(fileTypes.COMPONENT, `./${path}`)
  EjsParser.create('ComponentImporter', {list}, `./${path}/index.js`)
}