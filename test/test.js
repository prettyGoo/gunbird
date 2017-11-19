// Task specific
// В одной точке
// Оба на земле, ветер дует вниз
// Оба под землей

// Task not specific
// функция piupiu вообще есть
const index = require("../index").index;
const piupiu = index.piupiu;
const program = index.program;

const assert = require('chai').assert
const expect = require('chai').expect


describe('index.js', () => {

  it("should have piupiu function", () => {
    expect(piupiu).to.exist;
  });

  it("should have commander CLI ", () => {
    assert.equal(program.constructor.name, 'Command')
  });

  it("should have commander CLI with options", () => {
    assert.equal(program.option.length, 4)
  });

  describe('business-logic', () => {
    describe('#piupiu', () => {
      describe('killed result', () => {
        it("should be if no wind", () => {
          assert.equal('killed', piupiu(10, 10, 0));
        });

        it("should be if zero distance", () => {
          assert.equal('killed', piupiu(10, 0, 10));
        });
      });

      describe('miss result', () => {
        it("should be if no wind", () => {
          // assert.equal('killed', piupiu(10, 10, 0));
        });
      });
    });
  })

  describe('code', () => {
    describe('#piupiu', () => {
      it("should return string", () => {
        expect(piupiu()).to.be.a('string');
        expect(piupiu(1)).to.be.a('string');
        expect(piupiu(1, 1)).to.be.a('string');
        expect(piupiu(100, 100, 0)).to.be.a('string');
      });
    });
  })
})
