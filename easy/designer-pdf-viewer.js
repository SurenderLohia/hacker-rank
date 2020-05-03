/*
When you select a contiguous block of text in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently. For example:

PDF-highighting.png

In this challenge, you will be given a list of letter heights in the alphabet and a string. Using the letter heights given, determine the area of the rectangle highlight in  assuming all letters are  wide.

For example, the highlighted . Assume the heights of the letters are  and . The tallest letter is  high and there are  letters. The hightlighted area will be  so the answer is .

Sample Input:
1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
abc

Sample Output:
9

*/

function designerPdfViewer(h, word) {
  const alphabets = 'abcdefghijklmnopkrstuvwxyz';
  const alphabetsLen = alphabets.length;
  const alphabetsHeight = {};
  const CHAR_WIDTH = 1;
  const wordLen = word.length;
  
  let maxCharHeight = 0;
  
  for(let i = 0; i < alphabetsLen; i++) {
      let char = alphabets.charAt(i);
      alphabetsHeight[char] = h[i];
  }

  //console.log(alphabetsHeight);
  for(let char of word) {
      let charHeight = alphabetsHeight[char];
      if(charHeight > maxCharHeight) {
          maxCharHeight = charHeight;
      }
  }

  const highlightedWordArea = maxCharHeight * CHAR_WIDTH * wordLen;

  return highlightedWordArea;
}
