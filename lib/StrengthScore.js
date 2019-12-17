"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StrengthScore = StrengthScore;

var _PasswordCheck = require("./PasswordCheck");

function StrengthScore(inpString) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var score = 0;
  var total = params.length;

  try {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = params[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var validator = _step.value;

        switch (validator) {
          case 'uppercase':
            if ((0, _PasswordCheck.hasUpperCase)(inpString)) {
              score += 1;
            }

            break;

          case 'lowercase':
            if ((0, _PasswordCheck.hasLowerCase)(inpString)) {
              score += 1;
            }

            break;

          case 'number':
            if ((0, _PasswordCheck.hasNumber)(inpString)) {
              score += 1;
            }

            total += 1;
            break;

          case 'minLength':
            if ((0, _PasswordCheck.hasMinLength)(inpString)) {
              score += 1;
            }

            break;

          case 'minLength':
            if ((0, _PasswordCheck.hasMinLength)(inpString)) {
              score += 1;
            }

            break;

          case 'dictionary':
            if ((0, _PasswordCheck.hasDictionaryWord)(inpString)) {
              score += 1;
            }

            break;

          case 'common':
            if ((0, _PasswordCheck.hasCommonPassword)(inpString)) {
              score += 1;
            }

          default:
            break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } catch (error) {
    console.log(error);
    return 0;
  }

  console.log('score', score);
  console.log('total', total);
  if (total === 0) return 0;
  return (score / total * 100).toFixed(2);
}