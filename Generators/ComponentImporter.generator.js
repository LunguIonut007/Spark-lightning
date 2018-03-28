
const process = require('process')
const EjsParser = require('./../EjsParser')
const {getFilesByType} = require('./../FileParser');
const {fileTypes} = require('./../Constants');

module.exports.run = function run () {
  const list = getFilesByType(fileTypes.COMPONENT, './Components')
  EjsParser.create('ComponentImporter', {list})
}