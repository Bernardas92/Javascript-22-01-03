//alert('labas pasauli')
window.addEventListener('scroll', () => {
  const offset = 260
  const navbar = document.getElementById('navbar')
  if(window.scrollY >= offset)
      navbar.classList.add('scrolled')
  else 
      navbar.classList.remove('scrolled')

  // if(window.scrollY >= offset) {
  //     document.getElementById('navbar').classList.add('scrolled')
  // } 
  // // else if() {

  // // } 
  // else {
  //     document.getElementById('navbar').classList.remove('scrolled')
  // } 

  // if(window.scrollY < offset) {
  //     document.getElementById('navbar').classList.remove('scrolled')
  // }
  //console.log(window.scrollY)

  //Jeigu if'e turi buti paleidziama daugiau kodo nei viena eilute, 
  //tuomet riestinius skliaustus naudoti yra privaloma
  // if() {
  //     console.log('Kazkoks tekstas')
  //     console.log('Kazkoks tekstas')
  // } else {
  //     console.log('Kazkoks tekstas')
  //     console.log('Kazkoks tekstas')
  // }
})



const $ = document.querySelectorAll.bind(document);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  
}
function random(){
  let x
  let y0 = 0
  let z1 = 0
  let c2 = 0
  

x = $('span')[0].innerHTML = getRandomInt(0, 3)
console.log(x)
if (x == 0) {
  y0 += 1
} else if (x == 1){
  z1 += 1
} else {
  c2 +=1
}

x = $('span')[1].innerHTML = getRandomInt(0, 3)
if (x == 0) {
  y0 += 1
} else if (x == 1){
  z1 += 1
} else {
  c2 +=1
}

x = $('span')[2].innerHTML = getRandomInt(0, 3)
if (x == 0) {
  y0 += 1
} else if (x == 1){
  z1 += 1
} else {
  c2 +=1
}

x = $('span')[3].innerHTML = getRandomInt(0, 3)
if (x == 0) {
  y0 += 1
} else if (x == 1){
  z1 += 1
} else {
  c2 +=1
}

  $('span')[4].innerHTML = y0
  $('span')[5].innerHTML = z1
  $('span')[6].innerHTML = c2
}

function multiplyBy()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
        
}

function divideBy() 
{ 
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

function randomSkaicius(x, y) {
    return Math.round(Math.random() * (x - y + 1) + y)
}
let pirmas = randomSkaicius (0, 2);
let antras = randomSkaicius (0, 2);
let trecias = randomSkaicius (0, 2);
let ketvirtas = randomSkaicius (0, 2);

let kiekis0 = 0;
let kiekis1 = 0;
let kiekis2 = 0;

console.log(`nuliu yra ${kiekis0}`);
console.log(`nuliu yra ${kiekis1}`);
console.log(`nuliu yra ${kiekis2}`);

function skaiciuokle(x) {
    if (x == 0) {
        kiekis0++;
}
    else if (x == 1) {
        kiekis1++;
}
    else if (x == 2) {
        kiekis2++;
    }
}

skaiciuokle(pirmas);
skaiciuokle(antras);
skaiciuokle(trecias);
skaiciuokle(ketvirtas);


let skaicius = randomSkaicius(1,6);
//2
document.getElementById('kazkoksID').innerHTML = `<h${skaicius}>${skaicius}</h${skaicius}>`;

function random(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min)
    
    }
    
    let z = random(1, 6);
    
    let h1 = 1
    
    let h2 = 2
    
    let h3 = 3
    
    let h4 = 4
    
    let h5 = 5
    
    let h6 = 6
    
    if(z === 1){
    
    z = '<h1><h1/>' + 1
    
    }
    
    if(z === 2){
    
    z = '<h2><h2/>' + 2
    
    }
    
    if(z === 3){
    
    z = '<h4><h4/>' + 3
    
    }
    
    if(z === 4){
    
    z = '<h4><h4/>' + 4
    
    }
    
    if(z === 5){
    
    z = '<h5><h5/>' + 5
    
    }
    
    if(z === 6){
    
    z = '<h6><h6/>' + 6
    
    }
    
    document.getElementById('vienuolikta').innerHTML = z
//3
let pirmas = randomSkaicius(0,100);
let antras = randomSkaicius(0,100);
let trecias = randomSkaicius(0,100);
console.log(pirmas);
console.log(antras);
console.log(trecias);
let aritmetinisVidurkis = (pirmas+antras+trecias)/3;
console.log($(aritmetinisVidurkis);
let kiekis = 3;
let suma = 0;
function tinkamas(x) {
    if (x < 10 || x > 90){
        kiekis--;
    } else {
        suma += x;
    }
}
tinkamas(pirmas);
tinkamas(antras);
tinkamas(trecias);

if (kiekis == 0) {
    console.log('Visi skaičiai atmesti kaip netinkami');
} else {
    let vidurkis = suma/kiekis;
    console.log(//Aritmetinis vidurkis atmetus netinkamas vertes yra ${vidurkis});
}

let x = 'lorem ipsum assad asd as asdaasd a sdasd asd asdsa '
const input = document.getElementById('input')
input.addEventListener('keyup', event => {
    let tekstas = input.value;

    if(input.value.lenght >= 25) {
       tekstas = input.value.substring(0, 25) + '<br />' 
       tekstas += input.value.substring(25)
    }

    document.getElementById('rezultatas').innerHTML = tekstas
})