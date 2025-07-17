"use strict";
// Extends de interfaces
;
// Crio o jogo 'left 4 dead'
const left4dead = {
    id: '123',
    nome: 'Left 4 Dead',
    descricao: 'Jogo de ação de tiro tal tal...',
    plataforma: ['PS4', 'PS5', 'PC']
};
// EXEMPLO ANTES DE DLC TER A PROP 'jogoOriginal'
// const left4deadDLC: DLC = {
//     id: '90',
//     nome: 'Left 3 Dead - Novos mapas',
//     descricao: '3 novos mapas para jogar online!',
//     plataforma: ['PS4', 'PS5', 'PC'],
//     novoConteudo: ['Mapa sei lá oq', 'Mapa tanto faz', 'Mapa sem ideias'] // Prop da interface DLC, o resto é tudo da 'JogoProp'
// }
// console.log(left4deadDLC)
/*
    RESULTADO DO 'console.log' ACIMA:
{
  id: '90',
  nome: 'Left 3 Dead - Novos mapas',
  descricao: '3 novos mapas para jogar online!',
  plataforma: [ 'PS4', 'PS5', 'PC' ],
  novoConteudo: [ 'Mapa sei lá oq', 'Mapa tanto faz', 'Mapa sem ideias' ]
}
*/
const left4deadDLC = {
    id: '90',
    nome: 'Left 3 Dead - Novos mapas',
    descricao: '3 novos mapas para jogar online!',
    plataforma: ['PS4', 'PS5', 'PC'],
    novoConteudo: ['Mapa sei lá oq', 'Mapa tanto faz', 'Mapa sem ideias'], // Prop da interface DLC, o resto é tudo da 'JogoProp'
    jogoOriginal: left4dead // Aqui eu passo a do jogo original que criamos lá em cima e segue todos parametro da interface 'JogoProp'
};
console.log(left4deadDLC);
/*
    RESULTADO DO 'console.log' ACIMA:
    {
        id: '90',
        nome: 'Left 3 Dead - Novos mapas',
        descricao: '3 novos mapas para jogar online!',
        plataforma: [ 'PS4', 'PS5', 'PC' ],
        novoConteudo: [ 'Mapa sei lá oq', 'Mapa tanto faz', 'Mapa sem ideias' ],
        jogoOriginal: {
            id: '123',
            nome: 'Left 4 Dead',
            descricao: 'Jogo de ação de tiro tal tal...',
            plataforma: [ 'PS4', 'PS5', 'PC' ]
        }
    }
*/
// Extends são para reaproveitar uma interface existente criar outra com base nela porem com coisas a mais( props, funções...)
// Ex: userNormal e um userAdmin com extend do userNormal
