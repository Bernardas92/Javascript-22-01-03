const d = document.querySelector.bind(document);
  
// window.addEventListener('scroll', () => {
//   console.log(window.pageYOffset)
// })


document.getElementById("submit").addEventListener("click", function (e) {
    var reiksme = document.getElementById("skc").value;
    document.getElementById("rez").innerHTML = "<h1>" + reiksme + "</h1>";
  });
  document.getElementById("test-id").addEventListener("click", function (e) {
    document.getElementById('test-id').innerHTML = randomSkaicius(-10, 10);
  });
  //'<span style="' + color1 + '">' + skaicius1 + '</span>';
  document.getElementById("row-1").addEventListener("click", function (e) {
   let skaicius1 = randomSkaicius(-10, 10);
   let color1 = randomcolor (skaicius1);
   let skaicius2 = randomSkaicius(-10, 10);
   let color2 = randomcolor (skaicius2);
   let skaicius3 = randomSkaicius(-10, 10);
   let color3 = randomcolor (skaicius3);
    document.getElementById('row-2').innerHTML = `<span style="color:${color1}">${skaicius1}</span>`;
    document.getElementById('row-3').innerHTML = `<span style="color:${color2}">${skaicius2}</span>`;
    document.getElementById('row-4').innerHTML = `<span style="color:${color3}">${skaicius3}</span>`;

  });

  document.getElementById('test-id').innerHTML = randomSkaicius(-10, 10);

  function randomSkaicius(x, y) {
    return Math.round(Math.random() * (x - y + 1) + y);
  }
function randomcolor (x) {
    if (x < 0) {
        return '#ff0000';
    }
    if (x == 0) {
        return '#0000ff';
    }    
    if (x > 0) {
        return '#00ff00';
    }
}

let skaicius = randomSkaicius (0, 2);

function randomSkaicius(x, y) {
  return Math.round(Math.random() * (x - y + 1) + y);
}
console.log(skaicius);

  
