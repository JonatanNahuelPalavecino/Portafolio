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
//const about = document.getElementById("about")
//console.log(about.getBoundingClientRect());

btnToAbout.addEventListener("click", () => {
    window.scrollTo({
        top: "660",
        behavior: "smooth"
    })
})