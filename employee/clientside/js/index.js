async function employees(params) {
    const res=await fetch("http://localhost:3000/employees")
   const data=await res.json()
   console.log(data);
   
   let str=``
   data.map((datas)=>{
    str+=`
      <div class="sub1">
    <input class="txt" type="text" id="name-${datas._id}" placeholder="Employee id" value="${datas.EID}">
    <input class="txt" type="text" id="name-${datas._id}" placeholder="Name" value="${datas.NAME}">
    <input class="txt" type="text" id="name-${datas._id}" placeholder="Designation" value="${datas.DES}">
    <input class="txt" type="text" id="name-${datas._id}" placeholder="Phone Number" value="${datas.PHONE}">
    <input class="txt" type="text" id="name-${datas._id}" placeholder="Email" value="${datas.EMAIL}">
    <input class="txt" type="text" id="name-${datas._id}" placeholder="Salary" value="${datas.SALARY}">
    <input class="txt" type="text" id="name-${datas._id}" placeholder="Details" value="${datas.DETAILS}">
    <button class="btn" type="button">Add Employee</button>
</div>  
    

    `
   })
   document.getElementById("display").innerHTML=str
    
}
employees()
 function handleEdit(id){
  document.getElementById(`emp-id-${id}`).disabled=false
    document.getElementById(`name-${id}`).disabled=false
    document.getElementById(`email-${id}`).disabled=false
    document.getElementById(`phone-${id}`).disabled=false
    document.getElementById(`des-${id}`).disabled=false
    document.getElementById(`salary-${id}`).disabled=false
    document.getElementById(`details-${id}`).disabled=false
 }