function gcdOfStrings(str1: string, str2: string): string {
    let gcd = ''
    for (let i = 0; i < str1.length; i++) {
        const strSlice = str1.slice(0, i + 1)
        if (str1.length % (i + 1)) continue;
        const multCounter = str1.length / (i + 1)
        if (strSlice.repeat(multCounter) === str1) {
            if (str2.length % (i + 1)) continue;
            const secondMultCounter = str2.length / (i + 1)
            if (strSlice.repeat(secondMultCounter) === str2) {
                if (strSlice.length > gcd.length) {
                    gcd = strSlice
                }
            }
        };
    }
    return gcd
};

console.log(gcdOfStrings("ABABAB", "ABAB"));