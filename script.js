let display = document.getElementById('display')

function appendNumber(num) {
    display.value += num
}

function appendOperator(operator) {
    display.value += operator
}

function clearDisplay() {
    display.value = ''
}

/**
 * Calculates the result of the expression entered in the calculator display.
 * If an error occurs during evaluation, the display will show "Error".
 */
function calculateResult() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Error'
    }
}
