class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++)
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;

        return hash;
    }

    set(key, value) {
        const address = this.hashMethod(key);
        if(!this.data[address]) this.data[address] = [];

        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];

        if(currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) return currentBucket[i][1];
            }
        }
    }

    delete(key) {
        const address = this.hashMethod(key);
        let currentBucket = this.data[address];

        if(currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    currentBucket = currentBucket.filter((_, index) => index !== i);
                    this.data[address] = currentBucket;
                    return currentBucket;
                }
            }
        }
    }

    keys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            const currentBucket = this.data[i];
            if(!currentBucket) continue;

            for (let j = 0; j < currentBucket.length; j++) {
                keys.push(currentBucket[j][0]);
            }
        }

        return keys;
    }
}

const hasTable = new HashTable(50);
hasTable.set('username', 'DlopezS98');
hasTable.set('firstname', 'Danny');
hasTable.set('lastname', 'Lopez');
// console.log(hasTable.get('username'));
console.log(hasTable.data);
// const bucket = hasTable.delete('username');
console.log(hasTable.keys());