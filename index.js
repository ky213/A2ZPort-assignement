const s = '“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)'


// O(n) cpu, O(1) memory
function countLetters(sentence) {

  //init main count
  let output = {
    word: '',
    vowels: ''
  }

  //init temp counters
  let tempWord = ''
  let tempVowels = ''

  for (const i in sentence) {
    const char = sentence[i]
    const code = char.charCodeAt(0)
    
    //check for alphabetic characters only
    if (code >= 65 && code <= 122) tempWord += char
    
    //check for vowels characters only  
    if ('aeiou'.includes(char)) tempVowels += char
    
    //break when we encounter a space character
    if (char == ' ' || i == sentence.length - 1) {
      if (tempWord.length > output.word.length) output.word = tempWord
      if (tempWord.length == output.word.length)
        if (tempVowels.length > output.vowels.length) output.word = tempWord
      
      //reset temp counters
      tempWord = ''
      tempVowels = ''
    }
  }

  return output.word
}

console.log(countLetters(s))
