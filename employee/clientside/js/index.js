
async function getEmployees(){
  const res = await fetch('http://localhost:3000/getemployees');
  const data = await res.json();
  console.log(data);
  let str = '';
  data.map((datas)=>{
    str+=`
    <div class="card">
        <img src="../images/img.png" alt="alan" style="width:100%">
        <div>EID:${datas.EID}</div>
        <div>NAME:${datas.NAME}</div>
        <div class="title">DES:${datas.DES}</div>
        <div>PHONE:${datas.PHONE}</div>
       
        
        <div><button class="btn" onclick="location.href='http://localhost:3000/info.html?EID=${datas.EID}'">INFO</button></div>
      </div>`
  })
  document.getElementById("display").innerHTML=str
}








getEmployees()