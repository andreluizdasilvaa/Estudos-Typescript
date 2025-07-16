// Tipo desconhecido = Type unknown
// Quando você não sabe o tipo que vai receber.
// ex: Quando você não sabe o tipo que vai receber em uma api, função, serviço etc...


let total: unknown;

total = 100;
total = '350';

total = {
    total: 100
}

// any é diferente de unknown, any é mais flexivel

let idPedido: any = 123;
let totalPedido: unknown = 15;

// o entregador vai receber o id do pedido
let entregador: number = idPedido;

console.log(entregador) // 123

// valor do tipo unknown só podem ser atribuidos ao tipo unknown ou any                               <-  !!
// let totalEntrega: number = totalPedido; // ERRO

let totalEntrega: any = totalPedido; // aqui vai

console.log(totalEntrega) // 15