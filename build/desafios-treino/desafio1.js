"use strict";
// - Modele uma tupla [x:number, y:number] para coordenadas e escreva uma função que receba um array de tuplas e retorne um novo array com cada ponto deslocado em (+1, +1).
let coordenadas = [2, 4];
function deslocCords(tupla) {
    tupla[0] + 1;
    tupla[1] + 1;
    return [...tupla];
}
console.log(deslocCords(coordenadas));
