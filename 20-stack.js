// stack of block
// only add or remove from top
// known as lifo data structure
// use with push and pop

class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }
    // add element to top of stack
    push(element) {
        this.items[this.count] = element;
        console.log(`${element} add to ${this.count}`);
        this.count++;
        return this.count - 1;
    }
    // return and remove top element
    // undefined if stack is empty
    pop() {
        if (this.count == 0) {
            return undefined;
        } else {
            let deleteItem = this.items[this.count - 1];
            this.count--;
            console.log(`${deleteItem} removed from ${this.count}`);
            return deleteItem;
        }
    }
    peek() {
        let item = this.items[this.count - 1];
        console.log(item);
        return item;
    }
    empty() {
        this.count == 0 ? console.log("Yes") : console.log("No");
    }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);

stack.pop();
stack.pop();
stack.peek();
stack.pop();
stack.empty();
