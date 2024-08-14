function findMaxAverage(nums: number[], k: number): number {
    let left = 0, maxValue = -Infinity, currentSumOfSlice = 0;
    for (let right = 0; right < nums.length; right++) {
        currentSumOfSlice += nums[right];

        if (right - left === k - 1) {
            const tempAverage = currentSumOfSlice / k
            if (tempAverage > maxValue) maxValue = tempAverage;
            currentSumOfSlice -= nums[left];
            left++
        }
    }
    return maxValue
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
