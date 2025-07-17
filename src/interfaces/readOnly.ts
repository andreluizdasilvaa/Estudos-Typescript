
// ReadOnly == Para uma prop de interface ser apenas visualizada, 
// e não poder ser modificada

interface Produtoprops {
    id: string
    nome: string
    descricao: string
}

let produto1: Produtoprops = {
    id: '1',
    nome: 'Tenis Nike',
    descricao: 'super tenis de carbono'
}

console.log(produto1) // { id: '1', nome: 'Tenis Nike', descricao: 'super tenis de carbono' }

// Aqui conseguimos mudar o ID do produto
produto1.id = '123'

console.log(produto1) // { id: '123', nome: 'Tenis Nike', descricao: 'super tenis de carbono' }

interface Produtoprops2 {
    // Aqui definimos o id apenas para leitura
    readonly id: string;
    name: string;
    descricao: string;
}

let produto2: Produtoprops2 = {
    id: '2',
    name: 'Relogio Rolex',
    descricao: 'Incrivel relógio de luxo...'
}

console.log(produto2)
/*
{
  id: '2',
  name: 'Relogio Rolex',
  descricao: 'Incrivel relógio de luxo...'
}
*/

// Aqui o Typescript já retorna erro, impedindo de rodar
// produto2.id = '23' // ERRO: Não é possível atribuir a 'id' porque é uma propriedade de somente leitura.

console.log(produto2.id) // posso apenas visualizar -> 2