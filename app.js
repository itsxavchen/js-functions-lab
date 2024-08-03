// exercise 1

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
console.log('Exercise 1 Result:',maxOfTwoNumbers(3, 9));

// exercise 2

const isAdult = function (age) {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}
console.log('Exercise 2 Result:', isAdult(21));

// exercise 3

const isCharAVowel = function (character) {
    if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
        return true;
    } else {
        return false;
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));

// exercise 4

const generateEmail = function (name, domain) {
    return `${name}@${domain}`;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// exercise 5

const greetUser = function (name, time) {
    return `Good ${time}, ${name}!`;
}
console.log('Exercise 5 Result:', greetUser("Sam", "evening"));

// exercise 6

const maxOfThree = function (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else if (num3 > num1 && num3 > num2) {
        return num3;
    } else {
        return "Please ensure each number is different from one another"
    }
}
console.log('Exercise 6 Result:', maxOfThree(10, 8, 100));

// exercise 7

const calculateTip = function (bill, tip) {
    return bill * (tip / 100);
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

// exercise 8

const convertTemperature = function (temp, tempScale) {
    if (tempScale === "C") {
        return temp;
    } else if (tempScale === "F") {
        return (temp * 1.8) + 32;
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "F"));

// exercise 9

const basicCalculator = function (num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        default: 
            return 'invalid';
    }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "add"));

// exercise 10

const calculateGrade = function (numScore) {
    if (numScore >= 90) {
        return 'A';
    } else if (numScore >= 80 && numScore <= 89) {
        return 'B';
    } else if (numScore >= 70 && numScore <= 79) {
        return 'C';
    } else if (numScore >= 60 && numScore <= 69) {
        return 'D';
    } else if (numScore < 60) {
        return 'F';
    }
}
console.log('Exercise 10 Result:', calculateGrade(85));

// exercise 11

const createUsername = function (firstName, lastName) {
    let firstNameThree = ''
    let lastNameThree = ''
    let firstNameCount = firstName.length
    let lastNameCount = lastName.length

    for (let i = 0; i < Math.min(3, firstName.length); i++) {
        firstNameThree = firstNameThree + firstName[i]
    }
    
    for (let x = 0; x < Math.min(3, lastName.length); x++) {
        lastNameThree = lastNameThree + lastName[x]
    }
    let totalCount = firstName.length + lastName.length;
    return firstNameThree + lastNameThree + totalCount
}
console.log('Exercise 11 Result:', createUsername("Ludwig", "ito")); 


    
//    if (firstNameCount === 1) {
//         firstNameThree = firstName[0];
//     } else if (firstNameCount === 2) {
//         firstNameThree = firstName[0] + firstName[1];
//     } else if (firstNameCount >= 3) {
//         firstNameThree = firstName[0] + firstName[1] + firstName[2];
//     };

//     if (lastNameCount === 1) {
//         lastNameThree = lastName[0];
//     } else if (lastNameCount === 2) {
//         lastNameThree = lastName[0] + lastName[1];
//     } else if (lastNameCount >= 3) {
//         lastNameThree = lastName[0] + lastName[1] + lastName[2];
//     };
    
//     let totalCount = firstName.length + lastName.length;
//     return firstNameThree + lastNameThree + totalCount
// }
// console.log('Exercise 11 Result:', createUsername("Ludwig", "ito"));

// exercise 12

const numArgs = function () {
    return arguments.length;
}
console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));

