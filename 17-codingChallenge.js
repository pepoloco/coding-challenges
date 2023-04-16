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
/*Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
the recommended food portion and add it to the object as a new property. Do 
not create a new array, simply loop over the array. Forumla: 
recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too 
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose) 
3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and 
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food 
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food 
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects )
*/