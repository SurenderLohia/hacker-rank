/*
John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

For each array, perform a number of right circular rotations and return the value of the element at a given index.

For example, array , number of rotations,  and indices to check, .
First we perform the two rotations:

Now return the values from the zero-based indices  and  as indicated in the  array.



Sample Input:
3 2 3
1 2 3
0
1
2

Sample Output:
2
3
1

*/

function circularArrayRotation(a, k, queries) {
  const N = a.length;
  const A = a.slice(0, N - k);
  const B = a.slice(N - k);

  const Ar = A.reverse();
  const Br = B.reverse();
  
  const ArBrR = [...Ar, ...Br].reverse();

  const result = [];

  queries.forEach((queryIndex, index) => {
    result[index] = ArBrR[queryIndex];
  });


  return result;
}
