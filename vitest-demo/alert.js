function getMaxSubSum(arr){
    let maxSum = 0;
    let currentSum = 0;

    for(let num of arr){
        currentSum+=num;
        if(currentSum > maxSum){
            maxSum=currentSum;
        }
    if(currentSum < 0 ){
        currentSum = 0;
    }
    }
    return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([1, 2, 3, -9, 11]));