'use strict'
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
]
const calcRec = dogs.forEach(dog => (dog.reccomendedFood = Math.floor(dog.weight ** 0.75 * 28)));
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.reccomendedFood).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.reccomendedFood).flatMap(dog => dog.owners);
console.log(`${ownersEatTooLittle.join(' ')} dogs eat too little!`);
console.log(`${ownersEatTooMuch.join(' ')} dogs eat too much!`);
console.log(dogs.some(dog => dog.curFood === dog.reccomendedFood));
const checkOkay = dog => dog.curFood > dog.reccomendedFood * 0.9 && dog.curFood < dog.reccomendedFood * 1.1;
console.log(dogs.some(checkOkay));
const rightAmount = dogs.filter(checkOkay);
console.log(rightAmount);
const shallowCopy = dogs.slice().sort((a, b) => b.reccomendedFood - a.reccomendedFood);
console.log(shallowCopy);
/*7. Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects �)*/