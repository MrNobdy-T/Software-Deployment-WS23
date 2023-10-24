import assert from "assert";
import { add, sub, div, mul } from "../math.js";

describe("Math", function () {
  describe("add", function () {
    it("Should add two numbers", function () {
      assert.equal(4, add(2, 2));
    });
  });
  describe("sub", function () {
    it("Should subtract two numbers", function () {
      assert.equal(2, sub(4, 2));
    });
  });
  describe("mul", function () {
    it("Should multiply two numbers", function () {
      assert.equal(10, mul(5, 2));
    });
  });
  describe("div", function () {
    it("Should divide two numbers", function () {
      assert.equal(1, div(2, 2));
    });
  });
  describe("divByZero", function () {
    it("Shouldn't divide by zero", function () {
      assert.throws(() => div(5, 0));
    });
  });
});
