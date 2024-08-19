import { buildTree, TreeNode } from "./TreeBuilder";

function goodNodes(root: TreeNode | null): number {
    if (!root) return 0;
    let count = 0;

    const dfs = (root: TreeNode, max: number) => {
        if (root.val >= max) count++;

        if (root.left) dfs(root.left, Math.max(max, root.val));
        if (root.right) dfs(root.right, Math.max(max, root.val));
    }
    dfs(root, -Infinity)
    return count
}

const root = buildTree([3,1,4,3,null,1,5])
console.log(goodNodes(root));