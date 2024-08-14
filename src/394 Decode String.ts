function decodeString(s: string): string {
    const stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i])
        } else {
            let s = '', cur = stack.pop();
            while (cur !== '[') {
                s += cur
                cur = stack.pop();
            }
            let num = '';
            cur = stack.pop()
            while (!Number.isNaN(Number(cur))) {
                num += cur
                cur = stack.pop();
            }
            num = num.split('').reverse().join('')
            s = s.split('').reverse().join('')
            if (cur) stack.push(cur)
            stack.push(...s.repeat(Number(num)).split(''))
            // if (cur) {
            //     stack.push(cur + s.repeat(Number(num)))
            // } else {
            //     stack.push(s.repeat(Number(num)))
            // }
        }

    }
    return stack.join('');
}

decodeString("3[a2[c]]")
decodeString("2[abc]3[cd]ef")
decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef")
