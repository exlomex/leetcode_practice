/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    if (nums.length === 1) return;

    let first = 0
    for (let second = 0; second < nums.length; second++) {
        if (nums[second]) {
            [nums[first], nums[second]] = [nums[second], nums[first]]
            first++
        }
        console.log(nums);

    }
}

moveZeroes([0])