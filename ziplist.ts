function zipList<T, U>(list1: T[], list2: U[]): (T | U)[] {
  const result: (T | U)[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

const zipListTheFunctionalWay = <T, U>(list1: T[], list2: U[]): (T | U)[] => list1.reduce((acc, item, index) => {
  acc.push(item, list2[index]);
  return acc;
}, [] as (T | U)[]);

console.log(...zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(...zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
