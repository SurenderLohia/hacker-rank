/*
A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, he decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time () to arrived late ().

Given the arrival time of each student and a threshhold number of attendees, determine if the class is canceled.

Sample Input:
4 3
-1 -3 4 2

Sample Output:
YES

*/

function angryProfessor(k, a) {
  let numberOfStudentsArrivedOnTime = 0;
 
  a.forEach(item => {
      if(item <= 0) {
         console.log('item', item);
         numberOfStudentsArrivedOnTime += 1;
      }
  });
 
  if(numberOfStudentsArrivedOnTime >= k) {
      return 'NO';
  }
 
  return 'YES'
 }
