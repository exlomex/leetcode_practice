class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function makeLinkedList(nodeValues: number[]) {
    if (!nodeValues.length) return new ListNode();
    let head: ListNode = new ListNode(nodeValues[0])
    let tempHead = head;
    if (nodeValues.length === 1) return head;

    for (let i = 1; i < nodeValues.length; i++) {
        tempHead.next = new ListNode(nodeValues[i])
        tempHead = tempHead.next
    }
    return head
}

function printLinkedList(list: ListNode | null) {
    const listArr = [];
    while (list) {
        listArr.push(list.val)
        list = list.next
    }
    console.log(listArr);
    return listArr;
}

function oddEvenList(head: ListNode | null): ListNode | null {
    let lastEven = null, firstOdd = null, lastOdd = null;
    let index = 0;
    let mainHead = head;
    while (mainHead) {
        const tempNextValue = mainHead.next
        if (index % 2 === 0) {
            if (lastEven) lastEven.next = mainHead;
            lastEven = mainHead;
        } else if (index % 2 === 1) {
            if (!firstOdd) firstOdd = mainHead;
            if (lastOdd) lastOdd.next = mainHead;
            lastOdd = mainHead;
        }
        index++
        mainHead = tempNextValue
    }
    if (lastOdd) lastOdd.next = null
    if (lastEven) lastEven.next = firstOdd
    return head
}

printLinkedList(oddEvenList(makeLinkedList([1,2,3,4,5])))