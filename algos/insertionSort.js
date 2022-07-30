import update from '../util/update.js'

export default async function insertionSort(inputArr, colors) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            let current = inputArr[i];
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
              colors[j] = "#2165F1"
              colors[current] = "#2165F1"
              await update(inputArr,colors)
              inputArr[j+1] = inputArr[j];
              colors[current] = "0"
              colors[j] = "0"
              j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}