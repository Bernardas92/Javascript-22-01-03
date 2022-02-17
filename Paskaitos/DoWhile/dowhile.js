// do while ciklas. Metom kauliuką tol kol iškrenta 5. Suskaičiuojam kiek kartų mėtėm DONE!

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
// let kauliukas;
// let count = 0; //skaiciujam kiek kartu ismetam kol iskrito 5
// let saugiklis = 0;
// do {
//     if(saugiklis++ > 100) break; //saugiklis kuris sustabdo cikla jeigu butu suklysta
//     count++
//     kauliukas = rand(1, 6);
//     console.log(kauliukas);

// }while(kauliukas != 5);
// console.log('Prasisuko', count);


// == --> !=
// != --> ==
// > --> <=
// < --> >

// do while ciklas. Metom kauliuką tol kol iškrenta 5 arba 1. Suskaičiuojam kiek kartų mėtėm DONE!

let kauliukas;
let count = 0; //skaiciujam kiek kartu ismetam kol iskrito 5
let saugiklis = 0;
let suma = 0;
// do {
//     if(saugiklis++ > 100) break; //saugiklis kuris sustabdo cikla jeigu butu suklysta
//     count++
//     kauliukas = rand(1, 6);
//     console.log(kauliukas);

// }while(kauliukas != 1 && kauliukas != 5);
// console.log('Prasisuko', count, 'Kartus');

// do while ciklas. Metom kauliuką. Sustojam kai išmestų kauliukų suma tampa didesnė nei 33. Suskaičiuojam kiek kartų mėtėm DONE!
// do while ciklas. Metom kauliuką tol kol iškrenta 5. Suskaičiuojam kiek kartų mėtėm DONE!

// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }
// let kauliukas;
// let count = 0; //skaiciujam kiek kartu ismetam kol iskrito 5
// let suma = 0;
// do {
//     kauliukas = rand(1, 6);
//     console.log(kauliukas);
//     count++;
//     suma = suma + kauliukas

// }while(suma <= 33);
// console.log('Prasisuko_kartu:', count, 'suma_lygi', suma);

// Yra 1000 litrų vandens. Karvių banda per parą išgeria atsitiktinį kiekį nuo 70 iki 200 litrų.
//  Paskaičiuoti per kiek dienų karvės išgeria vandenį. DONE
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let h2o = 1000;
let days = 0;
while(h2o > 0) {
    days++;
    h2o = h2o - rand(70, 200);
}
console.log('Karves numire is troskulio ' + days + ' diena');



