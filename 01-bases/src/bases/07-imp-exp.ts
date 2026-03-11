import heroes, { type Owner } from "../data/heroes";

export const getHeroById = ( id: number ) => {
    let hero = heroes.find( hero => hero.id === id);
     return hero;
}

// console.log(getHeroById(1));

export const getHeroesByOwner = ( owners:Owner) => {
    let heroOwner = heroes.filter(heroOw => heroOw.owner === owners);
    return heroOwner;
}

console.log(getHeroesByOwner('Marvel'));