function maxOperations(nums: number[], k: number): number {
    let left = 0, right = nums.length - 1;
    nums.sort((a, b) => a - b)
    let answerCounter = 0;
    while (left < right) {
        if (nums[left] + nums[right] < k) {
            left++;
        } else if (nums[left] + nums[right] > k) {
            right--;
        } else {
            answerCounter++;
            left++;
            right--;
        }
    }
    return answerCounter;
}

maxOperations([5,2,6,2,3,4], 7)

