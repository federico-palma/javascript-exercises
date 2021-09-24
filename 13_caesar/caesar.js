// const caesar = function(string, shift) {
//     const upperCaseAlph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//     const lowerCaseAlph = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     let newString = ''

//     for (let i = 0; i < string.length; i++) {
//         let 
//         if (upperCaseAlph.includes(string[i])) {
//             newString += upperCaseAlph[upperCaseAlph.indexOf(string[i]) + (shift % upperCaseAlph.length)]
//         } else if (lowerCaseAlph.includes(string[i])){
//             newString += lowerCaseAlph[lowerCaseAlph.indexOf(string[i]) + (shift % upperCaseAlph.length)]
//         } else {
//             newString += string[i]
//         }
        
//     }
//     return newString
// };

// function outOfBounds(num) {
//     if (num > 0) {
//         while (num > 26) {num - 26};
//     } else {
//         while (num < 26) {num + 26};
//     }
//     return num
//     }
// }

const caesar = function(string, shift) {
    return string
      .split("")
      .map(char => shiftChar(char, shift))
      .join("");
  };
  
  const codeSet = code => (code < 97 ? 65 : 97);
  

  const mod = (n, m) => (n % m + m) % m;
  
  const shiftChar = (char, shift) => {
    const code = char.charCodeAt();
  
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      return String.fromCharCode(
        mod(code + shift - codeSet(code), 26) + codeSet(code)
      );
    }
    return char;
  };

// Do not edit below this line
module.exports = caesar;
