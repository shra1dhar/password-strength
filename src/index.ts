import { StrengthScore } from './StrengthScore';

// "use strict";
export default module.exports = (inputString: string = "Hello Friend", props: string[] = []) => {
  console.log(inputString);
  let params = ['uppercase', 'lowercase', 'number', ...props];
  const score = StrengthScore(inputString, params);
  console.log("Score is::::>>>>>>>>", score);
  return score;
}
// passwordStrength();`
