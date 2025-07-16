

// OBS: Tupla não possui no javascript apenas no Typescript


// Tupla define quantos itens deve ser enviado no array e qual o type de cada um,
// exemplo abaixo 2 valores, o primeiro como string e o segundo como number, 
// se eu passar mais do que esses 2 valores retorna erro ou se eu erra o type deles tambem.
// resumo: dá orden de quantos valores no array e qual type cada um.
let aluno: [string, number];

// seto do valor manualmente
aluno = ['aluno1', 123]; // aqui eu consigo  

console.log(aluno) // [ 'aluno1', 123 ]

// empurro o valor com push
aluno.push('lucas', 123)

console.log(aluno) // [ 'aluno1', 123, 'lucas', 123 ]

aluno.push(321, 'joão') // aqui eu consigo, pois não importa a orden apenas a quantidade de iten e o type

console.log(aluno) // [ 'aluno1', 123, 'lucas', 123, 321, 'joão' ]


// ------------------------------------------------------------------------------------------------------------


let statusPedido: [string, string, string];

statusPedido = ["Em produção", "Saiu para entrega", "Pedido entregue"];

console.log(statusPedido) // [ 'Em produção', 'Saiu para entrega', 'Pedido entregue' ]