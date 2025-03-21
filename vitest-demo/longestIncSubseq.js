export function  LongestIncreasingSubsequence(nums){
 if(nums.length === 0) return [];

 let tabDl = new Array(nums.length).fill(1);
 let tabLook = new Array(nums.length).fill(-1);

 for(let i = 1; i <nums.length; i++){
    for(let j = 0; j<i; j++){
        if(nums[i] > nums[j] && tabDl[i]< tabDl[j]+1){
            tabDl[i] = tabDl[j] + 1;
            tabLook[i]=j;
        }
    }
 }
 let maxLength = Math.max(...tabDl);
 let maxIndex = tabDl.indexOf(maxLength);

 let result=[];
 while (maxIndex !== -1){
    result.unshift(nums[maxIndex]);
    maxIndex=tabLook[maxIndex];
 }
 return result;
}
console.log(LongestIncreasingSubsequence([1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]));
console.log(LongestIncreasingSubsequence([5,4,3,2,1]));