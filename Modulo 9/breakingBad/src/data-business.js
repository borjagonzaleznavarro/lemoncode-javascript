function getCharacters() {
    return fetch("https://www.breakingbadapi.com/api/characters").then(
        response => {
            return response.json();
        }
    )
};

function getCharacterDetails(id) {
    return fetch("https://www.breakingbadapi.com/api/characters/"+ id +"").then(
        response => {
            return response.json();
        }
    )
};

function getCharacterQuotes(character) {
    return fetch("https://www.breakingbadapi.com/api/quote?author="+ character +"").then(
        response => {
            return response.json();
        }
    )
};

export { getCharacters, getCharacterDetails, getCharacterQuotes };