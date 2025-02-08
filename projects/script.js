function operation(operator) {
    let num1 = document.getElementById('first-input').value;
    num1 = Number(num1);
    let num2 = document.getElementById('second-input').value;
    num2 = Number(num2);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter a valid number";
    } else {
        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "*") {
            result = num1 * num2;
        } else if (operator === "/") {
            result = num1 / num2;
        } else if (operator === "**") {
            result = 1;
            for (let i=0; i<num2; i++){
                result *= num1;
            }
        } else {
            result = "Invalid operator"
        }
    }
    document.getElementById('output').innerHTML="Result: "+String(result);
}

function clearButton() {
    document.getElementById('first-input').value = "";
    document.getElementById('second-input').value = "";
    document.getElementById('output').innerHTML = "Result:";
}

