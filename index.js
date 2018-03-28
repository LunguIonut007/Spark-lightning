const ComponentImporterGenerator = require('./Generators/ComponentImporter.generator')
const ReducerImporterGenerator = require('./Generators/ReducerImporter.generator')
const { generatedFolder } = require('./Constants')
const fs = require('fs')

precondition()
ComponentImporterGenerator.run()
ReducerImporterGenerator.run()

function precondition() {
  if (!fs.existsSync(generatedFolder)){ fs.mkdirSync(generatedFolder); }
}
