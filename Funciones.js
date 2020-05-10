function saludo(){
    console.log("Hola :D");
}


function hipotenusa(a,b){
    function cuadrado(x){
        return x*x;
    }
    return Math.sqrt(cuadrado(a)+cuadrado(b));
}

var cateto1 = 4, cateto=2;
// console.log(hipotenusa(cateto1, cateto2));

var x = function(a,b){ return a>b; }
x(5,2); // true

var y = (a,b) => {
    console.log("Hola");
    return (a+b)*2;
}

var objeto = {
    propiedad_1 : 28,
    duplicar_numero: (a) => { return a*2; },
    dividir_entre_2: function(x){ return x/2; },
    propiedad_2 : "abc"
}

objeto.dividir_entre_2(4); //2
objeto.duplicar_numero(8) //16


if(true){
    var x = 2;
}
console.log(x);


if(true){
    let b = 2;
} //Fuera del alcance
console.log(b);

if(true){
    // let x=3;
    var x=3;
    if(true){
        if(true){
            var cont = 0;
            while(cont < 1){
                console.log(x);
                cont++;
            }
        }
    }
}

// variable global

var a = 5;

function x(){
    console.log(a);
}

x();