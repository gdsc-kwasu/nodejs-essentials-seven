// Code goes here...
const unoderedCapitalize = (word) => {
    let result = '' //stores the string

    for (let i = 0; i < word.length; i++) {
        // condition for the string capitalization, when the indexing is either odd or even
        if (i % 2 !== 0) {
            result += word[i].toLowerCase()
        } else {
            result += word[i].toUpperCase()
        }
    }
    return result
}

let yourName = 'ionwarez'
console.log(unoderedCapitalize(yourName))



