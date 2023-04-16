const calcAverageHumanAge = function (ages) {
  let humanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  //Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old
  humanAge = humanAge.filter((humanAge) => humanAge >= 18);
  // Calculate the average human age of all adult dogs
  let avg = humanAge.reduce((prev, current) => prev + current, 0);
  avg = avg / humanAge.length;
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
/*Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy ")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]*/
