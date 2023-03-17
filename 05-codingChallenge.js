function solve() {
    const calcAvg = (a, b, c) => (a + b + c) / calcAvg.length;
    const DolphinsScore = calcAvg(85, 54, 41);
    const KoalasScore = calcAvg(23, 34, 27);
    const checkWinner = (DolphinsScore, KoalasScore) => {
        if (DolphinsScore * 2 >= KoalasScore) {
            console.log(`Dolphins win ${DolphinsScore} vs ${KoalasScore}`);
        } else if (KoalasScore * 2 >= DolphinsScore) {
            console.log(`Koalas win ${KoalasScore} vs ${DolphinsScore}`);
        } else {
            console.log('Nobody wins.');
        }
    }
    checkWinner(DolphinsScore, KoalasScore);
}
solve();


// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Ignore draws.
