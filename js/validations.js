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



    let imageField = document.getElementById('fileInput');

    if (!imageField.files || imageField.files.length === 0) {
        alert("Uploading image is required");
        return false;
    }


    let image = document.getElementById('fileInput').value;
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
    let Date = document.getElementById('Date').value.trim();
    let In_time = document.getElementById('intimebtn').value.trim();



    if (In_time === "") {
        alert("In_time is required")
        return false;
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
        alert("Purpose_of_visit is required")
        return false;
    }

    if (Visitors_proof === "") {
        alert("Visitors_proof is required")
        return false;
    }

    if (Host_name === "") {
        alert("Host_name is required")
        return false;
    }

    if (Host_id === "") {
        alert("Host_id is required")
        return false;
    }

    if (Date === "") {
        alert("Date is required")
        return false;
    }



    return true;

}



function captureTime() {
    let now = new Date();
    let time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Store in hidden input
    document.getElementById('intime').value = time;

    // Show to user
    document.getElementById('intimeDisplay').innerText = time;
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
    document.getElementById('intimebtn').date

}



function captureTime() {
    let now = new Date(); // current date & time
    let hours = String(now.getHours()).padStart(2, '0');   // 0–23 → 2 digits
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    let currentTime = `${hours}:${minutes}:${seconds}`;

    document.getElementById('intimebtn').innerHTML = currentTime;

    // Store time for visitors page
    localStorage.setItem('inTimebtn', currentTime);


}
function captureTime() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    let currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('intimebtn').innerHTML = currentTime;


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
                `<img src="${e.target.result}" alt="Preview" style="max-width:100%; max-height: 100%; object-fit: contain;" />`;
        }
        reader.readAsDataURL(file);
    }
    document.getElementById('upload').value = "uploaded"
}


function print() {
    document.getElementById('print').value = window.print();
}

document.getElementById('export').addEventListener('click', function (e) {
    let pdf = document.getElementById('pdf').checked;
    let excel = document.getElementById('excel').checked;

    if (!pdf && !excel) {
        alert("Please select at least one format to export.");
        e.preventDefault();
        return false;
    }

});


function outtime() {
    let feedback1 = document.getElementById('feedback').value.trim();
    if (feedback1 === "") {
        alert("Visitor feedback is required");
        return false;
    }

    let outtimeField1 = document.getElementById('outTimeField').value.trim();
    if (outtimeField1 === "") {
        alert("Out time field is required");
        return false;
    }

    return true;
}

