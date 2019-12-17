"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasUpperCase = hasUpperCase;
exports.hasLowerCase = hasLowerCase;
exports.hasNumber = hasNumber;
exports.hasMinLength = hasMinLength;
exports.hasMaxLength = hasMaxLength;
exports.hasDictionaryWord = hasDictionaryWord;
exports.hasCommonPassword = hasCommonPassword;

var _wordlist = require("./wordlist");

// Returns true if string has atleast one uppercase letter
function hasUpperCase(str) {
  var regEx = /[A-Z]/;
  return regEx.test(str);
} // Returns true if string has atleast one lowercase letter


function hasLowerCase(str) {
  var regEx = /[a-z]/;
  return regEx.test(str);
} // Returns true if string has atleast one number


function hasNumber(str) {
  var regEx = /\d/;
  return regEx.test(str);
} // Returns true is string has atleast the provided min length


function hasMinLength(str) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return str.length >= len;
} // Returns true is string has atmost the provided max length


function hasMaxLength(str) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return str.length <= len;
} // return true if it contains atleast a single dictionary word


function hasDictionaryWord(str) {
  var wordSet = new Set(_wordlist.DICTIONARY_WORDLIST);
  return wordSet.has(str.toLowerCase());
} // return true if it contains atleast a single commonly used password


function hasCommonPassword(str) {
  var wordSet = new Set(_wordlist.COMMONLY_USED_WORDLIST);
  return wordSet.has(str.toLowerCase());
}