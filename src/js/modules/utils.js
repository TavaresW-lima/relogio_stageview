import {NOME_MES_ENUM,DIA_SEMANA_ENUM} from '../model/enums.js';

function diaFormatado(data) {
    let dataMes = data.getDate();
    let dia = _diaParaTexto(data.getDay() + 1);
    let mes = _mesParaTexto(data.getMonth() + 1);
    let ano = data.getFullYear();
    return `${dia}, ${preencheZero(dataMes)} de ${mes} de ${ano}`;
}

function horaFormatada(data) {
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();
    return  `${preencheZero(hora)}:${preencheZero(minuto)}:${preencheZero(segundo)}`;
}

function preencheZero(string) {    
    if(string < 10) {
        string = "0".concat(string);
    }
    return string;
}

function _mesParaTexto(mes) {
    for(let chave in NOME_MES_ENUM) {
        if(chave == mes) {
            return NOME_MES_ENUM[chave];
        }
    }
}

function _diaParaTexto(dia) {
    for(let chave in DIA_SEMANA_ENUM) {
        if(chave == dia) {
            return DIA_SEMANA_ENUM[chave];
        }
    }
}

function miliParaSegundo(mili) {
    return mili/1000;
}

function formataMili(mili) {
    if(mili < 100) {
        return preencheZero(mili);
    } else {
        return mili;
    }
}

export {diaFormatado, horaFormatada,preencheZero, miliParaSegundo}