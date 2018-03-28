const watcher = require('chokidar');
const localComponentImporter = require('./Generators/LocalComponentImporter.generator')
const Constants = require('./Constants')

watcher.watch('./App', {followSymlinks: false, ignoreInitial: true})
    .on('add', path => {
        const size = path.split('/').length
        const type = path.split('/')[size - 2]
        const fileName = path.split('/')[size - 1]
        if(type === Constants.folderTypes.COMPONENTS && fileName !== 'index.js') {
            const generatorPath = path.split('/').filter((item, k) => k !== size-1).join('/')
            console.log(generatorPath)
            localComponentImporter.run(generatorPath)
        }
    })
