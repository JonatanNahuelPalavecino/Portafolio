// FUNCION PARA TRANSICIONES ENTRE SECCIONES DE LA WEB

btn.forEach((e) => {

  e.addEventListener("click", () => {
    
    // window.scrollTo({ top: 0, behavior: 'smooth' });

    const sacarElemento = detectarElemento(e)
    const traerElemento = document.querySelector(`#${e.value}`);

    if (sacarElemento === traerElemento) {
      return
    }
    
    traerElemento.style.display = "flex"
    sacarElemento.classList.add("out");
    nav.style.transform = "translateY(-150%)"
    seleccionarTitulo(e.value)
    
    setTimeout(() => {
      
        sacarElemento.style.transform = `translateX(${traerElemento.getBoundingClientRect().left - sacarElemento.getBoundingClientRect().left}px)`;
        traerElemento.style.transform = `translateX(${sacarElemento.getBoundingClientRect().left - traerElemento.getBoundingClientRect().left}px)`;
        
      setTimeout(() => {
        
        // verificarAlto(traerElemento.getBoundingClientRect().height)
        sacarElemento.classList.remove("out");
        sacarElemento.classList.add("hidde")
        sacarElemento.parentNode.insertBefore(traerElemento, sacarElemento);
        sacarElemento.style.transform = "";
        traerElemento.style.transform = "";
        traerElemento.classList.remove("hidde")
        traerElemento.style.display= ""
        nav.style.transform = ""
        mostrarHijos()

      }, 700);

    }, 1000);

  });

});

// FUNCION PARA AGREGAR O QUITAR CLASES DEL TRIGGER PARA QUE SE VEA NORMAL O LA X

trigger.addEventListener("click", () => {
    trigger.classList.toggle("active")
    sidebar.classList.toggle("appear")
})

// FUNCION PARA AGREGAR O QUITAR CLASES DEL SIDEBAR PARA QUE SE VEA O SE OCULTE

link.forEach( (e) => {
    e.addEventListener("click", () => {
        sidebar.classList.remove("appear")
        trigger.classList.remove("active")
    })
})

// FUNCION PARA AGREGAR O QUITAR CLASES DEL NAVBAR PARA QUE SE VEA DE UNA MANERA U OTRA

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

// FUNCION PARA ENVIAR MAIL Y MOSTRAR MENSAJE

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

// FUNCION PARA CERRAR EL BOTON DEL MENSAJE

btnClose.addEventListener("click", () => {
  mensaje.classList.remove("form-message-active")
})

// FUNCION PARA CAMBIAR EL IDIOMA

flags.forEach((e) => {
  e.addEventListener("click", async (el) => {
      await changeLanguage(el.target.dataset.language); //Selecciona las etiquetas que tengan el atributo "data-language" y pasa el valor como parametro a la funcion "changeLanguage" ("es" o "en")
  })
})