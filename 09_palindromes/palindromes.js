const palindromes = function (string) {
    let s1 = string.match(/[^_\W]+/g).join('').toLowerCase();
    let s2 = s1.split("").reverse().join("");
    if (s1 == s2) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
