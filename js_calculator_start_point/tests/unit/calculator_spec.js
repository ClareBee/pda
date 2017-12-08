var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should add to the running total', function(){
    calculator.add(2);
    assert.equal(calculator.runningTotal, 2);
  });
  it('should be able to subtract', function(){
    calculator.subtract(1);
    assert.equal(calculator.runningTotal, -1);
  });
  it('should be able to divide', function(){
    calculator.previousTotal = 4;
    calculator.divide(2);
    assert.equal(calculator.runningTotal, 2);
  });
  it('should be able to multiply', function(){
    calculator.previousTotal = 2;
    calculator.multiply(2);
    assert.equal(calculator.runningTotal, 4);
  });
  it('should clear the running total if a number is clicked after an operation has finished', function(){
    calculator.add(2);
    calculator.numberClick(2);
    assert.equal(calculator.runningTotal, 2);
  });
  it('should reset the new total status if a number is clicked when there is zero in the running total', function(){
    calculator.numberClick(2);
    assert.equal(calculator.runningTotal, 2);
    assert.equal(calculator.newTotal, false);
  });
  it('should perform the previous operation if a previous operator has been clicked and reset the running total', function(){
    calculator.runningTotal = 2;
    calculator.previousTotal = 2;
    calculator.previousOperator = '+';
    calculator.operatorClick('+');
    assert.equal(calculator.runningTotal, 4);
  });
  it('should clear the operator when the equals button is clicked', function(){
    calculator.previousOperator = '+';
    calculator.operatorClick('=');
    assert.equal(calculator.previousOperator, null);
  });
  it('should store the previous operator', function(){
    calculator.operatorClick('*');
    assert.equal(calculator.previousOperator, '*');
  });
  it('should flag that a new total has been calculated when an operator is clicked', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    assert.equal(calculator.newTotal, true);
  });
  it('should have a clear function that resets previous data if the running total is at zero', function(){
    calculator.runningTotal = 0;
    calculator.previousOperator = '+';
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
    assert.equal(calculator.previousTotal, null);
    assert.equal(calculator.previousOperator, null);
  });
  it('should have a clear function that resets the running total to zero', function(){
    calculator.runningTotal = 10;
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  });
});
