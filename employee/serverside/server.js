const http=require("http")
const fs=require("fs")
const url=require("url")
const port=3000
const app=http.createServer(async(req,res)=>{
    const path=url.parse(req.url);
    console.log(path);


    if(path.pathname=="/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../clientside/pages/index.html"))
    }
   else if(path.pathname=='/css/index.css'){
        res.writeHead(200,{"Content-Type":"text/css"})
        res.end(fs.readFileSync("../clientside/css/index.css"))
    }
   else if(path.pathname=='/images/img.png'){
        res.writeHead(200,{"Content-Type":"text/img"})
        res.end(fs.readFileSync("../clientside/images/img.png"))
    }
   else if(path.pathname=='/details'){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../clientside/pages/details.html"))
    }
    else if(path.pathname=='/css/details.css'){
        res.writeHead(200,{"Content-Type":"text/css"})
        res.end(fs.readFileSync("../clientside/css/details.css"))
    }
    else if(path.pathname=='/images/img.png'){
        res.writeHead(200,{"Content-Type":"text/img"})
        res.end(fs.readFileSync("../clientside/images/img.png"))
    }
    
})
app.listen(port)