function clearErrors() {

    errors = document.getElementsByClassName('form-control');
    for (let item of errors) {
        item.innerHTML = "";
    }

}

function setErrors(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('form-control')[0].innerHTML = error;

}

function validate() {
    var returnval = true;
    clearErrors();



    // perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 10) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*Length of name cannot be empty");
        returnval = false;
    }


    var number = document.forms['myForm']["mobileNum"].value;
    if (number.length < 10) {
        seterror("number", "*Length of name is too short");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length < 10) {
        seterror("email", "*Length of name is too short");
        returnval = false;
    }

    var pass = document.forms['myForm']["psd"].value;
    if (pass.length < 10) {
        seterror("pass", "*Length of name is too short");
        returnval = false;
    }

    var cpass = document.forms['myForm']["pwd"].value;
    if (cpass != pass) {
        seterror("cpass", "*Length of name is too short");
        returnval = false;
    }

    return returnval;
}