function smallestMissingPositiveInteger(nums) {

  nums.sort();
  let number = 1;
  let i = 0;
  while(i<nums.length && nums[i]<=0) i++;
  for(i; i<nums.length; i++) {
    if(nums[i] != number) return number;
    number++;
  }
  return number;
 }
  
  module.exports = smallestMissingPositiveInteger;

