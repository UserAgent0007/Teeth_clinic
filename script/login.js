let button_log = document.getElementById("complite_log");
let login_log = ""
let password_log = ""

const apiUrl_log = "https://chnu-student-interview-preparation.netlify.app/.netlify/functions/userLogin"

async function login ()
{
    let info = {
        username: login_log,
        password: password_log,
    }
    
    
    let resp = await fetch(apiUrl_log, {
        method: "post",
    headers: {
        'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(info)
    })

    .then(response => {
        if (!response.ok) {
          throw new Error(`login failed! Status: ${response.status}`);
        }
        return response.json();
    })

    // const data = (await responce).json

    // console.log("User logged in successfully:", data.token);
    
    .then(data => {
        console.log("User loged in successfully:", data);

        localStorage.setItem("role", data.role)
        localStorage.setItem("token", data.token)

        document.getElementById("name_log").value = "";
        document.getElementById("passw_log").value = "";

        // return data
    })

    
    
    .catch(error=>
    {
        console.error("Error during login:", error);
        alert("Не коректно введений логін або пароль");
        document.getElementById("name_log").value = "";
        document.getElementById("passw_log").value = "";
    })

    // return resp;
}


async function testFunction(){
    console.log('hello');

    login_log = document.getElementById("name_log").value;
    password_log = document.getElementById("passw_log").value;
    
    if (login_log != "" && password_log != "")
    {
        let userData = await login();
        console.log(userData);
    }
}