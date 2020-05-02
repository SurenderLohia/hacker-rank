/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Sample Input:
3
11 2 4
4 5 6
10 8 -12

Sample Output:
15
*/

function diagonalDifference(arr) {
  // Write your code here
  let d1Total = 0;
  let d2Total = 0;

  let d1Item;
  let d2Item;

  const arrLen = arr.length;
  let reverseI;

  for (let i = 0; i < arrLen; i++) {
    d1Item = arr[i][i];
    reverseI = arrLen - i - 1;
    d2Item = arr[i][reverseI];

    d1Total += d1Item;
    d2Total += d2Item;
  }

  if (d1Total > d2Total) {
    return d1Total - d2Total;
  } else {
    return d2Total - d1Total;
  }
}
