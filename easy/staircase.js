/*
Consider a staircase of size :

   #
  ##
 ###
####
Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Sample Input:
6

Sample Output:
    #
    ##
   ###
  ####
 #####
######

*/

function staircase(n) {
  let result = "";
  const lastIndex = n - 1;

  let space;
  let newLine;
  let asterix;

  for (let i = 0; i < n; i++) {
    space = `${i !== lastIndex ? " ".repeat(lastIndex - i) : ""}`;
    newLine = `${i !== lastIndex ? "\n" : ""}`;
    asterix = `${"#".repeat(i + 1)}`;

    result += `${space}${asterix}${newLine}`;
  }

  console.log(result);
}
