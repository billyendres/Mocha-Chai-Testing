log = console.log;
expect = require("chai").expect;
should = require("chai").should();

const { alwaysTrue, legitString } = require("./index");

_ = require("lodash");

//First param is the name you want printed to the screen
//Second is a function that runs and holds the unit test
describe("#mocha basics", () => {
  //Unit tests here
  //expect vs should
  it("true should be true", () => {
    true.should.be.true;
  });
  it("Expect true to be true", () => {
    expect(true).to.be.true;
  });
});

//AlwaysTrue
describe("#alwaysTrue", () => {
  it("i expect it to always be true", () => {
    expect(alwaysTrue()).to.be.true;
  });
  //Opposite
  it("should not be false", () => {
    expect(alwaysTrue()).to.not.be.false;
  });
});
