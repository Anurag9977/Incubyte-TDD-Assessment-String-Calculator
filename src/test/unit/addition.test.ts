import assert from "node:assert";
import { describe, it } from "node:test";
import { addition } from "../../calculator/addition";

describe('string calculator : addition', () => {
    it('should return 0 for empty string', () => {
        assert.strictEqual(addition(''), 0);
    });
    it('should return the sum of numbers separated by commas in the string', () => {
        assert.strictEqual(addition('1,4'), 5);
    })
    it('should handle any amount of numbers', () => {
        assert.strictEqual(addition('1,4,6,7,8,9'), 35);
    })
    it('should handle new line character as delimiter', () => {
        assert.strictEqual(addition('1\n2,3'), 6);
        assert.strictEqual(addition('1\n4\n6,7, 8\n9'), 35);
    })
    it('should handle different delimiters', () => {
        assert.strictEqual(addition('//;\n1;2'), 3);
        assert.strictEqual(addition('//%\n1%2%3%4%5'), 15);
    })
    it('should throw an error if negative numbers are present', () => {
        assert.throws(() => addition('1,-2,-3'), new Error('negative numbers not allowed: -2, -3'));
        assert.throws(() => addition('1,\n,-2,-3,\n,4,-5'), new Error('negative numbers not allowed: -2, -3, -5'));
    })
})