import swap from '../util/swap.js'

const maxHeapify = async (arr, n, i) => {
    let largest = i;
    let l = 2 * i + 1; 
    let r = 2 * i + 2; 
     if (l < n && arr[l] > arr[largest]) {
           largest = l; 
     }
     if (r < n && arr[r] > arr[largest]) {
          largest = r; 
     }
     if (largest != i) { 
          let temp = arr[i]; 
          arr[i] = arr[largest]; 
          arr[largest] = temp; 
        await maxHeapify(arr, n, largest); 
      } 
  }
export default async function heapSort (arr, colors) {
     let n = arr.length
       for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
           maxHeapify(arr, n, i); 
       }
       for (let i = n - 1; i >= 0; i--) { 
          await swap(arr, 0, i, colors)
          maxHeapify(arr, i, 0); 
       }
       return arr
   }