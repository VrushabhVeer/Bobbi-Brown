var verify2 = JSON.parse(localStorage.getItem("verify"))
document.querySelector("#form").addEventListener("submit", FormDaTa)

function FormDaTa(event) {
    event.preventDefault();
    var forObj = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
    }
    var email1 = forObj.email
    var password1 = forObj.password
    var index = verify2.findIndex(ele => {
        return ele.email == forObj.email && ele.password == forObj.password
    })
    if (email1 == "" || password1 == "") {
        alert("Fill all Fields")
    } else if (index >= 0) {
        alert("Login Successfull")
        forObj.name = verify2[index].name
        window.location = "./index.html"
    } else {
        alert("login fail")
    }
}