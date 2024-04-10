/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";




// Concatenate the string variables into one new string
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;

// Print out the concatenated string
console.log(tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";
const wordOneResult = part1.slice(0, -1) + part1.slice(-1).toUpperCase();
const wordTwoResult = part2.slice(0, -1) + part2.slice(-1).toUpperCase();
// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const result = `${wordOneResult}${wordTwoResult}`

// Print the cameLtaiL-formatted string
console.log(result);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = 84 * (15/100);

// Print out the tipAmount
console.log(tipAmount)




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const min = 1;
const max = 10;
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

// Print the generated random number
console.log(randomNumber)



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//false for expression1
const expression2 = a || b;
//true for expression2
const expression3 = !a && b;
//false for expression3
const expression4 = !(a && b);
//false for for expression4
const expression5 = !a || !b;
//true for expression5
const expression6 = !(a || b);
//true for expression6
const expression7 = a && a;
//true for expression7
console.log(expression1)
console.log(expression2)
console.log(expression3)
console.log(expression4)
console.log(expression5)
console.log(expression6)
console.log(expression7)