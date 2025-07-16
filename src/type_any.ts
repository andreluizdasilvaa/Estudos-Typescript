// Type ANY = Aceita qualquer coisa

// OBS: Não faz muito sentido usar muito o tipo 'any' pois perde o sentido de se usar o typescript,
// a não ser se você realmente não sabe o que a var vai receber porem bem dificil isso acontecer

// ao passar o mouse em cima dele: 'let precoProduto: any'
let precoProduto;

precoProduto = true;
precoProduto = 20.90;

let nota1: any;
let nota2: any;

nota1 = 10;
nota2 = 20

nota1 = '15';

console.log(precoProduto); // 20.9

console.log(nota1 + nota2); // 1520 - Concatenado