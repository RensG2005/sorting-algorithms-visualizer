import swap from '../util/swap.js'

export default async function quickSort(arr, start, end, colors) {
    if (start >= end) {
      return;
    }
    let index = await partition(arr, start, end, colors);
      await quickSort(arr, start, index - 1, colors),
      await quickSort(arr, index + 1, end, colors)
      return arr
  }
  
  async function partition(arr, start, end, colors) {
    let pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        await swap(arr, i, pivotIndex, colors);
        pivotIndex++;
      }
    }
    await swap(arr, pivotIndex, end, colors);
    return pivotIndex
}