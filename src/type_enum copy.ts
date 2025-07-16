
// Type ENUM

// é basicamente um object que não se pode mudar o valor dele ao longo do desenvolvimento, 
// O VALOR DELE É FIXO

// casos de uso:

enum DesignColors {
    white = "#ffffff",
    black = "#000000"
}

console.log(typeof DesignColors); // object

console.log(DesignColors.white); // retorna: #ffffff
console.log(DesignColors.black); // retorna: #000000

// se não passar valor, ele dá o valor enumentando cada
enum StatusPermission {
    ADMIN,
    USER,
    SUPPORT
}

console.log(StatusPermission.ADMIN)    // 0
console.log(StatusPermission.USER)     // 1
console.log(StatusPermission.SUPPORT)  // 2
