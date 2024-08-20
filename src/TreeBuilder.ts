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

export function buildBST(arr: number[]): TreeNode {
    if (!arr.length) return new TreeNode()
    const root = new TreeNode(arr[0])
    if (arr.length < 2) return root;

    const insertIntoBST = (root: TreeNode | null, val: number) => {
        if (root === null) return new TreeNode(val)

        if (val < root.val) {
            root.left =  insertIntoBST(root.left, val)
        } else {
            root.right =  insertIntoBST(root.right, val)
        }
        return root
    }

    for (let i = 1; i < arr.length; i++) {
        insertIntoBST(root, arr[i])
    }

    return root;
}