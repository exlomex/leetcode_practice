function mergeAlternately(word1: string, word2: string): string {
    const longestStringLength = word1.length > word2.length ? word1.length : word2.length;
    let mergedString = [];
    for (let i = 0; i < longestStringLength; i++) {
        if (word1[i]) mergedString.push(word1[i])
        if (word2[i]) mergedString.push(word2[i])
    }
    return mergedString.join('')
}

console.log(mergeAlternately("abc", "pqr"));