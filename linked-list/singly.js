class LinkedNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        }

        // set the head reference to the tail
        // in order to update the tail and head by reference
        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const newNode = new LinkedNode(value)
        // tail has the head reference, then next property
        // will update with the new node value
        this.tail.next = newNode;
        // update the reference of the tail to set its reference to the las node
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const firstNode = new LinkedNode(value);
        firstNode.next = this.head;
        this.head = firstNode;
        this.length++;
        return this;
    }

    values() {
        const values = []
        let node = this.head;
        while(node !== null) {
            values.push(node.value);
            node = node.next;
        }

        return values;
    }

    insert(index, value) {
        if(index >= this.length) return this.append(value);

        // * - * - * - * - *
        const newNode = new LinkedNode(value);
        const firstPointer = this.getIndex(index - 1);
        const holdingPoinert = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPoinert;
        this.length++;
        return this.values();
    }

    getIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    remove(index) {
        if(index >= this.length) console.log("The index doesn't exists!");

        const lastPointer = this.getIndex(index - 1);
        const nextPointer = this.getIndex(index + 1);
        lastPointer.next = nextPointer;
        this.length--;
        return this;
    }
}

const singlyLinkedList = new SinglyLinkedList(1);
singlyLinkedList.append(2);
singlyLinkedList.append(3);
singlyLinkedList.append(4);
singlyLinkedList.append(5);
singlyLinkedList.append(6);
console.log('values:', singlyLinkedList.values());
console.log('Length', singlyLinkedList.length);
console.log('Head', singlyLinkedList.head);
console.log('Tail', singlyLinkedList.tail);
console.log('insert', singlyLinkedList.insert(3, 12))
console.log('insert', singlyLinkedList.remove(3))
console.log('values:', singlyLinkedList.values());


// singlyLinkedList.prepend(0)

// console.log('updated values')
// console.log(singlyLinkedList.head.value)
// console.log(singlyLinkedList.head.next.value)
// console.log(singlyLinkedList.head.next.next.value)
// console.log(singlyLinkedList.head.next.next.next.value)
// console.log(singlyLinkedList.head.next.next.next.next.value)
// console.log(singlyLinkedList.head.next.next.next.next.next.value)
// console.log(singlyLinkedList.head.next.next.next.next.next.next.value);
// console.log(singlyLinkedList.head.next.next.next.next.next.next.next);