"use strict";
var _a;
console.log('index');
let age = 20;
if (age < 50)
    age += 10;
let numb = 100;
let numbLong = 100200;
let str = 'leo';
let isOpen = true;
let obj = { age: 10, name: 'leo' };
function myfn(document) {
    console.log(document);
}
let emptyArr = [];
let numbers = [1, 2, 3,];
let user = [1, 'leo'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
let mySize = Size.large;
console.log('mySize:' + mySize);
function calculateTax2(income) {
    if (income < 5000) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log('calculateTax2:' + calculateTax2(5));
function calculateTax3(income, taxYear) {
    if (taxYear < 5000) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log('calculateTax3:' + calculateTax3(5, 1));
function calculateTax4(income, taxYear = 2) {
    if (taxYear < 5) {
        return income * 1.2;
    }
    return income * 3;
}
console.log('calculateTax4v1:' + calculateTax4(5, 22));
console.log('calculateTax4v2:' + calculateTax4(5));
let employee = {
    id: 1,
    name: "leo",
    retire: (date) => {
        console.log(date);
    }
};
employee.name = 'Mosh';
console.log('employee:' + employee.name);
employee.retire(new Date);
let advEmployee = {
    id: 1,
    name: "leoadv",
    retire: (date) => {
        console.log(date);
    }
};
console.log('advEmployee:' + advEmployee.name);
advEmployee.retire(new Date);
function kgToLbs(weight) {
    console.log(weight);
    return 0;
}
console.log('kgToLbs v1 ' + kgToLbs(10));
console.log('kgToLbs v2 ' + kgToLbs('10kg'));
function kgToLbsWithNarrowing(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log('kgToLbsWithNarrowing v1 ' + kgToLbsWithNarrowing(4));
console.log('kgToLbsWithNarrowing v2 ' + kgToLbsWithNarrowing('5kg'));
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity;
let quantityLiteralv1 = 100;
console.log('quantityLiteralv1: ' + quantityLiteralv1);
let quantityLiteralv2 = 100;
console.log('quantityLiteralv2: ' + quantityLiteralv2);
function greet(name) {
    if (name) {
        console.log('greet (with value): ' + name.toUpperCase());
    }
    else {
        console.log('greet (null): ' + 'Hola');
    }
}
greet(null);
greet(undefined);
greet('leolowercase');
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer0 = getCustomer(0);
if (customer0 !== null && customer0 !== undefined) {
    console.log('getCustomer v1: ' + customer0.birthday);
}
customer0 !== null && customer0 !== undefined ? console.log('getCustomer v2: ' + customer0.birthday) : console.log('getCustomer v2:  Nothing');
console.log('getCustomer v3: ' + ((_a = customer0 === null || customer0 === void 0 ? void 0 : customer0.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear()));
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map