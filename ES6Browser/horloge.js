'use strict';

export class Horloge {
  constructor(container) {
    this.container = container;
  }
  update() {
    let now = new Date();
    this.container.innerHTML = `${now.getHours()}h${now.getMinutes()}m${now.getSeconds()}s`;
  }
  start() {
    this.update();
    setInterval(this.update.bind(this), 1000);
  }
}

