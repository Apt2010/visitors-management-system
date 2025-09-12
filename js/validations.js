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







    if (image === "") {
        document.getElementById('image').innerHTML = "image is required";
        alert("Visitor photo is required")
        return false;
    }
    else {
        document.getElementById('image').innerHTML = "";

    }


    if (First_name === "") {

        document.getElementById('firstname').innerHTML = "First name is required";
        return false;
    }
    else {
        document.getElementById('firstname').innerHTML = "";

    }


    if (Last_name === "") {

        document.getElementById('lastname').innerHTML = "Last name is required";
        return false;
    }
    else {
        document.getElementById('lastname').innerHTML = "";

    }

    if (Emp_id === "") {

        document.getElementById('empid').innerHTML = "Emp ID is required";
        return false;
    }
    else {
        document.getElementById('empid').innerHTML = "";

    }

    if (Department === "") {

        document.getElementById('department').innerHTML = "Department is required";
        return false;
    }
    else {
        document.getElementById('department').innerHTML = "";

    }

    if (Department_block === "") {

        document.getElementById('department-block').innerHTML = "Department-block is required";
        return false;
    }
    else {
        document.getElementById('department-block').innerHTML = "";

    }

    if (Role === "") {

        document.getElementById('role').innerHTML = "Role is required";

        return false;
    }
    else {
        document.getElementById('role').innerHTML = "";

    }


    let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailpattern.test(Email)) {
        document.getElementById('email').innerHTML = "email is required";

        return false;
    }
    else {
        document.getElementById('email').innerHTML = "";

    }


    let phonepattern = /^\d{10}$/;
    if (!phonepattern.test(Mobile)) {
        document.getElementById('mobile').innerHTML = "Enter a valid mobile number is required";

        return false;
    }
    else {
        document.getElementById('mobile').innerHTML = "";

    }


    if (Shift === "") {
        document.getElementById('shift').innerHTML = "shift is required";

        return false;
    }
    else {
        document.getElementById('shift').innerHTML = "";

    }


    if (Date_of_joining === "") {
        document.getElementById('doj').innerHTML = "data of joining is required";

        return false;
    }
    else {
        document.getElementById('doj').innerHTML = "";

    }


    if (!/^[0-9]+$/.test(Salary)) {
        document.getElementById('salary').innerHTML = "salary is required";

        return false;
    }
    else {
        document.getElementById('salary').innerHTML = "";

    }

    if (parseInt(Salary) <= 0) {
        document.getElementById('salary').innerHTML = "salary is required";

        return false;
    }
    else {
        document.getElementById('salary').innerHTML = "";

    }

    if (Date_of_birth === "") {
        document.getElementById('dob').innerHTML = "date of birth is required";

        return false;
    }
    else {
        document.getElementById('dob').innerHTML = "";

    }

    if (Address === "") {
        document.getElementById('address').innerHTML = "address is required";

        return false;
    }
    else {
        document.getElementById('address').innerHTML = "";

    }

    if (username === "") {
        document.getElementById('username').innerHTML = "username is required";

        return false;
    }
    else {
        document.getElementById('username').innerHTML = "";

    }

    if (password === "") {
        document.getElementById('password').innerHTML = "password is required";

        return false;
    }
    else {
        document.getElementById('password').innerHTML = "";

    }

    if (password.length < 6) {
        document.getElementById('role').innerHTML = "password is required";

        return false;
    }
    else {
        document.getElementById('password').innerHTML = "";

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
        alert("Visitor photo is required")
        return false;
    }

    if (First_name === "") {
        alert("First name is required")
        return false;
    }

    if (Last_name === "") {
        alert("Last name is required")
        return false;
    }

    if (Emp_id === "") {
        alert("Emp id is required")
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
        alert("Date of joining is required")
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
        alert("Date of joining is required")
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
    let Date = document.getElementById('Date').value.trim();
    let In_time = document.getElementById('intimebtn').value.trim();


    if (image === "") {
        alert("Visitor photo is required")
        return false;
    }

    if (First_name === "") {
        alert("First name is required")
        return false;
    }

    if (Last_name === "") {
        alert("Last name is required")
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
        alert("Purpose of visit is required")
        return false;
    }

    if (Visitors_proof === "") {
        alert("Visitors proof is required")
        return false;
    }

    if (Host_name === "") {
        alert("Host name is required")
        return false;
    }

    if (Host_id === "") {
        alert("Host id is required")
        return false;
    }

    if (Date === "") {
        alert("Date is required")
        return false;
    }

    if (In_time === "") {
        alert("In time is required")
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
    let Date = document.getElementById('Date').value.trim();




    if (image === "") {
        alert("Visitor photo is required")
        return false;
    }

    if (First_name === "") {
        alert("First name is required")
        return false;
    }

    if (Last_name === "") {
        alert("Last name is required")
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
        alert("Purpose of visit is required")
        return false;
    }

    if (Visitors_proof === "") {
        alert("Visitors proof is required")
        return false;
    }

    if (Host_name === "") {
        alert("Host name is required")
        return false;
    }

    if (Host_id === "") {
        alert("Host id is required")
        return false;
    }

    if (Date === "") {
        alert("Date is required")
        return false;
    }

    return true;

}

function intime_button() {
    document.getElementById('intimebtn').date
}


function captureTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 -> 12

    let currentTime = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('intimebtn').innerHTML = currentTime;
    document.getElementById('intimebtn').value = currentTime;

}

window.onload = function () {
    let capturedTime = localStorage.getItem('inTimebtn');
    if (capturedTime) {
        document.getElementById('intimeCell').innerText = capturedTime;
    }
};

function previewImage(event) {
    let file = event.target.files[0];
    if (file) {
        let allowedTypes = ["image/jpeg", "image/png"];
        if (!allowedTypes.includes(file.type)) {
            alert("Only JPG and PNG formats are allowed!");
            event.target.value = ""; // Clear the input
            return false;
        }

        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('imagePreview').innerHTML =
                `<img src="${e.target.result}" alt="Preview" style="max-width:100%; max-height: 100%; object-fit: contain;"  />`;
        }
        reader.readAsDataURL(file);
    }
    document.getElementById('upload').value = "uploaded"
}
// for setting the capturedtime in the visitor management page's intime list, when clicking the submit, the captured in time should be get in a array and after that the after submitting it goes to the visitors manaegment page(list page) at
// that the captured intime which is in array need to be in the local storage when so in the visitors hit page have to code like onload the captured intime have to fill the empty space in time

function print1(event) {
    window.print();
    return false;

}

function outtime() {
    let outtimeField1 = document.getElementById('outTimeField').value.trim();
    if (outtimeField1 === "") {
        alert("Out time is required");
        return false;
    }

    return true;
}

function export1() {
    let pdf1 = document.getElementById('pdfinputid');
    let excel1 = document.getElementById('excelinputid');

    if (!pdf1.checked && !excel1.checked) {
        alert("Select at least one file format to proceed with export.")
        return false;
    }

    return true;
}

