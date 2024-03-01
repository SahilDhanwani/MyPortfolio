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