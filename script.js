
function changeColor(strong,input) {

    if(input.value != '')
        strong.style.color = 'green'
    else    
        strong.style.color = 'red'
}

function calculate() {   

    let firstValue = parseInt(document.getElementById("firstValue").value);
    let secondValue = parseInt(document.getElementById("secondValue").value);
    let operator = document.getElementById("operator");
    let result = document.getElementById("result");
    let finalResult;

    switch (operator.value) {
        case '+':
            finalResult = firstValue + secondValue;
            break;
        case '-':
            finalResult = firstValue - secondValue;
            break;
        case '/':
            finalResult = firstValue / secondValue;
            break;
        case '*':
            finalResult = firstValue * secondValue;
            break;
    }

    if(finalResult < 0)
        result.style.color = 'red'
    else
    result.style.color = 'green'

    result.innerHTML = finalResult;
    
}

