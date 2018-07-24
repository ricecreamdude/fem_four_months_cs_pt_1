/*
  Map

  Map is a method on the array prototype in JavaScript. It takes one (required)
  parameter: the function you want called on each element in the array. While you
  can make these functions, I'd recommend making them named and thus resuseable.

  There are four tests to pass here:

  Test 1
  Make a function named doubleEach. doubleEach takes in an array and returns an
  array where every element in the array is doubled. Do not use a loop.

  Test 2
  Make a function named squareEach. squareEach takes in an array and returns an
  array where every element in the array is squared. Do not use a loop.

  Test 3
  Make a function named doubleAndSquareEach. If you made your other functions
  composeable, you can reuse them here. Return an array where each element
  is doubled first and then squared. Do not use a loop.

  Test 4
  Make a function named myMap. myMap is going to simulate the behavior of the
  map method on the Array prototype. myMap takes two parameters: the array being
  mapped over, and the function being called on each element. You must use a loop
  in myMap. myMap returns the resulting array of calling the inputted function on
  each value in the array.

*/

const double = num => {
  return num * 2
}
const doubleEach = arr => {
  return myMap(arr, double)
}

const square = num => {
  return num * num
}
const squareEach = arr => {
  return myMap(arr, square)
}

const doubleAndSquare = num => {
  return square(double(num))
}
const doubleAndSquareEach = arr => {
  return myMap(arr, doubleAndSquare)
}

const myMap = (arr, fn) => {
  let newArr = arr

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i])
  }

  return newArr
}

// You can reduce the amount of lines written by consolidating each function
//into a single line
//
// const double = num => return num * 2
// const doubleEach = arr => return myMap(arr, double)
//
// const square = num => return num * num
// const squareEach = arr => return myMap(arr, square)
//
// const doubleAndSquare = num =>  return square(double(num))
// const doubleAndSquareEach = arr => return myMap(arr, doubleAndSquare)
//
// const myMap = (arr, fn) => {
//   let newArr = arr
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = fn(arr[i])
//   }
//   return newArr
// }

// unit tests
// do not modify the below code
xdescribe('map tests', function() {
  it('doubleEach', () => {
    const testList = [5, 50, 500, 5000, 10, 5, 3]
    expect(doubleEach(testList)).toEqual([10, 100, 1000, 10000, 20, 10, 6])
  })
  it('squareEach', () => {
    const testList = [10, 1, 9, 2, 8, 3, 8, 4, 7, 5, 6, 50]
    expect(squareEach(testList)).toEqual([100, 1, 81, 4, 64, 9, 64, 16, 49, 25, 36, 2500])
  })
  it('doubleAndSquareEach', () => {
    const testList = [5, 2, 4, 8, 1, 7, 10]
    expect(doubleAndSquareEach(testList)).toEqual([100, 16, 64, 256, 4, 196, 400])
  })
  it('myMap', () => {
    const testList = [6, 2, 4, 8, 10]
    const divideByTwo = num => num / 2
    expect(myMap(testList, divideByTwo)).toEqual([3, 1, 2, 4, 5])
  })
})
