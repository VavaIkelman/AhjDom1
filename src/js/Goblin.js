export default class Goblin {
  constructor(gameElement) {
    this.cells = gameElement.querySelectorAll('.cage');
    this.goblinHead = gameElement.querySelector('.head');
  }

  rotate() {
    let previous = 0;
    let rand = 0;

    setInterval(() => {
      while (rand === previous) {
        rand = Math.floor(Math.random() * (this.cells.length - 1));
      }
      previous = rand;
      this.cells[rand].appendChild(this.goblinHead);
    }, 1000);
  }
}
