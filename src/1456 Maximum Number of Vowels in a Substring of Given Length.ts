function maxVowels(s: string, k: number): number {
    let left = 0, maxCount = 0, currentCount = 0;
    const engVowels = ['a', 'e', 'i', 'o', 'u']
    for (let right = 0; right < s.length; right++) {
        if (engVowels.includes(s[right])) {
            currentCount++;
        }

        if (right - left === k - 1) {
            if (currentCount > maxCount) maxCount = currentCount;
            if (engVowels.includes(s[left])) currentCount--;
            left++;
        }
    }
    return maxCount
}

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("novowels", 1));
