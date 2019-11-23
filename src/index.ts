import { StrengthScore } from './StrengthScore';

// "use strict";
module.exports = (inputString = "Hello Friend", props = []) => {
  console.log(inputString);
  let params = [uppercase, lowercase, number, ...props];
  const score = StrengthScore(inputString, params);
  console.log("Score is::::>>>>>>>>", score);
  return score;
}
// passwordStrength();`
