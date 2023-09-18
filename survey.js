const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? `, (answer) => {
  const named = answer;
  
  rl.question(`What's an activity you like doing? `, (answer) => {
    const activity = answer; 

    rl.question(`What do you listen to while doing that? `, (answer) => {
      const music = answer;

      rl.question(`Which meal is your favourite? `, (answer) => {
        const mealtime = answer;

        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
          const food = answer;

          rl.question(`Which sport is your absolute favourite? `, (answer) => {
            const sport = answer;

            rl.question(`What is your superpower? `, (answer) => {
              const superpower = answer;
              console.log(`${named} loves listening to ${music} while ${activity}, devouring ${food} for ${mealtime}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);

              rl.close();
            })
          })
        })
      })
    })
  })
});