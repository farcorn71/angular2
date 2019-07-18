'use strict'

//Array destructuring
let aarayDestructure = [100,200,300];

let [low, average, high] = aarayDestructure;

console.log(low);


let aarayDestructure2 = [100,200];

let [low2, average2, high2] = aarayDestructure2;

console.log(high2);



let aarayDestructure3 = [100,200, 500, [300,400]];

let [low3, , average3, [actualhigh,actuallow]] = aarayDestructure3;

console.log(actualhigh + " Average3: "+ average3);


let arrayDes = [120,130,280,388];

let [lowval,...highvalues] = arrayDes;

console.log(highvalues); console.log(lowval);


function reviewSalary([lowprice,highprice],seegment){

    console.log(highprice);
}

reviewSalary (['2000','50000'], 'ttata');



//Object destructuring

let myObj = {
    low_li : 90,
    medium_li : 92,
    hihg_li : 95
};

let {low_li, medium_li, hihg_li} = myObj;

console.log(low_li);

//destructure a string 
let [minVal,maxVal] = 'AZ';

console.log(`Min Val ${minVal} and max ${maxVal}`);

let [...valesDest] = 'AZEIOU';

console.log(` Val ${valesDest}`);