

// Array dentro de interfaces

// Isso já vimos ( o tipo array dentro da interface )
// ------------------------------------------------------

// interface TecnologiaProps {
//     id: string;
//     name: string;
//     slug: (string | number)[];
// }

// let tecnologia1: TecnologiaProps = {
//     id: '1',
//     name: 'PHP',
//     slug: ["php", 'php-do-zero', 'php12', 12]
// }

// ------------------------------------------------------

// Modelo do objeto
interface TecnologiaProps {
    id: string;
    name: string;
    descricao?: string
}

interface NomesProps {
    // Esse aqui é um array que cada obj dentro desse array deve seguir a estrutura de 'TecnologiaProps'
    tecnologia: TecnologiaProps[]
}

let frontEnd: NomesProps = {
    tecnologia: [
        {
            id: '1',
            name: 'HTML',
            descricao: 'Utilizado para criar estruturas de paginas web'
        },
        {
            id: '2',
            name: 'CSS',
            descricao: 'Utilizado para criar estilo em paginas web'
        },
        {
            id: '3',
            name: 'JavaScript',
            descricao: 'Utilizado para criar interatividade em paginas web'
        }
    ]
}