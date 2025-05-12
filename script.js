const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}


function sendMail(){
    let pars ={
        email: document.getElementById('email_input').value
    }

    emailjs.send("service_mg5zvi1","template_gcm39gm",pars).then(alert("Email sent!"))
}