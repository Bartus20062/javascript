import { describe, it, expect } from "vitest";
import { arrayStats } from "./arrayStats"; // Załóżmy, że funkcja jest w pliku arrayStats.js

describe("arrayStats", () => {
  it("zwraca poprawne wartości dla nieposortowanej tablicy", () => {
    expect(arrayStats([3, 1, 2, 5, 4])).toEqual({ min: 1, max: 5, mediana: 3 });
  });

  it("zwraca poprawne wartości dla nieparzystej liczby elementów", () => {
    expect(arrayStats([7, 2, 10])).toEqual({ min: 2, max: 10, mediana: 7 });
  });

  it("zwraca poprawne wartości dla parzystej liczby elementów", () => {
    expect(arrayStats([1, 2, 3, 4])).toEqual({ min: 1, max: 4, mediana: 2.5 });
  });

  it("zwraca poprawne wartości dla tablicy z liczbami ujemnymi", () => {
    expect(arrayStats([-10, 5, 23, 45, 1000])).toEqual({ min: -10, max: 1000, mediana: 23 });
  });

  it("zwraca `{min: null, max: null, mediana: null}` dla pustej tablicy", () => {
    expect(arrayStats([])).toEqual({ min: null, max: null, mediana: null });
  });
});