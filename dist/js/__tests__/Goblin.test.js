"use strict";

var _Goblin = _interopRequireDefault(require("../Goblin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = document.createElement('div');
  html.innerHTML = "<section class=\"goblin\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <img src=\"img/goblin.png\" class=\"head\">\n      </div>\n      <div class=\"col\"></div>\n      <div class=\"col\"></div>\n      <div class=\"col\"></div>\n    </div>\n  </div>";jest.useFakeTimers();

test('change cell', function () {
  
  var Game = new _Goblin.default(html.querySelector('.goblin'));
  expect(Game.cells[0].contains(Game.goblinHead)).toBeTruthy();
  Game.change();

});