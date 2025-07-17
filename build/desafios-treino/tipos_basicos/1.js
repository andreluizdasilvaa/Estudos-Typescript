"use strict";
// - Declare uma variável valorDesconhecido do tipo unknown, atribua valores de tipos diferentes (número, string, objeto) e,
//   dentro de uma função, valide seu tipo antes de usá‑la.
let valorDesconhecido;
valorDesconhecido = 'Olá!';
console.log(valorDesconhecido);
valorDesconhecido = 123;
console.log(valorDesconhecido);
valorDesconhecido = {
    nome: 'André',
    idade: 17
};
console.log(valorDesconhecido);
