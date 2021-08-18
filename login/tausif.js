 
function fun() {  
// console.log("#form")
var formdata = $("#form").serializeJSON();
  console.log(formdata)


}

function formToJson(){

  const form= document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    const json=JSON.stringify(Object.fromEntries(formdata))
    postData(json)
    console.log(json)
  })
}


function postData(data){
  // Sending and receiving data in JSON format using POST method
//
var xhr = new XMLHttpRequest();
var url = "http://localhost:1000/api/registration";
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

