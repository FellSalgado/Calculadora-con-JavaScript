function init() {
    let division = document.getElementById('division');
    let multiplication = document.getElementById('multiplication');
    let sum = document.getElementById('sum');
    let subtraction = document.getElementById('subtraction');
    let rest = document.getElementById('rest');
    let result = document.getElementById('result');
    let point = document.getElementById('point');
    let deletE = document.getElementById('delete');
    let deleteAll = document.getElementById('delete-all');
    let zero = document.getElementById('zero');
    let one = document.getElementById('one');
    let two = document.getElementById('two');
    let three = document.getElementById('three');
    let four = document.getElementById('four');
    let five = document.getElementById('five');
    let six = document.getElementById('six');
    let seven = document.getElementById('seven');
    let eigth = document.getElementById('eigth');
    let nine = document.getElementById('nine');
}

/* &copy */
const fecha = Date.now();
const hoy = new Date(fecha);
const year = hoy.getFullYear();

let footer = document.getElementById('year');
footer.innerHTML = year;
