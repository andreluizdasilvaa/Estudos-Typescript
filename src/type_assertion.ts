
// Afirmando algum tipo.

let statusAtual: unknown = 1;

let mudaStatus: number = 0;

console.log(mudaStatus) // 0

// "valor do tipo unknown só podem ser atribuidos ao tipo unknown ou any"
// mudaStatus = statusAtual // aqui dá erro por conta dessa regra de cima, então

// Estou afirmando que o 'statusAtual' é de fato um number!
mudaStatus = statusAtual as number;

// Outra maneira de afirmar um tipo.
mudaStatus = <number>statusAtual;

console.log(mudaStatus); // 1


// oto exemplo

let query: unknown = 'pizza';

let searchTerm: string = query as string;

console.log('Search TERM: ', searchTerm); // Search TERM:  pizza