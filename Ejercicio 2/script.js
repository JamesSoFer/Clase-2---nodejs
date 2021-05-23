// 2.Desarrolle un programaque le permitaleer un número entero y determinar si tiene 3 dígitos

exports.Validation = function number(n){
    if(n>100 && n<1000){
        return "El numero que ingresó tiene 3 digitos";
    } else {
        return "El numero que ingresó no tiene 3 digitos"
    }
}