function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya =document.getElementById("ratigueya")
    if (inputHipodoge.checked) {
        alert("Seleccionaste a Hipodoge")
    } else if (inputCapipepo.checked) {
        alert("seleccionaste a Capipepo")
    } else if (inputRatigueya.checked) {
        alert("seleccionaste a Ratigueya")
    } else {
        alert("selecciona una mascota")
    } 
}



window.addEventListener("load", iniciarJuego)