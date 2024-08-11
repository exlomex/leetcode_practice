function reverseVowels(s: string): string {
    const vowelsArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const stringArr = s.split('')

    let left = 0, right = stringArr.length - 1;

    while (left <= right) {
        if (vowelsArr.includes(stringArr[left]) && vowelsArr.includes(stringArr[right])) {
            [stringArr[left], stringArr[right]] = [stringArr[right], stringArr[left]]
        } else if (vowelsArr.includes(stringArr[left]) && !(vowelsArr.includes(stringArr[right]))) {
            right--
            continue
        } else if (!(vowelsArr.includes(stringArr[left])) && (vowelsArr.includes(stringArr[right]))) {
            left++
            continue
        }
        left++
        right--
    }
    return stringArr.join('')
};

console.log(reverseVowels("hello"));