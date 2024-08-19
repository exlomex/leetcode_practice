import { buildTree, TreeNode } from "./TreeBuilder";

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const firstRootLeaves: number[] = [], secondRootLeaves: number[] = []
    const stack = [root1]

    while (stack.length) {
        const currentNode = stack.pop();
        const left = currentNode?.left;
        const right = currentNode?.right;

        if (left) stack.push(left);
        if (right) stack.push(right);
        if (!left && !right && currentNode?.val) firstRootLeaves.push(currentNode?.val);
    }

    stack.push(root2)
    while (stack.length) {
        const currentNode = stack.pop();
        const left = currentNode?.left;
        const right = currentNode?.right;

        if (left) stack.push(left);
        if (right) stack.push(right);
        if (!left && !right && currentNode?.val) secondRootLeaves.push(currentNode?.val);
    }

    return firstRootLeaves.length === secondRootLeaves.length && firstRootLeaves.every((value, index) => value === secondRootLeaves[index])
}

const root1 = buildTree([3,5,1,6,2,9,8,null,null,7,4])
const root2 = buildTree([3,5,1,6,7,4,2,null,null,null,null,null,null,9,8])
console.log(leafSimilar(root1, root2));

