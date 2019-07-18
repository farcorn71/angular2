'use strict'

//Array desstructuring
let aarayDestructure = [100,200,300];

let [low, average, high] = aarayDestructure;

console.log(low);


let aarayDestructure2 = [100,200];

let [low2, average2, high2] = aarayDestructure2;

console.log(high2);



let aarayDestructure3 = [100,200, 500, [300,400]];

let [low3, , average3, [actualhigh,actuallow]] = aarayDestructure3;

console.log(actualhigh + " Average3: "+ average3);