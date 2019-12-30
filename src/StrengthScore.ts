import { hasCommonPassword, hasDictionaryWord, hasLowerCase, hasMinLength, hasNumber, hasUpperCase } from './PasswordCheck';
type ValidationType = 'minLength' | 'maxLength' | 'lowercase' | 'uppercase' | 'number' | 'dictionary' | 'common';

export function StrengthScore(inpString: string, params: ValidationType[] = []): any {
  let score: number = 0;
  let total: number = params.length;

  try {
    for (let validator of params) {
      switch (validator) {
        case 'uppercase':
          if (hasUpperCase(inpString)) {
            score += 1;
          }
        break;
        case 'lowercase':
          if (hasLowerCase(inpString)) {
            score += 1;
          }
        break;
        case 'number':
          if (hasNumber(inpString)) {
            score += 1;
          }
          total += 1;
        break;
        case 'minLength':
          if (hasMinLength(inpString)) {
            score += 1;
          }
        break;
        case 'minLength':
          if (hasMinLength(inpString)) {
            score += 1;
          }
        break;
        case 'dictionary':
          if (hasDictionaryWord(inpString)) {
            score += 1;
          }
        break;
        case 'common':
          if (hasCommonPassword(inpString)) {
            score += 1;
          }
        default:
          break;
      }
    }
  } catch (error) {
    return 0;
  }

  if (total === 0) return 0;
  return ((score/total) * 100).toFixed(2);
}
