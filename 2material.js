/*
    Operaciones logicas en Javascript
*/

// operador para evaluar la igualdad ==
var a = 5 == '5';
//console.log(a);
/* a valdra verdadero aunque no parezca
 hay que tener cuidado con este signo a
 la hora de crear expresiones logicas */

/* esto es porque se hace un casteo implicito,
==  evalua si es posible que ambos valores
mediante casteos sean iguales */

/* Si queremos ser estrictos a la hora de 
 evaluar identidad  se usa ===*/

var a1 = 89 != "89" // a1 es falso, por casteo implicito son iguales
var a2 = 73 !== "73" // a2 es verdadero, pues son de distinto tipos de datos
// !=  es el negado de ==   y !== es el negado de ===


var b = 5 === '5';  // b es falso
var z = 4 === 4; // z es verdadero
//console.log(b);


// como signos de comparacion tenemos  <, > , >=  y <=

var b1 = !(5 >= 3) && (3 === 3)  // b1 es falso
// recodar que tabien podemos comparar variables
var b2 = !(74 < 1) || b1 // b2 es verdadero

// ++ luego de una variable para incrementarla en 1, pero no de inmediato
var z1 = 5;
var z2 = z1++; // z2 hasta aqui vale 5, pero ahora z1 vale 6 luego de esta instruccion
z2 = z1 += 1; // +=  sirve para incrementar el valor  cuanto se desee de inmediato
z2 = ++z1;  // ++ antes de de una variable, incrementa ese valor en 1 de inmediato

// del mismo modo --z2  decrementa en 1 de inmediato
// z2+=1 tambien  (recordar que luego de += puede ir cualquier valor)
// z2-- decrementa en 1 luego de la asignacion

// console.log(4%2); % para la operacion modulo que conocemos

// tambien podemos crear variables utilizando la palabra reservada "let"

var x = 9;
if (true) {
  let x = 76.89;


  //console.log(x)  //con esta instrucción se mostraría en la consola 76.89
}
//console.log(x) // con esta instrucción  se mostraría en la consola 9

// sucede que con let la variable creada solo "existe"  en el bloque de codigo en el que fue creado
// teniendo mayor prioridad que variables con el mismo nombre creadas afuera de tal bloque
