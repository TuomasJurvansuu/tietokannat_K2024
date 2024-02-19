const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function onkoPalindromi(sana) {
  sana = sana.replace(/\s/g, '');
  const kaannettySana = sana.split('').reverse().join('');
  
  if (sana === kaannettySana) {
    console.log(`${sana} on palindromi.`);
  } else {
    console.log(`${sana} ei ole palindromi.`);
  }
  
  rl.close();
}

rl.question('Syötä sana: ', (sana) => {
  onkoPalindromi(sana.toLowerCase()); // Muutetaan sana pieniksi kirjaimiksi
});
