const { TestScheduler } = require('jest');
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 22 + 20", () => {
            expect(addition(20, 22)).toBe(42);
        })
    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});