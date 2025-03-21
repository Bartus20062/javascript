export class StringCalculator {
    static calculate(expression) {
        try {
            const tokens = this.tokenize(expression);
            const rpn = this.toRPN(tokens);
            const result = this.evaluateRPN(rpn);
            if (isNaN(result)) {
                return "Error: Invalid Expression";  
            }
            return result.toString();
        } catch (error) {
            return "Error: Invalid Expression";  
        }
    }
    static tokenize(expression) {
        const regex = /\d+(\.\d+)?|[\+\-\*\/\(\)]/g;
        return expression.match(regex) || [];
    }

    static toRPN(tokens) {
        const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };
        const output = [];
        const operators = [];

        tokens.forEach(token => {
            if (!isNaN(token)) {
                output.push(token); 
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
                operators.pop(); 
            }
        });

        while (operators.length) {
            output.push(operators.pop());
        }

        return output;
    }

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
export default StringCalculator;