/*
An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, , of size , each memory location has some unique index,  (where ), that can be referenced as  (you may also see it written as ).

Given an array, , of  integers, print each element in reverse order as a single line of space-separated integers.
Sample Input:
4
1 4 3 2

Sample Output:
2 3 4 1

*/

function reverseArray(a) {
  const arrLen = a.length;
  const reversedArr = [];

  for(let i = arrLen - 1, j = 0; i >= 0; i--, j++) {
    reversedArr[j] = a[i];
  }

  return reversedArr;
}
