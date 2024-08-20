import { buildTree, TreeNode } from "./TreeBuilder";


function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    const leftNode = maxDepth(root.left);
    const rightNode = maxDepth(root.right);

    return Math.max(leftNode, rightNode) + 1;
}

function maxDepth1(root: TreeNode | null): number {
    if (!root) return 0;
    let maxDepVal = -Infinity;
    const dfs = (root: TreeNode | null, depth: number) => {
        if (depth > maxDepVal) maxDepVal = depth;
        if (root) {
            if (root.left) dfs(root.left, depth + 1)
            if (root.right) dfs(root.right, depth + 1)
        }
    }
    dfs(root, 1)
    return maxDepVal;
}

// [3,9,20,null,null,15,7]
const root = buildTree([3,9,20,null,null,15,7])
console.log(maxDepth(root));