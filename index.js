//contiene la operacion o el resultado
let parcial = "";

//es el elemento donde se colocan las operaciones que se estan realizando
let operRealizada = document.getElementById("operacionRealizada");
//elemento donde se coloca el resultado
let txtResul = document.getElementById("txtResultado");

//ultimo operador que se selecciona
let  operadorSeleccionado ="";
//numero que se ingresa 
let numero ="";

//este determina si la tecla es un numero o una operacion
let ultimoDigitoPresionado ="";

function operador (num){
    //se concateno el numero
    numero = numero + num;
    //se concatena la operacion hasta el momento 
    parcial= parcial + num;
    //se muestra como
    operRealizada.innerHTML = parcial;

    //la division se controlara por el 0
    if(numero=='0' && operadorSeleccionado=='/'){
    limpiar ();
    txtResul.innerHTML = 'indefinido';
    return;
    }
    //se guarda el el tipo de tecla q se presiono por ultima vez
    if (ultimoDigitoPresionado =='operacion'){
        ultimoDigitoPresionado = 'numero';
        return;
    }

}

//momento en el que se detecta que se presiono una tecla
function operacion(oper){
    operadorSeleccionado = oper;
    //se actualiza el tipo de letra que se presiono
    ultimoDigitoPresionado="operacion";
    //aqui se arma la formula matematica
    parcial = parcial + oper;
    numero = 0;
    operRealizada.innerHTML = parcial;
}
//calculo de la formula matematica cuando se presiona el igual (=)
function calculo (){
    //con el evaluo se va a evaluar la formula matematica y esta esta en formato string
parcial=eval(parcial);
txtResul.innerHTML = parcial;
//aqui se decide volver a convertir en otro string para ppoder saber si se continua con la formula
parcial = parcial.toString();
numero = "";
operRealizada.innerHTML="RESULTADO";
}

//funcion que limpia
function limpiar(){
    operadorSeleccionado="";
    parcial="";
    numero="";
    txtResul.innerHTML="";
    operRealizada.innerHTML= 0;
}



