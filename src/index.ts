import { StrengthScore } from './StrengthScore';
type ValidationType = 'minLength' | 'maxLength' | 'lowercase' | 'uppercase' | 'number' | 'dictionary' | 'common';

// "use strict";
export default module.exports = (inputString: string = "Hello Friend", props: ValidationType[] = []) => {
  console.log(inputString);
  let params = ['uppercase', 'lowercase', 'number', ...props];
  const score = StrengthScore(inputString, params);
  console.log("Score is::::>>>>>>>>", score);
  return score;
}
// passwordStrength();`
