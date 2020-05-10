



//  En constantes guardé el control a las etiquetas que necesito editar eventualemnte
var puntuacion_usuario = 0;
var puntuacion_pc = 0; 
const resultado = document.getElementById("resultado");
const puntuacion_pc_tag = document.getElementById("puntuacion_del_computador");
const puntuacion_usuario_tag = document.getElementById("puntuacion_de_usuario");
const mensaje_final = document.getElementById("select");
var arreglo = ["Papel", "Piedra", "Tijera"];



// funciones que se encarga de colocar el mensaje del resultado de la partida correspondiente

// mensaje para cuando gana la PC
function gana_pc( pc, usuario_op){
    resultado.innerHTML="Has perdido, "+arreglo[pc]+" vence a "+arreglo[usuario_op];
    puntuacion_pc+=1;
    puntuacion_pc_tag.innerHTML = puntuacion_pc;
}

// mensajes para cuando gana el usuario
function gana_usuario(pc, usuario_op){
    resultado.innerHTML="Has ganado, "+arreglo[usuario_op]+" vence a "+arreglo[pc];
    puntuacion_usuario+=1;
    puntuacion_usuario_tag.innerHTML = puntuacion_usuario;
}


// función donde se crea la lógica del juego
function juego( usuario_op){

    // en "pc" se guarda la eleccion aleatoria del computador
    var pc=Math.floor(Math.random() * (3));

    

    //se accede a la etiqueta del objeto seleccionado por la PC y se edita cambia del borde circular a rojo
    document.getElementById(arreglo[pc]).style.border="4px solid red";
    mensaje_final.innerHTML="La PC escogió: "+arreglo[pc];


    // no se colocan llaves pues cada flujo de control contiene solo 1 instruccion
    // con esto se mantiene los demás bordes circulares en blanco, esto es para que en la proxima partida
    // no haya más de un borde rojo
    
    for(var i in arreglo)
    if(i != pc)
    document.getElementById(arreglo[i]).style.border="4px solid white";
        
    

    // dependiendo de los objetos seleccionados por el PC y el usuario
    //se determina quien gana 
    if(pc == usuario_op) resultado.innerHTML="Ha sido un empate";
    else if(pc == 2  && usuario_op != 1) gana_pc(pc, usuario_op);
    else if(pc == 1  && usuario_op != 0) gana_pc(pc, usuario_op);
    else if(pc == 0  && usuario_op != 2) gana_pc(pc, usuario_op);
    else gana_usuario(pc, usuario_op);

}