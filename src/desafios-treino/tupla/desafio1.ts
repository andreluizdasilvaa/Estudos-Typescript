// - Modele uma tupla [x:number, y:number] para coordenadas e escreva uma função que receba um array de tuplas e retorne um novo array com cada ponto deslocado em (+1, +1).

// Temos uma função que recebe 'pontos' que é um array([]) com varios arrays dentro com 2 valores com type number
// e nos vamos retornar o mesmo, type que recebemos, pois só vamos incrementar cada valor
function descolcCords(pontos: [number, number][]): [number, number][] {
    return pontos.map(([x, y]) => [x + 1, y + 1]);
}

// Aqui criamos a var 'coordenadas' com um array de arrays com 2 valores do type number
const coordenadas: [number, number][] = [
    [1,2],
    [3,4],
    [5,6],
    [7,8]
]

console.log(descolcCords(coordenadas)) // [ [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8, 9 ] ]