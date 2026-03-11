// No usar nunca var para las variables, no se puede controlar el scope y dar dolores de cabeza en una app grande

const firstName = 'Tony';
const lastNane = 'Stark';

// export transforma este archivo en un modulo
export const fullName = `${firstName} ${lastNane}`;


console.log({firstName, lastNane});
console.log({fullName});
