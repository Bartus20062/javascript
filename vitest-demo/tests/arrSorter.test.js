import { describe, it, expect } from "vitest";
import { bubbleSort, selectionSort, insertionSort, quickSort } from "../arrSorter.js"; 

const testCases = [
  { input: [3, 1, 2], expected: [1, 2, 3] },
  { input: [5, 3, 8, 1, 2], expected: [1, 2, 3, 5, 8] },
  { input: [1, 8, 6, 2, 3, 0], expected: [0, 1, 2, 3, 6, 8] },
  { input: [], expected: [] }, 
  { input: [42], expected: [42] }, 
  { input: [-3, -1, -2, 5, 4], expected: [-3, -2, -1, 4, 5] }, 
];

describe("Sorting Algorithms", () => {
  testCases.forEach(({ input, expected }) => {
    it(`bubbleSort(${JSON.stringify(input)}) => ${JSON.stringify(expected)}`, () => {
      expect(bubbleSort([...input])).toEqual(expected);
    });

    it(`selectionSort(${JSON.stringify(input)}) => ${JSON.stringify(expected)}`, () => {
      expect(selectionSort([...input])).toEqual(expected);
    });

    it(`insertionSort(${JSON.stringify(input)}) => ${JSON.stringify(expected)}`, () => {
      expect(insertionSort([...input])).toEqual(expected);
    });

    it(`quickSort(${JSON.stringify(input)}) => ${JSON.stringify(expected)}`, () => {
      expect(quickSort([...input])).toEqual(expected);
    });
  });
});
console.log(bubbleSort);
