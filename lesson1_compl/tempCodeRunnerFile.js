'use strict'

let num = 33721,
    mult = 1;

while(num != 0){
    mult *= num%10;
    num /= 10;
}

console.log(mult);

