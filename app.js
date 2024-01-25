function arrangeWordNumberList(wordNumberList) {
    const resultArray = [];

    for (let i = 0; i < wordNumberList.length; i += 2) {
        const number = parseInt(wordNumberList[i], 10);
        const word = wordNumberList[i + 1];

        if (!isNaN(number) && word) {
            resultArray.push({ number, word });
        }
    }

    // Sort the array based on the 'number' property
    resultArray.sort((a, b) => a.number - b.number);

    return resultArray;
}

// Example usage with your provided word-number list
const providedWordNumberList = [
    296, 'land', 3, 'sun', 216, 'too', 197, 'huge', 237, 'dont',
    249, 'such', 81, 'noun', 113, 'student', 30, 'brown', 111, 'complete',
    157, 'play', 165, 'cook',  /* ... (remaining pairs) */
];

const result = arrangeWordNumberList(providedWordNumberList);
console.log(result);

// Function to decode hidden message based on the pyramid structure
function decodeHiddenMessage(wordNumberList) {
    const arrangedList = arrangeWordNumberList(wordNumberList);
    const decodedMessage = [];

    let currentIndex = 0;

    for (let currentLine = 1; currentIndex < arrangedList.length; currentLine++) {
        const word = arrangedList[currentIndex].word;
        decodedMessage.push(word);

        currentIndex += currentLine+1;
    }

    return decodedMessage.join(' ');
}

// Example usage
const decodedMessage = decodeHiddenMessage(providedWordNumberList);
console.log(decodedMessage);