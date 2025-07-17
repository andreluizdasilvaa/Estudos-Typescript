"use strict";
// Type ENUM
// é basicamente um object que não se pode mudar o valor dele ao longo do desenvolvimento, 
// O VALOR DELE É FIXO
// casos de uso:
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#ffffff";
    DesignColors["black"] = "#000000";
})(DesignColors || (DesignColors = {}));
console.log(typeof DesignColors); // object
console.log(DesignColors.white); // retorna: #ffffff
console.log(DesignColors.black); // retorna: #000000
// se não passar valor, ele dá o valor enumentando cada
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 0] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 1] = "USER";
    StatusPermission[StatusPermission["SUPPORT"] = 2] = "SUPPORT";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.ADMIN); // 0
console.log(StatusPermission.USER); // 1
console.log(StatusPermission.SUPPORT); // 2
