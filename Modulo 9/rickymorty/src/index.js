import "./styles.css";
import * as DataBusiness from "./data-business.js";
import * as Utils from "./utils.js";

const root = document.getElementById('root');
const characterDetails = document.getElementById('character-detail');
let characterID;

DataBusiness.getCharacters().then(datos => {
    root.innerHTML = "";
    datosCharacters = datos.results;
    for (character of datosCharacters) {
        root.append(Utils.createCharacterRow(character));
    }

    document.querySelectorAll(".character-row").forEach(function (element) {
        element.addEventListener('click', function () {

            characterID = parseInt(this.getAttribute('id'));
            var item = datosCharacters.find(item => item.id === characterID);

            characterDetails.append(Utils.showCharacter(item));
        });
    });
}).catch(error => {
    root.innerHTML = error;
});