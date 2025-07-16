"use strict";
// Type BOOLEAN
let estaAutenticado = true;
console.log(estaAutenticado); // true
estaAutenticado = false;
console.log(estaAutenticado); // false
// Var tipo number com valor 1
let codeStatus = 1;
// passa para a var 'estaAutenticado' o Boolean da var 'codeStatus' que é um number,
// convertendo codeStatus para boolean
estaAutenticado = Boolean(codeStatus);
console.log(estaAutenticado); // true
