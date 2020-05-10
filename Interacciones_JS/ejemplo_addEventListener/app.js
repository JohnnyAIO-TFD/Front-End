const parrafo = document.getElementById("párrafo"); 
const boton = document.getElementById("botón");

function funcionX(){}

function cambiar_parrafo(){
    parrafo.innerText="El texto ha cambiado";
}


// aquí se usa el metodo addEventListener para añadir un evento al elemento html
boton.addEventListener("click", cambiar_parrafo);  
// "click" para "onclik",  el prefijo "on" se ignora al usar este método

//otra manera de hacerlo 

/*  definiendo la función al instante 
boton.addEventListener("click", function cambiar_parrafo(){
    parrafo.innerText="El texto ha cambiado";}
);
*/

// otra manera de hacerlo
//boton.onclick = function(){ cambiar_parrafo();}