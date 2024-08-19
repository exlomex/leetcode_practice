function uniqueOccurrences(arr: number[]): boolean {
    const hash: Record<number, number> = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in hash) {
            hash[arr[i]]++
        } else {
            hash[arr[i]] = 1
        }
    }
    const hashValues = Object.values(hash)
    const valueCounter: Record<number, number> = {};
    for (let i = 0; i < hashValues.length; i++) {
        if (hashValues[i] in valueCounter) return false;
        else {
            valueCounter[hashValues[i]] = 1
        }
    }
    return true
}

console.log(uniqueOccurrences([1,2]));