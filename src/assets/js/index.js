const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input
}

function clearDisplay() {
    display.value = '';
}

// De acordo com meios, eval é perigosa devida a falta de segurança
function calculate() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
        setTimeout(() => {
            display.value = '';
        }, 1000)
    }
}