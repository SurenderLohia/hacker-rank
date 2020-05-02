/*
Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.

Input format:
The first line contains an integer , the number of steps in Gary's hike.
The second line contains a single string , of  characters that describe his path.

Output format:
Print a single integer that denotes the number of valleys Gary walked through during his hike.

Sample Input:
8
UDDDUDUU

Sample Output:
1
*/

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
