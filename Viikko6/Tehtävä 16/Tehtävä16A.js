const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Syötä ensimmäinen luku: ', (luku1) => {
  rl.question('Syötä toinen luku: ', (luku2) => {
    if (luku1 > luku2) {
      console.log(`Suurempi luku on: ${luku1}`);
    } else if (luku2 > luku1) {
      console.log(`Suurempi luku on: ${luku2}`);
    } else {
      console.log('Luvut ovat yhtä suuret.');
    }
    rl.close();
  });
});
