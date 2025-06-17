/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let minVal = nums[0];
    let maxDiff = -1;

    for (let j = 1; j < nums.length; j++) {
        
        if (nums[j] > minVal) {
            maxDiff = Math.max(maxDiff, nums[j] - minVal);
        } else {
           
            minVal = nums[j];
        }
    }

    return maxDiff;
};