export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

export function buildTree(arr: (number | null)[]): TreeNode | null {
    if (arr.length === 0) return null;

    const root = new TreeNode(arr[0]!);
    const queue: (TreeNode | null)[] = [root];
    let i = 1;

    while (queue.length && i < arr.length) {
        const current = queue.shift();

        if (current !== null && current !== undefined) {
            if (arr[i] !== null) {
                current.left = new TreeNode(arr[i]!);
                queue.push(current.left);
            }
            i++;

            if (i < arr.length && arr[i] !== null) {
                current.right = new TreeNode(arr[i]!);
                queue.push(current.right);
            }
            i++;
        }
    }

    return root;
}