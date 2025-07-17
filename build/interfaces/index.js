"use strict";
// Uma interface é tipo um contrato, onde você define exatamento como serão os dados.
// esse obj é apenas um dado do tipo obj
let loja;
// dentro dele eu posso adicionar, remover e manipular propriedade da maneira que eu quiser
// Veja que os dados dentro de loja não são tipados...
loja = {
    nome: 'BK',
    endereco: 'Rua x',
    status: true,
};
console.log(loja); // { nome: 'BK', endereco: 'Rua x', status: true }
// Aqui criamos o objeto 'BurguerK', com a interface 'LojaProps' passando os dados corretamente,
const BurguerK = {
    nome: 'BK 2',
    endereco: 'Rua lojo ali',
    status: true,
    // promocao: 127.90 // Aqui ocorre erro pois essa prop não existe na interfaçe, ERRO: specify known properties, and 'prmocao' does not exist in type 'LojaProps'.
};
console.log(BurguerK); // { nome: 'BK 2', endereco: 'Rua lojo ali', status: true }
// Exemplo com função
// Supondo que sua função recebe esses paramentro, nome, endereco e status todo tipados.
function novaLoja1(nome, endereco, status) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço ${endereco} criada com sucesso!`);
    console.log(`Status da loja ${status}!`);
}
novaLoja1("Subway", "Rua w", true);
/*  Resultado:
    ------------------------------------------
    Loja Subway criada com sucesso!
    Endereço da loja Rua w criada com sucesso!
    Status da loja true!
*/
// usando as props e tipagens da interface 'LojaProps'
function novaLoja2({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço ${endereco} criada com sucesso!`);
    console.log(`Status da loja ${status}!`);
    console.log('------------- DIVISOR ( APENAS VISUAL ) -------------');
}
// AQUI MUDA QUANDO SE USA INTERFACE NA FUNÇÃO, ao inves de apenas passar os dados a função, quando ela usa uma interface, da maneira acima, se tem que passar o dados em formato de obj
// Apertando ( CTRL + Spaço ) aparecem os dados disponiveis para enviar dentro do obj, por conta da interface.
novaLoja2({ nome: "McDonalds", endereco: 'Rua y', status: false });
/*  Resultado:
    ------------------------------------------
    Loja McDonalds criada com sucesso!
    Endereço Rua y criada com sucesso!
    Status da loja false!
*/
// Em resumo, Interfaces são apenas para definir um Conjunto de dados ( um padrão ) para descrever a estrutura de um objeto.
