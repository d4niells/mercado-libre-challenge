export const limit = <T>(items: T[], limit: number): T[] => {
  let randomItems: T[] = [];

  for (let i = 0; i < limit; i++) {
    const randomIndex = Math.floor(Math.random() * items.length);
    randomItems.push(items[randomIndex]);
  }

  return randomItems;
};
