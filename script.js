function process() {
    const num1 =
    parseFloat(document.getElementById("num1").value);
    const num2 =
    parseFloat(document.getElementById("num2").value);
    const operator =
    document.getElementById("operator").value;

    let result;

    switch(operator) {
        case "+":
            result = add(num1,num2);
            break;

        case "-":
            result = subtract(num1,num2);
            break;
        
        case "x":
            result = multiply(num1,num2);
            break;
        
        case "/":
            result = divide(num1,num2);
            break;
        
        default:
            result = "Invalid operator!"
    }

    document.getElementById("result").value = result;

}

function add(num1,num2) {
    return num1+num2;
}

function subtract(num1,num2) {
    return num1-num2;
}

function multiply(num1,num2) {
    return num1*num2;
}

function divide(num1,num2) {
    return num1/num2;
}