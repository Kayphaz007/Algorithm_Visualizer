export async function* BubbleSort(
  array: number [],
  swap: (element1: number, element2: number) => void,
  highlight: (array: number []) => void,
  markSort: (element: number) => void
) {
  for (let i = 0; i < array.length; i++) {
    let j;
    for (j = 0; j < array.length - i - 1; j++) {
      yield await highlight([j, j + 1]);

      if (array[j] > array[j + 1]) {
        yield await swap(j, j + 1);
      }
    }

    markSort(j);
    yield;
  }
}
