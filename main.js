document.addEventListener("DOMContentLoaded", function() {
    let puntosUsuario = 0;
    let puntosPC = 0;

    let instrucciones = document.querySelector("#instrucciones");
    let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
    let contenedorPuntosPC = document.querySelector("#puntos-computadora");
    let mensaje = document.querySelector("#mensaje");
    let contenedorGanaPunto = document.querySelector("#gana-punto");
    let elegiTuArma = document.querySelector("#elegi-tu-arma");


    let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
    let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

    let botonesArmas = document.querySelectorAll(".arma");
    botonesArmas.forEach(boton => {
        boton.addEventListener("click", iniciarTurno);
    });

    function iniciarTurno(e){

        let eleccionPC = Math.floor(Math.random() * 3);
        let eleccionUsuario = e.currentTarget.id;

        // piedra => 0
        // papel => 1
        // tijera => 2
        
        if (eleccionPC === 0){
            eleccionPC = "piedra✊";
        }else if (eleccionPC === 1){
            eleccionPC = "papel✋";
        }else if (eleccionPC === 2){
            eleccionPC = "tijera✌";
        }
        console.log(eleccionPC);
        console.log(eleccionUsuario);




        if(
            (eleccionUsuario === "piedra✊" && eleccionPC === "tijera✌") ||
            (eleccionUsuario === "papel✋" && eleccionPC === "piedra✊") ||
            (eleccionUsuario === "tijera✌" && eleccionPC === "papel✋") 
            
        ) {
            ganaUsuario();
        } else if (
            (eleccionPC === "piedra✊" && eleccionUsuario === "tijera✌") ||
            (eleccionPC === "papel✋" && eleccionUsuario === "piedra✊") ||
            (eleccionPC === "tijera✌" && eleccionUsuario === "papel✋") 
        ) {
            ganaPC();
        } else {
            empate();
        }

        mensaje.classList.remove("disabled");
        contenedorEleccionUsuario.innerText = eleccionUsuario;
        contenedorEleccionPC.innerText = eleccionPC;

        if (puntosUsuario === 5 || puntosPC === 5){
            
            if (puntosUsuario === 5){
                instrucciones.innerText = "Ganaste!";
            }

            if (puntosPC === 5) {
                instrucciones.innerText = "Perdiste!";
            }

            elegiTuArma.classList.add("disabled");
            reiniciar.classList.remove("disabled");
            reiniciar.addEventListener("click", reiniciarJuego);
        } 

    }

    function ganaUsuario(){
        puntosUsuario++;
        contenedorPuntosUsuario.innerText = puntosUsuario;
        contenedorGanaPunto.innerText = "✨Ganaste un punto!✨"
    }

    function ganaPC(){
        puntosPC++;
        contenedorPuntosPC.innerText = puntosPC ;
        contenedorGanaPunto.innerText = "😥La PC Gano un punto💩";
    }

    function empate(){
        contenedorGanaPunto.innerText = "Hay empate🤨"
    }

    function reiniciarJuego(){
        reiniciar.classList.add("disabled");
        elegiTuArma.classList.remove("disabled");
        mensaje.classList.add("disabled");

        puntosUsuario = 0;
        puntosPC = 0;
        
        contenedorPuntosUsuario.innerText = puntosUsuario;
        contenedorPuntosPC.innerText = puntosPC;

        instrucciones.innerText = "El primero en llegar a 5 puntos gana.";
    }

  });
  