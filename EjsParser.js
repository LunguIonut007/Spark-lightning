const ejs = require('ejs')
const fs = require('fs')
const { generatedFolder } = require('./Constants')
module.exports.create = function create(templateName, data, path) {
  ejs.renderFile(
    process.cwd() + `/node_modules/spark/Templates/${templateName}.template.ejs`,
    data ,
    (err, str) => {
      fs.writeFileSync(path ? path : `${generatedFolder}/${templateName}.generated.js`, str)
    })
}