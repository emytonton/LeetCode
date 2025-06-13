/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */

// precisamos encontrar p pares de elementos em nums de forma que a dif max entre esses p pares seja a menor possivel
var minimizeMax = function(nums, p) {
    if (p === 0) {
        return 0;
    }

  
    nums.sort((a, b) => a - b); // ordenando pq os elementos mais proximos fariam direferenças menores logicamente

    const n = nums.length;

    
    const canFormPairs = (max_diff) => {
        let count = 0;
        for (let i = 0; i < n - 1; i++) {
            if (nums[i+1] - nums[i] <= max_diff) {
                count++;
                i++;
            }
            if (count >= p) {
                return true;
            }
        }
       
        return false;
    };

    
    let left = 0;
    let right = nums[n - 1] - nums[0];
    let ans = right; 
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

       
        if (canFormPairs(mid)) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    
    return ans;
};