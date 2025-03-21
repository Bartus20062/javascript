import { describe, it, expect } from 'vitest';
import { arrayStats } from '../sum.js'; 

describe('arrayStats', () => {

  it('should return correct min, max, and median for an array with odd length', () => {
    const result = arrayStats([3, 1, 2, 5, 4]);
    expect(result);
  });

  it('should return correct min, max, and median for an array with even length', () => {
    const result = arrayStats([7, 2, 10]);
    expect(result);
  });

  it('should return null values for an empty array', () => {
    const result = arrayStats([]);
    expect(result);
  });

  it('should return correct min, max, and median for an array with both negative and positive numbers', () => {
    const result = arrayStats([45, 5, -10, 1000, 23]);
    expect(result);
  });

  it('should return correct min, max, and median for an array with identical elements', () => {
    const result = arrayStats([5, 5, 5, 5, 5]);
    expect(result);
  });

  it('should return correct min, max, and median for an array with negative numbers', () => {
    const result = arrayStats([-7, -2, -10]);
    expect(result);
  });

  it('should return correct min, max, and median for an array with a single element', () => {
    const result = arrayStats([42]);
    expect(result);
  });

});
