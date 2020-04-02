// Code goes here...
const capitalize = (word) => {
    const split = word.split('') // separates elements (letters) in the word

    let firstWord = split.map(
        (letter, arrIndex) =>
            arrIndex % 2 === 0 ? letter.toUpperCase() : letter, // capitalizes the "even" indexes of the array
    )

    let secondWord = split.map(
        (
            letter,
            arrIndex, // creates a new array
        ) => (arrIndex % 2 !== 0 ? letter.toUpperCase() : letter), // capitalizes the "odd" indexes of the array
    )

    return [firstWord.join(''), secondWord.join('')]
}

console.log(capitalize('ionwarez'))
