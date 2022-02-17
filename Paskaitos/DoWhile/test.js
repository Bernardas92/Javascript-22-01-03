function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

//   1.Parašyti skriptą, kuris naudojant for ciklą atspausdintų 11 skaitmenų nuo 100 iki 200 kas 10 
//   (t.y. 100, 110, 120… 180, 190, 200);
//   2.Cikle for naudoti rand() funkciją sugeneruoti 10 skaičių nuo 5 iki 15.
//    Sugeneruotus skaičius cikle spausdinti. Ciklui pasibaigus išspausdinti cikle sugeneruotų dviženklių skaičių kiekį;
//   3.Cikle for naudoti rand() funkciją sugeneruoti 10 skaičių nuo 5 iki 15.
//    Sugeneruotus skaičius cikle spausdinti. Ciklui pasibaigus išspausdinti cikle sugeneruotų skaičių vidurkį 
//   4.Cikle do while naudoti rand() funkciją ir generuoti skaičius nuo 10 iki 50.
//    Ciklą užbaigti, kai bus sugeneruotas skaičius 13 arba 33 arba 43. Ciklui pasibaigus išspausdinti
//     iteracijų (kiek kartų ciklas prasisuko) kiekį
//   5.Cikle while naudoti rand() funkciją ir generuoti skaičius nuo 10 iki 20.
//    Ciklą užbaigti, kai bus tris kartus (trečią, ne pirmą kartą) sugeneruotas skaičius 17. Ciklui pasibaigus išspausdinti
//     iteracijų (kiek kartų ciklas prasisuko) kiekį.
//----------------------- 1 --------------------------------TEST SELF

// let sum = 100

// for (let i = 0; i < 10; i++){

//   sum += 10
//   console.log('Sum: ' + sum);
// }

//------------------- 2 ----------------------

// let x = 0;
// let sum = 0;

// for (let i = 0; i <= 10; i++) {
//   x = rndNum(5, 15);
//   console.log("Nums: " + x);
//   if (x >= 10) {
//     sum += x;
//   }
// }
// console.log("Sum: " + sum);

//-------------------- 3 ---------------------

// let x = 0;
// let sum = 0;
// let avg = 0;
// let o = 10

// for (let i = 0; i <= o; i++) {
//   x = rndNum(5, 15);
//   console.log("Nums: " + x);
//     sum += x;
// }

// avg = sum / o

// console.log("Vid:     " + avg);

//--------------------- 4 --------------------

// let random
// let iter = 0

// do {
// random = rndNum(10, 50)
// iter++
// console.log('Ran num: ' + random);
// } while (random != 13 && random != 33 && random != 43)

// console.log('i: ' + iter);

//-------------------- 5 ---------------------

// let random
// let container = 0
// let iter = 0

// while (true){
//   iter++
//   random = rndNum(10, 20)
//   console.log('R: ' + random);
//   if (random == 17){
//     container++
//   } if (container == 3){
//     break
//   }
// }

// console.log('Sukosi: ' + iter);