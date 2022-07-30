import swap from '../util/swap.js'

export default async function bubbleSort(arr, colors){
    var isSwapped = false;
    for(let i =0; i < arr.length; i++){
      isSwapped = false;
      for(let j = 0; j < arr.length; j++){
          if(arr[j] > arr[j + 1]){
            await swap(arr, j , j+1, colors)
            isSwapped = true;
          }
      }
      if(!isSwapped){
        break;
      }
    }
    return(arr)
  }