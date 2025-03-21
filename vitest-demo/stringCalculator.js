class StringCalculator {
    static calculate(expression) {
        try {
            const tokens = this.tokenize(expression);
            const rpn = this.toRPN(tokens);
            const result = this.evaluateRPN(rpn);
            return result.toString();
        } catch (error) {
            return "Error: Invalid Expression";
        }
    }

    // Rozbijanie wyrażenia na tokeny (liczby, operatory, nawiasy)
    static tokenize(expression) {
        const regex = /\d+(\.\d+)?|[\+\-\*\/\(\)]/g;
        return expression.match(regex) || [];
    }

    // Konwersja na notację odwrotną polską (RPN) - Algorytm Shunting Yard
    static toRPN(tokens) {
        const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };
        const output = [];
        const operators = [];

        tokens.forEach(token => {
            if (!isNaN(token)) {
                output.push(token); // Liczba
            } else if (token in precedence) {
                while (operators.length && precedence[operators[operators.length - 1]] >= precedence[token]) {
                    output.push(operators.pop());
                }
                operators.push(token);
            } else if (token === "(") {
                operators.push(token);
            } else if (token === ")") {
                while (operators.length && operators[operators.length - 1] !== "(") {
                    output.push(operators.pop());
                }
                operators.pop(); // Usuwamy "("
            }
        });

        while (operators.length) {
            output.push(operators.pop());
        }

        return output;
    }

    // Obliczanie wartości wyrażenia w RPN
    static evaluateRPN(rpn) {
        const stack = [];

        rpn.forEach(token => {
            if (!isNaN(token)) {
                stack.push(parseFloat(token));
            } else {
                const b = stack.pop();
                const a = stack.pop();
                switch (token) {
                    case "+": stack.push(a + b); break;
                    case "-": stack.push(a - b); break;
                    case "*": stack.push(a * b); break;
                    case "/": stack.push(a / b); break;
                }
            }
        });

        return stack.pop();
    }
}

// **Przykłady użycia**
console.log(StringCalculator.calculate("2 + 3"));        // "5"
console.log(StringCalculator.calculate("2.5 * 4"));      // "10"
console.log(StringCalculator.calculate("10 / 4"));       // "2.5"
console.log(StringCalculator.calculate("(2 + 3) * 4"));  // "20"
console.log(StringCalculator.calculate("2 + 3 * 4"));    // "14"
console.log(StringCalculator.calculate("10 / (2 + 3)")); // "2"