/*
 * Funciones JS
 * funciones en las que se pueden de conectar distintos tipo de datos y diferentes tipos de resultados 
 *  1 -> funcion -> 2 
 * 4 -> funcion -> 5
*/

function incrementar(x) {
   // la logica en el que se suma un numero a otro 
    return x + 1;
}

// console.log(incrementar(4));
// funciones con capacidad de retorno en el que se puede de devolver un valor 

function getNumber() {
    return 4; // retorna un numero 
}

// ###### de otro modo 

function getNumber() {
    return 4; // retorna un numero 
}
// se llama a la funcion 
const nm = getNumber();
// se almacena en getNUmber ;

// utilizando argumentos de entrada 
// en una funcion se utilizan los argumentos de entrada el cual se pueden de cargar en la entrada y procesar en la funcion 


// para la funcion se pide incrementar el valor de entrada en + 2 

/*
* se tiene el la funcion addTwo entrada y un output el cual se ingresa 2 de entrada y la salida es de 4 
 */
function addTwo(input) {
    const output = input + 2
    return output;
}

console.log(addTwo(2));

// Logica aplicada a la aritmetica 
// operadores basicos ( + - * / // %  )
const val1 = 2; 
const val2 = val1 * 3;

// con la funcion  suma 

function aritmeticafunc_sum(val_a , val_b, val_c ) {
    return val_a + val_b + val_c
}

console.log(aritmeticafunc_sum(5 , 3,  4 ));

// funciones aritmeticas 

function aritmeticafunc_rest(val_a , val_b, val_c ) {
    return (val_a - val_b - val_c);
}

console.log(aritmeticafunc_rest(5 , 3,  4 ));

function aritmeticafunc_div(val_a , val_b ) {
    return val_a / val_b;
}

// funcion de resto o en decimales 
function aritmeticafunc_mod(val_a , val_b ) {
    return val_a % val_b;
}

console.log(aritmeticafunc_div(5 , 8 ));
// resto de la division
console.log(aritmeticafunc_mod(7,3));

// multiplicacion
function aritmeticafunc_producto( val_b, val_c ) {
    return val_b * val_c
}

console.log(aritmeticafunc_producto(5 ,  4 ));

