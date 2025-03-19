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
})