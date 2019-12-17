import { StrengthScore } from './StrengthScore';
type ValidationType = 'minLength' | 'maxLength' | 'lowercase' | 'uppercase' | 'number' | 'dictionary' | 'common';

// "use strict";
export default module.exports = (inputString: string = "Hello Friend", props: ValidationType[] = []) => {
  const score = StrengthScore(inputString, props);
  console.log(score);
  return score;
}
// passwordStrength();`
