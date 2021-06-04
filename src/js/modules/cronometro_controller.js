import { miliParaSegundo, preencheZero } from './utils.js';

const viewCronometro = document.querySelector("#cronometroView");
const playPause = document.querySelector("#play-pause");
const editButton = document.querySelector("#edit");
const iconePlayPause = playPause.firstElementChild;
const stopButton = document.querySelector("#stop");
const modal = document.querySelector("#modal_edicao");
const close = document.querySelector(".modal_close");
const input = document.querySelector("#inputEdit");
const editOk = document.querySelector("#editOk");

let contagemTempo = 0;
let intervalTempo;
let isCounting = false;

function carregaCronometro() {
    contagemTempo = 0;
    playPause.addEventListener('click', start);
    stopButton.addEventListener('click', reset);
    editButton.addEventListener('click', startEdit);
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

function startEdit() {
    stop();
    modal.style.display = "flex";
    editOk.addEventListener('click', endEdit);
    input.addEventListener('focusout', () => {
        if(input.value > 50) input.value = 50;
    })
    close.addEventListener('click', _fechaModal);
}

function endEdit() {
    contagemTempo = input.value * 60;
    atualizaCronometro();
    _fechaModal();
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

function _fechaModal() {
    modal.style.display = "none";
}

export {carregaCronometro}