/*
Recurssion Practice:

call the function factorial

  factorial(1) = 1
  factorial(2) = 2
  factorial(3) = 6

  factorial (5) = 120

*/

//Message function
function wr(msg){
  if (!msg) msg = '-----------------'
  console.log(msg);
}

//How can I add a console log into a recursion fuction to test?
function factorial(n) {
  //Baseline Condition
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

//Console log onto the output of the equation to test?
wr();
wr(factorial(10));
wr(factorial(3));
wr(factorial(4));
wr();

wr(factorial(5));
wr(factorial(7));
