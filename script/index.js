let bod = document.body;

let reg_button = document.getElementById("reg");
let login_button = document.getElementById("log");

let close_reg = document.getElementById("reg_close");
let close_log = document.getElementById("log_close")

reg_button.addEventListener("click", function (){
    bod.classList.add ("overf-hid");
});

login_button.addEventListener("click", function (){
    bod.classList.add ("overf-hid");
});

close_reg.addEventListener("click", function (){
    bod.classList.remove ("overf-hid")
});

close_log.addEventListener("click", function (){
    bod.classList.remove ("overf-hid")
});