function maxArea(height: number[]): number {
    let left = 0, right = height.length - 1, maxContainerValue = 0

    while (left < right) {
        const tempValue = Math.abs(left - right) * Math.min(height[left], height[right])
        if (tempValue > maxContainerValue) {
            maxContainerValue = tempValue
        }
        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }
    return maxContainerValue
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));