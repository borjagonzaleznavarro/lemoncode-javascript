"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOptions = exports.clearPropertyRows = exports.addPropertyRows = void 0;

var _email_icon = _interopRequireDefault(require("../../core/content/img/email_icon.svg"));

var _telefono_icon = _interopRequireDefault(require("../../core/content/img/telefono_icon.svg"));

var _router = require("../../core/router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getImage = function getImage(property) {
  var image = document.createElement('img');
  image.src = property.image;
  return image;
};

var getTitle = function getTitle(property) {
  var title = document.createElement('h1');
  title.textContent = property.title;
  return title;
};

var getSubtitle = function getSubtitle(property) {
  var subtitle = document.createElement('h2');
  var rooms = document.createElement('span');
  rooms.textContent = property.rooms;
  var squareMeter = document.createElement('span');
  squareMeter.textContent = property.squareMeter;
  subtitle.appendChild(rooms);
  subtitle.appendChild(squareMeter);
  return subtitle;
};

var getNotes = function getNotes(property) {
  var notes = document.createElement('p');
  notes.textContent = property.notes;
  return notes;
};

var getContactIcons = function getContactIcons() {
  var list = document.createElement('ul');
  var email = document.createElement('li');
  var emailIcon = document.createElement('img');
  emailIcon.src = _email_icon["default"];
  email.appendChild(emailIcon);
  var phone = document.createElement('li');
  var phoneIcon = document.createElement('img');
  phoneIcon.src = _telefono_icon["default"];
  phone.appendChild(phoneIcon);
  list.appendChild(email);
  list.appendChild(phone);
  return list;
};

var getPrice = function getPrice(property) {
  var container = document.createElement('div');
  container.classList.add('contenedor-precio');
  var price = document.createElement('div');
  price.classList.add('precio');
  price.textContent = property.price;
  container.appendChild(price);
  return container;
};

var getPropetyRow = function getPropetyRow(property) {
  var image = getImage(property);
  var title = getTitle(property);
  var subtitle = getSubtitle(property);
  var notes = getNotes(property);
  var navBottom = document.createElement('div');
  navBottom.classList.add('nav-bottom');
  var contactIcons = getContactIcons();
  var price = getPrice(property);
  navBottom.appendChild(contactIcons);
  navBottom.appendChild(price);
  var article = document.createElement('article');
  var figure = document.createElement('figure');
  figure.appendChild(image);
  article.appendChild(figure);
  var description = document.createElement('div');
  article.appendChild(description);
  description.appendChild(title);
  description.appendChild(subtitle);
  description.appendChild(notes);
  description.appendChild(navBottom);
  var row = document.createElement('a');
  row.href = _router.routes.propertyDetail(property.id);
  row.appendChild(article);
  return row;
};

var addPropertyRows = function addPropertyRows(propertyList) {
  propertyList.forEach(function (property) {
    var row = getPropetyRow(property);
    var listElement = document.getElementById('property-list');
    listElement.appendChild(row);
  });
};

exports.addPropertyRows = addPropertyRows;

var clearPropertyRows = function clearPropertyRows() {
  var listElement = document.getElementById('property-list');
  listElement.innerHTML = '';
};

exports.clearPropertyRows = clearPropertyRows;

var getOption = function getOption(item) {
  var option = document.createElement('option');
  option.value = item.id;
  option.textContent = item.name;
  return option;
};

var setOptions = function setOptions(list, id, defaultValue) {
  var select = document.getElementById(id);
  var defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = defaultValue;
  select.appendChild(defaultOption);
  list.forEach(function (item) {
    var option = getOption(item);
    select.appendChild(option);
  });
};

exports.setOptions = setOptions;