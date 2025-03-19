import { checkDifferentDeLimiters, checkNewLineCharacter } from "./helper";

export function addition(input : string):number{
    //Check if the string is empty
    if (input === '') {
        return 0;
    }

    //Check if a different delimiter is used
    input = checkDifferentDeLimiters(input);

    //Check if the string contains new line character(s)
    input = checkNewLineCharacter(input);

    //Split the string into numbers
    const numbers = input.split(',')
    let sum = 0
    numbers.forEach((num : string) => {
        num = num.trim()
        sum += parseInt(num)
    })
    return sum
}