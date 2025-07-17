

// Função dentro de interface 
// LEMBRANDO:  interface === Um model de objeto, dentro dele se pode fazer o molde de uma função tambem


interface CursoProps {
    id: string;
    name: string;
    preco: number;

    // Definir apenas a função o que elá vai receber e o que ela deve entregar
    // Aqui ela recebe preco == number e retorna 'void' == nada
    promocao: (preco: number) => void
}

function mostraPromocao(preco: number): void {
    console.log(`Promoção no curso por apenas: ${preco}`)
}

const novoCurso: CursoProps = {
    id: '123',
    name: 'Js do basico ao expert',
    preco: 2000,
    // eu posso passar a função que definimos anteriormente
    promocao: mostraPromocao
}

console.log(novoCurso);
/* 
{
  id: '123',
  name: 'Js do basico ao expert',
  preco: 2000,
  promocao: [Function: mostraPromocao]
}
*/

console.log(novoCurso.promocao(290)) // Promoção no curso por apenas: 290

const cursoNovo: CursoProps = {
    id: '124',
    name: 'Ts do basico ao avançado',
    preco: 7000,
    
    // Crio a função diretamente construção do nosso objeto usando a interface 'CursoProps'
    promocao: (preco: number): void => {
        console.log(`Apenas hoje o curso sai por apenas R$${preco}`);
    }
}

console.log(cursoNovo);
/* 
{
  id: '124',
  name: 'Ts do basico ao avançado',
  preco: 7000,
  promocao: [Function: promocao]
}
*/

console.log(novoCurso.promocao(127.97)) // Promoção no curso por apenas: 127.97



// Uma interface que o unico objetivo é criar um model de uma função de soma
interface SomaProps {
    // Apenas a função, se atribuir a ela uma prop, 
    // recebe 2 valors ambos type number e retorna um number tambem
    (valor1: number, valor2: number): number
}

// Aqui criamos a função, 
const SomaFuncao: SomaProps = (num1: number, num2: number ): number => {
    return num1 + num2;
}

// Aqui chamamos ela e passamos 2,2 como argumento e exibimos no console.log
console.log(SomaFuncao(2,2)); // 4
