function cambiar_titulo1(){
    document.getElementById("título1").innerHTML="El título ha cambiado";
}

function cambiar_parrafo(){
    document.getElementById("párrafo1").innerText="El párrafo ha cambiado";
}

//"El agua es H<sub>2</sub>O"

var arreglo_imagenes=[
    "img/phi.jpg",
    "img/python.jpg",
    "img/rubik.png",
    "img/brain.jpg"
];

var indice = 0;

function cambiar_imagen(){

    indice+=1; 
    if(indice == 4) indice = 0;
    document.getElementsByTagName("img")[0].src=arreglo_imagenes[indice];
}









function validar_respuesta(){
    const numero = Number(document.getElementById("cuadro1").value);
    const respuesta = document.getElementById("respuesta");

    if( numero<11 && numero>0) respuesta.innerText="Correcto"; 
    else respuesta.innerText="Incorrecto, intente otra vez";
}






var colores=[
    "img/Amarillo.png",
    "img/Rojo.png"
];
var indice2=0;
function cambiar_color( objeto){
    indice2+=1;
    if(indice2==2) indice2 = 0;
    objeto.src= colores[indice2];
}














var colores2=[ "blue", "green", "red", "gold", "black" ];
var indice3 = 0;

const boton = document.getElementsByTagName("img")[2]

boton.style.borderRadius="20px";
boton.style.cursor = "pointer";

function cambiar_color_parrafo(){

    indice3+=1;
    if(indice3==5) indice3 = 0;
    
    document.getElementById("párrafo2").style.color = colores2[indice3];
}




const parrf3 = document.getElementById("párrafo3");

function test(x){
    if(x==1) parrf3.innerText="Correcto, es de hecho uno de los mejores materiales conductores";
    else parrf3.innerText="Incorrecto, es de hecho uno de los mejores materiales conductores";
}










