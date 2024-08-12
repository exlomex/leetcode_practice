function largestAltitude(gain: number[]): number {
    const prefixSum = new Array(gain.length + 1).fill(0)
    for (let i = 1; i < prefixSum.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + gain[i - 1]
    }
    return Math.max(...prefixSum)
}

largestAltitude([-5,1,5,0,-7])