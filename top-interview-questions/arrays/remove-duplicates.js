/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

var removeDuplicates = function(nums) {
    let count = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i - 1] != nums[i]){
            nums[count] = nums[i]; 
            count++
        }
    }
    return count;
};

/*
In order to change the original nums array, I am going to use a for-loop.

I will set a count variable at 1 to use as my index checker, and increase it for each time through the loop.

Since the array is already in non-decreasing order, I can just check each array item to see if the previous

array item is the same, and if they aren't the same then redeclaring that item with the current index.

Then I will finish by returning count.
*/