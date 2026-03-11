interface Hero {
    name: string,
    age: number,
    codeName: string,
    power?: string,
}

export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    
};

const { name, age, codeName } = person; // puede ser un Obj o un Array


console.log({
    name,
    age,
    codeName,
})





// creamos una interface.
interface CreateHeroArgs {
    name: string,
    age: number,
    codeName: string,
    power?: string,
}

// destructuracion por argumentos, algunos prefieren asi pero si fallas en alguna letro no se va a tener la posibilidad de que te avise vs code

// const createHero = ({name, age, codeName, power}: any) => ({
//     id: 123123,
//     name: name,
//     age: age,
//     codeName: codeName,
//     power: power ?? 'No tiene ningun poder',
// })


// con interface

const createHero = ( {name, age, codeName, power}: CreateHeroArgs ) => ({
    id: 123456,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene ningún poder',
});

// tenemos que crear un objeto para que rellene los campos

console.log(createHero(person));
