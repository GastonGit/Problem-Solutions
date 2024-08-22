 class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
     }
 }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let currentNode1 = l1;
    let currentNode2 = l2;
    let carry = 0;
    
    let headNode: ListNode | null = null;
    let previousNode: ListNode | null = null;
    
    while (currentNode1 || currentNode2 || carry > 0) {
        const val1 = currentNode1?.val ?? 0;
        const val2 = currentNode2?.val ?? 0;
        
        const totalValue = val1 + val2 + carry;
        const digit = totalValue % 10;
        carry = Math.floor(totalValue / 10);
        
        const newNode = new ListNode(digit);
        
        if (!headNode){
            headNode = newNode;
        }

        if (previousNode) {
            previousNode.next = newNode;
        }
        previousNode = newNode;

        currentNode1 = currentNode1?.next ?? null;
        currentNode2 = currentNode2?.next ?? null;
    }
    
    return headNode;
}