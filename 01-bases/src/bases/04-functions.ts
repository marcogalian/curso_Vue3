// función con argumentos

/* function greetPerson( name:string) {
    return `Hola ${name}, que tal el día`;
}*/

// funcion de flecha
/*const greetPerson = (name:string) => {
    return `Hola ${name}, que tal el día`;
}*/

// Simplificacion de funcion de flecha cuando hay un solo argumento
const greetPerson = (name:string) => `Hola ${name}, que tal estas`;


// funcion que devuelve un solo objeto
const getUser = () => {
    return {
        uid: 'ABC-123',
        username: 'Tony001',
    }
}
// quitar el return cuando es un objeto lo que se devuelve

const getUserObj = (uid:string) => ({
    uid: uid,
    username: 'Parker002',
})

/* console.log(greetPerson('Marco Antonio'));
console.log( getUser() );
console.log( getUserObj('BSS-564') ); */

const heroes = [
    {
        id: 1, 
        name: 'Batman',
    },
    {
        id: 2, 
        name: 'Superman',
        power: 'Super fuerza',
    },
]

const hero = heroes.find( hero => hero.id === 2);

console.log(hero)
console.log(hero?.power?.toUpperCase());

