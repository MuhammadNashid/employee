
async function getEmploye() {
  const res=await fetch("http://localhost:3000/getData")
  const data=await res.json()
  console.log(data);

  str=``
 data.map((data,index)=>{
  
  str+=`
  
  <div class="card">
        <div class="imagediv">
<img src="../images/img.png" alt="">

        </div>
        <div class="bottom">
            <div class="id"><span class="span">id:</span>${data.id}</div>
            <div class="name"><span class="span">name:</span>${data.name}</div>
            <div class="Desig"><span class="span">designation:</span>${data.designation}</div>
        <div class="btn"><button><a href="http://localhost:3000/info?id=${index}">INFO</button></a></div>
        </div>
    </div>
`
 })
  
 document.getElementById("mainside").innerHTML=str
}

getEmploye()