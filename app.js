// Code goes here...
const Capitalize = (word) => {
    const split = word.split('') // separates elements (letters) in the word
    
    let firstWord = split.map((a, arrIndex) => 
        arrIndex % 2 === 0 ?
        a.toUpperCase() // capitalizes the "even" indexes of the array
        : a
    )

    let secondWord = split.map((a, arrIndex) =>  // creates a new array
        arrIndex % 2 !== 0 ? 
        a.toUpperCase() // capitalizes the "odd" indexes of the array
        : a
    )
    
    return [firstWord.join(''), secondWord.join('')]
}

console.log(Capitalize('ionwarez'))
