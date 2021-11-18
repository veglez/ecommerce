import { dataIndexes } from 'src/redux/types';

function getNews<Input extends { id: string }>(
  data: Input[],
  indexes: dataIndexes
): { newItems: Input[]; newIndexes: dataIndexes } {
  const newItems = data.filter((p) => !(p.id in indexes));
  const newIndexes: dataIndexes = {};
  newItems.forEach((p) => {
    newIndexes[p.id] = null;
  });

  return { newItems, newIndexes };
}

export default getNews;
