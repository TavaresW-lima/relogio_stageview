function diaFormatado(data) {
    let dataMes = data.getDate();
    let dia = _diaParaTexto(data.getDay() + 1);
    let mes = _mesParaTexto(data.getMonth() + 1);
    let ano = data.getFullYear();

    return `${dia}, ${_preencheZero(dataMes)} de ${mes} de ${ano}`;
}

function horaFormatada(data) {
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();
    return  _preencheZero(hora) + ":" + _preencheZero(minuto) + ":" + _preencheZero(segundo);
}

function _preencheZero(string) {    
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

const NOME_MES_ENUM = {
    1 : "Janeiro",
    2 : "Fevereiro",
    3 : "Março",
    4 : "Abril",
    5 : "Maio",
    6 : "Junho",
    7 : "Julho",
    8 : "Agosto",
    9 : "Setembro",
    10 : "Outubro",
    11 : "Novembro",
    12 : "Dezembro" 
}

const DIA_SEMANA_ENUM = {
    1 : "Domingo",
    2 : "Segunda-Feira",
    3 : "Terça-Feira",
    4 : "Quarta-Feira",
    5 : "Quinta-Feira",
    6 : "Sexta-Feira",
    7 : "Sábado" 
}

export {diaFormatado, horaFormatada}