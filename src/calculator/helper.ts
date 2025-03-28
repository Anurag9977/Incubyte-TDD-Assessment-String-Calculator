export function checkNewLineCharacter(input : string): string{
    if(input.includes('\n')){
        //replace all new line characters with comma
        input = input.replace(/\n/g, ',')
    }
    return input
}

export function checkDifferentDeLimiters(input: string): string{
    if(input.startsWith('//')){
        //extract the delimiter
        const delimiter = input[2]
        //replace all the delimiters with comma
        input = input.replace(new RegExp(delimiter, 'g'), ',')
        //remove the delimiter declaration
        input = input.slice(4)
    }
    return input
}

export function checkForCharacters(input: string): string{
    const nums = input.split(',')
    let chars:string[] = []
    nums.forEach((char) => {
        char = char.trim();
        if(isNaN(parseInt(char))){
            chars.push(char)
        }
    })
    if(chars.length){
        throw new Error(`characters are not allowed: ${chars.join(',')}`)
    }
    return input
}
