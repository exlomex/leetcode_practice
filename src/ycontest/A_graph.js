/**
 * @param {{
 *   graph: Record<string, string[]>,
 *   startVertex: string,
 *   endVertex: string,
 * }}
 * @returns {string[]}
 */
module.exports = function solution({ graph, startVertex, endVertex }) {
    if (startVertex === endVertex) return [startVertex];
    const queue = [...graph[startVertex]];
    const visited = [startVertex];

    let current = queue.shift()
    while (current) {
        for (let i = 0; i < graph[current].length; i++) {
            if (!visited.includes(graph[current][i])) {
                queue.push(graph[current][i])
            }
        }
        visited.push(current)

        if (current === endVertex) return visited
        current = queue.shift()
    }
    return []
}


// Вызов функций внутри того же файла
const input1 = {
    graph: {
        Александра: ["Борис"],
        Борис: ["Александра", "Светлана"],
        Светлана: ["Борис"],
    },
    startVertex: "Александра",
    endVertex: "Александра",
};

console.log(module.exports(input1));
