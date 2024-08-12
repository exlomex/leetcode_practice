function isSubsequence(s: string, t: string): boolean {
    if (!s.length) return true;

    let countOfFindedLetters = 0;
    let left = 0;
    for (let right = 0; right < t.length; right++) {
        if (t[right] === s[countOfFindedLetters]) {
            left = right;
            countOfFindedLetters++;
        }

        if (countOfFindedLetters === s.length) return true;
    }
    return false;
}

console.log(isSubsequence("c", "c"));
console.log(isSubsequence("abc", "ahbgdc"));