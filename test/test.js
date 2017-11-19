// Task specific
// В одной точке
// Оба на земле, ветер дует вниз
// Оба под землей

// Task not specific
// функция piupiu вообще есть

var fs = require('fs');
var vm = require('vm');
var path = './index.js';

var code = fs.readFileSync(path);
vm.runInThisContext(code);

const assert = require('chai').assert
const should = require('chai').should()
// const assert = require('assert')


describe('index.js', () => {
  describe('business-logic', () => {

  })

  describe('code', () => {
    //такая функция вообще существует
  })
})

describe('index.js', function() {
  describe('#piupiu', function() {
    it("should return 'Killed' when there is no wind", function() {
      assert.equal(null, piupiu());
    });
  });
});