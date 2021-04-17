// challenge 1: Reverse a String
function reverseString(str) {
  //   return str
  //     .split("")
  //     .reverse()
  //     .join("");

  //
  // let revString = '';
  // for(let i = str.length - 1; i >= 0; i--){
  //     revString = revString + str[i]
  //     console.log(i)
  // }
  // return revString

  // let revString = '';
  // for(let char of str){
  //     revString = char + revString;
  // }
  // return revString

  // let revString = ""
  // str.split('').forEach(function(char){
  //     revString = char + revString;
  // }
  // )
  // return revString

  return str.split("").reduce(function(revString, char) {
    return char + revString;
  }, "");
}

function isPalindrome(str) {
  const revString = str
    .split("")
    .reverse("")
    .join("");

  return revString === str;
}

function reverseInt(int) {
  const revString = int
    .toString()
    .split("")
    .reverse("")
    .join("");

  return parseInt(revString) * Math.sign(int);
}

// call function
// const output = reverseString("hello world");
// const output = isPalindrome("bues are my type");
const output = reverseInt(-977654);
console.log(output);

function letterCapitalize(str) {
  return str
  .toLowerCase()
  .split(" ")
  .map(function(word){
      return word[0].toUpperCase() + word.substr(1)
  })
  .join(' ')
}
console.log(letterCapitalize("i love me && i choose me"));

function maxChar(str){
    const charMap = {}
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function(char){
        if(charMap[char]){
            charMap[char]++;
        }else {
            charMap[char] = 1;
        }
    })
    console.log(charMap)

    for(let char in charMap){
        debugger;
    if(charMap[char] > maxNum){
        maxNum = charMap[char]
        maxChar = char;
    }
    }
    return maxChar;
}
console.log(maxChar("hey jjkbdcas sa DAS AS EW peww, 222, itsachopper aaaaa itsa22"))

function blisszHerd(){
    for(let i = 1; i <= 100; i++){
        // modules
        if(i % 3 === 0 && i % 4 === 0){
            console.log('blissHerd')
        }
        else if(i % 3 === 0){
            console.log('bliss')
        } else if(i % 2 === 0){
            console.log(i)
        }
         else{
            console.log("Herd")
        }
        
    }
}
console.log(blisszHerd())