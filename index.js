// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:

function checkAge(age) {
  if (age > 18) return true;
}

console.log(checkAge(19));

// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
  console.log(Math.min(a, b));
}

min(3, 5);
min(2, 5);
min(3, -1);
min(1, 1);

console.log("---------------------------------------------");

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x, n) {
  let power = x ** n;
  console.log(power);
}

pow(3, 2);
pow(3, 3);
pow(1, 100);
pow(2, 3);
