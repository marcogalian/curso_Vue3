// usamos export para poder inicializar o crear otras personas en otros ficheros
export const person = {
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 52334,
        lat: 24.45523,
        lng: 55.22213
    }
} // as const;


// const person2 = person;

// para clonar sin cambiar el valor del objeto copiado hay que hacerlo con spread operator, esto pasa todos los datos y person2 solo cambia lo que quiere cambiar en concreto.
//const person2 = {...person};

// Otra forma de clonar
//const person2 = {...person, address: {...person.address}};

// la mejor opcion para clonar un objeto
const person2 = structuredClone(person);

person2.lastName = 'Parker';
person2.address.city = 'LA';


// Mostrara Parker porque todos los objetos en js se pasan por referencia y los primitivos pasan por valor
console.log({person});
console.log({person2});


