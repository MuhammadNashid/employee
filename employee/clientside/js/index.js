async function employees(params) {
    const res=await fetch("http://localhost:3000/employees")
   const data=await res.json()
   console.log(data);
   
   let str=``
   data.map((datas)=>{
    str+=`
      <div class="sub1">
    <input class="txt" type="text" id="eid-${datas._id}" placeholder="Employee id" value="${datas.EID}">
    <input class="txt" type="text" id="name-${datas._id}" placeholder="Name" value="${datas.NAME}">
    <input class="txt" type="text" id="des-${datas._id}" placeholder="Designation" value="${datas.DES}">
    <input class="txt" type="text" id="phone-${datas._id}" placeholder="Phone Number" value="${datas.PHONE}">
    <input class="txt" type="text" id="email-${datas._id}" placeholder="Email" value="${datas.EMAIL}">
    <input class="txt" type="text" id="salary-${datas._id}" placeholder="Salary" value="${datas.SALARY}">
    <textarea name="" id="details-${datas._id}" cols="30" rows="10" placeholder="Enter your Details" class="tarea"></textarea>
</div>  
    <button class="btn" type="button" onclick="handleEdit()"><a href="http://localhost:3000/edit">EDIT</a></button>
    <button type="submit" class="btn2" onclick="handleDelete()">DELETE</button>

    `
    
   })
   document.getElementById("display").innerHTML=str
}
employees()

 function handleEdit(id){
  document.getElementById(`eid-${id}`).disabled=false
    document.getElementById(`name-${id}`).disabled=false
    document.getElementById(`email-${id}`).disabled=false
    document.getElementById(`phone-${id}`).disabled=false
    document.getElementById(`des-${id}`).disabled=false
    document.getElementById(`salary-${id}`).disabled=false
    document.getElementById(`details-${id}`).disabled=false
 }

 async function handleDelete(){
  let res=await fetch('http://localhost:3000/delete',{
    method:"DELETE",
    headers:{"Content:Type":"text/plain"},
    body:id        
 })
 if(res.status==200){
     alert("success")
     alert(prompt(`do you want to delete this data 'id="details-${datas._id}"' <button>${Yes}</button><button>${No}</button>`))
    employees()
 }
 else{
     alert("failed")
 }
 }