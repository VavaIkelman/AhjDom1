import Goblin from '../Goblin';

test('check cell', () => {
  const html = document.createElement('div');
  html.innerHTML = `<table class="goblin">
  <tr>
    <th class="cell">
      <img src="img/goblin.png" class="head">
    </th>
    <th class="cell"></th>
    <th class="cell"></th>
    <th class="cell"></th>
  </tr>
</table>`;
  const Game = new Goblin(html.querySelector('.goblin'));

  expect(Game.cells[0].contains(Game.goblinHead)).toBeTruthy();
});
