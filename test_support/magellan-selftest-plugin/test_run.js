/*
  Fake testing for unit testing purposes
*/
var _ = require("lodash");

var FakeTestrun = function (options) {
  _.extend(this, options);
};

FakeTestrun.prototype.getCommand = function () {
  return "/Users/home/.nvm/versions/node/v5.0.0/bin/node";
};

FakeTestrun.prototype.getEnvironment = function (env) {
  return env;
};

FakeTestrun.prototype.getArguments = function () {
  return ["./test_support/fake_test.js", this.locator.toString()];
};

module.exports = FakeTestrun;
