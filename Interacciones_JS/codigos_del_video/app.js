var contador=0;
var arreglo_de_imagenes = 
[
    'img/brain.jpg',
    'img/phi.jpg',
    'img/rubik.png',
    'img/python.jpg'
];
function cambiar_wallpaper(){
    contador+=1;
    if(contador==4) contador=0;
    document.body.style.background="url("+arreglo_de_imagenes[contador]+") center center fixed";
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundSize="cover";
}
setInterval(cambiar_wallpaper, 3000);