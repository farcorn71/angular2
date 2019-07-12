'use strict';
let inputparameter = {

    number:123,
    process: function () {
        console.log (this.number + 2);
    }

};

inputparameter.process();



let inputparameter1 = {

    number:123,
    process: () => 
        console.log (this.number + 2);
    
};



let inputparameter1 = {

    number:123,
    process: ()=> {
        console.log (this.number + 2);
    }

};

inputparameter.process();