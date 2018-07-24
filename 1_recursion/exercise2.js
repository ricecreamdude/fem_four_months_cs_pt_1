/*
  Recursion Exercise 2 - Self Study
  Greatest Common Denominator using Euclidian Algorithm

  https://www.hackerrank.com/challenges/functional-programming-warmups-in-recursion---gcd/problem

  Sample Values:
  gcd(10, 15) = 5
  gcd(5, 15) = 5
  gcd(10, 100) = 10

*/

function wr(msg){
  if (!msg) console.log('--------------------------');
  console.log(msg);
}

//min and max must be entered correctly here
function gcd(min, max){
  // Euclidian Algorithm phase 1: max = min * n + r
  let r = max % min;
  //Base case
  if(r == 0) return min;
    //phase 2: min = r * n2 + r2
  return gcd(r,min);
}


wr( gcd(5,10) ); //5
wr( gcd(1701, 3768)); //3
wr( gcd(100,10000) ); //100
wr( gcd(22,131) ); //1
