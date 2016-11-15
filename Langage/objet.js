// "use strict";

var Voiture = function(marque) {

  // mettre une méthode dans l'objet est une mauvaise pratique
  this.getMarque = function() {
    return marque;
  };
};

var clio = new Voiture('Renault');
console.log(typeof clio); // object
console.log(typeof Voiture); // object
console.log(clio.getMarque()); // Renault

var deuxCentHuit = new Voiture('Peugeot');

// mettre une méthode dans l'objet est une mauvaise pratique (car autant
// de méthode getMarque que d'objet Voiture)
console.log(deuxCentHuit.getMarque === clio.getMarque); // false

var Contact = function(prenom) {
  if (prenom === undefined) {
    throw new Error('Il faut un prénom');
  }
  this.prenom = prenom;
};

Contact.prototype.hello = function() {
  return 'Bonjour je suis ' + this.prenom;
};

try {
  var inconnu = new Contact();
}
catch (e) {
  console.log(e.message);
}

var romain = new Contact('Romain');
console.log(romain.hello());

var Formateur = function(prenom, specialite) {
  Contact.apply(this, arguments);
  this.specialite = specialite;
};

Formateur.prototype = Object.create(Contact.prototype);

Formateur.prototype.hello = function() {
  return Contact.prototype.hello.call(this) + ', ma spécialité est ' + this.specialite;
};

var romain = new Formateur('Romain', 'JS');
console.log(romain.hello()); // Bonjour je suis Romain, ma spécialité est JS