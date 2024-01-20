function validateForm() {
    var first_name = document.contact.first_name.value;
    var last_name = document.contact.last_name.value;
    var email = document.contact.value;
    var thoughts = document.contact.thoughts.value;

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
    var first_name_len = first_name.length;
    var letters = /^[A-Za-z]+$/;
    if (first_name_len == 0 || !first_name.match(letters)) {
        alert("First name should not be empty & shold have only letters");
        first_name.focus();
        return false;
    }
    return true;
}

function last_name_validation(last_name) {
    var last_name_len = last_name.length;
    var letters = /^[A-Za-z]+$/;
    if (last_name_len == 0 || !last_name.match(letters)) {
        alert("Last name should not be empty & shold have only letters");
        last_name.focus();
        return false;
    }
    return true;
}

function email_validation(email) {
    var email_len = email.length;
    if (email_len == 0) {
        alert("Email should not be empty");
        email.focus();
        return false;
    }
    return true;
}