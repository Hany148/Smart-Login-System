
var input_1 = document.getElementById("input_1");
var input_2 = document.getElementById("input_2");
var input_3 = document.getElementById("input_3");
var message_1 = document.getElementById("message_1");
var message_2 = document.getElementById("message_2");
var message_3 = document.getElementById("message_3");
var SignUp = document.getElementById("SignUp");
var inputSignIn = document.getElementById("inputSignIn");


var inputList = [];

if (localStorage.getItem("pepole") != null)
{
    inputList = JSON.parse(localStorage.getItem("pepole"));
}

function signUp() {

    if (toAdd()) {
        var inputs = {
            name: input_1.value,
            email: input_2.value,
            password: input_3.value
        }

        inputList.push(inputs);
        localStorage.setItem("pepole" , JSON.stringify(inputList) );
    }

}



var rejexName = /^[a-zA-Z ]+$/
var rejexEmail = /^\S+@\S+\.\S+$/
var rejexPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;


function forTest() {
    if (rejexName.test(input_1.value) && rejexEmail.test(input_2.value) && rejexPassword.test(input_3.value)) {
        return true;
    }
    else {
        return false;
    }
}



function search() {
    for (var i = 0; i < inputList.length; i++) {
        if (inputList[i].email == input_2.value) {
            return true;
        }
    }
    return false ;
}

function toAdd()
{
    if (forTest())
    {
        if(search()){
            message_3.classList.remove("d-none");
            message_2.classList.add("d-none");
            message_1.classList.add("d-none");
            return false;
        }
        else
        {
            message_2.classList.remove("d-none");
            message_3.classList.add("d-none");
            message_1.classList.add("d-none");
            return true;
        }
    }
    else{
        message_1.classList.remove("d-none");
        message_2.classList.add("d-none");
        message_3.classList.add("d-none");
        return false;
    }
}


SignUp.addEventListener("click", function () {
    signUp();
})

inputSignIn.addEventListener("click",function(){
    window.location = "../index.html";
})

