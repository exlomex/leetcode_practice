function tribonacci(n: number): number {
    const dp = Array(n + 1);
    dp[0] = 0
    dp[1] = dp[2] = 1
    if (n <= 2) return dp[n];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
    }
    return dp[n]
}

console.log(tribonacci(7));