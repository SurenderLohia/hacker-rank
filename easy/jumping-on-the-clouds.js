/*
Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes  jumps while the second takes .


Sample Input:
7
0 0 1 0 0 1 0

Sample Output:
4
*/

// Need to fix:
function countingValleys(n, s) {
  let valleysCount = 0;
  let valleyTracker = "";
  const sArr = s.split("");

  sArr.forEach((item, i) => {
    if (valleyTracker === "") {
      valleyTracker = 0;
    }
    if (item === "U") {
      valleyTracker += 1;
    } else {
      valleyTracker -= 1;
    }

    if (valleyTracker === 0 && item === "U") {
      valleysCount += 1;
      valleyTracker = "";
    }
  });

  return valleysCount;
}
