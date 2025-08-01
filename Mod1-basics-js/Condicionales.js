/**
 * 
 * 
 * Condicionales en Javascript 
 */

// logica de condiciones trabaja dependientemente si cumple digamos falso y verdadero pero esto es referente a un si y no 


// con un ejemplo de si un usuario en un pagina web tiene una cuenta y otro que  no el cual primero deberia de iniciar session 

// la variable es userAccesslog

if (userAccesslog) {
    // si esta logueado 
    goTodashboard();
}
else {
    goTologin();
}

// Declaraciones de condicionales 

// usand if y else 

// para ello tambien para este ejemplo utilizamos validadores estrictos para realizar una comparativa de igualdad estricta
// === igualdad estricta
if ( 2 === 2 ) { // true
    console.log("si es verdadero");
}

// aplicado a funciones 

function verifyngVal(num) {
    if (num === 5) {
        //return num === 5 ; // comillas invertidas  
        return `yes is true it's ${num}`; // este tipo de comillas es realmente interensante 
    } else {
        return `no is false it's not ${num}`;
    }
}

console.log(verifyngVal(5));

// de otro modo mucho mas interesante 

function isEqual(a, b) {
    //return a === b;
    if ( a === b ) 
    {
        return true;
    }else {
        return false;
    }
}

console.log(isEqual(5,5));

// logica aplicada a las funciones y tambien a las condicionales 


/**
 * 
 * operador que no es extrictamente igual 
 * diferente de ...
 */
// podemos diferenciar valores de la siguiente manera
// direncias 
console.log( 2 !== 1 ); // true
console.log( 2 !== 2 ); // false    
console.log( 2 !== '2' ); // true, porque es diferente tipo de dato 
// de otro modo 
// acabo de descubrir que en JS si no tienes una funcion base no se puede de imprimir el texto sin que sea impreso por un console.log
function Validateisnoteq(x) {
    if ( 8 !== x ) {
        return `its true`;
    } else {
        return `its false`;
    }
}
console.log(Validateisnoteq(9));


