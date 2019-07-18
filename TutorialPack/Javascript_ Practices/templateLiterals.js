'use strict'

let myStr = 'to see this happening Live';

console.log(`I am waiting ${myStr}`);

console.log(`I am waiting \${myStr}`); //By escaping the dollar sign, no interpolation takes place



console.log(`I am waiting ${ "______" + myStr}`);



function processInvoice(message){
    console.log (message)
}

processInvoice `invoces`


function processInvoice(segment, ...values){ //using Rest here 
    console.log (segment)

    console.log (values)
}

let segment = 'Adex';
let values = 20;
processInvoice `Invoices: ${segment} for ${values}`