/*
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Sample Input
9
10 20 20 10 10 30 50 10 20

3
*/

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  const counts = ar.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }

    return acc;
  }, {});

  let result = 0;
  let item;

  Object.keys(counts).forEach((key) => {
    item = counts[key];
    if (item > 1) {
      result += Math.floor(item / 2);
    }
  });

  return result;
}
