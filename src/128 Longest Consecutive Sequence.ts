function longestConsecutive(nums: number[]): number {
    if (!nums.length) return 0

    nums.sort((a, b) => a - b)
    let longestSequence = 1;
    let currentSequence = 1
    let lastNumber = -10 * 6;
    for (let i = 0;  i < nums.length; i++ ) {
        if (lastNumber + 1 === nums[i]) {
            currentSequence++
        } else if (lastNumber === nums[i]) {
            continue
        } else {
            currentSequence = 1
        }
        if (currentSequence > longestSequence) {
            longestSequence = currentSequence
        }
        lastNumber = nums[i]
    }
    return longestSequence
}

// longestConsecutive([100,4,200,1,3,2])
longestConsecutive([0,3,7,2,5,8,4,6,0,1])