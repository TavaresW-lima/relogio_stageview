import { diaFormatado, horaFormatada } from './utils.js'

const viewHora = document.querySelector('#horaView');
const viewDia = document.querySelector('#diaView');


function inicializaRelogio() {
    _atualizaRelogio();
}

function _atualizaRelogio() { 
    let momentoAtual = new Date;
    viewHora.innerHTML = horaFormatada(momentoAtual);
    viewDia.innerHTML = diaFormatado(momentoAtual);

    setTimeout(() => {_atualizaRelogio()}, 1000);
}

export {inicializaRelogio}
  
      