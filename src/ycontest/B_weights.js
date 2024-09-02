const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m;
const edges = [];

rl.on('line', line => {
    if (!n && !m) {
        [n, m] = line.split(' ').map(Number);
    } else {
        edges.push(line.split(' ').map(Number));
        if (edges.length === m) {
            rl.close();
        }
    }
});

rl.on("close", () => {
    console.log(weightsMoves(n, m, edges)); // 4
    // console.log(weightsMoves(1, 1, [1])); // 1
    // console.log(weightsMoves(5, 2, [[1,2], [2,5]])); // 5
    // console.log(weightsMoves(5, 2, [[2, 1], [5, 2]])); // 5
})

function weightsMoves(n, m, threads) {
    const hashOfThreads = {};
    threads.forEach(threads => {
        if (!hashOfThreads[threads[0]]) {
            hashOfThreads[threads[0]] = [threads[1]]
        } else hashOfThreads[threads[0]].push(threads[1])

        if (!hashOfThreads[threads[1]]) {
            hashOfThreads[threads[1]] = [threads[0]]
        } else hashOfThreads[threads[1]].push(threads[0])
    })

    for (let i = 2; i <= n; i++) {
        if (!hashOfThreads[i]) {
            hashOfThreads[i] = [i - 1]
        } else hashOfThreads[i].push(i - 1)
    }

    // console.log(hashOfThreads);
    if (!hashOfThreads[1]) return 1

    const queue = [1];
    const visited = [];

    let current = queue.shift()
    while (current) {
        for (const neighbor of hashOfThreads[current]) {
            if (!visited.includes(neighbor) && neighbor) {
                queue.push(neighbor)
            }
        }

        visited.push(current)
        current = queue.shift()
    }
    return Math.max(...visited);
}
