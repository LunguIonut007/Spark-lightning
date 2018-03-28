const process = require('process')
const fs  = require('fs')

module.exports.getFilesByType = function getFilesByType(type, argPath) {
  const path = argPath ? argPath : `./Screens`
  const fileList = []
  recursiveFileSearch(path, type, fileList)
  return fileList
}

module.exports.getDirectoryPath = function getDirectoryPath(directoryName) {
  const path = `./Screens`
  let result = {str: ''}
  recursiveDirectorySearch(path, directoryName, result)
  return result.str
}

function recursiveDirectorySearch(currentSearchPath, directoryName, result) {
  fs.readdirSync(currentSearchPath)
  .forEach(nodeFile => {
    if(!isOpinionatedFile(nodeFile)) {
      
      if (directoryName === nodeFile) {
        
        result.str = `${currentSearchPath}/${nodeFile}`
        return
      } else {
        recursiveDirectorySearch(`${currentSearchPath}/${nodeFile}`, directoryName, result)
      }
    }
  });
}

function recursiveFileSearch(currentSearchPath, type, list) {

  fs.readdirSync(currentSearchPath)
    .forEach(nodeFile => {
      if(isOpinionatedFile(nodeFile)) {
        const parsedFileList = nodeFile.split('.')
        const currentFileType = parsedFileList[parsedFileList.length - 2]
        type === currentFileType && list.push({
          type,
          name: parsedFileList[0],
          path: `${currentSearchPath}/${nodeFile}`
        })
      } else {
        recursiveFileSearch(`${currentSearchPath}/${nodeFile}`, type, list)
      }
    });
}

function isOpinionatedFile(fileName) {
  const arr = fileName.split('.')
  return arr.length > 2 || (arr.length == 2 && arr[1] === 'js')
}