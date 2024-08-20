import { buildBST, TreeNode } from "./TreeBuilder";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return null;

    if (root && root.val) {
        if (val < root.val) {
            return searchBST(root.left, val)
        } else if (val > root.val) {
            return searchBST(root.right, val)
        } else if (val === root.val) {
            return root
        }
    }
    return null
}

console.log(searchBST(buildBST([4,2,7,1,3]), 2));

