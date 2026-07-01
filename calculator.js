function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;

}

function multiply(a,b){
    return a*b;
}


function divide(a,b){
    return a/b;
}

function calculate(inputString) {
    const parts = inputString.split(/\s+/);

    const num1 = parseFloat(parts[0]);
    const num2 = parseFloat(parts[2])

    const operator = parts[1];


    let result;
    switch(operator){
        case "+":
            result = add(num1,num2)
            break;

        case "-":
            result = subtract(num1,num2)
            break;
        
         case "*":
            result = multiply(num1,num2)
            break;
        
         case "*/":
            result = divide(num1,num2)
            break;
        default:
            console.log("Error: Invalid operator. Use +, -, *, or /");
        
    }
    console.log(`Result: ${result}`);
}
calculate("5.9 * 2.89");