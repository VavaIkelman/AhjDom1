"use strict";

var _Goblin = _interopRequireDefault(require("./Goblin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Game = new _Goblin.default(document.querySelector('.goblin'));
Game.change();