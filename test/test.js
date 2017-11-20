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

      it('should be 0 if zero distance', () => {
        assert.equal(0, piupiu(10, 0, 10, 10));

        assert.equal(0, piupiu(10, 0, 10, 0));

        assert.equal(0, piupiu(10, 0, 0, 10));
      });

      it('should be undefined if below earth', () => {
        assert.equal(undefined, piupiu(-10, 10, 0, 10));
      });

      it('should be undefined if bullet velocity is 0', () => {
        assert.equal(undefined, piupiu(10, 10, 0, 10));
      });

      it('should be undefined if not real', () => {
        assert.equal(undefined, piupiu(10, 100000, 10, 10));
      });
    });
  })

  describe('code', () => {
    describe('#piupiu', () => {
      it('should return string if error', () => {
        expect(piupiu()).to.be.a('undefined');
  
        expect(piupiu(1)).to.be.a('undefined');
  
        expect(piupiu('1')).to.be.a('undefined');
      });
    });
  })
})
