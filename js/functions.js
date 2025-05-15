function checkLength (string, length) {
  if (string.length <= length){
    return true;
  } else {
    return false;
  }
}
checkLength('hello', 42);


const isPalindrome = (string) => {
  string = string.replaceAll(' ','').toLowerCase();

  const reversedLine = '';
  for(let i = string.length - 1; i >= 0; i--) {
    reversedLine += string[i];
  }
  return string === reversedLine;
};
