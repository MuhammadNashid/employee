const http=require("http")
const fs=require("fs")
const url=require("url")
const queryString=require("querystring")
const{MongoClient, ObjectId}=require("mongodb")
const port=3000
const client=new MongoClient("mongodb://127.0.0.1:27017/")
const app=http.createServer(async(req,res)=>{
    //ADD EMPLOYEE
    const db=client.db("EMPLOYEE");

    const collection=db.collection("employees")

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
    else if(path.pathname=='/add'){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../clientside/pages/add.html"))
    }
    else if(path.pathname=='/css/add.css'){
        res.writeHead(200,{"Content-Type":"text/css"})
        res.end(fs.readFileSync("../clientside/css/add.css"))
    }
    else if(path.pathname=='/edit'){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../clientside/pages/edit.html"))
    }
    else if(path.pathname=='/css/edit.css'){
        res.writeHead(200,{"Content-Type":"text/css"})
        res.end(fs.readFileSync("../clientside/css/edit.css"))
    }
    else if(path.pathname=='/js/index.js'){
        res.writeHead(200,{"Content-Type":"text/js"})
        res.end(fs.readFileSync("../clientside/js/index.js"))
    }
    else if(path.pathname=='/js/add.js'){
        res.writeHead(200,{"Content-Type":"text/js"})
        res.end(fs.readFileSync("../clientside/js/add.js"))
    }
    else if(path.pathname=="/submit"&&req.method=="post"){
        // console.log("hai");
        let body="";
        req.on("data",(chunks)=>{
            console.log(chunks);
            body+=chunks.toString();
            console.log(body);
        })
    
        req.on("end",async()=>{
            if(body!==null){
                const formData=queryString.parse(body);
                console.log(formData);
                collection.insertOne(formData).then(()=>{
                    console.log("data added");   
                }).catch((error)=>{
                    console.log(error); 
                })
                res.writeHead(200,{"Content-Type":"text/html"})
                res.end(fs.readFileSync("../clientside/pages/index.html")) 
            }
        })
    }
    if(path.pathname=='/employees'&&req.method=="GET"){
        const data= await collection.find().toArray();
        const json_data=JSON.stringify(data)
        console.log(json_data);
        res.writeHead(200,{"Content-Type":"text/json"})
        res.end(json_data)  
    }
})

 


app.listen(port)