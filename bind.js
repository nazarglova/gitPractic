'use strict'

var a = {
    namer: 'mihal',
    lastName: 'petrov'
}
function print() {
    console.log(this.namer + ' ' + this.lastName);
}

function nApply(self, arr) {
    let nawSelf =  Object.assign({}, self);
    nawSelf[this.name] = this;
    return nawSelf[this.name](...arr);
} 
print.nApply(a, 5);
print.call(a)