function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let kauliukas = rand(1, 6);

switch(kauliukas) {
    case 1: 
    case 5: 
    console.log('Ledai');
    break;
    case 2: 
    case 4: 
    console.log('Cipsai');
    break;
    default:
        console.log('Pienas');
}