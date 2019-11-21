"use strict";

var my_func = function my_func(x) {
  return console.log(x);
};

function msg(p1, p2, p3) {
  console.log(p1, p2, p3);
}

msg.apply(void 0, ['Salam', 'Alikom', Math.random()]);
var x = "Salam Alikom ".concat(Math.random());
Promise.resolve()["finally"](); //let x = window?.x;