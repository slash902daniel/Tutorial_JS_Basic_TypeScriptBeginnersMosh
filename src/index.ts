console.log('index');



//INSTRUCTIONS=============================
//install node: Download from webpage or npm
//Install typescript npm i -g typescript
//Install IDE
//COMPILE / RUN=============================
//To compile -->    tsc
//To run a file --> node ./dist/index.js
//==========================================

//BASIC --------------------------
let age: number = 20;
if (age < 50)
    age += 10;

//JS TYPES------------------------
// number
// string
// boolean
// null
// undefined
// object

let numb = 100;
let numbLong = 100_200;
let str = 'leo';
let isOpen = true;
//let myNull = null;
//let myUndef = undefined;
let obj = { age: 10, name: 'leo' }

// TS TYPES --------------------------
// any
// unknown
// never
// enum
// tuple

function myfn(document: any) {
    console.log(document);
}

//ARRAYS -------------------------------
let emptyArr: number[] = [];
let numbers = [1, 2, 3,];

//TUPLES--------------------------------
//(Fix Array of a given type)
//Recommend to use with only 2 params

let user: [number, string] = [1, 'leo']

//ENUM--------------------------------
enum Size { Small = 1, Medium = 2, large = 3 }
let mySize: Size = Size.large;
console.log('mySize:' + mySize);

//FUNCTIONS-----------------------------
// function calculateTax(income:number) : number {
//     return 0;
// }
//console.log('calculateTax:' + calculateTax(5));

function calculateTax2(income: number) {
    if (income < 5000) {
        return income * 1.2;
    }
    return income * 1.3; //else    //Undefined
}
console.log('calculateTax2:' + calculateTax2(5));

function calculateTax3(income: number, taxYear: number) {
    if (taxYear < 5000) {
        return income * 1.2;
    }
    return income * 1.3; //else    //Undefined
}
console.log('calculateTax3:' + calculateTax3(5, 1));

function calculateTax4(income: number, taxYear = 2): number {
    if (taxYear < 5) {
        return income * 1.2;
    }
    return income * 3; //else    //Undefined
}
console.log('calculateTax4v1:' + calculateTax4(5, 22));
console.log('calculateTax4v2:' + calculateTax4(5));

//OBJECT---------------------------------
//JS are dinamyc .. TS are fixed
let employee:
    {
        readonly id: number,
        name: string,
        fax?: number,
        retire: (date: Date) => void
    }
    = {
    id: 1,
    name: "leo",
    retire: (date: Date) => {
        console.log(date);
    }

}

//employee.id = 0;
employee.name = 'Mosh';
console.log('employee:' + employee.name);
employee.retire(new Date);

//------------------------------------------------------
//ADVANCED TYPES-----------------------------------------
//------------------------------------------------------

//TYPE ALIASES-------------------------------------------

type TAEmployee = {
    readonly id: number,
    name: string,
    fax?: number,
    retire: (date: Date) => void
}

let advEmployee: TAEmployee = {
    id: 1,
    name: "leoadv",
    retire: (date: Date) => {
        console.log(date);
    }
}

console.log('advEmployee:' + advEmployee.name);
advEmployee.retire(new Date);

//UNION TYPES ---------------------------------------------
function kgToLbs(weight: number | string) : number {
    console.log(weight);
    return 0;
}

console.log('kgToLbs v1 ' + kgToLbs(10));
console.log('kgToLbs v2 ' + kgToLbs('10kg'));

//TYPE NARROWING-------------------------------------------
function kgToLbsWithNarrowing(weight: number | string) : number {
    if (typeof weight === 'number') {
        return weight * 2.2;
    } else{
        return parseInt(weight) * 2.2;
    }
}

console.log('kgToLbsWithNarrowing v1 ' + kgToLbsWithNarrowing(4));
console.log('kgToLbsWithNarrowing v2 ' + kgToLbsWithNarrowing('5kg'));

//INTERSECTION TYPES-----------------------------------------
type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type combinedType = Draggable & Resizable

let textBox : combinedType = {
    drag: () => {},
    resize: () => {}
}

//LITERAL TYPES-------------------------------------------
let quantity: number; 

//rather than this to the type, asign the literal value
let quantityLiteralv1: 50 | 100 = 100;
console.log('quantityLiteralv1: ' + quantityLiteralv1);

//Even better.. with types
type Quantity = 50 | 100;
let quantityLiteralv2: Quantity = 100;
console.log('quantityLiteralv2: ' + quantityLiteralv2);

//NULLABLE TYPES-------------------------------------------
function greet(name:string | null | undefined) {
    if(name){ //truty or has a value
        console.log('greet (with value): ' + name.toUpperCase());
    } else{//Null // undefined
        console.log('greet (null): ' + 'Hola');
    }
}

greet(null);
greet(undefined);
greet('leolowercase');

//OPTIONAL CHAINING----------------------------------------
type Customer = {
    birthday: Date
};

function getCustomer(id:number) : Customer | null {
    return id === 0 ? null : {birthday: new Date()};
}


let customer0 = getCustomer(0);
//Regular if - can be simplified with the ternary
if(customer0 !== null && customer0 !== undefined){
    console.log('getCustomer v1: ' + customer0.birthday);
}

//TERNARY - can be simplified with the optional prop
customer0 !== null && customer0 !== undefined ? console.log('getCustomer v2: ' +customer0.birthday) : console.log('getCustomer v2:  Nothing');

//Optional PROPERTY Access operator
console.log('getCustomer v3: ' + customer0?.birthday?.getFullYear());

//Optional ELEMENT Access operator
//customers?.[0]

//Optional CALL  Access operator
let log: any = null;
log?.('a'); //Will work only ir refers an actual function
