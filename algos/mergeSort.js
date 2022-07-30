    import update from '../util/update.js'

export default async function mergeSort(array, start = 0, end = array.length - 1, colors) {
    // base case
    if (start < end) {
      await update(array, colors)
      let middle = Math.floor((start + end) / 2)
  
      await mergeSort(array, start, middle, colors)
      await mergeSort(array, middle + 1, end, colors)  
      await merge(array, start, middle, end, colors)
    }
    return array
  }
  
  async function merge(array, start, middle, end, colors) {
    console.log()
    colors[start] = "#2165F1"
    colors[end] = "#2165F1"
    let leftArrayLength = middle - start + 1
    let rightArrayLength = end - middle
    let leftArray = []
    let rightArray = []
    for (let i = 0; i < leftArrayLength; ++i) leftArray[i] = array[start + i]  
    for (let i = 0; i < rightArrayLength; ++i) rightArray[i] = array[middle + 1 + i]
  
    let leftIndex = 0, rightIndex = 0
    
    let currentIndex = start;
    while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
      await update(array, colors )
      if (leftArray[leftIndex] <= rightArray[rightIndex]) {
        array[currentIndex] = leftArray[leftIndex++]
      }
      else {
        array[currentIndex] = rightArray[rightIndex++]
      }
      currentIndex++
    }
    while (leftIndex < leftArrayLength) array[currentIndex++] = leftArray[leftIndex++]
    while (rightIndex < rightArrayLength) array[currentIndex++] = rightArray[rightIndex++]
    colors[start] = 0
    colors[end] = 0
  }