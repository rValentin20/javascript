let datouno = 4; // Declaración de la variable "datouno" y asignación del valor 4
let datodos = 3; // Declaración de la variable "datodos" y asignación del valor 3
let sumadedatos = (datouno + datodos); // Operación de suma entre "datouno" y "datodos", y asignación del resultado a la variable "sumadedatos"
document.getElementById("resultado").innerHTML = "<strong>-el valor de sumadedatos:</strong> " + sumadedatos; // Actualiza el contenido del elemento con el id "resultado" con el valor de "sumadedatos"

let altura = 2; // Declaración de la variable "altura" y asignación del valor 2
let base = 5; // Declaración de la variable "base" y asignación del valor 5
let area = ((altura * base) / 2); // Cálculo del área de un triángulo y asignación del resultado a la variable "area"
document.getElementById("area").innerHTML = "<strong>-el área del triángulo es: </strong> " + area; // Actualiza el contenido del elemento con el id "area" con el valor de "area"

const nombre = 'Carmen '; // Declaración de la constante "nombre" con el valor 'Carmen '
const apellido = 'Ruíz'; // Declaración de la constante "apellido" con el valor 'Ruíz'
let nombreCompleto = (nombre + apellido); // Concatenación de las variables "nombre" y "apellido" y asignación del resultado a la variable "nombreCompleto"
document.getElementById("completo").innerHTML = "<strong>-el nombre es:</strong> " + nombreCompleto; // Actualiza el contenido del elemento con el id "completo" con el valor de "nombreCompleto"

const frutas = ["fresa🍓", "mango🥭", "banano🍌"]; // Declaración de la constante "frutas" con un array de frutas
frutas.push("kiwi🥝"); // Agrega el elemento "kiwi🥝" al final del array "frutas"
document.getElementById("compras").innerHTML = "<strong>-Mis compras son: </strong> " + frutas; // Actualiza el contenido del elemento con el id "compras" con el valor de "frutas"

const colores = ["🧡", "💙", "💜"]; // Declaración de la constante "colores" con un array de colores
/* document.write(colores[0]); */ // Comentario - esta línea está comentada y no se ejecutará
document.getElementById("colores").innerHTML = "<strong>-Mis colores son: </strong> " + colores; // Actualiza el contenido del elemento con el id "colores" con el valor de "colores"

function myFunction() {
    document.getElementById("opcion").innerHTML = colores[1]; // Actualiza el contenido del elemento con el id "opcion" con el valor de "colores[1]" (posición azul)
}

































