

// "|" = pipe
// essa variavel pode ser um NUMBER ou uma STRING ou um BOOLEAN ou um array de number apenas
let userId: number | string | boolean | number[];

userId = 123; // sem erros

console.log(typeof userId); // Number

userId = 'abc'; // sem erros

console.log(typeof userId); // String

userId = false;

console.log(typeof userId); // boolean

userId = [
    123,
    123,
    123
]

console.log(typeof userId); // object

// aqui retornaria um erro: O tipo 'string' não pode ser atribuído ao tipo 'number'.
// userId = [
//     'asd',
//     'asd',
//     'asd'
// ]