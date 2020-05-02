/*
Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

For example, given the array  there are  elements, two positive, two negative and one zero. Their ratios would be ,  and . It should be printed as

0.400000
0.400000
0.200000

Sample Input:
6
-4 3 -9 0 4 1 

Sample Output:
0.500000
0.333333
0.166667
*/

function plusMinus(arr) {
  let plusCount = 0;
  let minusCount = 0;
  let zeroCount = 0;

  let arrLen = arr.length;

  //console.log(getFraction(2, 6));

  arr.forEach((item) => {
    if (item === 0) {
      zeroCount += 1;
    } else if (item > 0) {
      plusCount += 1;
    } else {
      minusCount += 1;
    }
  });

  console.log(getFraction(plusCount, arrLen));
  console.log(getFraction(minusCount, arrLen));
  console.log(getFraction(zeroCount, arrLen));
}
