class Contact {
  constructor(prenom) {
    if (prenom === undefined) {
      throw new Error('Il faut un prénom');
    }
    this.prenom = prenom;
  }
  hello() {
    return 'Bonjour je suis ' + this.prenom;
  }
}

try {
  var romain = new Contact();
  console.log(romain.hello());
}
catch (e) {
  // Gère l'erreur (log, propose de ressaisir)
}

class Formateur extends Contact {
  constructor(prenom, specialite) {
    super(prenom);
    this.specialite = specialite;
  }
  hello() {
    return `${super.hello()}, ma spécialité est ${this.specialite}`;
  }
}

var romain = new Formateur('Romain', 'JS');
console.log(romain.hello()); // Bonjour je suis Romain, ma spécialité est JS
console.log(typeof Formateur); // function
