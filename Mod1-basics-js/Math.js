/*
    Aplicando math a javascript 
*/

// logica matematica 


//  javascript tiene una libreria de funciones matematicas que se pueden usar para hacer operaciones mas complejas
// lo curioso es que arroja valor decimal lo cual no es algo que se espere si no  un entero

const valRandom = Math.random();
console.log(valRandom);

// agregando una dimension al random en este caso  de 2 a 5
const val2Random = Math.random(0 ,1 );
console.log(val2Random);


///  
// esta funcion utiliza la libreria de Math para redondear un valor entero el cual si no es mayor a 9 no sera redondeado  

function getFloor(x) {
    return Math.floor(x);
}

console.log(getFloor(3.9258641));



