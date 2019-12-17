"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _StrengthScore = require("./StrengthScore");

// "use strict";
var _default = module.exports = function () {
  var inputString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Hello Friend";
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var score = (0, _StrengthScore.StrengthScore)(inputString, props);
  console.log(score);
  return score;
}; // passwordStrength();`


exports["default"] = _default;