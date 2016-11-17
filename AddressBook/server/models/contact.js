var contacts = [{
  prenom: 'Bill',
  nom: 'Gates',
  id: 123
},{
  prenom: 'Steve',
  nom: 'Jobs',
  id: 456
}];

class Contact {
  constructor(options = {}) {
    this.options = options;
  }
  static find(callback) {
    callback(false, contacts);
  }
  save(callback) {
    this.options.id = contacts[contacts.length - 1].id + 1;
    contacts.push(this.options);
    callback(false, this.options);
  }
}


module.exports = Contact;