'use strict';

const Jeu = require('./jeu');

const jeu = new Jeu({
  min: 0,
  max: 100
});

jeu.jouer();
