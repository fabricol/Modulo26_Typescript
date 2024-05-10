"use strict";
// mudando o tipo de uma variável
// Ele não nos permite criar variáveis com aos mesmos nomes de variáveis
// let idade : any = 25
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed();
    idade.length;
    idade.forEach(x => {
        console.log(x);
    });
})(casting || (casting = {}));
