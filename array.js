// create an array from string
const drinks = Array.from("water, tea, juice, coffee") // ["water, tea, juice, coffee"]

// returns the first value of the function that satisfies the condition
const numbers = [100, 47, 87, 890, 12];
let first = numbers.find((item) => item > 47); // 100

// return position
const ages = [100, 47, 87, 890, 12];
let firstAge = ages.findIndex((item) => item > 100); // [3]

// Array entries
const fruits = ['🍎', '🍌', '🍊'];

for (const [index, value] of fruits.entries()) {
  console.log(index, value);
}

// array keys
const frutas = ['🍎', '🍌', '🍊'];

for (const index of frutas.keys()) {
  console.log(index); // return index
}

// object assign
const hero = {
    power: 'speed',
    serie: 'flash',
    color: 'red'
  };
  
const enemie = {
    name: 'joker',
    serie: 'batman',
};
  
const allinfos = Object.assign(hero, enemie); // { power: 'speed', serie: 'batman', color: 'red', name: 'joker' }