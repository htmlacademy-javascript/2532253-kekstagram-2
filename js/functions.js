// Строка короче 20 символов
имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
имяФункции('проверяемая строка', 10); // false


// Строка является палиндромом
имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
имяФункции('ДовОд'); // true
// Это не палиндром
имяФункции('Кекс'); // false

function checkLength (string, length) {
  if (string.length <= length){
    return true;
  } else {
    return false;
  }
}
checkLength();


const isPalindrome = (string) => {
  string = string.replaceAll(' ','').toLowerCase();

  const reversedLine = '';
  for(let i = string.length - 1; i >= 0; i--) {
    reversedLine += string[i];
  }
  return string === reversedLine;
};
