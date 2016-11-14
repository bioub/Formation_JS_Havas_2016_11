'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

const entierAlea = getRandomIntInclusive(0, 100);
const entiersSaisis = [];

var jouer = function() {

  if (entiersSaisis.length) {
    console.log('Vous avez déjà joué : ', entiersSaisis.join(', '));
  }

  rl.question('Saisir un entier entre 0 et 100 : ', function(answer) {

    let entierSaisi = Number.parseInt(answer);

    if (Number.isNaN(entierSaisi)) {
      console.log('Il faut saisi un nombre');
      return jouer();
    }

    entiersSaisis.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Trouvé');
    rl.close();

  });
};

jouer();