function toBegin(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function toCaracter(){
    var element= document.querySelector("#Caracter")
    element.scrollIntoView({
        behavior: "smooth",
    })
}

function toPlanes(){
    var element= document.querySelector("#Plans")
    element.scrollIntoView({
        behavior: "smooth",
    })
}