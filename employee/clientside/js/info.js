let url=window.location.href;
let urlparams=new URLSearchParams(url.split("?")[1])
let id=urlparams.get("id")



async function getEmploye() {
    const res=await fetch(`http://localhost:3000/getData`)
    const data=await res.json()
    datas=data[id]
    console.log(id);
    
    
str=``

str+=
    `
     <div class="details">
        <div class="leftside">
            <img src="../images/img.png" alt="">
        </div>
        <div class="rightside">
            <div class="emolyiid"><h3><span>EID:</span>${datas.id}</h3></div>
            <div class="name"><h3><span>NAME:</span>${datas.name}</h3></div>
            <div class="designation"><h3><span>DES:</span>${datas.designation}</h3></div>
            <div class="experience"><h3><span>EXP:</span>${datas.experience}</h3></div>
            <div class="salary"><h3><span>SALARY:</span>${datas.salary}</h3></div>
            <div class="email"><h3><span>EMAIL:</span>${datas.email}</h3></div>
            <div class="phonenumber"><h3><span>PHONE:</span>${datas.phone}</h3></div>
        
            <div class="btn"><Button><a href="http://localhost:3000/info/edit?id=${id}">Edit</a></Button>
            <div class="btn1"><button onclick="dlt('${datas._id}')">Delete</button>
            <div class="btn2"><button ><a href="http://localhost:3000/">Back</a></button></div>
            </div>
            </div>
            
        </div>
    </div>
    
    
    `
document.getElementById("main").innerHTML=str

}

async function dlt(id) {
    x=confirm("Do You Want To Delete")
    if (x) {
        let res=await fetch("http://localhost:3000/delet",{
            method:"DELETE",    
            headers:{"Content-Type":"text/plain"},
            body:id
        })
        if(res.status==200){
            console.log("successfully");
         window.location.href="http://localhost:3000/"   
        getEmploye()
        }
    }
   
}



getEmploye()
