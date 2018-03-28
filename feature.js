const process = require('process')
const {create} = require('./EjsParser')
const { getDirectoryPath } = require('./FileParser')
const snakeCase = require('lodash/snakeCase')
const featureName = process.argv[2]
const actions = process.argv[3] ? process.argv[3].split(',') : []

const folderPath = getDirectoryPath(featureName)

function parseRedux (action) {
  return snakeCase(action).split('_').map(word => word.toUpperCase()).join('_')
}

create('FeatureScreen', {name: featureName}, `${folderPath}/${featureName}.screen.js`)
create('FeatureRedux', {name: featureName, actions, parseRedux}, `${folderPath}/${featureName}.redux.js`)
create('FeatureSagas', {name: featureName, actions, parseRedux}, `${folderPath}/${featureName}.sagas.js`)