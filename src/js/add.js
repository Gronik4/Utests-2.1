export default function sortHero(array) {
  if (Array.isArray(array)) {
    array.sort((prev, next) => {
      const a = next.health - prev.health;
      return a;
    });
    return array;
  }
  return array.health;
}
