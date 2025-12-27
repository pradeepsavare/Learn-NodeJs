const path = require('path')

console.log(path.basename('C:\\temp\\myfile.html'))
console.log(path.dirname('C:\\temp\\myfile.html'))
console.log(path.extname('C:\\temp\\myfile.html'))
console.log("My file name and ext")
console.log(__filename)
console.log(path.extname(__filename))