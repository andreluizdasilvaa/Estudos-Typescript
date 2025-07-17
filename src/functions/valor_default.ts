
// Como deixar um valor por default ou deixar ele opcional

// Ex: uma função de cadastro em que o usuário envia nome, email e senha, mas o nome é opcional
// então podemos cadastra-lo com nome vazio ou deixar um por padrão como 'Anonimo' ou algo do tipo.

// email (obrigatório), senha (obrigatório), nome opcional porem se for enviado TEM que ser string e se nãp for enviado sera salvo como 'Anonimo' por default
// Se não colocase um valor como default para o nome, ele seria = undefined

// Ao passar o mouse em cima: function cadastro(email: string, senha: string, nome?: string): void
// já aparece que o nome é opcional e type string
function cadastro(email: string, senha: string, nome: string = 'Anonimo'): void {
    let data = {email, senha, nome};

    console.log(data);

}

cadastro('andre@teste.com', '123123', 'André') // { email: 'andre@teste.com', senha: '123123', nome: 'André' }

cadastro('andre@teste.com', '123123') // { email: 'andre@teste.com', senha: '123123', nome: 'Anonimo' }

// cadastro('andre@teste.com', '123123', 987) // ERRO: O argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'string'.

// function cadastroLoja(nome: string, email: string, isOpen?: boolean): string
function cadastroLoja(nome: string, email: string, isOpen: boolean = false): string {
    return `A loja: ${nome} do email: ${email}, está aberta agora?: ${isOpen}`
}   

console.log(cadastroLoja('Rener', 'rener@teste.com')) 
// A loja: Rener do email: rener@teste.com, está aberta agora?: false

console.log(cadastroLoja('Rener', 'rener@teste.com', true)) 
// A loja: Rener do email: rener@teste.com, está aberta agora?: true
