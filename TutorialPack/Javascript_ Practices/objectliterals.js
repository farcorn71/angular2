'use strict';

var price = 5.9, quantity = 2;

var productView = {
    price,
    quantity
};

console.log(productView);

const varName = 'dynamicField';

const price2 = 600;

let prodView = {

    [varName] : price2
}

console.log(prodView);

//Object Literals
let prodView2 = {

    [varName +'001'] : price2
}

console.log(prodView2);


//Function Literals
let prepVar = 'letsdoIT';
let functionLiterals = {
    pp:12,
    [prepVar +'001']() {
        console.log('Owo na fi n do something ooo');
    }
}

functionLiterals['letsdoIT001']();