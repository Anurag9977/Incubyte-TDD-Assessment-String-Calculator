export function addition(input : string):number{
    if (input === '') {
        return 0;
    }
    const numbers = input.split(',')
    let sum = 0
    numbers.forEach((num : string) => {
        num = num.trim()
        sum += parseInt(num)
    })
    return sum
}