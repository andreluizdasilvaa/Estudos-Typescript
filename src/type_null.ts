

// Type NULL

// É a ausencia de um valor, em branco, vazia... tem uma variavel mas está em branco, vazia
let userNick: null;

// userNick = 123    // ERRO 
// userNick = 1.234  // ERRO 
// userNick = '123'  // ERRO 
// userNick = true   // ERRO 

// Normalmente utilizado junto a outro valor com pipe
// ex: nome pode ser opcional, ou salvar null no db

let nome: string | null;

nome = 'André';
nome = null;



// Type UNDEFINED

// undefined é que ela não foi definida, dificilmente usara apenas ela
let nomeUser: undefined;

// nomeUser = 'ASD' // O tipo '"ASD"' não pode ser atribuído ao tipo 'undefined'.

console.log(nomeUser) // undefined


// caso de uso seria usar com pipe e outro type junto
let ano: undefined | number;

console.log(typeof ano) // undefined

ano = 2025

console.log(typeof ano) // number