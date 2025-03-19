export function checkNewLineCharacter(input : string): string{
    if(input.includes('\n')){
        //replace all new line characters with comma
        input = input.replace(/\n/g, ',')
    }
    return input
}