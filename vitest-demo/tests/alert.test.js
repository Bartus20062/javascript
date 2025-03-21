import { describe, it, expect } from 'vitest';
import { getMaxSubSum } from '../alert.js';  

describe('getMaxSubSum', () => {
  it('should return 6 for the array [-1, 2, 3, -9]', () => {
    expect(getMaxSubSum([-1, 2, 3, -9]));
  });

  it('should return 6 for the array [2, -1, 2, 3, -9]', () => {
    expect(getMaxSubSum([2, -1, 2, 3, -9]));
  });

  it('should return 7 for the array [1, 2, 3, -9, 11]', () => {
    expect(getMaxSubSum([1, 2, 3, -9, 11]));
  });

  it('should return 0 for an empty array', () => {
    expect(getMaxSubSum([]));
  });

  it('should return the sum itself when the array contains only one positive number', () => {
    expect(getMaxSubSum([5]));
  });

  it('should return 0 when the array contains only negative numbers', () => {
    expect(getMaxSubSum([-1, -2, -3, -4]));
  });

  it('should return 10 for the array [10, -1, 2, 3, -9, 5]', () => {
    expect(getMaxSubSum([10, -1, 2, 3, -9, 5]));  
  });
});
