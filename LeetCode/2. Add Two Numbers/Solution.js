var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function addTwoNumbers(l1, l2) {
    var cn1 = l1;
    var cn2 = l2;
    var cn3 = new ListNode();
    var initialNode = cn3;
    var carryTheOne = false;
    while (cn1 !== null && cn2 !== null) {
        var totalValue = cn1.val + cn2.val;
        if (carryTheOne) {
            totalValue = totalValue + 1;
            carryTheOne = false;
        }
        if (totalValue >= 10) {
            totalValue = totalValue - 10;
            carryTheOne = true;
        }
        var newNode = new ListNode();
        cn3.val = totalValue;
        cn3.next = newNode;
        cn3 = newNode;
        cn1 = cn1.next;
        cn2 = cn2.next;
    }
    return initialNode;
}
;
var l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
var l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(JSON.stringify(addTwoNumbers(l1, l2)));
