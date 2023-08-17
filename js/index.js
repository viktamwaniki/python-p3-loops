/*
  Write a method `happy_new_year` that outputs numbers starting at 10 and
   counting down to 1. After reaching 1, print out "Happy New Year!"
*/
function happyNewYear() {
  let counter = 10;
  while (counter > 0) {
    console.log(counter);
    counter--;
  }
  console.log("Happy New Year!");
}



function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}



/*
Write a function `square_integers()` that takes one argument, a list of
integers and returns the list of squared elements.
*/
function square_integers(int_list){
  return int_list.map((num) => Math.pow(num, 2) )
}
