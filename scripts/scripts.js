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
const triggerItems = document.querySelectorAll(".nav-trigger-items")

document.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("nav-change")
        logo.classList.add("nav-color-change")
        triggerItems.forEach( e => e.classList.add("nav-color-change"))
    } else {
        nav.classList.remove("nav-change")
        logo.classList.remove("nav-color-change")
        triggerItems.forEach( e => e.classList.remove("nav-color-change"))
    }
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

// APLICACION DE UNA ETIQUETA CON JS A TRAVES DEL DOM

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
            <span data-section="contact" data-value="success" class="form-success">Muchas gracias por contactarte! Te responderé a la brevedad.</span>
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

// EVENTO DE CIERRE DE BOTON (EN MENSAJE)

const btnClose = document.getElementById("form-icon")

btnClose.addEventListener("click", () => {
    mensaje.classList.remove("form-message-active")
})

// CAMBIO DE IDIOMA

const flags = document.querySelectorAll(".flags")

const textsToChange = document.querySelectorAll("[data-section]") //Selecciona las etiquetas que tengan el atributo "data-section"

const changeLanguage = async (language) => {

    //recibe por parametro el valor del atributo "data-language" y lo utiliza para buscar con el fetch el archivo json dentro del proyecto
    const req = await fetch(`./language/${language}.json`)
    const texts = await req.json() //aca tengo el dato del json

    for (const textosParaCambiar of textsToChange) {

        //en las variables section elige a traves del for of, todas las etiquetas que tengan el atributo data-section, en la variable value, toma su valor
        const section = textosParaCambiar.dataset.section
        const value = textosParaCambiar.dataset.value
        
        //y por ultimo, aca les cambia el valor original por los obtenidos en la peticion, guardados en la variable texts (ver console.log comentado)
        textosParaCambiar.innerHTML = texts[section][value]
        
        // console.log(texts[section][value]);
    }
}

flags.forEach((e) => {
    e.addEventListener("click", (el) => {
        changeLanguage(el.target.dataset.language); //Selecciona las etiquetas que tengan el atributo "data-language" y pasa el valor como parametro a la funcion "changeLanguage" ("es" o "en")
    })
})

// LOADER PARA CARGA DE PAGINA

const showOrHideLoader = (boolean) => {
    const loader = document.querySelector(".loader-section");
    if (!boolean) {
      loader.classList.add("loaded");
    } else {
      loader.classList.remove("loaded");
    }
  };
  
  // Obtener todas las imágenes del proyecto
  const images = document.querySelectorAll("img");
  const totalImages = images.length;
  let loadedImages = 0;
  
  // Mostrar loader inicialmente
  showOrHideLoader(true);
  
  // Función para cargar una imagen
  const loadImage = (src) => {
    const img = new Image();
    img.onload = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        // Se cargaron todas las imágenes, ocultar el loader
        showOrHideLoader(false);
      }
    };
    img.onerror = (error) => {
      console.error("Error al cargar una imagen:", error);
    };
    img.src = src;
  };
  
  // Cargar todas las imágenes
  for (const image of images) {
    loadImage(image.src);
  }
  

