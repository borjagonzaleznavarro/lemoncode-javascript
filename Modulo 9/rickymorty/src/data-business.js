function getCharacters() {
    return fetch("https://rickandmortyapi.com/api/character").then(
        response => {
            return response.json();
        }
    )
};

export { getCharacters };