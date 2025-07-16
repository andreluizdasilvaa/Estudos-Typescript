"use strict";
// Type Object
// OBS: aqui apenas criamos uma variavel com o type object, não setamos o type de cada valor dentro o obj,
// apenas que ela só podera ter o valor de um object
let novoUsuario = {
    nome: "André",
    email: "andre@teste.com",
    idade: 25
};
novoUsuario = {
    nome: "Jão",
    email: "joao@teste.com",
};
console.log(novoUsuario); // { nome: 'Jão', email: 'joao@teste.com' }
