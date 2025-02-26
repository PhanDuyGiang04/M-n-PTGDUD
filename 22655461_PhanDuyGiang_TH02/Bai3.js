const gameEvents = new Map([ 
    [17, '⚽ GOAL'], 
    [36, '🔁 Substitution'], 
    [47, '⚽ GOAL'], 
    [61, '🔁 Substitution'], 
    [64, '🔶 Yellow card'], 
    [69, '🔴 Red card'], 
    [70, '🔁 Substitution'], 
    [72, '🔁 Substitution'], 
    [76, '⚽ GOAL'], 
    [80, '⚽ GOAL'], 
    [92, '🔶 Yellow card'], 
  ]);

  // 1. Create an array 'events' of different game events (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log('Different game events:', events);

// 2. Remove the yellow card from minute 64
gameEvents.delete(64);
console.log('Game events after removing the yellow card:', gameEvents);

// 3. Compute and log the average time between events
const totalEvents = gameEvents.size;
const averageTime = 90 / totalEvents;
console.log(`An event happened, on average, every ${averageTime.toFixed(2)} minutes`);

// 4. Log each event with its half indication
gameEvents.forEach((event, minute) => {
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${minute}: ${event}`);
});