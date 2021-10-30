export default function sortHero(array) {
  array.sort((prev, next) => {
    const a = next.health - prev.health;
    return a;
  });
  return array;
}
