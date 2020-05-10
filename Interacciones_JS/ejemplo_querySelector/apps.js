

// ACCEDER A UN ELEMENTO MEDIANTE SU ID CON querySelector

const imagen = document.querySelector("#imagen")

document.querySelector("img")

// El recuadro azul cambia a rojo cuando el cursor esta sobre el
imagen.addEventListener("mouseover", function(){
    imagen.src='folder/rojo.png'
})

// El recuadro regresa a su color original cuando el cursor esta fuera de el
imagen.addEventListener("mouseout", function(){
    imagen.src="folder/azul.png"
})



//SE ACCEDE AL ELEMENTO CENTER MEDIANTE SU CLASE con querySelector y se le cambia su fondo a rojo
const centro = document.querySelector(".centro")
centro.style.backgroundColor = "red"


// Lo siguiente es un algoritmo para hacer que cada vez que se le click al boton
// cambie de color del fondo del elemento center 
// si esta en rojo cambia  amarillo y viceversa


function cambiar_color_centro(){
    if( centro.style.backgroundColor=="yellow") centro.style.backgroundColor="red";
    else centro.style.backgroundColor="yellow"
}

// Se accee al boton mediante el nombre de su etiqueta, si hubiera mas, se accederia al primero
const boton = document.querySelector("input")
boton.onclick=function(){ cambiar_color_centro();}
