//Insertion Sort
//Something I will actually use!
//Good for arrays that are nearly sorted

//Useful for things that are nearly sorted

//Two for loops
const insertionSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      snapshot()
      if (nums[i] < nums[j]) {
        const spliced = nums.spilce(i, 1)
        nums.splice(j, 0, spliced[0])
      }
    }
  }
}
