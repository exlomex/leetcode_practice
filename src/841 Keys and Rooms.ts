function canVisitAllRooms(rooms: number[][]): boolean {
    const visited: number[] = [];
    const dfs = (room: number[], visited: number[]) => {
        visited.push(rooms.indexOf(room))
        for (const key of room) {
            if (!visited.includes(key)) {
                dfs(rooms[key], visited)
            }
        }
    }
    dfs(rooms[0], visited)
    return visited.length === rooms.length
}

canVisitAllRooms([[1],[2],[3],[]])
canVisitAllRooms([[1,3],[3,0,1],[2],[0]])