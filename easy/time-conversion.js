/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
Sample Input:
07:05:45PM

Sample Output:
19:05:45
*/

function timeConversion(s) {
  /*
   * Write your code here.
   */
  const pat = /(\d+).*(AM|PM)/;
  const hoursPat = /\d+/;
  const suffixPat = /.{2}(AM|PM)$/;
  const inputHours = s.match(hoursPat)[0];
  const inputSuffix = s.match(suffixPat)[1];
  const isPM = inputSuffix == "PM";
  let formatedHours;

  let formatedTime = s;

  if (inputHours === "12" && !isPM) {
    formatedTime = s.replace(hoursPat, "00");
  } else if (isPM && inputHours !== "12") {
    formatedHours = Number(inputHours) + 12;
    formatedTime = s.replace(hoursPat, formatedHours);
    formatedTime = formatedTime.replace("PM", "");
  }

  if (isPM) {
    formatedTime = formatedTime.replace("PM", "");
  } else {
    formatedTime = formatedTime.replace("AM", "");
  }

  return formatedTime;
}
