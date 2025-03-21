import { describe, it, expect } from 'vitest';
import { LongestIncreasingSubsequence } from '../longestIncSubseq.js';  

describe('LongestIncreasingSubsequence', () => {

  it('should return the longest increasing subsequence for a mixed array', () => {
    const result = LongestIncreasingSubsequence([1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]);
    expect(result);
  });

  it('should return the input array when the array is strictly decreasing', () => {
    const result = LongestIncreasingSubsequence([5, 4, 3, 2, 1]);
    expect(result);
  });

  it('should return an empty array for an empty input array', () => {
    const result = LongestIncreasingSubsequence([]);
    expect(result);
  });

  it('should return the input array when it is already increasing', () => {
    const result = LongestIncreasingSubsequence([1, 2, 3, 4, 5]);
    expect(result);
  });

  it('should return a single element for an array with one element', () => {
    const result = LongestIncreasingSubsequence([10]);
    expect(result);
  });

  it('should handle an array with duplicate elements', () => {
    const result = LongestIncreasingSubsequence([10, 10, 10, 10, 10]);
    expect(result);
  });

  it('should handle an array with all elements the same', () => {
    const result = LongestIncreasingSubsequence([7, 7, 7, 7, 7]);
    expect(result);
  });

  it('should return the longest subsequence when there are multiple options', () => {
    const result = LongestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]);
    expect(result);
  });

});
