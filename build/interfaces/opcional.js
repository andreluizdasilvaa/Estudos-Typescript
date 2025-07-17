"use strict";
// Deixando dados opcionais dentro de interfaces
const usuarioNovo = {
    nome: "André",
    email: "andre@teste.com",
    status: true
};
console.log(usuarioNovo); // { nome: 'André', email: 'andre@teste.com', status: true }
const usuarioNovo2 = {
    email: "andre@teste.com",
    status: true
};
console.log(usuarioNovo2); // { email: 'andre@teste.com', status: true }
// Exemplo com função
// Com descontrução
function handleRegister({ nome, email, status }) {
    const data = {
        nome,
        email,
        status
    };
    return data;
}
console.log(handleRegister({
    nome: 'André',
    email: 'andre@teste.com',
    status: false
})); // { nome: 'André', email: 'andre@teste.com', status: false }
// Sem descontrução 
function handleLogin(props) {
    console.log(`Seu nome é: ${props.nome}`);
    console.log(`Seu email é: ${props.email}`);
    console.log(`Seu status é: ${props.status}`);
}
handleLogin({
    nome: 'André',
    email: 'andre@teste.com',
    status: true
});
/*  RESULTADO DA FUNÇÃO ACIMA NO CONSOLE
    -----------
    Seu nome é: André
    Seu email é: andre@teste.com
    Seu status é: true
*/ 
