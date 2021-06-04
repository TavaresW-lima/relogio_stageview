import { miliParaSegundo, preencheZero } from './utils.js';

const viewCronometro = document.querySelector("#cronometroView");
const playPause = document.querySelector("#play-pause");
const iconePlayPause = playPause.firstElementChild;
const stopButton = document.querySelector("#stop");

let contagemTempo = 0;
let intervalTempo;
let isCounting = false;

function carregaCronometro() {
    contagemTempo = 0;
    playPause.addEventListener('click', start);
    stopButton.addEventListener('click', reset);
    atualizaCronometro();
}

function atualizaCronometro() {
    viewCronometro.innerHTML = formataCronometro(contagemTempo);
    contagemTempo = contagemTempo + 1;
}

function start() {
    intervalTempo = setInterval(() => {
        atualizaCronometro()
    }, 1000)
    isCounting = true;
    _trocaPlayPause();
}

function stop() {
    clearInterval(intervalTempo);
    isCounting = false;
    _trocaPlayPause();
}

function reset() {
    clearInterval(intervalTempo);
    contagemTempo = 0;
    atualizaCronometro();
    isCounting = false;
    _trocaPlayPause();
}


function formataCronometro(momentoAtual) {
    let horas = Math.floor(momentoAtual/3600);
    let minutos = Math.floor((momentoAtual%3600)/60);
    let segundos = Math.floor(momentoAtual%60);
    return `${preencheZero(horas)}:${preencheZero(minutos)}:${preencheZero(segundos)}`;
}

function _trocaPlayPause() {
    if(isCounting) {
        playPause.removeEventListener('click', start);
        playPause.addEventListener('click', stop);
        iconePlayPause.className = "fas fa-pause fa-fw"
    } else {
        playPause.removeEventListener('click', stop);
        playPause.addEventListener('click', start);
        iconePlayPause.className = "fas fa-play fa-fw";
    }
}

export {carregaCronometro}