// Алгоритм Дейкстры
const graph: Record<string, Record<string, number>> = {
    a: {b: 2, c: 1},
    b: {a: 2, f: 7},
    c: {a: 1, d: 5, e: 2},
    d: {c: 5, f: 2},
    e: {c: 2, f: 1},
    f: {b: 7, d: 2, e: 1, g: 1},
    g: {f: 1}
}


function findShortestWay(graph: Record<string, Record<string, number>>, start: string, end: string) {
    const costs: Record<string, number> = {};
    const processedWays: string[] = [start]

    const startNodeNeighbors = graph[start];
    Object.keys(graph).forEach(node => {
        if (node !== start) costs[node] = startNodeNeighbors[node] ? startNodeNeighbors[node] : Infinity;
    })

    let shortestNode = findShortestNode()
    while (shortestNode) {
        const neighbors = graph[shortestNode]
        Object.keys(neighbors).forEach(neighbor => {
            const way = costs[shortestNode] + neighbors[neighbor]
            if (way < costs[neighbor]) costs[neighbor] = way;
        })
        processedWays.push(shortestNode);
        shortestNode = findShortestNode()
    }

    function findShortestNode() {
        let shortestNode = '';
        let shortestNodeLength = Infinity;
        Object.keys(graph).forEach(node => {
            if (node !== start && !processedWays.includes(node)) {
                if (costs[node] < shortestNodeLength) {
                    shortestNodeLength = costs[node];
                    shortestNode = node;
                }
            }
        })
        return shortestNode
    }
    console.log(costs);
    return costs;
}



findShortestWay(graph, 'a', 'b');