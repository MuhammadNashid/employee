async function editEmployeeData() {
    const params = new URLSearchParams(window.location.search);
    const empId = params.get('empId');

    const res = await fetch('http://localhost:3000/employee/' + eId);
    const employee = await res.json();

    // Populate the form with the current employee data
    document.getElementById('EID').value = employee.eId;
    document.getElementById('NAME').value = employee.name;
    document.getElementById('DES').value = employee.des;
    document.getElementById('salary').value = employee.salary;
    document.getElementById('exp').value = employee.exp;
    document.getElementById('email').value = employee.email;
    document.getElementById('phone').value = employee.phone;
}

document.getElementById('edit-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const empId = document.getElementById('eId').value;
    const formData = new URLSearchParams(new FormData(event.target)).toString();

    const res = await fetch('http://localhost:3000/updateEmployee/' + eId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
    });

    if (res.ok) {
        alert('Employee updated successfully');
        window.location.href = '/';
    } else {
        alert('Failed to update employee');
    }
});

function goBack() {
    window.history.back();
}

editEmployeeData();