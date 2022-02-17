// == //lygu
// === // grieztas lygu
// != //nelygu
// !== //grieztas nelygu
// < //maziau
// > //daugiau
// >= //nemaziau (daugiau arba lygu)
// <= //nedaugiau (maziau arba lygu)

// let skaicius = 5;
// let tekstas = '5';

// && //ir 
// || //arba 
// !// ne

// // if (skaicius % 2 == 0 || skaicius % 3 == 0) {
// //     console.log('dalus is sesiu');
// // }
// let skaicius = 15;
// let skaicius1 = 5;
// let skaicius2 = 8;
// if (skaicius1 > skaicius2) {
//     console.log('Skaicius1 didesnis uz skaiciu2');
// } else if (skaicius1 == skaicius2) {
//     console.log('Skaiciai yra lygus');
// } else {
//     console.log('Skaicius1 yra mazesnis uz skaiciu2');
// }

// if (skaicius % 2 == 0){
//     console.log('Skaicius dalus is dvieju');
// } else {
//     console.log('Skaicius nedalus is dvieju');
// }
// let savaitesDiena = 5;

// if (savaitesDiena == 1) {
//     console.log('Pirmadienis');
// } else if (savaitesDiena == 2) {
//     console.log('Antradienis');
// } else if (savaitesDiena == 3) {
//     console.log('Treciadienis');
// } else if (savaitesDiena == 4) {
//     console.log('Ketvirtadienis');
// } else if (savaitesDiena == 5) {
//     console.log('Penktadienis');
// } else if (savaitesDiena == 6) {
//     console.log('Šeštadienis');
// } else {
//     console.log('Sekmadienis');
// }

// 1. Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius yra blogas ar geras? 
// Neigiamas – „Blogas“, teigiamas „Geras“. Pasitikrinkite: Kai n = 20, turėtume gauti: 
// Skaičius geras.

// let n = 20;
// if (n > 0) {
//     console.log('Skaicius geras');
// } else if (n < 0) {
//     console.log('Skaicius blogas');
// } else {
//     console.log('skaicius yra 0');
// }

// 2. Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. Sudarykite programą, 
// kuri nustatytu, kaip turi pasielgti mokinys? Žinome šviesoforo spalvos kodą n, 1-žalia, 2-
// geltona, 3-raudona. Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite.

// let n = 3;
// if (n == 1) {
//     console.log('Eikite');
// } else if (n == 2) {
//     console.log('Palaukite');
// } else if (n == 3) {
//     console.log('Sustokite');
// }

// 3. Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti visas turimas knygas 
// į dėžes. Gintautas turi d dėžių ir k knygų. Parašykite programą, kuri apskaičiuotų, ar 
// Gintauto turimos knygos tilps į dėžes, jei į vieną dėžę telpa po n knygų. Pasitikrinkite: 
// Kai d=2, k=8, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos telpa į dėžes; kai 
// d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos netelpa į dėžes;

// let d = 3;
// let k = 18;
// let n = 5;
// if (d*n >= k) {
//     console.log('Knygos telpa į dėžes');
// } else {
//     console.log('Knygos netelpa į dėžes');
// }

// 4. Skaičius skaitomas skaitmenimis iš abiejų galų vienodai vadinamas polindromu. Pvz.: 
// 121. Žinomas 4-klis natūralus skaičius n. Nustatykite ar skaičius yra polindromas. 
// Pasitikrinkite: Kai n = 1221 , turėtume gauti: Skaičius polindromas; kai n=1223 tada 
// Skaičius nepolindromas

// Math.floor(); // apvalinimas į mažają pusę 4.4 -> 4, 4.9 ->4
// Math.round(); // paprastas apvalinimas 4.4 -> 4, 4.6 ->5
// Math.ceil(); // apvalinimas į didžiają pusę 4.6-> 5, 4.01 -> 5

// let n = 1234;
// let ketvirtas = n % 10; // 1) 1234 % 10 = 4;
// // let trecias = Math.floor(n / 10) % 10; // 1) n / 10 = 123,4; 2) Math.floor(123,4) = 123; 3) 123 % 10 = 3
// let a = n / 100;
// let b = Math.floor(a);
// let trecias = b % 10;
// let antras = Math.floor(n / 100) % 10; // 1) n / 100 = 12,34; 2) Math.floor(12,34) = 12; 3) 12 % 10 = 2
// let pirmas = Math.floor(n / 1000);  // 1) n / 1000 = 1,234; 2) Math.floor(1,234) = 1;

// if (pirmas == ketvirtas && antras == trecias) {
//     console.log('Skaicius polindromas');
// } else {
//     console.log('Skaicius nepolindromas');
// }

// 5. Loterijos bilietą sudaro šešiaženklis numeris. Loterijoje laimi tas bilietas, kurio numerio 
// skaitmenų suma dalosi iš 4. Nustatykite, ar loterijos bilietas n yra laimingas?. 
// Pasitikrinkite: Kai n = 222442, turėtume gauti: Bilietas laimingas

// let n = 222222;
// let sestas = n % 10;
// let penktas = Math.floor(n / 10) % 10;
// let ketvirtas = Math.floor(n / 100) % 10;
// let trecias = Math.floor(n / 1000) % 10;
// let antras = Math.floor(n / 10000) % 10;
// let pirmas = Math.floor(n / 100000);

// if ((pirmas+antras+trecias+ketvirtas+penktas+sestas) % 4 == 0){
//     console.log('Bilietas laimingas');
// } else {
//     console.log('Bilietas nelaimingas');
// }

// let m = 2006

// if(m % 4 == 0 && m % 100 != 0) {
//     console.log('Metai keliamieji');
// }
//     else { console.log('Metai nekeliamieji')

//     } 
// }
// Skaičius skaitomas skaitmenimis iš abiejų galų vienodai vadinamas polindromu.
// Pvz.: 121. Žinomas 5-klis natūralus skaičius n. Nustatykite ar skaičius yra polindromas.
//  Pasitikrinkite: Kai n = 12321 , turėtume gauti: Skaičius polindromas; kai n=12423 tada Skaičius nepolindromas

// let n = 12456;
// let penktas = n % 10;
// let ketvirtas = Math.floor(n / 10) % 10;
// let antras = Math.floor(n / 1000) % 10;
// let pirmas = Math.floor(n / 10000);

// if (pirmas == penktas && antras == ketvirtas) {
//     console.log('Skaicius polindromas'); 
// } else {
//     console.log ('Skaicius nepolindromas');
// }

// Du broliai nesutaria, kuriam tvarkyti kambarį. 
// Jie meta kauliuką. Jei iškrenta skaičius 1, 3 arba 5 – kambarį tvarko jaunėlis, jei 2, 4 arba 6 – vyresnėlis. 
// Parašykite programą, kuri įvedus iškritusį skaičių k, 
// ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, arba „Kambarį tvarkys vyresnėlis“.
//  Pasitikrinkite: kai k = 1, ekrane turi būti: Kambarį tvarkys jaunėlis.
//   Kai k = 4, ekrane turi būti: Kambarį tvarkys vyresnėlis. 

// let k = randomSkaicius(1, 6)
// if(k == 1 || k == 3 || k == 6) {
//     console.log ('Tvarko jaunelis');
// } else {
//     console.log('Tvarko vyresnis')
// }

// 9. Žinomi trijų klasės draugų kontrolinio darbo pažymiai. Sudarykite programą, kuri
// nustatytų, kuris mokinys gavo geriausią pažymį, kai žinome jų pažymius p1, p2, p3
// Pasitikrinkite: Jei p1=5, p2=8, p3=9 ekrane turi būti: Trečias gavo geriausią pažymį.

// let p1 = 10;
// let p2 = 8;
// let p3 = 9;

// if (p1 > p2 && p1 > p3) {
//     console.log('Pirmas mokinys gavo geriausia pazymi');
// } else if (p2 > p3 && p2 > p1) {
//     console.log('Antras mokinys gavo geriausia pazymi');
// } else {
//     console.log('Trecias mokinys gavo geriausia pazymi');
// }

// 10. Parašykite programą, kuri įvedus mėnesio numerį n atspausdintų to mėnesio dienų kiekį
// d. (tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28)

// let n = 0;

// if( n == 12 || n == 3 ||n == 5 ||n == 7 ||n == 8 ||n == 10 ||n == 12 ) {
//     console.log('Menuo turi 31')
// } else if (n == 2) {
//     console.log('menesis turi 28 dienas')
// } else { console.log('menesis turi 30 dienu')
// }
// 11. Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. Į gimnaziją Petro
// kelionė trunka m2 minučių. Parašykite programą, kuri ekrane parodytų pranešimą apie
// tai, ar Petras nepavėluos į pamoką, prasidedančią v valandų ir m minučių. Pasitikrinkite:
// jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: Petras į pamoką pavėluos; jei v1 = 8,
// m1 = 29, m2 = 23, v = 9, m = 5, turi būti: Petras į pamoką nepavėluos.

// let v = 0;
// let m = 0;
// let v1 = 0;
// let m1 = 0;
// let m2 = 0;

// if (v1 * 60 + m1 + m2 > v * 60 + m){
//     console.log('Petras i pamoka paveluos');
// } else {
//     console.log('Petras i pamoka nepaveluos');
// }
// 12. Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti
// lygiakraštį trikampį. Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti
// negalima. Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti:
// Trikampį sudėlioti negalima.

// let n = 0;

// if (n % 3 == 0 && n != 0) {
//     console.log('Sudeti trikampi galima');
// } else {
//     console.log ('sudeti trikampi negalima');
// }

// 13. Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri
// metai. Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms
// skiriamas eilės numeris. Parašykite programą, kuri surastų m-ųjų metų olimpinių
// žaidynių numerį n. Jei metai neolimpiniai, turi būti spausdinama „Metai neolimpiniai“.
// Pasitikrinkite. Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti
// spausdinama: Metai neolimpiniai.

// let x = [1916, 1940, 1944]; // Nevykusių olimpinių metai

let n = 0;

for (let i = 1896; i < 2024; i++) {
  if (i % 4 == 0 && i !== 1916) {
    n++
    console.log("Metai olimpiniai = " + i + ' N= ' + n);
  } else if (i == 1916 || i == 1940 || i == 1944){
    n++
  } else {
    console.log("Metai neolimpiniai = " + i + ' N= ' + n);
  }
}
console.log(`Žaidynės vyko ${1896 + (n * 4)}`);

// ----------------------------- 14 -----------------------------
/*
Žinomi kvadratinės lygties ax2+bx+c=0 koeficientai a, b, c. Parašykite
programą, kuri rastų lygties sprendinius. Pasitikrinkite:a=1, b=2, c=1,
kompiuterio ekrane turi būti rodomas rezultatas: vienas sprendinys
1.00 a=1, b=4, c=3, kompiuterio ekrane turi būti rodomas rezultatas:
du sprendiniai 3.00 1.00 a=1, b=3, c=4, kompiuterio ekrane turi būti
rodomas rezultatas: nėra sprendinių
*/

// let a = 1;
// let b = 2;
// let c = 1;

// let x;
// let x1;
// let x2;
// let d;

// d = (b ** 2) - (4 * a * c);

// if (d < 0) {
//   console.log("sprendinių nėra");
// } else if (d == 0) {
//   x = -b / (2 * a);
//   console.log("X = " + x);
// } else {
//   x1 = (-b + Math.sqrt(d)) / (2 * a);
//   x2 = (-b - Math.sqrt(d)) / (2 * a);
//   console.log("X1 = " + x1);
//   console.log("X2 = " + x2);
// }

// ----------------------------- 15 -----------------------------
/*
Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje
porcija ledų kainuoja p centų. Parašykite programą, kuri suranda, kiek
porcijų ledų k nusipirks Saulius ir kiek centų m dar liks. Pasitikrinkite
Kai c=50, p=20, turi būti : Saulius nusipirks 2 porcijas, liks centų 10
*/

// let c = 50 // Centai
// let p = 20 // Porcijos kaina
// let k = 0 // Porcijos
// let likutis = 0

// while (c >= p) {
//   c -= p
//   k++
// }

// console.log(`Saulius nusipirks ${k} porcijas ledų ir liks ${c} centų`)
//////////////////////////////////////////
// k = Math.floor(c/p)
// likutis = c - (k * p)
// console.log(`Lieka centų = ${likutis}. Porcijų gavosi = ${k}`);

// ----------------------------- 16 -----------------------------
/*
Vairuotojas iš sandėlio į parduotuvę turi pervežti n dėžių prekių. Į mašiną
telpa m dėžių prekių. Sukurkite programą, kuri apskaičiuotų ir kompiuterio
ekrane parodytų, kiek kartų k turės nuvažiuoti vairuotojas į sandėlį, kad
parvežtų visas prekių dėžes į parduotuvę. Pasitikrinkite:
jei n = 100, m = 14, tai k = 8.
*/

// let n = 100 // prekės
// let m = 14 // dėžės
// let k = 1 // kartai nuvažiuoti į parduotuvę

// while (m <= n){
// k++
// m += m
// }
// console.log('k ' + k)
// console.log('m ' + m)
// console.log('n ' + n)

// ----------------------------- 17 -----------------------------
/*
Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį
skaičių pamažintu vienetu, o mažesnį padidintu vienetu.
*/

// let a = 9
// let b = 6

// if (a > b) {
//   a--;
//   b++;
// } else {
//   a++;
//   b--;
// }
// console.log('a = ' + a + ' b = ' + b)