// Exercise #1
// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?
// Return the value of what she should be paying.

const paymentCount = total => ((total * 0.01) + 3) + total
console.log (`Total price, fee included = ${paymentCount(1300)} dollars`)

// Exercise #2
// Part 1
// Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.
const greeting = (name1, name2, name3) => `Welcome ${name1}, ${name2}, ${name3} !!`
console.log(greeting('Samantha', 'Sarah', 'Gabrella'))

// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.

// i.e. 1990 returns 30
const toAge = birthYear => 2023 - birthYear
console.log(`${toAge(1998)} years old`)


// Part 3
// Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.
const toWelcomeAge = (name1, age1, name2, age2, name3, age3) => `Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`
console.log(toWelcomeAge('A', '23','B','33','C','39'))

// Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// Part 1
// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.

// Part 2
// A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.

// Part 3
// A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.

const grading = score => {
    if (score == 11){
        return "Perfect"
    } else if (score > 8) {
        return "Excellent"
    } else if (score >= 5) {
        return `${true} - Congratulations! You passed the exam.`
    } else {
        return "Invalid score, try again."
    }
}
console.log(grading(7))