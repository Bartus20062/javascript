

function arrayStats(arr){
    if(arr.length === 0){
        return {min: null, max: null, mediana: null};
    }
    const sortedArr = [...arr].sort((a,b) => a-b);
    const min = sortedArr[0];
    const max = sortedArr[sortedArr.length - 1];
    const mid = Math.floor(sortedArr.length / 2);

    let mediana; 
    if(sortedArr.length % 2 === 0){
        mediana = (sortedArr[mid -1]+ sortedArr[mid])/2;
    } else{
        mediana=sortedArr[mid];
    }
    return{min, max, mediana};
}
console.log(arrayStats([3, 1, 2, 5, 4]));
console.log(arrayStats([7, 2, 10]));
console.log(arrayStats([]));
console.log(arrayStats([45, 5, -10, 1000, 23]));