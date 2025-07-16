"use strict";
// Type array
let numeros;
// --------------------------------------
// São o mesmo type, só muda a forma de declara-los
let filmes;
let filmes2;
// --------------------------------------
filmes = ['Filme1', 'Filme2', 'Filme3'];
console.log('Meus filmes: ', filmes); // Meus filmes:  [ 'Filme1', 'Filme2', 'Filme3' ]
// filmes.push(12) // ERRO: O argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'string'.
filmes.push('Filmes4');
console.log('Meus filmes: ', filmes); // Meus filmes:  [ 'Filme1', 'Filme2', 'Filme3', 'Filmes4' ]
numeros = [1, 2, 3, 4, 5];
console.log(numeros); // [1, 2, 3, 4, 5]
numeros.push(6);
console.log('Meus numeros: ', numeros); // Meus numeros:  [ 1, 2, 3, 4, 5, 6 ]
// Um array que aceita tipo string e number
let listaDeFilmes;
listaDeFilmes = ['Filme1', 'Filme2', 'Filme3', 123, 123456]; // sem erros
listaDeFilmes.push('Penultimo filme');
listaDeFilmes.push(321);
console.log(listaDeFilmes); // [ 'Filme1', 'Filme2', 'Filme3', 123, 123456, 'Penultimo filme', 321 ]
