let wr = (msg'----------' => document.write(`<br>$(msg)`);

//Functionally the same as the above
// function wr(msg){
//   if (!msg) msg = '----------';
//   return document.write(`<br>` + msg);
// }

//Recursion function as provided in 'Recursion Example'
function basicRecursion(max, current) {
  //Base Case - Exit recursion function
  if (current > max) return;
  wr(current);
  basicRecursion(max, current+1);
}


//Provides the recursion with parameters to work with, maxing at 5

basicRecursion(5,1);
wr();
wr();


function fibonacci(n) {
  //Base Case - Exit Recursion function
  if(n <= 2) {
    return 1
  }
  else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

for (var i = 1; i <= 20; i++){
  wr(`${i}, ${fibonacci(i)}`);
}
