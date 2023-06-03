// Write a program or function that takes a string as input and replaces all the vowels in the
// string with the "*" symbol.
// Example:
// Input: "Hello, World!"
// Output: "H*ll*, W*rld!"




function ReplaceAllVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let replacedString = '';
  
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        replacedString += '*';
      } else {
        replacedString += string[i];
      }
    }
  
    return replacedString;
  }
   
  
  let input=  "Hello, World!";
  
  let result =  ReplaceAllVowels(input);
  console.log(result)
  