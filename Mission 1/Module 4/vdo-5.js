//Problem Statement

//A palindrome is a word, phrase, or sequence of characters that reads the same backward as it does forward.

//Your task is to write a JavaScript function, isPalindrome(str), that takes a string str
//and returns true if the string is a palindrome, and false otherwise.

//The function must work for complex phrases, not just single words. To do this, your function must:
//   Be case-insensitive (i.e., 'R' is treated the same as 'r').
//   Ignore all non-alphanumeric characters (i.e., spaces, punctuation like commas, colons, periods, etc.).

//? Input and Output
// "A man, a plan, a canal: Panama" -> true
// "Level" -> true
// "car" -> false



// normal approach

//space complexity O(n)
//time complexity O(n)
 const isPalindrome = (str) => {
     const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters
     const reversed = normalized.split('').reverse().join(''); // Reverse the string

     if(normalized === reversed) {
         return true;
     } else {
         return false;
     }
 }

//  console.log(isPalindrome("A man, a plan, a canal: Panama"));
//  console.log(isPalindrome("Level"));
//  console.log(isPalindrome("car"));



// two pointer approach

//space complexity O(n)
//time complexity O(n)
const isPalindromeTwoPointer = (str) => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters

    let left = 0;
    let right = normalized.length - 1;

    while (left < right) {
        if (normalized[left] !== normalized[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

 console.log(isPalindrome("A man, a plan, a canal: Panama"));
 console.log(isPalindrome("Level"));
 console.log(isPalindrome("car"));