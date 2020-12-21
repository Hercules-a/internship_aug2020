

function checkInput(input_value, min, max) {
    // inform the user if something goes wrong.
    if (isNaN(input_value)) {
        console.log(`${input_value} is not a number, try again \n`);
        readInput(min_value, max_value);
        return;

    } else {
        if (min <= input_value && input_value <= max) {
            console.log('Correct number')
            return;
        }
        else {
            console.log(`${input_value} is out of range ${min} - ${max}, try again \n`);
            readInput(min_value, max_value);
            return;
        }
    }
}

function readInput(min_value, max_value) {
    let readline = require('readline');

    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // Input prompt should be in format: Input number in range <min_value> - <max_value>:
    // console.log(`Input number in range ${min_value} - ${max_value}>:`);
    
    // Prompt user to input a number in a specified range and store it in input_value.
    rl.question(`Input number in range ${min_value} - ${max_value}>:`, (input_value) => {
        // User should be forced to type in a number until it fulfills all the necessary conditions.
        rl.close(); 
        checkInput(input_value, min_value, max_value);
        
    });  
}


// The minimum should be in the range 0-150, and maximum in 75-200 (be sure that min < max).
while (true) {
    var min_value = Math.floor(Math.random()*150);
    var max_value = Math.floor(Math.random()*125+75);
    if (min_value < max_value) {
        break;
    }
}
readInput(min_value, max_value);