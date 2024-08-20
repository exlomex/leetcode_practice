import { buildTree, TreeNode } from "./TreeBuilder";

function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];
    const queue: [TreeNode | null, number][] = [[root, 1]];
    const rightSideValues: Record<number, number> = {};

    while (queue.length) {
        const current = queue.shift();
        if (current) {
            const [currentNode, depth] = current;
            if (currentNode && depth) rightSideValues[depth] = currentNode?.val;
            if (currentNode && currentNode.left) queue.push([currentNode.left, depth + 1])
            if (currentNode && currentNode.right) queue.push([currentNode.right, depth + 1])
        }
    }
    return Object.values(rightSideValues);
}

console.log(rightSideView(buildTree([1,2,3,null,5,null,4])));
// console.log(rightSideView(buildTree([1,2,3,null,5,6,null,4])));
// console.log(rightSideView(buildTree([1,2])));
// console.log(rightSideView(buildTree([1,2,3,4])));
