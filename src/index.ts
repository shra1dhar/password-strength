import { StrengthScore } from './StrengthScore';
type ValidationType = 'minLength' | 'maxLength' | 'lowercase' | 'uppercase' | 'number' | 'dictionary' | 'common';

// "use strict";
export default module.exports = (inputString: string = "Hello Friend", props: ValidationType[] = []) => {
  let params:ValidationType[] = [];
  const score = StrengthScore(inputString, params);
  console.log("Score is::::>>>>>>>>", score);
  return score;
}
// passwordStrength();`
