/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let s = "";
  for (let i = 0; i < str.length; i++)
    if (str[i] >= "a" && str[i] <= "z") s += str[i];

  for (let i = 0; i < s.length / 2; i++)
    if (s[i] !== s[s.length - i - 1]) return false;

  return true;
}

module.exports = isPalindrome;
