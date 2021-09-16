const removeFromArray = function(array, ...secondArray) {
    for (let i = 0; i < secondArray.length; i++) {
        if (array.includes(secondArray[i])) {
            array.splice(array.indexOf(secondArray[i]), 1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
