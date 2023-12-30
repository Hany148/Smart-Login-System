var logout =  document.getElementById("logout");
var welcomeByName = document.getElementById("welcomeByName"); 


if (localStorage.getItem("name") != null)
{
    var str = localStorage.getItem("name");
    var str2 = str.charAt(0).toUpperCase() + str.slice(1);
    welcomeByName.innerHTML = `Welcome ${str2}`;
}



logout.addEventListener("click",function(){
    localStorage.removeItem("name");
    window.location = "../index.html"
})




