import { expect } from 'chai';
import { Calculator } from '../calculator.js';

describe('our new test', function () {
  const calculator = new Calculator();
  [
    { value1: 1, value2: 1, result: 0 },
    { value1: -1, value2: 1, result: -2 },
    { value1: -1, value2: -1, result: 0 },
    { value1: 0, value2: -2, result: 2 },
    { value1: false, value2: true, result: -1 },
  ].forEach(testData => {
    it(`should return ${testData.result}`, async () => {
      const minus = calculator.subtraction(testData.value1, testData.value2);
      expect(minus).to.equal(testData.result);
    });
  });

  [
    { value1: 1, value2: 1, result: 1 },
    { value1: 22, value2: 2, result: 11 },
    { value1: 1, value2: 0, result: Infinity },
    { value1: 0, value2: 2, result: 0 },
    { value1: 1, value2: 2, result: 1 / 2 },
  ].forEach(testData => {
    it(`should return ${testData.result}`, async () => {
      const divide = calculator.divide(testData.value1, testData.value2);
      expect(divide).to.equal(testData.result);
    });
  });

  [
    { value: 1, result: 1 },
    { value: -1, result: 1 },
    { value: 0, result: 0 },
    { value: 10, result: 100 },
    { value: 2, result: 4 },
    { value: 1 / 2, result: 1 / 4 },
    { value: true, result: 1 },
  ].forEach(testData => {
    it(`should return ${testData.result}`, async () => {
      const exponentiation = calculator.exponentiation(testData.value);
      expect(exponentiation).to.equal(testData.result);
    });
  });

  it(`should return 12`, async () => {
    const multiply = calculator.multiply(...[2, 3, 2]);
    expect(multiply).to.equal(12);
  });
  it(`should return 2`, async () => {
    const multiply = calculator.multiply(...[2]);
    expect(multiply).to.equal(2);
  });
  it(`should return 1`, async () => {
    const multiply = calculator.multiply(...[]);
    expect(multiply).to.equal(1);
  });
  it(`should return -5`, async () => {
    const multiply = calculator.multiply(...[-5]);
    expect(multiply).to.equal(-5);
  });
  it(`should return 1/4`, async () => {
    const multiply = calculator.multiply(...[1 / 2, 1 / 2]);
    expect(multiply).to.equal(1 / 4);
  });
  it(`should return 1`, async () => {
    const multiply = calculator.multiply(...[true, true]);
    expect(multiply).to.equal(1);
  });
  it(`should return 7`, async () => {
    const add = calculator.add(...[2, 3, 2]);
    expect(add).to.equal(7);
  });
  it(`should return 0`, async () => {
    const add = calculator.add(...[]);
    expect(add).to.equal(0);
  });
  it(`should return -7`, async () => {
    const add = calculator.add(...[-2, -3, -2]);
    expect(add).to.equal(-7);
  });
  it(`should return 1`, async () => {
    const add = calculator.add(...[1 / 2, 1 / 2]);
    expect(add).to.equal(1);
  });
  it(`should return 1`, async () => {
    const add = calculator.add(...[1 / 2, 1 / 2]);
    expect(add).to.equal(1);
  });
  it(`should return 1`, async () => {
    const add = calculator.add(...[true]);
    expect(add).to.equal(1);
  });
});
