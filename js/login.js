const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() !== "" && password.trim() !== "") {
        
     
        message.textContent = "Login successful!";
        message.style.color = "green";

         
        setTimeout(function() {
            window.location.href = "index1.html";
        }, 1000);

    } else {
     
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
    }
});