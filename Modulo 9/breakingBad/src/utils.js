const createCharacterRow = character => {
  const element = document.createElement("div");

  const avatar = createAvatar(character);
  element.appendChild(avatar);

  const link = createRowText(character);
  element.appendChild(link);

  element.className = "character-row";

  element.setAttribute('id', character.char_id);
  element.setAttribute('name', character.name);

  return element;
};

const createAvatar = character => {
  const element = document.createElement("img");
  element.width = 150;
  element.className = "thumbnail";
  element.src = character.img;

  return element;
};

const createRowText = character => {
  const element = document.createElement("span");
  element.append(character.name);

  return element;
};

const createAvatarDetail = character => {
  const element = document.createElement("img");
  element.width = 350;
  element.src = character.img;

  return element;
};

const showCharacter = character => {
  const characterDetail = document.getElementById("character-detail");

  characterDetail.innerHTML = "";
  characterDetail.appendChild(createAvatarDetail(character));
  characterDetail.appendChild(createParagraph("Name: " + character.name));
  characterDetail.appendChild(
    createParagraph("Birthday: " + character.birthday)
  );
  characterDetail.appendChild(
    createParagraph("Nickname: " + character.nickname)
  );
};

const createParagraph = text => {
  const element = document.createElement("p");
  element.append(text);
  return element;
};

const showQuotes = text => {
    const element = document.createElement("p");
    element.className = 'quote';
    element.append(text);
    return element;
  };

export { createCharacterRow, showCharacter, showQuotes };