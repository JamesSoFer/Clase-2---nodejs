// 3.Desarrolle un algoritmo que permita ingresar la temperatura en grados y muestre
// la sensación térmica:
// Menos de 10 grados: Hace mucho frío
// Entre 10 y 15: Hace poco frío 
// 16 y 24 grados: Hace una temperatura normal
// 25 y 30 grados: Hace poco calor
// Mayor a 30 grados: Hace mucho calor

exports.Validation = function temp(n){
    if (n<=10){
        return "Hace mucho frío";
    } else if (n>=10 && n<=15){
        return "Hace poco frío";
    } else if (n>=16 && n<=24){
        return "Hace una temperatura normal";
    } else if (n>=25 && n<=30) {
        return "Hace poco calor";
    } else if (n>=30){
        return "Hace mucho calor"
    }
}
