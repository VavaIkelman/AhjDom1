export default class Goblin {
  constructor(element) {
    this.cells = element.querySelectorAll('.cell');
    this.goblinHead = element.querySelector('.head');
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
