const game = { 
    team1: 'Bayern Munich', 
    team2: 'Borrussia Dortmund', 
    players: [ 
    [ 
        'Neuer', 
        'Pavard', 
        'Martinez', 
        'Alaba', 
        'Davies', 
        'Kimmich', 
        'Goretzka', 
        'Coman', 
        'Muller', 
        'Gnarby', 
        'Lewandowski', 
    ], 
    [ 
        'Burki', 
        'Schulz', 
        'Hummels', 
        'Akanji', 
        'Hakimi', 
        'Weigl', 
        'Witsel', 
        'Hazard', 
        'Brandt', 
        'Sancho', 
        'Gotze', 
    ], 
    ], 
    score: '4:0', 
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',  
    'Hummels'], 
    date: 'Nov 9th, 2037', 
    odds: { 
    team1: 1.33, 
    x: 3.25, 
    team2: 6.5, 
    }, 
}; 

// 1. Loop over the game.scored array and print each player name
game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
});

// 2. Calculate the average odd
const oddsArray = Object.values(game.odds);
const averageOdd = oddsArray.reduce((sum, odd) => sum + odd, 0) / oddsArray.length;
console.log(`Average Odd: ${averageOdd.toFixed(2)}`);

// 3. Print the odds in a formatted way
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.draw}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// 4. Create an object 'scorers' to count goals
const scorers = {};

game.scored.forEach(player => {
    scorers[player] = (scorers[player] || 0) + 1;
});

console.log('Scorers:', scorers);