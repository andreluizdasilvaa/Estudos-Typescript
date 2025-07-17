"use strict";
// - Declare uma variável valorDesconhecido do tipo unknown, atribua valores de tipos diferentes (número, string, objeto) e,
//   dentro de uma função, valide seu tipo antes de usá‑la.
let valorDesconhecido;
valorDesconhecido = 'Olá!'; // string
console.log(typeof valorDesconhecido);
valorDesconhecido = 123; // number
console.log(typeof valorDesconhecido);
valorDesconhecido = {
    nome: 'André',
    idade: 17
};
console.log(typeof valorDesconhecido);
var temQueSerObj = {
    nome: 'Jão',
    idade: 37
};
console.log(temQueSerObj);
function validaLet(value) {
    if (typeof value === 'object' && value !== null) {
        temQueSerObj = value;
    }
    else {
        console.log('É diferente de obj');
    }
}
validaLet(valorDesconhecido);
console.log(temQueSerObj);
