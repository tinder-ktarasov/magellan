/*
  Fake testing for unit testing purposes
*/
var _ = require("lodash");

var JavaTestRun = function (options) {
  _.extend(this, options);
};

JavaTestRun.prototype.getCommand = function () {
  // For java, this would read "java"
  return "bash";
};

JavaTestRun.prototype.getEnvironment = function (env) {
  return env;
};

JavaTestRun.prototype.getArguments = function () {
  // For java, this might be ["-classpath", "./test_support/java/", this.locator.toString()]
  // where the locator would be just the name of the class
  return [this.locator.toString()];
};

module.exports = JavaTestRun;
