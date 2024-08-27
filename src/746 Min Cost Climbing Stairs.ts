function minCostClimbingStairs(cost: number[]): number {
    const dp = Array(cost.length)
    dp[0] = cost[0]
    dp[1] = cost[1]
    if (cost.length <= 2) return Math.min(dp[0], dp[1])
    for (let i = 2; i < cost.length; i++) {
        dp[i] = Math.min(dp[i - 1],dp[i - 2]) + cost[i]
    }
    return Math.min(dp.at(-1), dp.at(-2))
}

console.log(minCostClimbingStairs([10,15,20]));