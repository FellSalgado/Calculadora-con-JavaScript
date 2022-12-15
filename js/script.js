let operandoA, operandoB, operacion

function init() {
    let division = document.getElementById('division');
    let multiplication = document.getElementById('multiplication');
    let sum = document.getElementById('sum');
    let subtraction = document.getElementById('subtraction');
    let rest = document.getElementById('rest');
    let result = document.getElementById('result');
    let point = document.getElementById('point');
    let reset = document.getElementById('delete');
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
    let equal = document.getElementById('equal');

    one.onclick = function(e) {
        result.textContent = result.textContent + '1'
    }
    two.onclick = function(e) {
        result.textContent = result.textContent + '2'
    }
    three.onclick = function(e) {
        result.textContent = result.textContent + '3'
    }
    four.onclick = function(e) {
        result.textContent = result.textContent + '4'
    }
    five.onclick = function(e) {
        result.textContent = result.textContent + '5'
    }
    six.onclick = function(e) {
        result.textContent = result.textContent + '6'
    }
    seven.onclick = function(e) {
        result.textContent = result.textContent + '7'
    }
    eigth.onclick = function(e) {
        result.textContent = result.textContent + '8'
    }
    nine.onclick = function(e) {
        result.textContent = result.textContent + '9'
    }
    zero.onclick = function(e) {
        result.textContent = result.textContent + '0'
    }

    /* delete */
    reset.onclick = function(e) {
        resetear()
    }

    /* operations */
    sum.onclick = function(e) {
        operandoA = result.textContent
        result.textContent = result.textContent + '+'
        operacion = '+'
    }
    subtraction.onclick = function(e) {
        operandoA = result.textContent
        result.textContent = result.textContent + '-'
        operacion = '-'
    }
    multiplication.onclick = function(e) {
        operandoA = result.textContent
        result.textContent = result.textContent + '*'
        operacion = '*'
    }
    division.onclick = function(e) {
        operandoA = result.textContent
        result.textContent = result.textContent + '/'
        operacion = '/'
    }

    equal.onclick = function(e) {
        operandoB = result.textContent
        resolver()
    }
}

function resetear() {
    result.textContent = ''
    operandoA = 0
    operandoB = 0
    operacion = ''
}

function resolver() {
    let res = 0
    switch (operacion) {
        case '+':
            res = parseFloat(operandoA) + parseFloat(operandoB)
            break;
        case '-':
            res = parseFloat(operandoA) - parseFloat(operandoB)
            break;
        case '*':
            res = parseFloat(operandoA) * parseFloat(operandoB)
            break;
        case '/':
            res = parseFloat(operandoA) / parseFloat(operandoB)
            break;
        default:
            break;
    }
    resetear()
    result.textContent = res
}

/* &copy */
const fecha = Date.now();
const hoy = new Date(fecha);
const year = hoy.getFullYear();

let footer = document.getElementById('year');
footer.innerHTML = year;
