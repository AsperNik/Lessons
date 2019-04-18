'use strict'

let num = 33721,
    mult = 1;

while (num) {
    mult = mult * (num%10);
    num = parseInt(num / 10);
}

console.log(mult);

mult = mult ** 3;
let f2 = String(mult).split('');
alert(f2[0] + f2[1]);

