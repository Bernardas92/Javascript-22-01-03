// // 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
// let a = 5;
// let b = 7;

// if (a > b){
//     console.log('a daugiau už b');
// } else if (a == b) {
//     console.log('skaiciai a ir b lygūs');
// } else {
//     console.log('b daugiau uz a');
// }

// 2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

for (let i = 1; i < 11; ++i) {
    console.log(i);
}

// 3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (let i = 0; i < 11; i += 2) {
    console.log(i);
}

// 4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

function rand(min, max) {  
    return Math.floor(Math.random()*(max-min+1)+min);
}

for (let i = 0; i < 5; i++) {
    console.log(rand(1,10));
}

// 5. Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

let skaicius;

while (skaicius != 5){
    skaicius = rand(1,10);
    console.log(skaicius);
}

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. 
// Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos. (7 taškai)

let masyvas = [];
let ilgis = rand(20,30);

for (let i = 0; i < ilgis; ++i){
    masyvas[i] = rand(10,30);    // Abu variantai vienodai galimi
    // masyvas.push(rand(10,30))
}
console.log(masyvas);
for (let i = 0; i < ilgis; ++i){
    for(let j = 0; j < ilgis; ++j) {
        if (masyvas[i] < masyvas[j]){
            let temp = masyvas[i];
            masyvas[i] = masyvas[j];
            masyvas[j] = temp;
        }
    }
}
console.log(masyvas);

// console.log(`Antra didžiausia reikšmė yra ${masyvas[ilgis-2]}`);
// let max = 0;
// let max2 = 0;
// for (let i = 0; i < ilgis; ++i){
//     if (masyvas[i] > max){
//         max2 = max;
//         max = masyvas[i];
//     } else if (masyvas[i] > max2){
//         max2 = masyvas[i];
//     }
// }
// console.log(`Antra didžiausia reikšmė yra ${max2}`);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. 
// Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

let raides = ['A', 'B', 'C', 'D'];

let a=b=c=d=0;

for (let i = 0; i < 100; ++i){
    masyvas[i] = raides[rand(0,3)];
    if (masyvas[i] === 'A'){
        a++;
    }else if (masyvas[i] === 'B'){
        b++;
    }else if (masyvas[i] === 'C'){
        c++;
    }else if (masyvas[i] === 'D'){
        d++;
    }
}

console.log(`A: ${a}, B: ${b}, C: ${c}, D: ${d}`);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. 
// Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. 
// Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function lygineSuma(a,b) {
    if (typeof(a) === 'number' && typeof(b) === 'number'){
        let suma = a+b;
        if (suma % 2 == 1){
            return ('Skaičių suma nelyginė');
        } else {
           return `Skaičių suma: ${suma}`;
        }
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        let suma = a.length + b.length;
        if (suma % 2 == 1){
            return ('Masyvų ilgių suma nelyginė');
        } else {
            return (`Masyvų ilgių suma: ${suma}`)
        }
        return;
    }
    return 'Blogi kintamųjų tipai';
}

console.log(lygineSuma(2, 4));

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. 
// Funkcija turi grąžinti ar pateiktas skaičius yra pirminis
// ( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

function pirminisSkaicius(skaicius) { 
    if (typeof(skaicius) == 'number'){
        if (skaicius < 2 ){
            return `Skaičius ${skaicius} nėra pirminis`;
        }
        if (skaicius == 2 ){
            return `Skaičius ${skaicius} yra pirminis`;
        }
        for(let i = 2; i < skaicius; ++i){
            if (skaicius % i == 0){
                return `Skaičius ${skaicius} nėra pirminis`; 
            }
        }
        return `Skaičius ${skaicius} yra pirminis`;
    } else {
        return 'Kintamasis nėra skaičius';
    }
}

console.log(pirminisSkaicius(11));

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10.
// Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų)

function telefonoNumeris(a){
    if (!Array.isArray(a)){
        return `Kintamasis nėra masyvas`;
    }
    if (a.length != 10){
        return `Kintamojo ilgis nėra 10`;
    }
    for (let i = 0; i < 10; ++i) {
        if (typeof(a[i]) !== 'number'){
            return 'Ne visi masyvo elementai yra skaičiai';
        }
    }
    return `(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`;
}

console.log(telefonoNumeris([4,5,6,4,5,3,2,1,4,8]));