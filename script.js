let dadoA = 0;
let dadoB = 0;
let dadoC = 0

const puntosA = document.getElementsByClassName("puntoA");
const puntosB = document.getElementsByClassName("puntoB");
const puntosC = document.getElementsByClassName("puntoC");

const puntoA1 = document.getElementsByClassName("puntoA")[0];
const puntoA2 = document.getElementsByClassName("puntoA")[1];
const puntoA3 = document.getElementsByClassName("puntoA")[2];
const puntoA4 = document.getElementsByClassName("puntoA")[3];
const puntoA5 = document.getElementsByClassName("puntoA")[4];
const puntoA6 = document.getElementsByClassName("puntoA")[5];
const puntoA7 = document.getElementsByClassName("puntoA")[6];
const puntoA8 = document.getElementsByClassName("puntoA")[7];
const puntoA9 = document.getElementsByClassName("puntoA")[8];

const puntoB1 = document.getElementsByClassName("puntoB")[0];
const puntoB2 = document.getElementsByClassName("puntoB")[1];
const puntoB3 = document.getElementsByClassName("puntoB")[2];
const puntoB4 = document.getElementsByClassName("puntoB")[3];
const puntoB5 = document.getElementsByClassName("puntoB")[4];
const puntoB6 = document.getElementsByClassName("puntoB")[5];
const puntoB7 = document.getElementsByClassName("puntoB")[6];
const puntoB8 = document.getElementsByClassName("puntoB")[7];
const puntoB9 = document.getElementsByClassName("puntoB")[8];

const puntoC1 = document.getElementsByClassName("puntoC")[0];
const puntoC2 = document.getElementsByClassName("puntoC")[1];
const puntoC3 = document.getElementsByClassName("puntoC")[2];
const puntoC4 = document.getElementsByClassName("puntoC")[3];
const puntoC5 = document.getElementsByClassName("puntoC")[4];
const puntoC6 = document.getElementsByClassName("puntoC")[5];
const puntoC7 = document.getElementsByClassName("puntoC")[6];
const puntoC8 = document.getElementsByClassName("puntoC")[7];
const puntoC9 = document.getElementsByClassName("puntoC")[8];

const pA1 = [puntoA5];
const pA2 = [puntoA1, puntoA9];
const pA3 = [puntoA1, puntoA5, puntoA9];
const pA4 = [puntoA1, puntoA3, puntoA7, puntoA9];
const pA5 = [puntoA1, puntoA3, puntoA5, puntoA7, puntoA9];
const pA6 = [puntoA1, puntoA3, puntoA4, puntoA6, puntoA7, puntoA9];
const pA7 = [puntoA1, puntoA3, puntoA4, puntoA5, puntoA6, puntoA7, puntoA9];
const pA8 = [puntoA1, puntoA2, puntoA3, puntoA4, puntoA6, puntoA7, puntoA8, puntoA9];
const pA9 = [puntoA1, puntoA2, puntoA3, puntoA4, puntoA5, puntoA6, puntoA7, puntoA8, puntoA9];

const pB1 = [puntoB5];
const pB2 = [puntoB1, puntoB9];
const pB3 = [puntoB1, puntoB5, puntoB9];
const pB4 = [puntoB1, puntoB3, puntoB7, puntoB9];
const pB5 = [puntoB1, puntoB3, puntoB5, puntoB7, puntoB9];
const pB6 = [puntoB1, puntoB3, puntoB4, puntoB6, puntoB7, puntoB9];
const pB7 = [puntoB1, puntoB3, puntoB4, puntoB5, puntoB6, puntoB7, puntoB9];
const pB8 = [puntoB1, puntoB2, puntoB3, puntoB4, puntoB6, puntoB7, puntoB8, puntoB9];
const pB9 = [puntoB1, puntoB2, puntoB3, puntoB4, puntoB5, puntoB6, puntoB7, puntoB8, puntoB9];

const pC1 = [puntoC5];
const pC2 = [puntoC1, puntoC9];
const pC3 = [puntoC1, puntoC5, puntoC9];
const pC4 = [puntoC1, puntoC3, puntoC7, puntoC9];
const pC5 = [puntoC1, puntoC3, puntoC5, puntoC7, puntoC9];
const pC6 = [puntoC1, puntoC3, puntoC4, puntoC6, puntoC7, puntoC9];
const pC7 = [puntoC1, puntoC3, puntoC4, puntoC5, puntoC6, puntoC7, puntoC9];
const pC8 = [puntoC1, puntoC2, puntoC3, puntoC4, puntoC6, puntoC7, puntoC8, puntoC9];
const pC9 = [puntoC1, puntoC2, puntoC3, puntoC4, puntoC5, puntoC6, puntoC7, puntoC8, puntoC9];

function resetDots(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].style.backgroundColor = "ivory";
        
    }
}

function pintaPunto(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].style.backgroundColor = "black";
    }
}

function rolaA() {
    dadoA = (Math.floor(Math.random()*(Math.floor(Math.random()*10))));
    
    switch (dadoA) {
        case 1:
            pintaPunto(pA1);
            break;
        case 2:
            pintaPunto(pA2);
            break;
        case 3:
            pintaPunto(pA3);
            break;
        case 4:
            pintaPunto(pA4);
            break;
        case 5:
            pintaPunto(pA5);
            break;
        case 6:
            pintaPunto(pA6);
            break;
        case 7:
            pintaPunto(pA7);
            break;
        case 8:
            pintaPunto(pA8);
            break;
        case 9:
            pintaPunto(pA9);
            break;
        default:
            resetDots(puntosA);
            break;
    }
    return dadoA;
}

function rolaB() {
    dadoB = (Math.floor(Math.random()*(Math.floor(Math.random()*10))));
    
    switch (dadoB) {
        case 1:
            pintaPunto(pB1);
            break;
        case 2:
            pintaPunto(pB2);
            break;
        case 3:
            pintaPunto(pB3);
            break;
        case 4:
            pintaPunto(pB4);
            break;
        case 5:
            pintaPunto(pB5);
            break;
        case 6:
            pintaPunto(pB6);
            break;
        case 7:
            pintaPunto(pB7);
            break;
        case 8:
            pintaPunto(pB8);
            break;
        case 9:
            pintaPunto(pB9);
            break;
        default:
            resetDots(puntosB);
            break;
    }
    return dadoB;
}

function rolaC() {
    dadoC = (Math.floor(Math.random()*(Math.floor(Math.random()*10))));
    
    switch (dadoC) {
        case 1:
            pintaPunto(pC1);
            break;
        case 2:
            pintaPunto(pC2);
            break;
        case 3:
            pintaPunto(pC3);
            break;
        case 4:
            pintaPunto(pC4);
            break;
        case 5:
            pintaPunto(pC5);
            break;
        case 6:
            pintaPunto(pC6);
            break;
        case 7:
            pintaPunto(pC7);
            break;
        case 8:
            pintaPunto(pC8);
            break;
        case 9:
            pintaPunto(pC9);
            break;
        default:
            resetDots(puntosC);
            break;
    }
    return dadoC;
}

const rodar = document.getElementById("rolar");
rodar.addEventListener("click", function () {
    
    rolaA();
    rolaB();
    rolaC();
    const lanzamiento = [dadoA, dadoB];
    // return lanzamiento;
    console.log(lanzamiento);
    
})
