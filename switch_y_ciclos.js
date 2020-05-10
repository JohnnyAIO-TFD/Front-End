// particularidades del switch

//------------EJEMPLO 1--------------

var letra = prompt("Escriba un dia de la semana (minusculas)");

switch (letra) {
    case "lunes":
        alert("Acaba de colocar: lunes")
        break;
    case "martes":
    case "miercoles":
    case "jueves":
        alert("Seguro coloco: martes, miercoles o jueves");
        break;
    case "viernes":
        alert("Acaba de colocar: viernes"); break;
    default:
        alert("No coloco un dia de la semana en minusculas");

}
// notar que en el 2do, 3er y 4to caso no se coloco ninguna instruccion por lo tanto
// de cumplirse cualquiera de esos se ejecutara la instruccion del 3ero (jueves)
// si se colocase un break en el caso del miercoles:  de cumplirse martes o miercoles
// no suecediera nada. el break hace que el interprete se salga  del switch



//-----------------------------Ejemplo 2---------------------------------

var n = prompt("Escriba un numero entero del 1 al 10");

switch (n) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "9":
        alert("el numero que escribio es impar"); break;
    case "2":
    case "4":
    case "6":
    case "8":
    case "10":
        alert("el numero que escribio es par"); break;
}

// otro ejemplo mas de como hacer una "cascada" en switch
// los casos del switch se evaluan de forma estricta como un "==="
// recordar que todo lo que ingrese el usuario es un string, asi que en los cases se puso strigns
// como ven no es necesario el default




//ejemplos de ciclos


// mostrar la suma de los primeros 100 numeros naturales con los 3 ciclos
// notar que se trata de una 



// ciclo for
var sum = 0
for (i = 1; i < 101; ++i) sum += i;
document.write(sum, "</br>");


// ciclo while
sum = 0; var i = 1;
while (i <= 100) {
    sum += i; ++i;
}
document.write(sum, "</br>");

//ciclo do while
sum = 0; var i = 1;
do {
    sum += i; ++i;
} while (!(i == 101))
document.write(sum, "</br>")





// recordar que se pueden un flujo de control puede estar dentro de otro
// En este codigo se muestra una fila de astetiscos con n-1 filas
// con un maximo de n-1 asteriscos en la ultima fila
// la cantidad de asteriscos asiende uno en uno  en cada fila y n lo determina el usuario
while (true) {
    n = prompt("Escriba un numero entero")
    var str='*';
    for (i = 0; i < n; ++i) {
        for (j = 0; j < i; ++j)
            document.write(str);
        document.write("</br>");
    }
}
