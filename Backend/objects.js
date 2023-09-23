const coder = {
    isCoding : false,
    printCoding : function() {
        console.log(`My name is ${this.name}. Am I studying ?: ${this.isCoding}`);
    }
};

const obj = Object.create(coder);
obj.name = 'Prem Singh';

obj.isCoding = true;    

obj.printCoding();