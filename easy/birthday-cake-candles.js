/*
You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

For example, if your niece is turning  years old, and the cake will have  candles of height , , , , she will be able to blow out  candles successfully, since the tallest candles are of height  and there are  such candles.
Sample Input:
4
3 2 1 3

Sample Output:
2
*/

function birthdayCakeCandles(ar) {
  const sortedArr = ar.sort((a, b) => a - b);
  const minCandleHeightToBlow = sortedArr[sortedArr.length - 2];

  let blownedArr = ar.filter((item) => item >= minCandleHeightToBlow);
  const blownedCandles = blownedArr.length;
  return blownedCandles;
}
