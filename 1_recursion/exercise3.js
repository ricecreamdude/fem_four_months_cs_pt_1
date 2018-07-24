let wr = (msg) => (!msg ? console.log('----------') : console.log(msg) );
/*
  Recursion Exercise 3 - Self Study
  Pascal's Triangle

  https://www.hackerrank.com/challenges/pascals-triangle/problem

  n = row
  r = column
  n! / (c! * (n-c)!) where indexing starts from 0

  //Things I need to know:
    // Recursive function within recursive Function
    // How to run incremendtally run calculations on values below n, until n is reached.
    // How to pass an array through a recursive equation.

  *** SOLVED

*/

//Using factorial function to calculate collumn and row values based on the
//provided Pascal equation
function factorial(n){
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

//Function used to calculate values pascal values.  Uses recursion and passes an array
//to store values calculate by previous iterations of the function.
//n = number of rows, a = array placeholder
let pascal = (n, a) => {

  let string = "";

  // //Baseline/exit
  if (n < 1) return a;
  //Return the array holding pascal values when completed. No need to add to function call
  if (!a) a = [];

  //Using the provided equation, calculate each layer before the input pascal value
  //Calculate current pascal layer values
  //Value calcuation equation
  //n! / (c! * (n-c)!)
  //Using a for loop to generate each
  for (var i = 0; i < n; i++){
        string += ( factorial(n-1) / (factorial(i) * factorial(n-1-i) ) ) + ' ';
  }
  //Push to provided array so next pascal recursion may begin
  a.push(string);

  //Iterate to next recursive process
  return pascal(n - 1, a);
}


//Printing pascal value triangles backward, based on value pushed to array in Pascal
function printTriangle(arr){

  for (var i = arr.length - 1; i >= 0; i--){
    wr(arr[i]);
  }

}

wr();
printTriangle( pascal(11) );
wr();


//Code without comments:

// let factorial = (n) => {
//   if (n < 2) return 1;
//   return n * factorial(n - 1);
// }
//
// let pascal = (n, a) => {
//   let string = "";
//
//   if (n < 1) return a;
//   if (!a) a = [];
//
//   for (var i = 0; i < n; i++){
//         string += ( factorial(n-1) / (factorial(i) * factorial(n-1-i) ) ) + ' ';
//   }
//
//   a.push(string);
//   return pascal(n - 1, a);
// }
//
// let printTriangle = (arr) => {
//   for (var i = arr.length - 1; i >= 0; i--) wr(arr[i]);
// }
