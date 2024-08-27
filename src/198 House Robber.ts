function rob(nums: number[]): number {
    const dp = Array(nums.length).fill(-Infinity)
    dp[0] = nums[0]; dp[1] = nums[1]

    if (nums.length < 2) return nums[0]
    if (nums.length === 2) return Math.max(dp[0], dp[1])

    for (let i = 2; i < nums.length; i++) {
        for (let j = 0; j < i - 1; j++) {
            dp[i] = Math.max(dp[j], dp[i] - nums[i]) + nums[i];
        }
    }
    return Math.max(...dp)
}

// rob([1,2,3,1])
// rob([2,7,9,3,1])
// console.log(rob([0]));
console.log(rob([2,1,1,2]));

