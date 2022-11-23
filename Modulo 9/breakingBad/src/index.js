import "./styles.css";
import * as DataBusiness from "./data-business.js";
import * as Utils from "./utils.js";

const root = document.getElementById('root');
const characterDetails = document.getElementById('character-detail');
let characterID;
let characterName;

DataBusiness.getCharacters().then(datos => {
    root.innerHTML = "";
    for (character of datos) {
        root.append(Utils.createCharacterRow(character));
    }

    document.querySelectorAll(".character-row").forEach(function (element) {
        element.addEventListener('click', function () {

            characterID = this.getAttribute('id');
            characterName = this.getAttribute('name');

            DataBusiness.getCharacterDetails(characterID).then(datos => {
                for (character of datos) {
                    characterDetails.append(Utils.showCharacter(character));
                }
                getQuotes(characterName);
            }).catch( error => {
                characterDetails.innerHTML = 'Ha ocurrido un error intentando recoger los datos';
            });
        });
    });
}).catch(error => {
    root.innerHTML = 'Ha ocurrido un error intentando recoger los datos';
});

function getQuotes(characterName) {
    DataBusiness.getCharacterQuotes(characterName).then(quotes => {
        for (quote of quotes) {
            characterDetails.append(Utils.showQuotes(quote.quote));
        }
    }).catch( error => {
        characterDetails.innerHTML = 'Ha ocurrido un error intentando recoger los datos';
    });
}