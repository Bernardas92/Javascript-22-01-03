//jeigu skaicius didesnis nei 4, tuomet ijungim atvaizdavima consoleje
//var x = 4

//if(x >= 4) {
//console.log( Math.floor(x) ) //iki artimiausio zemiausio skaiciaus 3.5 = 3
//console.log( Math.round(x) ) //iki artimiausio sveiko skaiciaus 3.5 = 4
//console.log( Math.ceil(x) ) //iki artimiausio auksciausio skaiciaus 3.5 = 4
//}

//jeigu skaicius nelygus keturiems tuomet ijungiame atvaizdavima consoleje
//if(x != 4) {
 //   console.log( Math.floor(x) ) //iki artimiausio zemiausio skaiciaus 3.5 = 3
  //  console.log( Math.round(x) ) //iki artimiausio sveiko skaiciaus 3.5 = 4
  //  console.log( Math.ceil(x) ) //iki artimiausio auksciausio skaiciaus 3.5 = 4
 //   }
//jeigu skaicius nelygus keturiems ir nelygus penkiems
//var x = 6.3
//var y = 5.5
//arba zymimas ||
// ir zymimas &&
//if(x != 4 && y != 5) {
////console.log( Math.floor(x) ) //iki artimiausio zemiausio skaiciaus 3.5 = 3
//console.log( Math.round(x) ) //iki artimiausio sveiko skaiciaus 3.5 = 4
//console.log( Math.ceil(x) ) //iki artimiausio auksciausio skaiciaus 3.5 = 4
//}

//var x = 6.3
//var y = 5.5

//if(x != 4 || y != 5) {
    //console.log( Math.floor(x) ) //iki artimiausio zemiausio skaiciaus 3.5 = 3
   // console.log( Math.round(x) ) //iki artimiausio sveiko skaiciaus 3.5 = 4
   // console.log( Math.ceil(x) ) //iki artimiausio auksciausio skaiciaus 3.5 = 4
   // }

//function clickHandler() {
   // console.log('Mygtukas uzregistruotas')

//}

//document.getElementById('submit').addEventListener('click', clickHandler)

//document.getElementById('submit').addEventListener(
 //   'click', 
//function() {
  //  var reiksme = document.getElementById('skaicus').value
    //document.getElementById('rezultatas').innerText = reiksme
  //  document.getElementById('rezultatas').innerHTML = '<h1>' + reiksme + '<h1>'
    //console.log('Mygtukas uzregistruotas')
//}

window.addEventListener('scroll',(event) => {
    console.log(window.pageYOffset)
})
