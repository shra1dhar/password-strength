import {
  hasUpperCase,
  hasLowerCase,
  hasNumber,
  isMinLength,
  isMaxLength,
  hasDictionaryWord,
  hasCommonPassword
 } from './PasswordCheck';

function StrengthScore(inpString, params = []) {
  let score = 0;
  const total = params.length;

  try {
    for (let validator of params) {
      switch (validator) {
        case uppercase:
          if (hasUpperCase(inpString))
            score++;
          // break;
        case lowercase:
          if (hasLowerCase(inpString))
            score++;
          // break;
        case number:
          if (hasNumber(inpString))
            score++;
          // break;
        case minLength:
          if (hasMinLength(inpString))
            score++;
          // break;
        case dictionary:
          if (hasDictionaryWord(inpString))
            score++;
          // break
        case common:
          if (hasCommonPassword(inpString))
            score++;
        default:
          throw new Error('Validator could not be parsed properly. Check Props');
      }
    }
  } catch (error) {
    console.log(error);
    return null;
  }
  return score;
}

export default StrengthScore;
