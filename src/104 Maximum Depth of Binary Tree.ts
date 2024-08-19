import { buildTree, TreeNode } from "./TreeBuilder";


function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    const leftNode = maxDepth(root.left);
    const rightNode = maxDepth(root.right);

    return Math.max(leftNode, rightNode) + 1;
}

// [3,9,20,null,null,15,7]
const root = buildTree([3,9,20,null,null,15,7])
console.log(maxDepth(root));