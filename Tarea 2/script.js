// Desarrollo un programa que lea una opción y luego dos números, posteriormente
// según sea la opción realizaralguna de estas operaciones: 
// -1. Para sumar dos números 
// -2. Para multiplicar dos números 
// -3. Para dividir dos números, recuerda que la divión entre 0 da error
// -4. Para restar dos números-Usar module.export

exports.Validation = function number(opcion){
    let n1 = 23
    let n2 = 42

    if (opcion == 1) {
        let suma = n1+n2;
        return `el resultado de la suma es ${suma}`;
    } else if (opcion == 2) {
        let multiplicacion = n1*n2;
        return `el resultado de la multiplicacion es ${multiplicacion}`;
    } else if (opcion == 3) {
        let division = n1/n2;
        return `el resultado de la division es ${division}`;
    } else if (opcion == 4) {
        let resta = n1-n2;
        return `el resultado de la resta es ${resta}`;
    } else {
        return "el numero que está ingresando no corresponde para ninguna de las opciones";
    }
}

