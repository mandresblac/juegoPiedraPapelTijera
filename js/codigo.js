//Declaramos función para número aleatoria del pc
function numeroAleatorio(min, max) {
    //Operación para hallar el número aleatorio
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado = "piedra";
    }
    else if (jugada == 2) {
        resultado = "papel";
    }
    else if (jugada == 3) {
        resultado = "tijera";
    }
    else {
        resultado = "Opción incorrecta";
    }
    return resultado;
}

//Esta función combate resume el código que esta dentro del ciclo while que comienza en la linea 69
function combate(pc, jugador) {
    if (pc == jugador) {
        mensaje = "EMPATE";
    } else if (pc == 1 && jugador == 3) {
        mensaje = "GANASTE";
    } else if (pc == 2 && jugador == 1) {
        mensaje = "GANASTE";
    } else if (pc == 3 && jugador == 2) {
        mensaje = "GANASTE"
    } else {
        mensaje = "PERDISTE";
    }
    return mensaje;
}

//1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;
let empates = 0

while (triunfos < 3 && perdidas < 3) {
    pc = numeroAleatorio(1, 3);//Numero aleatorio entre 1 y 3
    jugador = prompt("Elije: \n1 para piedra \n2 para papel \n3 para tijera");
    //alert("Elegiste " + jugador);

    alert(`Tú elegiste ${eleccion(jugador)}`);
    alert(`El PC eligió ${eleccion(pc)}`);

    //Combate
    combate(jugador, pc);
    alert(mensaje)

    //Suma de puntos
    if (mensaje == "GANASTE") {
        triunfos += 1;
    } else if (mensaje == "PERDISTE") {
        perdidas += 1;
    } else if (mensaje === "EMPATE") {
        empates += 1;
    }

    //COMBATE
    /* if (pc == jugador) {
        alert("EMPATE");
    }
    else if (jugador == 1 && pc == 3) {
        alert("GANASTE");
        triunfos += 1;
    }
    else if (jugador == 2 && pc == 1) {
        alert("GANASTE");
        triunfos += 1;
    }
    else if (jugador == 3 && pc == 2) {
        alert("GANASTE");
        triunfos += 1;
    }
    else {
        alert("PERDISTE");
        perdidas += 1;
    } */
}

alert("Ganaste " + triunfos + " veces. \nPerdiste " + perdidas + " veces." + "\nEmpataste " + empates + " veces.");

