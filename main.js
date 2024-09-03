function suma(a, b) {  
    return a + b;  
}  

function resta(a, b) {  
    return a - b;  
}  

function multiplicacion(a, b) {  
    return a * b;  
}  

function divisionEntera(a, b) {  
    return b === 0 ? "Syntax error" : Math.floor(a / b);  
}  

document.addEventListener('DOMContentLoaded', function() {  
    const input = document.querySelector('.input');  
    const buttons = document.querySelectorAll('.buttons button');  

    let currentInput = "";   
    buttons.forEach(button => {  
        button.addEventListener('click', function() {  
            const value = this.textContent;   

            if (value === "=") {  
                try {  
                    const result = eval(currentInput.replace(/(\d+)([/*+-])(\d+)/g, (match, a, op, b) => {  
                        switch (op) {  
                            case '+': return suma(parseFloat(a), parseFloat(b));  
                            case '-': return resta(parseFloat(a), parseFloat(b));  
                            case '*': return multiplicacion(parseFloat(a), parseFloat(b));  
                            case '/': return divisionEntera(parseFloat(a), parseFloat(b));  
                        }  
                    }));  
                    currentInput = result.toString();  
                } catch (e) {  
                    currentInput = "Error";   
                }  
            } else if (value === "C") {  
                currentInput = "";  
            } else if (value === "DEL") {  
                currentInput = currentInput.slice(0, -1);  
            } else {  
                currentInput += value;  
            }  

            input.textContent = currentInput;  
        });  
    });  
});