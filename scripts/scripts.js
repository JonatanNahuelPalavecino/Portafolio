//OBTENCION DEL ELEMENTO Y APLICACION DE EVENTO

const trigger = document.getElementById("trigger")
const sidebar = document.getElementById("sidebar")

trigger.addEventListener("click", () => {
    trigger.classList.toggle("active")
    sidebar.classList.toggle("appear")
})

//OBTENCION DEL ELEMENTO Y APLICACION DE EVENTO

const link = document.querySelectorAll(".nav-link")

link.forEach( (e) => {
    e.addEventListener("click", () => {
        sidebar.classList.remove("appear")
        trigger.classList.remove("active")
    })
})

//OBTENCION DEL ELEMENTO Y APLICACION DE EVENTO

const nav = document.getElementById("nav")
const logo = document.getElementById("logo")
const itemOne = document.getElementById("item-one")
const itemTwo = document.getElementById("item-two")
const itemThree = document.getElementById("item-three")

document.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("nav-change")
        logo.classList.add("nav-color-change")
        itemOne.classList.add("nav-color-change")
        itemTwo.classList.add("nav-color-change")
        itemThree.classList.add("nav-color-change")
    } else {
        nav.classList.remove("nav-change")
        logo.classList.remove("nav-color-change")
        itemOne.classList.remove("nav-color-change")
        itemTwo.classList.remove("nav-color-change")
        itemThree.classList.remove("nav-color-change")
    }
})

// EVENTO DE QUE UN BOTON ME LLEVE A UNA SECCION

const btnToAbout = document.getElementById("to-about")
const btnToWork = document.getElementById("to-work")
const btnToContact = document.getElementById("to-contact")

btnToAbout.addEventListener("click", () => {
    // window.scrollTo({
    //     top: "#about",
    //     behavior: "smooth"
    // })
    window.scrollBy(0, window.innerHeight);
})

btnToWork.addEventListener("click", () => {
    // window.scrollTo({
    //     top: "4300",
    //     behavior: "smooth"
    // })
    window.scrollBy(0, window.innerHeight);
})

btnToContact.addEventListener("click", () => {
    // window.scrollTo({
    //     top: "7000",
    //     behavior: "smooth"
    // })
    window.scrollBy(0, window.innerHeight);
})

//CARROUSEL

var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    focus  : 'center',
    autoplay: true,
    pagination: false,
    pauseOnHover: false,
    pauseOnFocus: false,
});
  
splide.mount();

// HOVER DE CAMBIO DE IMAGEN EN HERO

const contenedorImg = document.getElementById("hero-containerImg")

contenedorImg.innerHTML = `
        <img id="img" class="hero-img" src="./images/27.02.2023_20.32.49_REC-removebg-preview.png" alt="Jonatan animado">
`

// FORMULARIO

const btnSubmit = document.getElementById("form-btn")
const formulario = document.getElementById("form")
const userName = document.getElementById("user-name")
const userNumber = document.getElementById("user-number")
const userMail = document.getElementById("user-email")
const userText = document.getElementById("user-text")

const peticion = async () => {

    const data = {
        service_id: 'service_ss9d6fk',
        template_id: 'template_m1t27wb',
        user_id: 'aZgMn9dfcQY3QZtbj',
        template_params: {
            'from_name': userName.value,
            'from_number': userNumber.value,
            'from_email': userMail.value,
            'message': userText.value
        }
    };

    const spinner = document.getElementById("spinner")
    spinner.innerHTML = `
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    `

    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": 'application/json',
        }
    })
    .then(() => {
        spinner.innerText = "Enviar"
        mostrarMensaje()
        formulario.reset()
    })
    .catch((err) => {
        console.log(err);
    })
}

const mensaje = document.createElement("div")

mensaje.classList.add("form-message")
mensaje.innerHTML = `
    <div class="form-message-container">
        <div class="form-container-text">
            <span class="form-title">Muchas gracias por contactarte! Te responderé a la brevedad.</span>
        </div>
        <div class="form-container-icon">
            <img id="form-icon" class="form-icon" src="./images/close-circle-svgrepo-com.svg" alt="close">
        </div>
    </div>
`
formulario.append(mensaje)

const mostrarMensaje = () => {

    mensaje.classList.add("form-message-active")

    setTimeout(() => {
        mensaje.classList.remove("form-message-active")
    }, 3000);
}

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    //verificacion de los campos

    if (userName.value.length < 5) {

        userName.classList.add("form-advice")

        setTimeout(() => {
            userName.classList.remove("form-advice")
        }, 1000);

        return
    }
    
    if (userNumber.value.length < 10) {

        userNumber.classList.add("form-advice")

        setTimeout(() => {
            userNumber.classList.remove("form-advice")
        }, 1000);

        return
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!emailRegex.test(userMail.value)) {

        userMail.classList.add("form-advice")

        setTimeout(() => {
            userMail.classList.remove("form-advice")
        }, 1000);

        return
    }

    peticion()
})

//EFECTO DE SCROLL

ScrollReveal().reveal('.to-left', { 
    distance: '100px',
    origin: "left",
    reset: "true",
    delay: 200,
});

ScrollReveal().reveal('.to-right', { 
    distance: '100px',
    origin: "right",
    reset: "true",
    delay: 200,
});

// EVENTO DE CIERRE DE BOTON (EN MENSAJE)

const btnClose = document.getElementById("form-icon")

btnClose.addEventListener("click", () => {
    mensaje.classList.remove("form-message-active")
})

// CAMBIO DE IDIOMA

const flags = document.querySelectorAll(".flags")

const textsToChange = document.querySelectorAll("[data-section]")

const changeLanguage = async (language) => {
    const req = await fetch(`./language/${language}.json`)
    const texts = await req.json()

    for (const textosParaCambiar of textsToChange) {
        const section = textosParaCambiar.dataset.section
        const value = textosParaCambiar.dataset.value

        textosParaCambiar.innerHTML = texts[section][value]
    }
}

flags.forEach((e) => {
    e.addEventListener("click", (el) => {
        changeLanguage(el.target.dataset.language);
    })
})




