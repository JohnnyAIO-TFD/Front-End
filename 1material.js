//----------- TIP 1 -------------------

/* asignar un mismo valor a varias variables usando la palabra
reservada var  una sola vez */

var a, b, c_, x = true; // a todas esas variables se le asigno  true

//----------- TIP 2 -------------------

// una variable y una constante no deben tener el exactamente mimso nombre

var g = 4; const g = 3.14; // la constante se podria llamar 'G' 


//----------- TIP 3 -------------------

// Se pueden utilizar los metodos del objeto windows, sin crear ta
// es decir, se pueden utilizar sus metodos tal como si fuesen funciones del lenguaje
// añada el siguiente coidgo dentro de una etiqueta srcipt de un archivo html para probar
/*
var edad = prompt('Edad', '4');
alert('su edad es '+ edad);
*/

//----------- TIP 4 -------------------
// se puede colocar dentro un string  un mensaje encerrado con un tipo distinto de comillas 
// al tipo de comillas con el que se creo el string
// en este ejemplo se uso dentro las comillas dobles y se creo el string con comillas simples
var d = ' el dijo:  "viva la programacion" ';
// tambien se puede de la siguiente manera utilizando  \" contenido  \"   o  \' contenido \'
var z = " el me dijo:  \' viva la programacion \' ";

//----------- TIP 5 -------------------

// Hay dos tipos de datos que son faciles de confundir,  null  y undefined

// null es un valor nulo,  por lo general cuando pedimos un valor al usuario y
// este no ingresa ninguno, la variable que iba a recibir tal valor se le queda 
// asignado  null
var c1 = null;  
// undefined es el valor que por defecto posee una varible que creamos sin asignarle un valor.
var c2;