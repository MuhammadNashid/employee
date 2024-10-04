const http = require("http")
const fs = require("fs")
const url = require("url")
port=3000
const queryString=require("querystring")
const {MongoClient, ObjectId}=require("mongodb")

//con
const client=new MongoClient('mongodb://127.0.0.1:27017/')


const app = http.createServer(async(req,res)=>{
    //db
    const db=client.db("EMPLOYEE")

    //col
    const collection=db.collection('employes')
    const path=url.parse(req.url)
    console.log(path.pathname);
    
    if(path.pathname=="/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../clientside/pages/index.html"))
    }
    else if(path.pathname=='/css/index.css'){
        res.writeHead(200,{"Content-Type":"text/css"})
        res.end(fs.readFileSync("../clientside/css/index.css"))
    }
    else if(path.pathname=='/js/index.js'){
        res.writeHead(200,{"Content-Type":"text/js"})
        res.end(fs.readFileSync("../clientside/js/index.js"))
    }
    else if(path.pathname=="/add"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../clientside/pages/add.html"))
    }
    else if(path.pathname=='/css/add.css'){
        res.writeHead(200,{"Content-Type":"text/css"})
        res.end(fs.readFileSync("../clientside/css/add.css"))
    }
    else if(path.pathname=='/js/add.js'){
        res.writeHead(200,{"Content-Type":"text/js"})
        res.end(fs.readFileSync("../clientside/js/add.js"))
    }
    else if(path.pathname=="/details.html"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../clientside/pages/details.html"))
    }
    else if(path.pathname=='/css/details.css'){
        res.writeHead(200,{"Content-Type":"text/css"})
        res.end(fs.readFileSync("../clientside/css/info.css"))
    }
    else if(path.pathname=='/js/details.js'){
        res.writeHead(200,{"Content-Type":"text/js"})
        res.end(fs.readFileSync("../clientside/js/details.js"))
    }
    else if(path.pathname=="/edit.html"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../clientside/pages/edit.html"))
    }
    else if(path.pathname=='/css/edit.css'){
        res.writeHead(200,{"Content-Type":"text/css"})
        res.end(fs.readFileSync("../clientside/css/edit.css"))
    }
    else if(path.pathname=='/js/edit.js'){
        res.writeHead(200,{"Content-Type":"text/js"})
        res.end(fs.readFileSync("../clientside/js/edit.js"))
    }
    else if(path.pathname=='/images/img.png'){
        res.writeHead(200,{"Content-Type":"images/png"})
        res.end(fs.readFileSync("../clientside/images/img.png"))
    }
    // else if(path.pathname=='/images/IM.png'){
    //     res.writeHead(200,{"Content-Type":"images/png"})
    //     res.end(fs.readFileSync("../clientside/images/img.png"))
    // }
    else if(path.pathname=='/submit' && req.method=="POST"){
        let body=''
        req.on("data",(chunks)=>{
            console.log(chunks);
            body+=chunks.toString()
            console.log(body);
        })
        req.on("end",async()=>{
            if(body!=null){
                const formData=queryString.parse(body)
                console.log(formData);
                collection.insertOne(formData).then(()=>{
                    console.log("data added");
                }).catch((error)=>{
                    console.log(error);
                    alert("error")
                })
                res.writeHead(200,{"Content-Type":"text/html"})
                res.end(fs.readFileSync("../clientside/pages/index.html"))
            }
        })
    }
    else if(path.pathname=='/getemployees' && req.method=='GET'){
        const data=await collection.find().toArray()
        const json_data=JSON.stringify(data)
        // console.log(json_data);
        res.writeHead(200,{"Content-Type":"text/json"})
        res.end(json_data)
    }
    else if (path.pathname.startsWith('/employee/') && req.method == 'GET') {
        const empId = path.pathname.split('/')[2];
        const employee = await collection.findOne({ empId: empId });
        if (employee) {
            const json_data = JSON.stringify(employee);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(json_data);
        } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Employee not found");
        }
    }
    else if (path.pathname == '/updateEmployee' && req.method == 'POST') {
        let body = '';
        req.on('data', (chunks) => {
            body += chunks.toString();
        });
        req.on('end', async () => {
            const formData = queryString.parse(body);
            const { empId, ...updateFields } = formData;
            await collection.updateOne({ empId: empId }, { $set: updateFields });
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(fs.readFileSync("../clientside/index.html"));
        });
    }
    else if (path.pathname.startsWith('/deleteEmployee/') && req.method == 'DELETE') {
        const empId = path.pathname.split('/')[2];
        await collection.deleteOne({ empId: empId });
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Employee deleted");
    }
    else if (path.pathname.startsWith('/updateEmployee/') && req.method == 'PUT') {
        const empId = path.pathname.split('/')[2];
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            const updatedData = queryString.parse(body);
            try {
                await collection.updateOne({ empId: empId }, { $set: updatedData });
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("Employee updated successfully");
            } catch (error) {
                console.log(error);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Failed to update employee");
            }
        });
    }
    
    
    
    
})
app.listen(port)