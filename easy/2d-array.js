/*
Given a  2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

a b c
  d
e f g
There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

For example, given the 2D array:

-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
We calculate the following  hourglass values:

-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18
Our highest hourglass value is  from the hourglass:

0 4 3
  1
8 6 6

Sample Input
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

Sample Output
19

*/

arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]

function hourglassSum(arr) {
 let arrLen = arr.length;
 

 function getSubArray(options) {
  const {
    rowStartIndex, 
    columnStartIndex,
    subArraySize,
    arr
  } = options;
  
  const rowEndIndex = rowStartIndex + subArraySize;
  const columnEndIndex = columnStartIndex + subArraySize;

  const subArray = [];
  let sum = 0;

  let subArrIndexCounter = 0;
  
  for(let i = rowStartIndex; i < rowEndIndex; i++) {
    for(let j = columnStartIndex; j < columnEndIndex; j++) {
      subArrIndexCounter += 1;
      if(subArrIndexCounter === 4 || subArrIndexCounter === 6) {
        continue;  
      }

      let element = arr[i][j];
      subArray.push(element);
      sum += element;
    }
  }

  return {
    array: subArray,
    sum
  };
 }

 function createSubArrays(arr) {
  const subArrayList = [];
  let maxHourglass = -Infinity;

  const arrLen = arr.length;

  for(let i = 0; i < arrLen - 2; i++) {
    for(let j = 0; j < arrLen - 2; j++) {
      const subArray = getSubArray({
        rowStartIndex: i,
        columnStartIndex: j,
        subArraySize: 3,
        arr
      })

      subArrayList.push(subArray);
      if(subArray.sum > maxHourglass) {
        maxHourglass = subArray.sum;
      }
    }
  }

  return {
    subArrayList,
    maxHourglass
  }

 }

 const subArrays = createSubArrays(arr);
 const {maxHourglass} = subArrays;

 return maxHourglass;
}

hourglassSum(arr);
