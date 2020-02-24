let name;
console.log(name);

//Falsy
    //undefined
    //null
    //0
    //''
    //Nan
//Anything that is not Falsy -> Truthy
// false || 1 || 2 = 1 (Short-circuiting)

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

//Bitwise Operators
// 1 = 00000001
// 2 = 00000010
// 1 | 2 = 00000011 Bitwise OR Si alguno de los bits es 1 el resultado es 1 (1|2 =3)
// 1 & 2 = 00000000 Bitwise AND

// Read, Write, Execute
// 00000100 tiene permisos Read
// 00000010 tiene permisos Write
// 00000001 tiene permisos execute
// 00000101 tiene permisos read and execute

const readPermission = 4; // 00000100 en decimal
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission; // Esto es añadirme el permiso de escritura

let message = 
    (myPermission & readPermission) ? 'yes': 'no';
// Esto es comprobar si tengo el permiso de lectura la respuesta es no

//Section 27

// Exercise Swap values;
    let a = 'red';
    let b = 'blue';
    let c = a;
    a = b;
    b = c;
    
    console.log(a);
    console.log(b);

// Section 2, 28 If ... else
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise : Good evening

let hour = 10;

if (hour >= 6 && hour < 12)
    console.log('Good morning');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon');
else 
    console.log('Good evening');

//Section 2, 29 Switch..case

let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    case 'otra cosa':
        console.log('otra cosa');
        break;
    default:
        console.log('Unknown Role'); // aquí no hace falta el break0
}

// Section 2, 30 FOR

for (let i = 0; i < 5; i++) {
    if (i % 2 === 1) console.log(i);
}

for (let i = 5; i >= 0; i--) {
    if (i % 2 === 1) console.log(i);
}

// Section 2, WHILE

let i = 0;
while (i <= 5) {
    if (i % 2 === 1) console.log(i);
    i++;
}

// Section 32, Do while se ejecuta SIEMPRE al menos una vez

let i = 9;
do {
    if (i % 2 === 1) console.log(i);
    i++;
} while (i <= 5);

const person = {
    name: 'Elvira',
    age: 22
};

for (let otracosa in person ) 
console.log(person[otracosa])

const colors = ['blue','red','yellow']

for (const index in colors) console.log(index);
for (const index in colors) console.log(colors[index]);

// Section 35 FOR OF
for (const color of colors) 
    console.log(color);

// Section 36 break and continue;

for (let i = 0; i <= 5; i++) {
    if (i === 3) break; // Sale del bucle
    console.log(i)
}

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        i++;
        continue; // continúa con el bucle esto solo loguea 10
    }

    console.log(i);
}

//Section 37

// const max = ( num1, num2 ) => {
//     if (num1 > num2) return num1;
//     return num2;
//     return num1 > num2 ? num1 : num2;
// }

const isLandscape = (width, height) => {
    return width > height;
}

const fizzBuzz = (input) => {
    //divisible por 3 return Fizz
    //divisible por 5 ret   Buzz
    //divisible por 15 return FizzBuzz
    // no es divisible return el número
    // si no es un número return not a number
    if (typeof input !== 'number') 
        return NaN;

    const isDivisibleBy = (divisor) => input % divisor === 0;
    
    if( isDivisibleBy(3) && isDivisibleBy(5) ) 
        return 'FizzBuzz';
    
    if( isDivisibleBy(3) ) 
        return 'Fizz';
    
    if( isDivisibleBy(5)) 
        return 'Buzz';
    
    return input;
}


//Speed Limit = 70;
// Por debajo de 70 return ok
// 72 return ok 75 return 1 punto
// Por encima de 70 cada 5 puntos 1 punto
// A partir de 12 puntos License suspended

const checkSpeed = (speed) => {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points < 1) return 'Ok';
    if (points < 12) return `Points: ${points}`;
    return 'License suspended';
}

const showNumbers = (limit) => {
    for (let i = 0; i <= limit; i++) {
        const parity = i % 2 === 0 ? 'EVEN' : 'ODD';
        console.log(`${i} ${parity}`);
    }
}

const countTruthy = (array) => {
    let numberOfTruthys = 0;
    for (const element of array) {
        if(element) numberOfTruthys++;
    }
    return numberOfTruthys;
}

const showProperties = (obj) => {
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === 'string') 
            console.log(`${key} ${value}`);
    }
}

const sumDivisors = (limit) => {
    let sum = 0;

    for (let i = 0; i <= limit; i++) {
        const isDivisibleBy = (divisor) => i % divisor === 0;
        // if (isDivisibleBy(15) || ((isDivisibleBy(3) || isDivisibleBy(5)) && !isDivisibleBy(15))) 
        //     sum += i;
        if ((isDivisibleBy(3) || isDivisibleBy(5))) 
            sum += i;
        // if (i % 15 === 0) sum += i;
        // else if (i % 5 === 0) sum += i;
        // else if (i % 3 === 0) sum += i;
    }

    return sum;
}

//Section 45 calculateGrade
//A partir de un array de notas, calcula la media, y después devuelve la nota en letra
// 0-59 :F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [80,80,50];

const calculateGrade = (marks) => {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

const calculateAverage = (array) => {
    let sum = 0;
    for (const value of array) 
        sum += value;
    return sum / array.length;
}


// Section 46

const patternStars = (number) => {
    let pattern = '';
    for (let i = 0; i < number; i++) 
        pattern += '*';
    return pattern;
}

const showStars = (number) => {
    for (let row = 1; row <= number; row++)
        console.log(patternStars(row));
}


// Section 47

const isPrime = (number) => {
    const maxDivisorToTry = Math.floor(Math.sqrt(number));
    for (let divisor = 2; divisor <= maxDivisorToTry; divisor++) 
        if (number % divisor === 0) 
            return false;
    return true;
};

const showPrimes = (limit) => {
    for (let number = 2; number <= limit; number++)
        isPrime(number) && console.log(number);
};


// SECTION 5 OBJECTS. Object oriented style programming OOP
// draw es un method si una función es parte de un objeto

const circle = {
    radius: 1,
    center: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: () => console.log('draw')
};

// FACTORY FUNCTIONS, produce objects

const createCircle = (radius, center) => {
    return {
        radius: radius,
        center: center,
        draw: () => console.log('draw'),
    };
}

const circle1 = createCircle(2,3);
console.log(circle1.radius)


//CONTRUCTOR FUNCTION Pascal notation

//camel notation: oneTwoThreeFour
// Pascal notation: OneTwoThree

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    // implícitamente hacer un return this
}

const circle = new Circle(1);

// las diferencia entre una factory function y una constructor function
// En la primera usamos el return, en la segunda no hace falta
// en la segunda usamos new y this
// en la primera usamos camel notation en el constructor usamos pascal notation


//Dynamic nature of objects
// Objects in Js are dynamic. siempre podemos añdir o modificar propiedades

const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function() {
    console.log('draw')
}

delete circle.color;

// no podemos reasignar el valor de cirlce porque es una constante pero sí podemos añadir propiedades dinámicamente

//Constructor property

// Hemos visto dos maneras de contruir objetos, con factory functions y con constructor functions
// si construimos un círculo con la constructor function podemos hacer circle.constructor y hace referencia a la función Circle que es quien la ha creado
// El constructor function no se puede hacer con const y arrow function ????

function Triangle(size) {
    this.size = size;
    this.draw = () => {console.log('draw')};
}

const triangle1 = new Triangle(7);

triangle1.constructor;


circle1.constructor // objec

//Cuando hacemos algo de este tip0

let x = {};
// debajo se  hace algo de este tipo let x = new Object;


//FUNCTIONS ARE OBJECTS
//Triangle.name = Triangle, Triangle.length = 1 número de argumentos


//value vs reference types
// VALUE TYPES : Number, string, boolean, symbol, undefined, null
// Reference types: Object, Function, Array

let x = 10;
let y = x;

x = 20;

// son independientes

let x = { value: 10 };
let y = x;
x.value = 20; // y = { value: 20}


// primitives are copied by their value
// Objects are copied by their reference

// objects no son iterables

if ('value' in x) console.log('sí')

//CLONING AN OBJECT

const circle = {
    color: 'yellow'
};

const another = {
    value: 10
};

const circle2 = Object.assign(circle,another)  //circle también cambia

// garbage collection

// TEMPLATE LITERALS