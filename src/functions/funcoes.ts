
// Função que recebe um 'userName' com type string e não retorna nada(void), apenas executa algo e finaliza
function login(userName: string): void {
    console.log('Bem vindo: ', userName);
}
login('André')// Bem vindo:  André


function soma(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(soma(1,2)) // 3

// O typescript alerta erro antes mesmo de executar, evitando o erro de concatenar os numeros.
// console.log(soma('3',2))// ERRO: O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.

