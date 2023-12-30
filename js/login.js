var input_1 = document.getElementById("input_1");
var input_2 = document.getElementById("input_2");
var login = document.getElementById("login");
var inputSignUP = document.getElementById("inputSignUP");
var message_1 = document.getElementById("message_1");
var message_2 = document.getElementById("message_2");
var message_3 = document.getElementById("message_3");


var inputList = [];

if (localStorage.getItem("pepole") != null) {
    inputList = JSON.parse(localStorage.getItem("pepole"));
}

function toSignIn() {
    if (toCheck()) {
        window.location = "./html/home.html"
    }
}

function forTest() {
    if (input_1.value == "" || input_2.value == "") {
        return true;
    }
    else {
        return false;
    }
}

function search() {
    for (var i = 0; i < inputList.length; i++) {
        if (inputList[i].email == input_1.value && inputList[i].password == input_2.value) {
            localStorage.setItem("name", inputList[i].name)
            return true;
        }
    }
    return false;
}

function toCheck() {
    if (!forTest()) {
        if (search()) {
            message_2.classList.remove("d-none");
            message_3.classList.add("d-none");
            message_1.classList.add("d-none");
            return true;
        }
        else {
            message_3.classList.remove("d-none");
            message_2.classList.add("d-none");
            message_1.classList.add("d-none");
            return false;
        }
    }
    else {
        message_1.classList.remove("d-none");
        message_2.classList.add("d-none");
        message_3.classList.add("d-none");
        return false;
    }
}

inputSignUP.addEventListener("click", function () {
    window.location = "./html/signup.html";
})

login.addEventListener("click", function () {
    toSignIn();
})