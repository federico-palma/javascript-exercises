const sumAll = function(num1, num2) {
    let sum = 0
    let list = [num1, num2]
    
    if (typeof(num1) !== "number" || typeof(num2) !== "number" || num1 < 0 || num2 < 0) {
        sum = "ERROR"
    } else {
        list.sort((a, b) => a - b);
        for (let i = list[0]; i < list[1]+1; i++) {
            sum += i   
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
