function uniquePaths(m: number, n: number): number {
    if (m === n && m === 1) return 1
    const dp: number[][] = Array.from({length: m}, () => Array(n).fill(1))
    dp[0][0] = 0
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
}

console.log(uniquePaths(3,3));