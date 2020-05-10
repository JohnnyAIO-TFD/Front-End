$(document).ready(function(){


    // seleccionar elementos html
    //   por id $( "#id_del_elemento"       )
    //   por clase $("   .clase_del_elemento")
    //   por tag $("etiqueta")

    // click(), mouseenter(), mouseleave(), dblclick()

    $("#boton1").click( function(){
        $("#título1").text("El título ha cambiado")
    })

    $("#boton2").click(function(){
        $("#párrafo1").html("El agua es H<sub>2</sub>O")
    })
    
    //El agua es H<sub>2</sub>O




    var arreglo_imagenes=[ "img/phi.jpg", "img/python.jpg", "img/rubik.png", "img/brain.jpg" ];

    var indice=0;


    $("#img1").click( ()=>{ 

        
        indice == 4 ? indice=0 : indice+=1;

        $("#img1").attr("src", arreglo_imagenes[indice]);

        $("#img1").css("border-radius", "15%")
    })





    var clk = "click"

    $("#boton3").on( clk, ()=>{
        
        indice == 4 ? indice=0 : indice+=1;
        $("#img1").attr("src", arreglo_imagenes[indice]);

    })








    $("#boton4").click(()=>{
        const numero_ingresado=Number($("#cuadro1").val());
    
        (  numero_ingresado > 0 &&  numero_ingresado < 11)?
            $("#respuesta").text("Correcto")
        :
            $("#respuesta").text("Inorrecto, intentalo otra vez")
    })
    



    document.getElementById("id")
    
    $("#id");





    var $cddo2 = $("#cuadrado2");
    var $cont = $("#contador");


    var numero = 0;
    $cddo1.on("click", ()=>{
        numero+=1; 
        $cont.text(String(numero));
    })

    $cddo2.on("mouseenter", ()=>{
        numero-=1; 
        $cont.text(String(numero));
    })

    var x = 1;
    $cddo1.dblclick(()=>{
        x+=1 
        x%2==0 ? 
        $cddo2.hide() : $cddo2.show();
    })


    $('#contenedor .imagen').on('mouseenter mouseleave', function(){
        $(this).toggleClass("agrandar")
      })



})

