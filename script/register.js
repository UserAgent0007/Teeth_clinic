let button_reg = document.getElementById("complite_reg");
let login_ = ""
let password_ = ""
let admin = "admin";

const apiUrl_reg = "https://chnu-student-interview-preparation.netlify.app/.netlify/functions/userRegister"

button_reg.addEventListener("click", async function (){

    login_ = document.getElementById("name").value;
    password_ = document.getElementById("passw").value;
    
    if (login_ != "" && password_ != "")
    {
        await register()
    }
    
})

async function register ()
{
    let info = {
        username: login_,
        password: password_,
        role: admin
    }
    
    response = fetch(apiUrl_reg, {
        method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(info)
    })

    .then(response => {
        if (!response.ok) {
          throw new Error(`Registration failed! Status: ${response.status}`);
        }
        return response.json();
    })

    .then(data => {
        console.log("User registered successfully:", data);
    })
}