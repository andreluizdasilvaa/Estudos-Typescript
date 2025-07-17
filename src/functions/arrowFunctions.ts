// Exemplo com arrow functions

function retornoApi(url: string): string {
    return url;
}

console.log(retornoApi('https://www.google.com')) // https://www.google.com

// A mesma função de cima porem com arrow functions
const retornoApi2 = (url: string): string => {
    return url;
}

console.log(retornoApi2('http://www.uol.com.br')) // http://www.uol.com.br
