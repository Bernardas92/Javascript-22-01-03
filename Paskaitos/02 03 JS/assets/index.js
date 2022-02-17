let i = 1
        let line_counter = 0
        let text = ''
 
        while(i <= 400) {
            
            text += '*'
 
            if(i % 50 == 0) {
                text += '<br />'
                line_counter = 0
            }
 
            i++
            line_counter++
        }
 
        document.getElementById('root').innerHTML = text



function randomSkaicius(x, y) {
    return Math.round(Math.random() * (x - y + 1) + y)
}

let y = 0
let skaicius = ''
let daugiau = 0
let raudona = 0

while (y < 300) {
    randomSkaicius (0, 300)
    skaicius += ''

    if (randomSkaicius > 275) {
        skaicius += `span style="color:red">${randomSkaicius}</span>`
        raudona++
    }
    else {
        skaicius += randomSkaicius
    }
    if (randomSkaicius > 150) {
        daugiau++
    }
    y++
}

document.getElementById('skaiciai').innerHTML = skaicius
document.getElementById('virs').innerHTML = `<span style="color:blue">${daugiau}</span>`
document.getElementById('raudona').innerHTML = `<span style="color:red">${raudona}</span>`
