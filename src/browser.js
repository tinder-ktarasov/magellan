module.exports = function (id, resolution, orientation) {
  var result = {
    slug: function () {
      return this.browserId
        + (this.resolution ? "_" + this.resolution : "")
        + (this.orientation ? "_" + this.orientation : "");
    },
    toString: function () {
      return this.browserId
        + (this.resolution ? " @" + this.resolution : "")
        + (this.orientation ? " orientation: " + this.orientation : "");
    },
    browserId: id,
    resolution: resolution ? resolution.trim() : undefined,
    orientation: orientation ? orientation.trim() : undefined
  };
  return result;
};
