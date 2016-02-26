var assert = require("assert");
var TestRunner = require("../src/test_runner");
var _ = require("lodash");
var settings = require("../src/settings");
var WorkerAllocator = require("../src/worker_allocator");
var createBrowser = require("../src/browser");

settings.framework = "magellan-non-node";
settings.testFramework = require("../test_support/magellan-non-node-test-plugin/index");
settings.testFramework.initialize({});

var MAX_WORKERS = 1;

var baseOptions = {
  debug: false,
  maxWorkers: MAX_WORKERS,
  maxTestAttempts: 1,
  browsers: [createBrowser("other")],
  listeners: [],
  bailFast: false,
  bailOnThreshold: false,
  serial: false,

  allocator: undefined,
  sauceSettings: undefined
};

describe("non-node test runner", function () {

  describe("single worker", function () {
    this.timeout(6000);

    it("runs one non-node test @non-node", function (done) {
      this.timeout(6000);

      var workerAllocator = new WorkerAllocator(MAX_WORKERS);

      var options = _.extend({}, baseOptions, {
        allocator: workerAllocator,
        onSuccess: done
      });

      workerAllocator.initialize(function (err) {
        var runner = new TestRunner(["GoodTest"], options);
        runner.start();
      });
    });

    it("runs one failing non-node test @non-node", function (done) {
      this.timeout(6000);

      var workerAllocator = new WorkerAllocator(MAX_WORKERS);

      var options = _.extend({}, baseOptions, {
        allocator: workerAllocator,
        onFailure: function () {
          done();
        }
      });

      workerAllocator.initialize(function (err) {
        var runner = new TestRunner(["BadTest"], options);
        runner.start();
      });
    });

    it("runs two non-node tests, one passing, one failing @non-node", function (done) {
      this.timeout(6000);

      var workerAllocator = new WorkerAllocator(MAX_WORKERS);

      var options = _.extend({}, baseOptions, {
        allocator: workerAllocator,
        onFailure: function () {
          done();
        }
      });

      workerAllocator.initialize(function (err) {
        var runner = new TestRunner(["GoodTest", "BadTest"], options);
        runner.start();
      });
    });

  });
});