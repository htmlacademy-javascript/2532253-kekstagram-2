function timeToMinutes(timeStr) {
  // Преобразует строковое представление времени в минуты
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

function isMeetingWithinWorkday(startWork, endWork, startMeeting, duration) {
  // Проверяет, укладывается ли встреча в рамки рабочего дня
  const startWorkMinutes = timeToMinutes(startWork);
  const endWorkMinutes = timeToMinutes(endWork);
  const startMeetingMinutes = timeToMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + duration;

  // Проверим, что встреча начинается после или в момент начала рабочего дня
  // и заканчивается до или в момент конца рабочего дня
  return startWorkMinutes <= startMeetingMinutes && endMeetingMinutes <= endWorkMinutes;
}

console.log(isMeetingWithinWorkday('08:00', '17:30', '14:00', 90));
console.log(isMeetingWithinWorkday('8:0', '10:0', '8:0', 120));
console.log(isMeetingWithinWorkday('08:00', '14:30', '14:00', 90));
console.log(isMeetingWithinWorkday('14:00', '17:30', '08:0', 90));
console.log(isMeetingWithinWorkday('8:00', '17:30', '08:00', 900));

// function checkLength (string, length) {
//   if (string.length <= length){
//     return true;
//   } else {
//     return false;
//   }
// }
// checkLength();


// const isPalindrome = (string) => {
//   string = string.replaceAll(' ','').toLowerCase();

//   const reversedLine = '';
//   for(let i = string.length - 1; i >= 0; i--) {
//     reversedLine += string[i];
//   }
//   return string === reversedLine;
// };
