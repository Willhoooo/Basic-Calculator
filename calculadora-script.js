let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                let expressionToEvaluate = string;

                expressionToEvaluate = expressionToEvaluate.replace(/(\d+(\.\d+)?)\s*([+\-*/])\s*(\d+(\.\d+)?)%/g, (match, p1, p2, operator, p3, p4) => {
                    return `${p1} ${operator} (${p3}/100)`;
                });

                expressionToEvaluate = expressionToEvaluate.replace(/(\d+(\.\d+)?)%/g, (match, p1) => {
                    return `(${p1}/100)`;
                });

                string = eval(expressionToEvaluate).toString();
                input.value = string;
            } catch (error) {
                input.value = "Erro";
                string = "";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == '%') {
            const lastChar = string.slice(-1);
            if (['+', '-', '*', '/', '%'].includes(lastChar)) {
                input.value = "Erro: Sintaxe Inválida";
                string = "";
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
