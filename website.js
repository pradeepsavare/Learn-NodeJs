const http = require('http');
const fs = require('fs')
const port = process.env.PORT || 3000;

const server = http.createServer((req,res) =>{
    // console.log(req)
    
    res.setHeader('Content-Type','text/html')
    if(req.url == "/"){
        res.statusCode = 200;
        res.end('<h1>Hiii Home</h1>');
    }else if(req.url=="/about"){
        res.statusCode = 200;
        res.end('<h1>Hiii About</h1>');
    }else if(req.url=="/index"){
res.statusCode = 200;
const data = fs.readFileSync('index.html');
res.end(data.toString());
    }
    else{
res.statusCode = 404;
res.end('<h1>Not  Found</h1>');
    }
})

server.listen(port,()=>{
console.log(`Server listen on post ${port}`);
});