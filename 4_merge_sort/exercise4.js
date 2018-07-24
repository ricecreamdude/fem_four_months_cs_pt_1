//MERGE Sort
//WITH RECURSION FUN

//Break Merge Sort down into two lists:

const mergeSort = nums => {
  //Using recursion - base case
  //If the length of nums is less than 2, return the original array provided
  //MergeSort will continnue splitting arrays until there's only a single values
  if (nums.length < 2) {
    return nums
  }

  //Learn the parameters for the array being processed
  const length = nums.length
  const middle = Math.floor(length / 2)

  //Split the provided array into two arrays
  //slice(beginning, end) 0-based index that excludes value at end
  const left = nums.slice(0, middle)
  const right = nums.slice(middle, length)

  //The Recurssive part
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  return stitch(sortedLeft, sortedRight)
}

//Combines two arrays and returns them as sorted - takes two array values,
//compares them, and pushes the smaller array value to the results array.
//Stich assumes that the two arrays given to it are sorted already
const stitch = (left, right) => {
  const results = []

  //First part
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      //shift removes first element from array and returns that element
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  //Second part cleans up the remaining values. ONly one or the other will be
  //activated
  while (left.length) {
    results.push(left.shift())
  }

  while (right.length) {
    results.push(right.shift())
  }

  return results
}
