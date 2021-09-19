const getTheTitles = function(array) {
    let bookArr = []
    for (let i = 0; i < array.length; i++) {
        bookArr.push(array[i].title)
    }
    return bookArr
};

// Do not edit below this line
module.exports = getTheTitles;
