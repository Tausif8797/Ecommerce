function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }


}
function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length > 30) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10) {
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6) {

        // create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password) {
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}

// onclick function


function fun() {
    // console.log("#form")
    var formdata = $("#form").serializeJSON();
    console.log(formdata)


}

function formToJson() {


    const form = document.querySelector('#myFormid')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        const json = JSON.stringify(Object.fromEntries(formdata))
        // postData(json)
        useFetchApiForLogin(json)

        // console.log(json)
    })
}


function postData(data) {
    // Sending and receiving data in JSON format using POST method
    //
    var xhr = new XMLHttpRequest();
    var url = "http://192.168.29.32:1000/api/registration";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log("inpostdata")
            console.log(json);
        }
    };
    // var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
    xhr.send(data);

}

function useFetchApiForLogin(data) {

    console.log("in fetch api")
    //const data1 = { username: 'example' };
    console.log("data is " + data)

    fetch('http://192.168.29.32:1000/api/registration', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        //  body: JSON.stringify(data),
        body: data,
    })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
        })
    //.catch((error) => {
    ////  console.error('Error:', error);
    //});

}

