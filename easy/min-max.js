/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, . Our minimum sum is  and our maximum sum is . We would print

16 24

Sample Input:
1 2 3 4 5

Sample Output:
10 14
*/

function miniMaxSum(arr) {
  let arrLen = arr.length;
  let subArr;
  let subArrSum = 0;
  let minSum = Infinity;
  let maxSum = -Infinity;

  for (let i = 0; i < arrLen; i++) {
    subArr = [...arr];
    subArr.splice(i, 1);

    subArrSum = subArr.reduce((acc, currVal) => {
      return acc + currVal;
    }, 0);

    if (subArrSum < minSum) {
      minSum = subArrSum;
    }

    if (subArrSum > maxSum) {
      maxSum = subArrSum;
    }
  }

  console.log(`${minSum} ${maxSum}`);

  return `${minSum} ${maxSum}`;
}
