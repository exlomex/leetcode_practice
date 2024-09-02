function oneEditDist(s: string, t: string): boolean {
    if (s.length < t.length) {
        [s, t] = [t, s]
    }

    if (s.length - t.length > 1) return false

    for (let i = 0; i < t.length; i++) {
        if (s[i] !== t[i]) {
            if (s.length === t.length) {
                return s.slice(i + 1) === t.slice(i + 1) // replace
            } else {
                return s.slice(i + 1) === t.slice(i) // delete
            }
        }
    }
    return true
}

console.log(oneEditDist('ab', 'acb'));
// console.log(oneEditDist('dog', 'dags'));

