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

  // 1. Tạo mảng cầu thủ cho mỗi đội
const players1 = game.players[0]; // Bayern Munich
const players2 = game.players[1]; // Borussia Dortmund

// 2. Tạo biến cho thủ môn và cầu thủ tuyến trên
const gk = players1[0]; // Thủ môn
const fieldPlayers = players1.slice(1); // Cầu thủ tuyến trên

// 3. Tạo mảng chứa tất cả cầu thủ của cả hai đội
const allPlayers = [...players1, ...players2];

// 4. Tạo mảng với các cầu thủ thay thế
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Tạo biến cho các tỷ lệ cược
const { team1, draw, team2 } = game.odds;

// 6. Hàm in số bàn thắng
function printGoals(...playerNames) {
    playerNames.forEach(player => console.log(player));
    console.log(`Tổng số bàn thắng: ${playerNames.length}`);
}

// Ví dụ sử dụng hàm printGoals
printGoals('Thomas Müller', 'Sadio Mané', 'Jamal Musiala');

// 7. Xác định đội bóng có khả năng thắng cao hơn
const moreLikelyToWin = Object.entries(game.odds).reduce((a, b) => a[1] < b[1] ? a : b)[0];
console.log(`Đội bóng có khả năng thắng cao hơn là: ${moreLikelyToWin === 'team1' ? game.team1 : game.team2}`);
