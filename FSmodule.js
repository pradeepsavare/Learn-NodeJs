console.log("File System Module")

const fs = require('fs')

fs.readFile("file.txt",'utf-8',(error,data)=>{
    console.log(error,data)
})


const a = fs.readFileSync("file.txt")
console.log(a)
console.log(a.toString())

// fs.writeFile("write.txt","I am Writing File",() =>{
//     console.log("Written file .....")
// })

const b = fs.writeFileSync("write.txt","I am writing without pass to next step")
console.log(b)

console.log("Complete Reading File")