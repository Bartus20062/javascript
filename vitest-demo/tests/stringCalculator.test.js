import { describe, it, expect } from 'vitest';
import { StringCalculator } from '../stringCalculator';  

describe('StringCalculator', () => {
  it('should calculate basic addition', () => {
    expect(StringCalculator.calculate("2 + 3")).toBe("5");
  });

  it('should calculate basic multiplication', () => {
    expect(StringCalculator.calculate("2.5 * 4")).toBe("10");
  });

  it('should calculate division', () => {
    expect(StringCalculator.calculate("10 / 4")).toBe("2.5");
  });

  it('should calculate expression with parentheses', () => {
    expect(StringCalculator.calculate("(2 + 3) * 4")).toBe("20");
  });

  it('should calculate expression with operator precedence', () => {
    expect(StringCalculator.calculate("2 + 3 * 4")).toBe("14");
  });

  it('should handle division by zero', () => {
    expect(StringCalculator.calculate("10 / 0")).toBe("Infinity");
  });

  it('should return error for invalid expression', () => {
    expect(StringCalculator.calculate("2 + * 3")).toBe("Error: Invalid Expression");
    expect(StringCalculator.calculate("2 ++ 3")).toBe("Error: Invalid Expression");
    expect(StringCalculator.calculate("2 + ( 3")).toBe("Error: Invalid Expression");
  });

  it('should return error for empty expression', () => {
    expect(StringCalculator.calculate("")).toBe("Error: Invalid Expression");
  });
});
