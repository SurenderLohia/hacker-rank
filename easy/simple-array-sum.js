/*
Given an array of integers, find the sum of its elements.

For example, if the array , , so return .

Sample Input:
6
1 2 3 4 10 11

Sample Output:
31
*/

function simpleArraySum(ar) {
  const total = ar.reduce((acc, curValue) => {
    return acc + curValue;
  }, 0);

  return total;
}
