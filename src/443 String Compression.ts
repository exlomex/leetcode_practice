function compress(chars: string[]): number {
    let left = 0;
    let index = 0;
    for (let right = 0; right <= chars.length; right++) {
        if (chars[left] != chars[right]) {
            let groupLength = right - left
            if (groupLength === 1) {
                chars[index++] = chars[left]
            } else {
                chars[index++] = chars[left]
                const stringLength = groupLength.toString()
                for (let i = 0; i < stringLength.length; i++) {
                    chars[index++] = stringLength[i]
                }
            }
            left = right
        }
    }
    chars.splice(index)
    return chars.length
}

compress(["a","a","b","b","c","c","c"])
compress(['a', 'b', 'c'])
compress(["a"])