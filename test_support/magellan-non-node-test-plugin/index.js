module.exports = {
  initialize: function () {

  },
  filters: {},
  TestRun: require("./test_run"),

  // This reads "other" but could easily read "JRE", "Python", etc, and is intended for UX purposes.
  defaultEnvironmentName: "other",

  // signal that this framework needs to be launched with spawn() instead of fork()
  isSpawned: true
};