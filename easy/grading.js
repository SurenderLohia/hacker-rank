/*
HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade.
For example,  will be rounded to  but  will not be rounded because the rounding would result in a number that is less than .

Given the initial value of  for each of Sam's  students, write code to automate the rounding process.
Sample Input:
4
73
67
38
33

Sample Output:
75
67
40
33
*/

function gradingStudents(grades) {
  const MULTIPLIER = 5;
  // Write your code here
  const getValueForRounding = (n, multiplier = MULTIPLIER) => {
    return multiplier - (n % multiplier);
  };

  const applyRounding = (n, valueToAdd) => {
    return n + valueToAdd;
  };

  //    console.log('valueForRounding', valueForRounding(73));
  //    console.log('applyRounding', applyRounding(73, 2));
  const resultGrades = grades.map((item) => {
    if (item % MULTIPLIER === 0 || item < 38) {
      return item;
    } else {
      const valueForRounding = getValueForRounding(item);
      if (valueForRounding < 3) {
        return applyRounding(item, valueForRounding);
      }
    }

    return item;
  });

  return resultGrades;
}
