/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    for (let i = 0; i < k; i++) {
        const cuttedNum = nums.splice(nums.length - 1, 1)
        nums.unshift(...cuttedNum)
    }
}

// rotate([1,2,3,4,5,6,7], 3)
rotate([1,2], 5)