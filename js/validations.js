function Admin_login_validation() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();


    if (username === "") {
        alert("Username is required");
        return false;
    }

    if (password === "") {
        alert("Password is required");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }


    else
        return true;
}


function Employee_login_validation() {
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();

    if (username === "") {
        alert("Username is required")
        return false;
    }

    if (password === "") {
        alert("Password is required")
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long")
        return false;
    }

    return true;
}

function Employee_validation_Add() {
    let image = document.getElementById('fileInput').value;
    let First_name = document.getElementById('First-name').value.trim();
    let Last_name = document.getElementById('Last-name').value.trim();
    let Emp_id = document.getElementById('Emp-ID').value.trim();
    let Department = document.getElementById('Department').value.trim();
    let Department_block = document.getElementById('Department-block').value.trim();
    let Role = document.getElementById('Role').value.trim();
    let Email = document.getElementById('Email1').value.trim();
    let Mobile = document.getElementById('Mobile2').value.trim();
    let Shift = document.getElementById('Shift').value.trim();
    let Date_of_joining = document.getElementById('Date-of-joining').value.trim();
    let Salary = document.getElementById('Salary').value.trim();
    let Date_of_birth = document.getElementById('Date-of-birth').value.trim();
    let Address = document.getElementById('Address').value.trim();
    let username = document.getElementById('Username').value.trim();
    let password = document.getElementById('Password').value.trim();




    if (password) {
        if (password === "") {
            alert("Password is required");
            return false;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return false;
        }
    }


    if (image === "") {
        alert("uploading image is required")
        return false;
    }

    if (First_name === "") {
        alert("First_name is required")
        return false;
    }

    if (Last_name === "") {
        alert("Last_name is required")
        return false;
    }

    if (Emp_id === "") {
        alert("Emp-id is required")
        return false;
    }

    if (Department === "") {
        alert("Department is required")
        return false;
    }

    if (Department_block === "") {
        alert("Department-block is required")
        return false;
    }

    if (Role === "") {
        alert("Role is required")
        return false;
    }

    let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailpattern.test(Email)) {
        alert("Enter a valid Email")
        return false;
    }

    let phonepattern = /^\d{10}$/;
    if (!phonepattern.test(Mobile)) {
        alert("Enter a valid mobile number")
        return false;
    }

    if (Shift === "") {
        alert("Shift is required")
        return false;
    }

    if (Date_of_joining === "") {
        alert("Date-of-joining is required")
        return false;
    }


    if (!/^[0-9]+$/.test(Salary)) {
        alert("Salary must contain only numbers");
        return false;
    }

    if (parseInt(Salary) <= 0) {
        alert("Salary must be greater than 0");
        return false;
    }
    if (Date_of_birth === "") {
        alert("Date-of-joining is required")
        return false;
    }

    if (Address === "") {
        alert("Address is required")
        return false;
    }

    if (username === "") {
        alert("Username is required")
        return false;
    }

    if (password === "") {
        alert("Password is required")
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long")
        return false;
    }


    return true;

}


function Employee_validation_Edit() {
    let image = document.getElementById('fileInput').value;
    let First_name = document.getElementById('First-name').value.trim();
    let Last_name = document.getElementById('Last-name').value.trim();
    let Emp_id = document.getElementById('Emp-ID').value.trim();
    let Department = document.getElementById('Department').value.trim();
    let Department_block = document.getElementById('Department-block').value.trim();
    let Role = document.getElementById('Role').value.trim();
    let Email = document.getElementById('Email1').value.trim();
    let Mobile = document.getElementById('Mobile2').value.trim();
    let Shift = document.getElementById('Shift').value.trim();
    let Date_of_joining = document.getElementById('Date-of-joining').value.trim();
    let Salary = document.getElementById('Salary').value.trim();
    let Date_of_birth = document.getElementById('Date-of-birth').value.trim();
    let Address = document.getElementById('Address').value.trim();
    let username = document.getElementById('Username').value.trim();



    if (image === "") {
        alert("uploading image is required")
        return false;
    }

    if (First_name === "") {
        alert("First_name is required")
        return false;
    }

    if (Last_name === "") {
        alert("Last_name is required")
        return false;
    }

    if (Emp_id === "") {
        alert("Emp-id is required")
        return false;
    }

    if (Department === "") {
        alert("Department is required")
        return false;
    }

    if (Department_block === "") {
        alert("Department-block is required")
        return false;
    }

    if (Role === "") {
        alert("Role is required")
        return false;
    }

    let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailpattern.test(Email)) {
        alert("Enter a valid Email")
        return false;
    }

    let phonepattern = /^\d{10}$/;
    if (!phonepattern.test(Mobile)) {
        alert("Enter a valid mobile number")
        return false;
    }

    if (Shift === "") {
        alert("Shift is required")
        return false;
    }

    if (Date_of_joining === "") {
        alert("Date-of-joining is required")
        return false;
    }


    if (!/^[0-9]+$/.test(Salary)) {
        alert("Salary must contain only numbers");
        return false;
    }

    if (parseInt(Salary) <= 0) {
        alert("Salary must be greater than 0");
        return false;
    }
    if (Date_of_birth === "") {
        alert("Date-of-joining is required")
        return false;
    }

    if (Address === "") {
        alert("Address is required")
        return false;
    }

    if (username === "") {
        alert("Username is required")
        return false;
    }



    return true;

}



function visitor_validation_add() {
    let image = document.getElementById('fileInput').value;
    let First_name = document.getElementById('first-name').value.trim();
    let Last_name = document.getElementById('last-name').value.trim();
    let Mobile = document.getElementById('mobile1').value.trim();
    let Email = document.getElementById('email1').value.trim();
    let From = document.getElementById('from').value.trim();
    let Purpose_of_visit = document.getElementById('purpose').value.trim();
    let Visitors_proof = document.getElementById('visitors-proof').value.trim();
    let Host_name = document.getElementById('host-name').value.trim();
    let Host_id = document.getElementById('host-id').value.trim();
    let In_time = document.getElementById('in-time').value.trim();



    if (image === "") {
        alert("uploading image is required")
        return false;
    }

    if (First_name === "") {
        alert("First_name is required")
        return false;
    }

    if (Last_name === "") {
        alert("Last_name is required")
        return false;
    }

    let phonepattern = /^\d{10}$/;
    if (!phonepattern.test(Mobile)) {
        alert("Enter a valid mobile number")
        return false;
    }

    let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailpattern.test(Email)) {
        alert("Enter a valid Email")
        return false;
    }

    if (From === "") {
        alert("Address is required")
        return false;
    }

    if (Purpose_of_visit === "") {
        alert("Address is required")
        return false;
    }

    if (Visitors_proof === "") {
        alert("Address is required")
        return false;
    }

    if (Host_name === "") {
        alert("First_name is required")
        return false;
    }

    if (Host_id === "") {
        alert("First_name is required")
        return false;
    }


    if (In_time === "") {
        alert("First_name is required")
        return false;
    }




    return true;

}

function visitor_validation_edit() {
    let image = document.getElementById('fileInput').value;
    let First_name = document.getElementById('first-name').value.trim();
    let Last_name = document.getElementById('last-name').value.trim();
    let Mobile = document.getElementById('mobile1').value.trim();
    let Email = document.getElementById('email1').value.trim();
    let From = document.getElementById('from').value.trim();
    let Purpose_of_visit = document.getElementById('purpose').value.trim();
    let Visitors_proof = document.getElementById('visitors-proof').value.trim();
    let Host_name = document.getElementById('host-name').value.trim();
    let Host_id = document.getElementById('host-id').value.trim();



    if (image === "") {
        alert("uploading image is required")
        return false;
    }

    if (First_name === "") {
        alert("First_name is required")
        return false;
    }

    if (Last_name === "") {
        alert("Last_name is required")
        return false;
    }

    let phonepattern = /^\d{10}$/;
    if (!phonepattern.test(Mobile)) {
        alert("Enter a valid mobile number")
        return false;
    }

    let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailpattern.test(Email)) {
        alert("Enter a valid Email")
        return false;
    }

    if (From === "") {
        alert("Address is required")
        return false;
    }

    if (Purpose_of_visit === "") {
        alert("Address is required")
        return false;
    }

    if (Visitors_proof === "") {
        alert("Address is required")
        return false;
    }

    if (Host_name === "") {
        alert("First_name is required")
        return false;
    }

    if (Host_id === "") {
        alert("First_name is required")
        return false;
    }

    return true;

}

function intime_button() {
    document.getElementById('intime').date

}



function captureTime() {
    let now = new Date(); // current date & time
    let hours = String(now.getHours()).padStart(2, '0');   // 0–23 → 2 digits
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    let currentTime = `${hours}:${minutes}:${seconds}`;

    alert("Captured time: " + currentTime);

    // If you want to store it in a hidden input:
    // document.getElementById('capturedTime').value = currentTime;
}

