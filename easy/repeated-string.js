/*
Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.
Sample Input:
aba
10

Sample Output:
7
*/

function repeatedString(s, n) {
  const sLen = s.length;

  const repeatCount = Math.floor(n / sLen);
  const getACount = (s) => s.split("a").length - 1;
  const remainder = s.slice(0, n % sLen);

  const totalAcount = repeatCount * getACount(s) + getACount(remainder);

  return totalAcount;
}
