function add(c,d){
    return c + d;
}

function subtract(c,d){
    return c - d;
}

function multiply(c,d){
    return c * d;
}

function divide(c,d){
    return c / d;
}

function compute(inputString){
    const parts = inputString.split(/\s+/);

    const num1 = parseFloat(parts[0])
    const num2 = parseFloat(parts[2])

    const operator = parts[1]

    
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

        case "/":
            result = divide(num1,num2)
            break;

        default:
            console.log("Error: Invalid operator. Use +, -, *, or /")

    }
    console.log(`Result: ${result}`)
}

compute("5 + 5")