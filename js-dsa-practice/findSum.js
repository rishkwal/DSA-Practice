//We have to simply take an array as an input along with a weight
//We have to find whether any two elements add up to the given weight
//We have to find the index of those weights
function findSum(arr, weight){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==weight)
            {
                return [i,j]
            }
        }
    }
}
console.log(findSum([1,2,3,4,5,6,7],13))