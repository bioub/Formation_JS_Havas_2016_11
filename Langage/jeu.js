
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomIntInclusive(options) {
  options = Object.assign({}, {min: 0, max: 100}, options);
  return Math.floor(Math.random() * (options.max - options.min +1)) + options.min;
}

class Jeu {
  constructor(options) {
    options = Object.assign({}, {min: 0, max: 100}, options);
    this.entierAlea = getRandomIntInclusive(options);
    this.entiersSaisis = [];
  }
  jouer() {
    if (this.entiersSaisis.length) {
      console.log('Vous avez déjà joué : ', this.entiersSaisis.join(', '));
    }

    rl.question('Saisir un entier entre 0 et 100 : ', (answer) => {

      let entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
        console.log('Il faut saisi un nombre');
        return this.jouer();
      }

      this.entiersSaisis.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }

      if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }

      console.log('Trouvé');
      rl.close();
    });
  }
}

module.exports = Jeu;