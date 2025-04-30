let button_reg = document.getElementById("complite_log");
let login_ = ""
let password_ = ""

const apiUrl_log = "https://chnu-student-interview-preparation.netlify.app/.netlify/functions/userLogin"

button_reg.addEventListener("click", async function (){

    login_ = document.getElementById("name_log").value;
    password_ = document.getElementById("passw_log").value;
    
    if (login_ != "" && password_ != "")
    {
        await login()
    }
    
})

async function login ()
{
    let info = {
        username: login_,
        password: password_,
    }
    
    response = fetch(apiUrl_log, {
        method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(info)
    })

    .then(response => {
        if (!response.ok) {
          throw new Error(`login failed! Status: ${response.status}`);
        }
        return response.json();
    })

    .then(data => {
        console.log("User loged in successfully:", data);
    })

    .catch(error => {
        console.error("Error during login:", error);
      });
}