// Count words in speech(big string)

const demoString = "Test string to see if this test string works and will it be able to count words in string and i need to repeat words words words and i string string see see will it it it test"

const newString = demoString.toLowerCase().split(' ').reduce((acc, word) => {

  acc[word] = acc[word] ? acc[word] +1 : 1

  return acc
}, {})

console.log(newString) 
