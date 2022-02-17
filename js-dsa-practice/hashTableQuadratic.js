class HashTable{
    constructor(size){
    this.size=size;
    this.keys=this.initArray(size);
    this.values=this.initArray(size);
    this.limit=0;
    }

    put(key,value){
        if(this.limit >= this.size) throw 'hash table is full'
        var hashedIndex = this.hash(key);
        //Quadratic Probing
        var i = 1;
        while (this.keys[hashedIndex]!=null){
            hashedIndex+=i*i;
            i++;
            hashedIndex%=this.size;
        }
        this.keys[hashedIndex]=key;
        this.values[hashedIndex]=value;
        this.limit++;
    }

    get(key){
        var hashedIndex = this.hash(key)
        var i = 1;
        while(this.keys[hashedIndex] != key){
            hashedIndex+=i*i;
            i++;
            hashedIndex%=this.size;
        }
        return this.values[hashedIndex];
    }

    hash(key) {
        if(!Number.isInteger(key)) throw 'must be int';
            return key%this.size;
    }

    initArray(size){
        var array = [];
        for(var i=0; i<this.size;i++)
        {
            array.push(null);
            i++;
        }
        return array;
    }
}

var exampletable = new HashTable(13);

exampletable.put(69, 'nice');
exampletable.put(8, 'hello');
exampletable.put(25, 'hey');
exampletable.put(24, 'hola');
exampletable.put(11, 'mucho gusto');
exampletable.put(2,'gracias');
exampletable.put(3, 'de nada');
console.log(exampletable)