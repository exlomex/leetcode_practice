function pivotIndex(nums: number[]): number {
    const prefixSum = new Array(nums.length + 1).fill(0)
    for (let i = 1; i < prefixSum.length; i++) {
        prefixSum[i] = nums[i - 1] + prefixSum[i - 1]
    }
    for (let j = 0; j < nums.length; j++) {
        if (prefixSum[j] === prefixSum[prefixSum.length - 1] - prefixSum[j + 1]) {
            return j
        }
    }
    return -1
}

console.log(pivotIndex([1,7,3,6,5,6]))
console.log(pivotIndex([1,2,3]));
