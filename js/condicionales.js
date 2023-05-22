let nombre = 'juan';
let edad = '19';

function myFunction() {
    document.getElementById("permiso").innerHTML = (edad>=18);/* llamara al id permiso y agregara algo, en este caso la operacion con un operador de comparacion para que me de un dato booleano */
}

function comprobar() {
    // Obtener el valor ingresado en el campo de entrada
    let numero = document.getElementById("numeroInput").value;
     /* obtener el dato que escribio el usuario */
  
    // Comprobar si el número es positivo, negativo o cero
    if (numero > 0) {/* si es mayor de cero es positivo */
      document.getElementById("resultado").innerHTML = "El número es positivo";
    } else if (numero < 0) {
      document.getElementById("resultado").innerHTML = "El número es negativo"; /* pero si el numero es debajo del cero es negativo */
    } else {
      document.getElementById("resultado").innerHTML = "El número es cero";
      /* y el restante es cero porque lo unico que no abarcamos es el porpio de cero */
    }
  }

function saber(){
    
    let numeroDos = document.getElementById('ingresanumero').value; /* le llame con let para utilizar en la misma funcion */

    if ((numeroDos %= 2) == 0){
        document.getElementById('answer').innerHTML = 'es Par🙂'
    } else {
        document.getElementById('answer').innerHTML = 'es impar😐'
    }
}
function mostrarMensaje(){
    let opcion1 = document.getElementById('opcion1');
    let opcion2 = document.getElementById('opcion2');
    let mensaje = document.getElementById('mensaje');


    if (opcion1.checked) {
      document.getElementById("mensaje").innerHTML = "Correcto✔️";
    } else if (opcion2.checked) {
      document.getElementById("mensaje").innerHTML = "Incorrecto❌";
    } 
    /* los llame y con checkedverifica un elemento de entrada en este caso oprimir el checkbox y para eso sale un aopcion */

} 

function comprobar() {
    let op1 = document.getElementById('op1');
    let op2 = document.getElementById('op2');
    let op3 = document.getElementById('op3');
    let comprobantePlay = document.getElementById('comprobantePlay');
  
    // Verificar si se seleccionaron las tres opciones
    if (op1.checked && op2.checked && op3.checked) 
    {
      comprobantePlay.innerHTML = "Puedes jugar";
    }
    else ((op1.checked && op2.checked) || (op1.checked && op3.checked))
    {
        comprobantePlay.innerHTML = "Puedes jugar";
    }
     
    
  }
  

