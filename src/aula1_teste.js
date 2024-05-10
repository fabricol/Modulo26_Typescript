"use strict";
let nome = 'fabricio';
// Por ser uma linguagem tipada, o typeScript n me permite mudar o tipo da variavel nome:
//  nome = 123, não poderiamos mudar para o tipo num
let estaChovendo = true;
let idade = 24;
let altura = 1.75;
// O number não tem problema em ter um valor fracionado
const nacionalidade = 'brasileira';
// Arrays do TypeScript, os arrays precisam ter o mesmo tipo
const colegas = ['lucas', 'fernanda'];
// Outra forma de criar um array é com a palavra:
const tecnologias = ['html', 'css']; // Não podemos inserir um tipo number ou boolean, essa linguagem não aceita
const notas = [7, 8, 9, 10]; // Esse é um array somente leitura
const lista = ['fabricio', true, 24]; //dessa forma conseguimos colocar diversos tipos em um array
let idadeDaAna = 25; // isso permite que a variável receba mais de um TIPO
idadeDaAna = '25 anos';
let dadosdaApi; // esse tipo aceita todos os outros como entrada de uma variável
dadosdaApi = 10;
dadosdaApi = true;
dadosdaApi = [1, 2, 3];
dadosdaApi = 'string';
