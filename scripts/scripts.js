//OBTENCION DEL ELEMENTO Y APLICACION DE EVENTO

const trigger = document.getElementById("trigger")
const sidebar = document.getElementById("sidebar")

trigger.addEventListener("click", () => {
    trigger.classList.toggle("active")
    sidebar.classList.toggle("appear")
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

btnToAbout.addEventListener("click", () => {
    window.scrollTo({
        top: "900",
        behavior: "smooth"
    })
})

btnToWork.addEventListener("click", () => {
    window.scrollTo({
        top: "4300",
        behavior: "smooth"
    })
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