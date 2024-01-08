const url = window.location.pathname

window.addEventListener("load", () => {
    
    if (url !== "/"){

        window.location.href = "http://127.0.0.1:5500/";

    }

})