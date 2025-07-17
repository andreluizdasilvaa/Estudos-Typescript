"use strict";
// Função dentro de interface 
// LEMBRANDO:  interface === Um model de objeto, dentro dele se pode fazer o molde de uma função tambem
function mostraPromocao(preco) {
    console.log(`Promoção no curso por apenas: ${preco}`);
}
const novoCurso = {
    id: '123',
    name: 'Js do basico ao expert',
    preco: 2000,
    // eu posso passar a função que definimos anteriormente
    promocao: mostraPromocao
};
console.log(novoCurso);
/*
{
  id: '123',
  name: 'Js do basico ao expert',
  preco: 2000,
  promocao: [Function: mostraPromocao]
}
*/
console.log(novoCurso.promocao(290)); // Promoção no curso por apenas: 290
const cursoNovo = {
    id: '124',
    name: 'Ts do basico ao avançado',
    preco: 7000,
    // Crio a função diretamente construção do nosso objeto usando a interface 'CursoProps'
    promocao: (preco) => {
        console.log(`Apenas hoje o curso sai por apenas R$${preco}`);
    }
};
console.log(cursoNovo);
/*
{
  id: '124',
  name: 'Ts do basico ao avançado',
  preco: 7000,
  promocao: [Function: promocao]
}
*/
console.log(novoCurso.promocao(127.97)); // Promoção no curso por apenas: 127.97
// Aqui criamos a função, 
const SomaFuncao = (num1, num2) => {
    return num1 + num2;
};
// Aqui chamamos ela e passamos 2,2 como argumento e exibimos no console.log
console.log(SomaFuncao(2, 2)); // 4
