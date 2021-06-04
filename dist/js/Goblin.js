"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Goblin = /*#__PURE__*/function () {
  function Goblin(gameElement) {
    _classCallCheck(this, Goblin);

    this.cells = gameElement.querySelectorAll('.col');
    this.goblinHead = gameElement.querySelector('.head');
  }

  _createClass(Goblin, [{
    key: "change",
    value: function change() {
      var _this = this;

      var previous = 0;
      var rand = 0;
      setInterval(function () {
        while (rand === previous) {
          rand = Math.floor(Math.random() * (_this.cells.length - 1));
        }

        previous = rand;

        _this.cells[rand].appendChild(_this.goblinHead);
      }, 1000);
    }
  }]);

  return Goblin;
}();

exports.default = Goblin;