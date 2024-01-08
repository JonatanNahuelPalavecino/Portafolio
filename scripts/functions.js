const seleccionarTitulo = (dato) => {
    switch (dato) {
      case "hero":
        document.title = "Inicio - Portafolio de Jonatan Palavecino"
        history.pushState(null, null, `/`)
        history.pushState(null, null, `/pages/${dato}.html`)
        break;
  
      case "about":
        document.title = "Sobre mí - Portafolio de Jonatan Palavecino"
        history.pushState(null, null, `/`)
        history.pushState(null, null, `/pages/${dato}.html`)
        break;
  
      case "work":
        document.title = "Mis proyectos - Portafolio de Jonatan Palavecino"
        history.pushState(null, null, `/`)
        history.pushState(null, null, `/pages/${dato}.html`)
        break;
  
      case "contact":
        document.title = "Contacto - Portafolio de Jonatan Palavecino"
        history.pushState(null, null, `/`)
        history.pushState(null, null, `/pages/${dato}.html`)
        break;
    
      default:
        break;
    }
}

const detectarElemento = (btn) => {

    const sacarElemento = document.querySelector("main:not(.hidde)")

    if (btn.dataset.section) {
        return sacarElemento
    } else {
        return btn.value === "about" ? btn.parentElement.parentElement : btn.parentElement
    }
}

const mostrarHijos = () => {

  const padre = document.querySelector("main:not(.hidde)").children

  const triggerBottom = window.innerHeight / 5 * 4;

  for (const hijo of padre) {
    
    const boxTop = hijo.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {

      hijo.classList.add("show")

    } else {

      hijo.classList.remove("show")

    }
  }

}

window.addEventListener("scroll", mostrarHijos);
mostrarHijos()

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

const mostrarMensaje = () => {

  mensaje.classList.add("form-message-active")

  setTimeout(() => {
      mensaje.classList.remove("form-message-active")
  }, 3000);
}

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