class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop() {
        if(this.length === 0) return;

        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        this.#moveToEnd(index);
        return this.pop();
    }

    shift() {
        return this.delete(0);
    }

    unshift(item) {
        this.data[this.length] = item;
        this.#moveToBeginning(this.length);
        this.length++;
        return this.data;
    }

    #moveToEnd = (index) => {
        const nextIndex = index + 1;
        const currentItem = this.data[index];

        // Check if we are at the end of the array the go back
        if(nextIndex > this.length - 1) return currentItem;

        this.data[index] = this.data[nextIndex];
        this.data[nextIndex] = currentItem;
        return this.#moveToEnd(nextIndex);
    }

    #moveToBeginning = (index) => {
        const lastIndex = index - 1;
        const currentItem = this.data[index];

        // Check if we are at the end of the array the go back
        if(lastIndex < 0) return currentItem;

        this.data[index] = this.data[lastIndex];
        this.data[lastIndex] = currentItem;
        return this.#moveToBeginning(lastIndex);
    }

    sort() {
        console.time('bubble sort');
        for (let i = 0; i < this.length - 1; i++) {
            let swapped = false;
            for (let j = 0 ; j < this.length - i - 1; j++) {
                if(this.data[j] > this.data[j+1]) {
                    const current = this.data[j];
                    const next = this.data[j+1];
                    this.data[j] = next;
                    this.data[j + 1] = current;
                    swapped = true;
                }
            }
            
            if(!swapped) break;
        }
        
        console.timeEnd('bubble sort');
        return this.data;
    }
}


const array = new CustomArray();
// for(let i = 11; i >= 0; i--) array.push(i + 1);
array.push(3)
array.push(2)
array.push(6)
array.push(1)
array.push(9)
array.push(4)
console.log(array.data);
console.log(array.sort());