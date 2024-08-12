function reverseWords(s: string): string {
    const strArray = s.trim().split(' ')
    return strArray.filter(str => str.length).reverse().join(' ')
}

reverseWords("  a good    example")