import assert from "node:assert";
import { describe, it } from "node:test";
import { addition } from "../../calculator/addition";

describe('string calculator : addition', () => {
    it('should return 0 for empty string', () => {
        assert.strictEqual(addition(''), 0);
    });
})