function increasingTriplet(nums: number[]): boolean {
    let firstNumber = Infinity, secondNimber = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= firstNumber) {
            firstNumber = nums[i]
        } else if (nums[i] <= secondNimber) {
            secondNimber = nums[i]
        } else {
            return true
        }

    }
    return false
}

increasingTriplet([1,2,3,4,5])