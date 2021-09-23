const findTheOldest = function(array) {
    let currentYear = new Date().getFullYear();
    let age;
    for (let i = 0; i < array.length; i++) {
        if (array[i].yearOfDeath == undefined) {
            age = currentYear - array[i].yearOfBirth;
        } else {
            age = array[i].yearOfDeath - array[i].yearOfBirth;
        }
        array[i].age = age;
    }
    array.sort((a, b) => a.age - b.age);
    return array[array.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;
