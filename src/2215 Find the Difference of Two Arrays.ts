function findDifference(nums1: number[], nums2: number[]): number[][] {
    const setOfNum1 = new Set(nums1), setOfNum2 = new Set(nums2);

    const uniqueNums1: Set<number> = new Set()
    setOfNum1.forEach(value => {
        if (!setOfNum2.has(value)) uniqueNums1.add(value)
    });

    const uniqueNums2: Set<number> = new Set()
    setOfNum2.forEach(value => {
        if (!setOfNum1.has(value)) uniqueNums2.add(value)
    });
    return [[...uniqueNums1], [...uniqueNums2]];
}

findDifference([1,2,3], [2,4,6])