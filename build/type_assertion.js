"use strict";
// Afirmando algum tipo.
let statusAtual = 1;
let mudaStatus = 0;
console.log(mudaStatus); // 0
// "valor do tipo unknown só podem ser atribuidos ao tipo unknown ou any"
// mudaStatus = statusAtual // aqui dá erro por conta dessa regra de cima, então
// Estou afirmando que o 'statusAtual' é de fato um number!
mudaStatus = statusAtual;
// Outra maneira de afirmar um tipo.
mudaStatus = statusAtual;
console.log(mudaStatus); // 1
// oto exemplo
let query = 'pizza';
let searchTerm = query;
console.log('Search TERM: ', searchTerm); // Search TERM:  pizza
