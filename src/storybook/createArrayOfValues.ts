export function createArrayOfValues<ValueType>(amount: number, fabric: (index: number) => ValueType) {
  const result: ValueType[] = [];

  for (let i = 0; i < amount; i++) result.push(fabric(i));

  return result;
}
