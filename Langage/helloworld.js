"use strict";

console.log('Hello');

var id = setInterval(function interval() {
  console.log('interval 1s');
}, 1000);

setTimeout(function timeout() {
  console.log('timeout 2s');
}, 2000);

setTimeout(function timeout() {
  clearInterval(id);
}, 5000);