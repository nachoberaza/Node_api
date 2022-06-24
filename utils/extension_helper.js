const removeExtension = (fileName) => fileName.split('.').shift()
const removeType = (fileName) => fileName.split('_').shift()

const clearFileName = (fileName) => removeType(removeExtension(fileName))

module.exports = {clearFileName};