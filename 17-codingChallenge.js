'use strict'
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
]
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
const calcRec = dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
console.log(`Sarah's dog is eating ${sarahDog.curFood > sarahDog.recFood ? 'much' : 'little'} `);
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood)
    .flatMap(dog => dog.owners);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);