
// Com o type alias conseguimos criar tipos mais poderosos, com mais informações do que tipos primitivos
// Intersection é quase igual a extends de interface, 
// pois atualmente no Typescript, conseguimos criar objetos em type tambem, bem parecido da maneira 
// de fazer isso com interface

// Intersection e juntar 2 alias/type em um só


// Observa que com type conseguimos criar quase que uma interface, bem parecido os dois
type Info = {
    id: number;
    nome: string;
    descricao?: string;
}

// Até na forma de criar os obetos com alias é praticamente igual a de interface
const produtoInfo: Info = {
    id: 123,
    nome: 'Plca de Video',
    descricao: 'Placa RTX 5090'
}

type Categoria = {
    slug: string;
    quantidadeProduto: number;
}

const categoria1: Categoria = {
    slug: 'Hardware',
    quantidadeProduto: 2
}

// ProdutoInfo é a intercessão (UNIÃO) entre info e categoria
type ProdutoInfo = Info & Categoria;

// Agora passar todos os props necessarios ( CTRL + Spaço ) dentro de novoProduto sem prop
const novoProduto: ProdutoInfo = {
    id: 54321,
    nome: 'Teclado RGB',
    descricao: 'sla sla sla...',
    slug: 'Teclado-Mecanico',
    quantidadeProduto: 10,
}

console.log(novoProduto)
/*
{
    id: 54321,
    nome: 'Teclado RGB',
    descricao: 'sla sla sla...',
    slug: 'Teclado-Mecanico',
    quantidadeProduto: 10
}
*/


// Depois de rever/estudar nesse material veja o arquivo DIFERENCA_TYPE_INTERFACE.ts