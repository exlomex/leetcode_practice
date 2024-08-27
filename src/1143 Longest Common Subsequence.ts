function longestCommonSubsequence(text1: string, text2: string): number {
    const firstLen = text1.length, secondLen = text2.length;

    const dp = Array.from({length: secondLen + 1}, () => Array(firstLen + 1).fill(0))

    for (let i = 1; i < secondLen + 1; i++) {
        for (let j = 1; j < firstLen + 1; j++) {
            if (text2[i - 1] === text1[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }
    console.log(dp);
    return dp[dp.length - 1][dp[0].length - 1]
}

// console.log(longestCommonSubsequence("ezupr", "ubmrap"));
console.log(longestCommonSubsequence("bsbin", "jmjkbkjk"));
// console.log(longestCommonSubsequence("abcba", "abcbcba"));
// console.log(longestCommonSubsequence("aab", "acd"));