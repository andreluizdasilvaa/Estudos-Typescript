"use strict";
// Rest Params ( ...values )
// Exemplo: supondo que sua api vai retornar os 4 valores e você apenas vai somar com essa função.
function totalVenda(venda1, venda2, venda3, venda4) {
    const total = venda1 + venda2 + venda3 + venda4;
    console.log(total);
    return total;
}
totalVenda(10, 30, 50, 10); // 100
// Supondo agora que você não sabe a quantidade de itens que virão da api, 
// Porem sabe que vai ser um array de numeros.
function totalVendas(...vendas) {
    const quatidadeVendas = vendas.length;
    console.log(quatidadeVendas);
}
totalVendas(10, 30, 25); // 3 vendas
totalVendas(10, 30, 25, 90, 30, 10); // 6 vendas
