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

//OBTENCION DEL ELEMENTO Y APLICACION DE EVENTO

const link = document.querySelectorAll(".nav-link")

link.forEach( (e) => {
    e.addEventListener("click", () => {
        sidebar.classList.remove("appear")
        trigger.classList.remove("active")
    })
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
        <img id="img" style= "transition: .5s ease" class="hero-img" src="./images/27.02.2023_20.32.49_REC-removebg-preview.png" alt="Jonatan animado">
`

contenedorImg.addEventListener("mouseout", () => {

    const img = document.getElementById("img")
    img.setAttribute("src", "./images/27.02.2023_20.32.49_REC-removebg-preview.png")

})

contenedorImg.addEventListener("mouseover", () => {
    
    const img = document.getElementById("img")
    img.setAttribute("src", "./images/20221109_013001-removebg-preview(4).png")
    
    
})