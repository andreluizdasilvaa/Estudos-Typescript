"use strict";
// Type alias
// Serve para salvar os tipos de uma dados especifico, tipo uma interface, porem de um dados só
// Repare que o uuid está sendo usado nas duas funções e sendo repetido 2x os types dele
// Como centralizar isso?
function acessar(uuid, nome) {
    console.log(`ID: ${uuid} - Bem Vindo ${nome}`);
}
function logUser(uuid) {
    console.log(`Acessou o usuário com ID: ${uuid}`);
}
acessar(123, 'André'); // ID: 123 - Bem Vindo André
logUser('123'); // Acessou o usuário com ID: 123
// Agora só passar o o type para ele
function acessar2(uuid, nome) {
    console.log(`ID: ${uuid} - Bem Vindo ${nome}`);
}
function logUser2(uuid) {
    console.log(`Acessou o usuário com ID: ${uuid}`);
}
acessar(123, 'André'); // ID: 123 - Bem Vindo André
logUser('123'); // Acessou o usuário com ID: 123
function comprarItem(moeda) {
    console.log(`Comprando com a moeda: ${moeda}`);
}
// Apertando ( CTRL + Spaço ) dentro da string vazia dentro do comprarItem em baixo aparecem as opções disponiveis
comprarItem('BRL'); // Comprando com a moeda: BRL
comprarItem('BTC'); // Comprando com a moeda: BTC
comprarItem('USD'); // Comprando com a moeda: USD
// ERRO: O argumento do tipo '"ETH"' não é atribuível ao parâmetro do tipo 'Moedas'.ts(2345)
// comprarItem('ETH') // Se tentar com uma que não existe no type dá erro
