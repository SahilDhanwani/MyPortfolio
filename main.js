var typed = new Typed(".role", {
    strings: [
        'Front End Developer',
        'Back End Developer',
        'App Developer',
        'Full Stack Developer',
        'Web Developer',
        'Software Developer',
    ],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
});

function submitForm(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Validate form inputs
    if (!validateForm()) {
        return; // Stop execution if form validation fails
    }

    // Get form data
    var firstName = document.forms["contact"]["first_name"].value;
    var lastName = document.forms["contact"]["last_name"].value;
    var email = document.forms["contact"]["email"].value;
    var thoughts = document.forms["contact"]["thoughts"].value;

    // Construct XML document
    var xmlData = '<?xml version="1.0" encoding="UTF-8"?>';
    xmlData += '<contact>';
    xmlData += '<first-name>' + firstName + '</first-name>';
    xmlData += '<last-name>' + lastName + '</last-name>';
    xmlData += '<email>' + email + '</email>';
    xmlData += '<thoughts>' + thoughts + '</thoughts>';
    xmlData += '</contact>';

    // Send XML data to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "main.php", true);
    xhr.setRequestHeader("Content-Type", "text/xml");
    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {
            // Handle the response from the server
            console.log(xhr.responseText);
            // Optionally, redirect to another page after processing the response
            // window.location.href = "success.html"; // Redirect to success page
        }
    };
    xhr.send(xmlData);
}


function validateForm() {
    var first_name = document.contact.first_name;
    var last_name = document.contact.last_name;
    var email = document.contact.email;

    if (first_name_validation(first_name)) {
        if (last_name_validation(last_name)) {
            if (email_validation(email)) {
                return true;
            }
        }
    }
    return false;
}

function first_name_validation(first_name) {
    var first_name_len = first_name.value.length;
    var letters = /^[A-Za-z]+$/;
    if (first_name_len == 0 || !first_name.value.match(letters)) {
        alert("First name should not be empty & shold have only letters");
        first_name.focus();
        return false;
    }
    return true;
}

function last_name_validation(last_name) {
    var last_name_len = last_name.value.length;
    var letters = /^[A-Za-z]+$/;
    if (last_name_len == 0 || !last_name.value.match(letters)) {
        alert("Last name should not be empty & shold have only letters");
        last_name.focus();
        return false;
    }
    return true;
}

function email_validation(email) {
    var email_len = email.value.length;
    if (email_len == 0) {
        alert("Email should not be empty");
        email.focus();
        return false;
    }
    return true;
}