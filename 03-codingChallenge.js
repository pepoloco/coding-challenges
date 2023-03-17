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