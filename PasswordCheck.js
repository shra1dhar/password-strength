import {DICTIONARY_WORDLIST, COMMONLY_USED_WORDLIST} from './wordlist';
// Returns true if string has atleast one uppercase letter
function hasUpperCase(str) {
  let regEx = /[A-Z]/;
  return regEx.test(str);
}

// Returns true if string has atleast one lowercase letter
function hasLowerCase(str) {
  let regEx = /[a-z]/;
  return regEx.test(str);
}

// Returns true if string has atleast one number
function hasNumber(str) {
  let regEx = /\d/;
  return regEx.test(str);
}

// Returns true is string has atleast the provided min length
function isMinLength(str, len) {
  return (str.length >= len);
}

// Returns true is string has atmost the provided max length
function isMaxLength(str, len) {
  return (str.length <= len);
}

// return true if it contains atleast a single dictionary word
function hasDictionaryWord(str) {
  const wordSet = new Set(DICTIONARY_WORDLIST);
  return wordSet.has(str);
}

// return true if it contains atleast a single commonly used password
function hasCommonPassword(str) {
  const wordSet = new Set(COMMONLY_USED_WORDLIST);
  return wordSet.has(str);
}