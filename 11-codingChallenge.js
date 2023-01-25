'use strict'
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, ' Substitution'],
    [47, '⚽ GOAL'],
    [61, ' Substitution'],
    [64, ' Yellow card'],
    [69, ' Red card'],
    [70, ' Substitution'],
    [72, ' Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, ' Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time / gameEvents.size}`);
for (const [minute, action] of gameEvents) {
    if (minute <= 45) {
        console.log(`[FIRST HALF]${minute}: ${action}`);
    } else if (minute > 45) {
        console.log(`[SECOND HALF]${minute}: ${action}`);
    }
}
// const half = min <= 45 ? 'FIRST' : 'SECOND';
// console.log('${half} HALF] ${min}: ${event});


