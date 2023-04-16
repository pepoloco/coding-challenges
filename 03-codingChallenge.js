function codingChallenge(dolphins, koalas) {
    let averageDolph = dolphins.reduce((currentValue, value) => {
        return value += currentValue;
    }, 0);
    let averageKoalas = koalas.reduce((currentValue, value) => {
        return value += currentValue;
    }, 0);
    let countDolph = 0;
    const indexDolph = dolphins.forEach(element => {
        countDolph++;
    });
    let countKoala = 0;
    const indexKoala = dolphins.forEach(element => {
        countKoala++;
    });
    averageDolph /= countDolph;
    averageKoalas /= countKoala;
    if (averageDolph > averageKoalas && averageDolph >= 100) {
        console.log(`Dolphins win the trophy with ${averageDolph.toFixed(2)} points over Koalas ${averageKoalas.toFixed(2)} points.`);
    } else if (averageDolph < averageKoalas && averageKoalas >= 100) {
        console.log(`Koalas win the trophy with ${averageKoalas.toFixed(2)} points over Dolphins ${averageDolph.toFixed(2)} points.`);
    } else if (averageDolph = averageKoalas && (averageDolph < 100 && averageKoalas < 100)) {
        console.log("It's a draw.");
    }
}
codingChallenge([97, 112, 101], [109, 95, 123]);
/*There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks 
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy/*