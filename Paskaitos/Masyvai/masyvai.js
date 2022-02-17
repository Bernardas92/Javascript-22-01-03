
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


let namas = ['Antanas', 'Laima', 'Bebras'];
namas.unshift('Zuikis');

// console.table(namas);
// namas.shift();
// console.table(namas);

for (let i = 0; i < 10; i++) {
    namas.push('kdhkjhgfd');
}

let mas = [];

for (let i = 0; i < 10; i++) {
    mas.push(rand(4, 11));
}

console.table(mas);

//Atspausdinti bet tik tas kurios didesnes uz 3 
// for (let i = 0; i < mas.length; i++) {

//     if (mas[i] > 3) {
//         console.log(mas[i]);
//     }

// }

//paskaiciuoti masyvo elementu suma
let bigSum = 0;

for (let i = 0; i < mas.length; i++) {

    bigSum = bigSum + mas[i];

}
console.log(bigSum);

 //sursti maziausia elementa masyve

let minVal = mas[0];

for (let i = 1; i < mas.length; i++) {

    if (mas[i] < minVal) {
        minVal = mas[i];
    }

}
console.log(minVal);

//paskaiciuoti kiek lyginiu reiksmiu yra masyve

let count = 0;

for (let i = 0; i < mas.length; i++) {

    if (mas[i] % 2 == 0) {
        count++;
    }

}
console.log(count);

//KELIU LYGIU MASYVAI

let one = ['Nauseda', 'Antanas', 'Petras'];
let two = ['Linas', 'Birute', 'Bebras'];
let three = ['Tomas', 'Sima', 'Saulius'];

let bigHouse = [];

bigHouse.push(one);
bigHouse.push(two);
bigHouse.push(three);

console.table(bigHouse);

console.log(bigHouse[0][0]);
console.log(bigHouse[2][1]);

//uzduotis atspausdinti bighouse gyventoju sarasa 

let one = ['Nauseda', 'Antanas', 'Petras'];
let two = ['Linas', 'Birute', 'Bebras'];
let three = ['Tomas', 'Sima', 'Saulius'];

let bigHouse = [];

bigHouse.push(one);
bigHouse.push(two);
bigHouse.push(three);

for(let i = 0; i < bigHouse.length; i++) {
    console.log(bigHouse[i]);
    for (let k = 0; k < bigHouse[i].length; k++ ) {
        console.log(bigHouse[i][k]);
    }
}

// kur randasi Tomas 
let one = ['Nauseda', 'Antanas', 'Petras'];
let two = ['Linas', 'Birute', 'Bebras'];
let three = ['Tomas', 'Sima', 'Saulius'];

let bigHouse = [];

bigHouse.push(one);
bigHouse.push(two);
bigHouse.push(three);

for(let i = 0; i < bigHouse.length; i++) {
    console.log(bigHouse[i]);

    for (let k = 0; k < bigHouse[i].length; k++ ) {
        console.log(bigHouse[i][k]);
        if (bigHouse[i][k] == 'Tomas' ) {
            console.log('Tomas gyvena:', i, k);
        }
    }
}