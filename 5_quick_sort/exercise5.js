//QUICK SORT
//Divide and conquer, recursive algorithm

//Given an array:
const nums = [5, 7, 4, 9, 6]

//Select a pivot (6)
var pivot = nums[4]

//Move all values <6 to left array, values 6< to right arrays
const quickSort = nums => {
  if (nums.length <= 1) return nums
  const pivot = nums[nums.legnth - 1]
  const less = []
  const more = []

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      less.push(nums[i])
    } else {
      more.push(nums[i])
    }
  }

  //Since we are returning arrays, simply lay all arrays down toogether
  return quickSort(less).concat(pivot, quickSort(right))
}

//Nice tidy WebSite verrsion:
const quickSort = nums => {
  //Base Case
  if (nums.length <= 1) return nums

  const pivot = nums[nums.length - 1],
    less = [],
    more = []

  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) less.push(nums[i])
    else more.push(nums[i])
  }

  return [...quickSort(less), pivot, ...quickSort(more)]
}
