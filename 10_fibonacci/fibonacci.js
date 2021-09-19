const fibonacci = function(num) {
    let fiboArray = [1, 1];
    let newEntry;
    if (num < 0) {
        return "OOPS"
    } else {
        for (let i = 0; i < num; i++) {
            newEntry = fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2];
            fiboArray.push(newEntry);
        }
    }
    return fiboArray[num - 1]
};

// Do not edit below this line
module.exports = fibonacci;
