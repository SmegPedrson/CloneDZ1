function appendToDisplay(e) {
    var displayElement = document.getElementById('display');
    var displayText = displayElement.textContent;
    var lastSymbol = displayText[displayText.length - 1];

    var isOperator = (e == '+' || e == '-' || e == '*' || e == '/');
    var lastIsOperator = (lastSymbol == '+' || lastSymbol == '-' || lastSymbol == '*' || lastSymbol == '/');

    if (displayText.length == 0 && isOperator) {
        return
    }

    if (lastIsOperator && isOperator) {
        displayText = displayText.substring(0, display.textContent.length - 1) + e;
    } else {
        displayText += e;
    }

    displayElement.textContent = displayText;
}

function eraseAll(){
    var display = document.getElementById("display")
    display.textContent = ''
}

function eraseLast(){
    var display = document.getElementById("display")
    display.textContent = display.textContent.substring(0, display.textContent.length - 1)
}

function calculate(){
    var display = document.getElementById("display")
    display.textContent = eval(display.textContent)
}

function showSecretImage() {
    var imageContainer = document.getElementById('secretImage')
    document.getElementById('secretSound').play()

    imageContainer.classList.remove('hide')
    setTimeout(() => {
        imageContainer.classList.add('hide')
    }, 1400); 
}