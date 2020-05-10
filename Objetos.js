var frutas = ["manzana", "peras", "guayaba"];

// acceso nombre [indice]
frutas[0]; // manzana
frutas[1]; // peras
frutas[2]; // guayaba

var long = frutas.length; // cantidad de elementos

frutas[frutas.length - 1] // acceder al ultimo sin conocer la cantidad

var nueva_long = frutas.push("durazno"); // se agregaría "durazno" al arreglo
// [manzana, peras, guayaba, durazno]

var ultimo = frutas.pop() // elimina el ultimo elemento y lo retorna

var primero = frutas.shift() // ["peras", "guayaba"]

var nueva_long = frutas.unshift("fresa") // ["fresa", "pera", "guayaba"]

frutas.indexOf("fresa") //0

frutas.splice(1,1) // ["fresa", "guayaba"] // retorna un arreglo que contiene

// Objetos

var persona = {Nombre: "Isabel", edad : 48, profesion: "Gestora"};

persona.Nombre;
persona["Nombre"];

persona.experiencia = "3 años";
// persona["experiencia"] = "3 años";
//{Nombre: "Isabel", edad : 48, profesion: "Gestora", experiencia: "3 años"};
// persona.["experiencia"] = "6 años";
delete persona["edad"];
// delete persona.edad
//{Nombre: "Isabel", edad : 48, profesion: "Gestora", experiencia: "3 años"};
var object = {}
var object2 = new Object()
var array1 = new Array()
var array2 = [] // arreglo vacio

var carro = {marca: "Mazda", pasajeros: ["Antonio", "Gabriela"]};
var a = [2, 3, {Nombre: "Antonio", edad:20}];

