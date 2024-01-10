const btn = document.querySelectorAll("button");
const contenedorImg = document.getElementById("hero-containerImg")

contenedorImg.innerHTML = `
<img id="img" class="hero-img" src="./images/27.02.2023_20.32.49_REC-removebg-preview.png" alt="Jonatan animado">
`

const trigger = document.getElementById("trigger")
const sidebar = document.getElementById("sidebar")
const link = document.querySelectorAll(".nav-link")
const nav = document.querySelector(".nav")
const logo = document.getElementById("logo")
const triggerItems = document.querySelectorAll(".nav-trigger-items")

const splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    focus  : 'center',
    autoplay: true,
    pagination: false,
    pauseOnHover: false,
    pauseOnFocus: false,
});

splide.mount();

const btnSubmit = document.getElementById("form-btn")
const formulario = document.getElementById("form")
const userName = document.getElementById("user-name")
const userNumber = document.getElementById("user-number")
const userMail = document.getElementById("user-email")
const userText = document.getElementById("user-text")
const contact = document.getElementById("contact")

const mensaje = document.createElement("div")

mensaje.classList.add("form-message")
mensaje.innerHTML = `
    <div class="form-message-container">
        <div class="form-container-text">
            <span data-section="contact" data-value="success" class="form-success">Muchas gracias por contactarte! Te responderé a la brevedad.</span>
        </div>
        <div class="form-container-icon">
            <img id="form-icon" class="form-icon" src="./images/close-circle-svgrepo-com.svg" alt="close">
        </div>
    </div>
`
contact.append(mensaje)

const btnClose = document.getElementById("form-icon")

const flags = document.querySelectorAll(".flags")
const textsToChange = document.querySelectorAll("[data-section]")

// emailjs.init("aZgMn9dfcQY3QZtbj");