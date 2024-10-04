async function newEmployee() {
    const params = new URLSearchParams(window.location.search);
    const empId = params.get('empId');

    const res = await fetch('http://localhost:3000/employee/' + eId);
    const data = await res.json();

    document.getElementById('employee-info').innerHTML = data`
        <div>ID: ${data.eId}</div> <br>
        <div>Name: ${data.name}</div> <br>
        <div>Description: ${data.des}</div> <br>
        <div>Salary: ${data.salary}</div> <br>
        <div>Experience: ${data.exp}</div> <br>
        <div>Email: ${data.email}</div> <br>
        <div>Phone: ${data.phone}</div> <br>
    `;
}

function goBack() {
    window.history.back();
}

async function editEmployee() {
    const params = new URLSearchParams(window.location.search);
    const empId = params.get('empId');
    location.href = 'editEmp.html?empId=' + eId;
}

function showconfirmBox() {
    document.getElementById('dlt').style.display = 'block';
    document.getElementById('cf-bx').style.display = 'block';
}

function cancelDelete() {
    document.getElementById('dlt').style.display = 'none';
    document.getElementById('cf-bx').style.display = 'none';
}

async function confirmDelete() {
    const params = new URLSearchParams(window.location.search);
    const empId = params.get('eId');
    const res = await fetch('http://localhost:3000/deleteEmployee/' + eId, {
        method: 'DELETE'
    });
    if (res.ok) {
        alert("Employee deleted");
        location.href = '/';
    } else {
        alert("Failed to delete employee");
    }
}

newEmployee();