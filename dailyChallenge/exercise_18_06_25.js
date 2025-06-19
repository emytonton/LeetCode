var partitionArray = function(nums, k) {
    if (nums.length === 0) return 0;
    nums.sort((a, b) => a - b);
    let res = 1;
    let start = nums[0];
    for (let num of nums) {
        if (num - start > k) {
            res++;
            start = num;
        }
    }
    return res;
};