/**
 * Objective: write a function to give me the sum of all numbers in an array
 * 
 * step1 : declare a function
 * step2: Call check whether the function is called properly
 * step3: set a parameter
 * step4: pass the parameter(s), check whether parameter is passed in a proper format
 * step5: do the function tasks (step by step)
 */


function sumOfNumbers(numbers){
    console.log(numbers);  // array hisabe dekhano
    
    let sum = 0;
    for(const number of numbers){
        console.log(number);  // array ke string e ba array break kore  simple number e convert

        sum = sum + number;
        // return sum;  vull process ete wrong calcuolation ase loop er bahir e return korte hoi value
    }
    return sum;
}

const numbs = [54, 62, 12, 6];
const sum = sumOfNumbers(numbs);
console.log('Sum of Numbers is:', sum);