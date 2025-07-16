"use strict";
// Type ENUM
// é basicamente um object
// casos de uso:
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#ffffff";
    DesignColors["black"] = "#000000";
})(DesignColors || (DesignColors = {}));
console.log(typeof DesignColors); // object
console.log(DesignColors.white); // retorna: #ffffff
console.log(DesignColors.black); // retorna: #000000
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 0] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 1] = "USER";
    StatusPermission[StatusPermission["SUPPORT"] = 2] = "SUPPORT";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.USER);
console.log(StatusPermission.ADMIN);
console.log(StatusPermission.SUPPORT);
