import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

console.log('inicio');


new Promise( (resolve, reject) => {

    // resolve('Mi amigo cumplió y me devolvio el dinero');
    setTimeout(() => {
        // resolve('Mi amigo cumplió');

        // si el amigo no cumple
        reject('Mi amigo no cumplió su promesa');
    }, 1000);

    // catch -> si el amigo se largó y no devolvió el dinero hay que resolverlo con un catch.
})
    .then( mensaje => console.log( mensaje ))  // then captura el resolve
    .catch( errorMessage => console.log( errorMessage)) // catch captura el reject
    .finally( () => console.log('Fin de la promesa')); // se ejecuta siempre pase lo que pase

console.log('Fin');


// Mas utilidad con las promesas

const getHeroByIdAsync = ( id: number ):Promise<Hero> => {

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            hero 
                ? resolve(hero) 
                : reject(`Héroe no encontrado con el id: ${ id }`);
        }, 1500);
    })
}


getHeroByIdAsync(3)
    .then(hero => console.log('El nombre es', hero.name))
    .catch(alert);