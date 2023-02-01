"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propertyList = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = "".concat(process.env.BASE_API_URL, "/properties");

var propertyList = function propertyList() {
  return _axios["default"].get(url).then(function (response) {
    return response.data;
  });
};

exports.propertyList = propertyList;