import { COMMONLY_USED_WORDLIST, DICTIONARY_WORDLIST } from './wordlist';

// Returns true if string has atleast one uppercase letter
export function hasUpperCase(str: string): boolean {
  let regEx = /[A-Z]/;
  return regEx.test(str);
}

// Returns true if string has atleast one lowercase letter
export function hasLowerCase(str: string): boolean {
  let regEx = /[a-z]/;
  return regEx.test(str);
}

// Returns true if string has atleast one number
export function hasNumber(str: string): boolean {
  let regEx = /\d/;
  return regEx.test(str);
}

// Returns true is string has atleast the provided min length
export function hasMinLength(str: string, len: number = 6): boolean {
  return (str.length >= len);
}

// Returns true is string has atmost the provided max length
export function hasMaxLength(str: string, len: number = 6): boolean {
  return (str.length <= len);
}

// return true if it contains atleast a single dictionary word
export function hasDictionaryWord(str: string): boolean {
  const wordSet = new Set(DICTIONARY_WORDLIST);
  return wordSet.has(str.toLowerCase());
}

// return true if it contains atleast a single commonly used password
export function hasCommonPassword(str: string): boolean {
  const wordSet = new Set(COMMONLY_USED_WORDLIST);
  return wordSet.has(str.toLowerCase());
}
