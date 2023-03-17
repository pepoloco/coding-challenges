const calcAverageHumanAge = function (ages) {
    let humanAge = ages.map(age => (age <= 2 ? 2 *
        age : 16 + age * 4));
    //Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old
    humanAge = humanAge.filter(humanAge => humanAge >= 18);
    // Calculate the average human age of all adult dogs
    let avg = humanAge.reduce((prev, current) => prev + current, 0);
    avg = avg / humanAge.length;
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
