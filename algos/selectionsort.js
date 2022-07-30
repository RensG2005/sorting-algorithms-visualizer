import swap from "../util/swap.js"

export default async function selectionSort(inputArr, colors) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
          if(inputArr[j] < inputArr[min]) {
            min=j; 
          }
        }
         if (min != i) {
          await swap(inputArr, i, min, colors)
        }
    }
    return inputArr;
  }
  