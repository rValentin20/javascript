
const flor = {tipo:"girasol", color:"amarillo🟡"};
document.getElementById("florAnswer").innerHTML = 'La flor es de color ' + flor.color;

const datos = {
    nombre: 'pedro',
    apellido: 'torres',
    edad: 19,
    añoActual: 2023
}

document.getElementById('answer').innerHTML = ('Nació en el año ' +(datos.añoActual -= datos.edad));

const food = {
    frutas : {
        opcion1: 'pera',
        opcion2: 'manzana',
        opcion3: 'piña',
    },
    pan : 'rollito',
    carnes : {
        opcion4: 'pollo',
        opcion5: 'pescado'
    }
}

document.getElementById('compras').innerHTML = ('voy a comprar de fruta: ' + food.frutas.opcion2 + ' con ' + food.pan + ' y ' + food.carnes.opcion4);