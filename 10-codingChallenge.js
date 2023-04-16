"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] = game.players;
const [gkMunich, ...fieldPlayersMunich] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
const {
  odds: { team1, x: draw, team2 },
} = game; //destructuring an object
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);
team1 < team2 && console.log("Team 1 is more likely to win.");
team2 < team1 && console.log("Team 2 is more likely to win.");
const x = Object.entries(game.scored);
for (const [goal, player] of x) {
  console.log(`Goal ${Number(goal) + 1}: ${player}`);
}
let average = 0;
let count = 0;
const odds = Object.entries(game.odds);
for (const [el, x] of odds) {
  count++;
  average += x;
}
console.log((average / count).toFixed(2));

for (const [team, odd] of odds) {
  const ifDraw = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${ifDraw}: ${odd}`);
}
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
/*Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}*/
