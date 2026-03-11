const character = [
    'Goku', 
    'Vegeta', 
    'Trunks',
    'Goten',
];

// En la desestructuracion de un arreglo las variables son posicionales

// desustructuracion de todos los valores
// si hubiera otro para que no salga undefined por consola hariamos lo siguiente, poner un valor por defecto
const [ g, v, t, go, g2 = 'Yamoshi' ] = character;

// desustructuracion solo del tercer valor
// const [,,t] = character;


// console.log({t});
console.log({g, v, t, go, g2});


// array de string y number - tupla en otros lenguajes de programacion

const returnArray = () => {
    return [123, 'ABC'] as const; // si no ponemos as const a la hora de tratar las propiedades del array no va a detectar cual es number y cual string
}


// desestructuramos primero
const [numbers, letters] = returnArray();


console.log(numbers, letters.toLowerCase());