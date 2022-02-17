function findSum2(arr, weight){
    var hashtable = {}
    for(var i=0,arrLength=arr.length; i<arrLength;i++){
        var currentElement = arr[i];
        console.log(currentElement)
        difference=weight-currentElement;

        if(hashtable[currentElement]!=undefined){
            return [i,hashtable[weight-currentElement]];
        } else {
            //stored index
            hashtable[difference] = i;
        }
    }
    return -1;
}

console.log(findSum2([2,3,5,8],8))
/*Explaining the algorithm: hashtable={} we create an empty object
then we loop over the array
we store the element in currentElement
we store the difference in difference = weight-currentElement
then we check if the element is present in the hashTable
If the element is not present in the hash table
We add the difference to the hash table as the key and the 
value is the index of the currentElement
This means that we add the difference to the hash table
and if during any iteration, the current element is present
It means that it was the difference for some previous element
that we iterated through.*/