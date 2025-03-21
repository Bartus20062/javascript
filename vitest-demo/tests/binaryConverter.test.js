import { describe, it, expect } from 'vitest';
import { binaryConverter } from '../binaryConverter.js'; 

describe('binaryConverter', () => {
    describe('toBinary', () => {
        it('should convert decimal number to binary array', () => {
            expect(binaryConverter.toBinary(10)).toEqual([1, 0, 1, 0]);
        });

        it('should throw error for negative numbers', () => {
            expect(() => binaryConverter.toBinary(-1)).toThrowError('Podana liczba....');
        });

        it('should throw error for non-integer numbers', () => {
            expect(() => binaryConverter.toBinary(10.5)).toThrowError('Podana liczba....');
        });

        it('should return [0] for 0', () => {
            expect(binaryConverter.toBinary(0)).toEqual([0]);
        });
    });

    describe('toDecimal', () => {
        it('should convert binary array to decimal number', () => {
            expect(binaryConverter.toDecimal([1, 0, 1, 0])).toEqual(10);
        });

        it('should throw error for invalid binary array', () => {
            expect(() => binaryConverter.toDecimal([1, 2, 0])).toThrowError('Podana wartosc...');
        });

        it('should throw error for empty array', () => {
            expect(() => binaryConverter.toDecimal([])).toThrowError('Podana wartosc...');
        });

        it('should return 0 for an empty array of zeros', () => {
            expect(binaryConverter.toDecimal([0, 0, 0, 0])).toEqual(0);
        });
    });

    describe('convertBase', () => {
        it('should convert from base 10 to base 16 correctly', () => {
            expect(binaryConverter.convertBase([1, 5], 10, 16)).toEqual(['F']);
        });

        it('should throw error for invalid number array', () => {
            expect(() => binaryConverter.convertBase([1, 5, 10], 10, 16)).toThrowError('Tablica zawiera.... 10');
        });

        it('should throw error for invalid base', () => {
            expect(() => binaryConverter.convertBase([1, 5], 1, 16)).toThrowError('Nieprawidlowe.....');
        });

        it('should throw error for invalid input array', () => {
            expect(() => binaryConverter.convertBase([], 10, 16)).toThrowError('Nieprawidlowe.....');
        });

        it('should return [0] for 0 in any base', () => {
            expect(binaryConverter.convertBase([0], 10, 2)).toEqual([0]);
        });
    });
});
