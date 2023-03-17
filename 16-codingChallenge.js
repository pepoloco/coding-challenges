const calcAverageHumanAge = (ages) => {
    const humanAges = ages.map(age => (
        age <= 2 ? 2 * age : 16 + age * 4
    ));
    const filtred = humanAges.filter(humanAges => humanAges >= 18);
    let calcAverage = filtred.reduce((prev, cur) => prev + cur, 0);
    calcAverage = calcAverage / filtred.length;
    console.log(calcAverage);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);