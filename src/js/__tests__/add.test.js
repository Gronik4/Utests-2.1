import sortHero from '../add';

const array1 = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
const expected = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('TestToEqual sort hero', () => {
  const resalt = sortHero(array1);
  expect(resalt).toEqual(expected);
});

test('TestToBe sort hero', () => {
  const resalt = sortHero(array1);
  expect(resalt).not.toBe(expected);
});
