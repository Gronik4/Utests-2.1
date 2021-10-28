import sortHero from '../add';

const array1 = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
const newArr = sortHero(array1);

test('TestToEqual sort hero', () => {
  const resalt = [];
  newArr.forEach((element) => {
    resalt.push(element.health);
  });
  expect(resalt).toEqual([100, 80, 10]);
});

test.each([
  [{ name: 'маг', health: 100 }, 100],
  [{ name: 'лучник', health: 80 }, 80],
  [{ name: 'мечник', health: 10 }, 10],
])(
  ('TestToBe sort hero'),
  (object, expected) => {
    const resalt = sortHero(object);
    expect(resalt).toBe(expected);
  }
  );
