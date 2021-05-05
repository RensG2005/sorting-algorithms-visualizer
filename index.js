let slider = document.getElementById("myRange");
let arr = document.getElementById("array");
let type = document.getElementById("title");
let start = document.getElementById("start");
let content = document.getElementById("content");
let info = document.getElementById("info");

info.innerText = "Time complexity: O(nlogN); Space complexity: O(logN)"
type.onchange =  (e) => {
  switch(e.target.value) {
    case("Merge Sort"):
      info.innerText = "Time complexity: O(nlogN); Space complexity: O(N)"
      break
    case("Selection Sort"):
      info.innerText = "Time complexity: O(N^2); Space complexity: O(1)"
      break
    case("Bubble Sort"):
      info.innerText = "Time complexity: O(n^2); Space complexity: O(1)"
      break
    case("Quick Sort"):
      info.innerText = "Time complexity: O(nlogN); Space complexity: O(logN)"
      break
    case("Heap Sort"):
      info.innerText = "Time complexity: O(nlogN); Space complexity: O(0)"
      break
  }
}
 function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function swap(arr, a, b) {
  colors[a] = "#9400ff"
  colors[b] = "#9400ff"
    await sleep(50);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    update(arr)
    colors[a] = 0
    colors[b] = 0
  }

async function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            let current = inputArr[i];
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
              colors[j] = "#9400ff"
              colors[current] = "#9400ff"
              await sleep(10)
              await update(inputArr)
              inputArr[j+1] = inputArr[j];
              colors[current] = "0"
              colors[j] = "0"
              j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

 async function quickSort(arr, start, end) {
    if (start >= end) {
      return;
    }
    let index = await partition(arr, start, end);
      await quickSort(arr, start, index - 1),
      await quickSort(arr, index + 1, end)
      return arr
  }
  
  async function partition(arr, start, end) {
    let pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        await swap(arr, i, pivotIndex);
        pivotIndex++;
      }
    }
    await swap(arr, pivotIndex, end);
    return pivotIndex
}

async function bubbleSort(arr){
  var isSwapped = false;
  for(let i =0; i < arr.length; i++){
    isSwapped = false;
    for(let j = 0; j < arr.length; j++){
        if(arr[j] > arr[j + 1]){
          await swap(arr, j , j+1)
          isSwapped = true;
        }
    }
    if(!isSwapped){
      break;
    }
  }
  return(arr)
}

    
async function mergeSort(array, start = 0, end = array.length - 1) {
  // base case
  if (start < end) {
    await sleep(20)
    await update(array)
    let middle = Math.floor((start + end) / 2)

    await mergeSort(array, start, middle)
    await mergeSort(array, middle + 1, end)  
    await merge(array, start, middle, end)
  }
  return array
}

async function merge(array, start, middle, end) {
  colors[start] = "#9400ff"
  colors[end] = "#9400ff"
  let leftArrayLength = middle - start + 1
  let rightArrayLength = end - middle
  let leftArray = []
  let rightArray = []
  for (let i = 0; i < leftArrayLength; ++i) leftArray[i] = array[start + i]  
  for (let i = 0; i < rightArrayLength; ++i) rightArray[i] = array[middle + 1 + i]

  let leftIndex = 0, rightIndex = 0
  
  let currentIndex = start;
  while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
    await sleep(50)
    await update(array)
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

async function selectionSort(inputArr) { 
  let n = inputArr.length;
      
  for(let i = 0; i < n; i++) {
      let min = i;
      for(let j = i+1; j < n; j++){
        if(inputArr[j] < inputArr[min]) {
          min=j; 
        }
      }
       if (min != i) {
        await swap(inputArr, i, min)
      }
  }
  return inputArr;
}

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
 const heapSort = async (arr) => {
   let n = arr.length
     for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
         maxHeapify(arr, n, i); 
     }
     for (let i = n - 1; i >= 0; i--) { 
        await swap(arr, 0, i)
        maxHeapify(arr, i, 0); 
     }
     return arr
 }

const generateArr = (length) => {
  return Array.from({length: length}, () => Math.floor(Math.random() * 93 + 7));
}

const update = (arr, color = "black") => {
    content.innerHTML = ""
      arr.map((num, i) => {
          color = colors[i] ? colors[i] : "black"
          content.innerHTML += `<div class="text-white" style="height: ${num * 7}px; width: 100px; border: 1px solid #9400ff; background: ${color}; margin-right: 10px;"></div>` 
      })
}

let a = generateArr(slider.value)

if(a.length > 30) {
  arr.innerHTML += "[" +  a.slice(0, 30).toString() + "... and "+ (a.length - 30).toString() +" more]"
} else {
  arr.innerHTML += "[" +  a.toString() + "]"
}

slider.onchange = function() {
  content.innerHTML = ""
  arr.innerHTML = ""
  let a = generateArr(this.value)
  colors =  Array.from({ length: slider.value }).map((u, i) => 0)
  if(a.length > 30) {
    arr.innerHTML += "[" +  a.slice(0, 30).toString() + "... and "+ (a.length - 30).toString() +" more]"
  } else {
    arr.innerHTML += "[" +  a.toString() + "]"
  }
}

start.innerText = "Start!"

let colors;
start.addEventListener("click", async () => {
  colors =  Array.from({ length: slider.value }).map(i => 0)
    if(start.innerText === "stop!") {
        window.location = window.location
    } else {
    start.innerText = "stop!"

    content.innerHTML=""
      let b = generateArr(slider.value)
      console.log(b)
      if(type.value === "Quick Sort") {
          let arr = await quickSort(b, 0, b.length - 1)
          colors =  Array.from({ length: slider.value }).map((u, i) => 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)')
          update(arr)
  
      } else if(type.value === "Bubble Sort") {
          let arr = await bubbleSort(b)
          colors =  Array.from({ length: slider.value }).map((u, i) => 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)')
          update(arr)
  
      } else if(type.value === "Selection Sort") {
          let arr = await selectionSort(b)
          colors =  Array.from({ length: slider.value }).map((u, i) => 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)')
          update(arr)
  
      } else if(type.value === "Merge Sort") {
          let arr = await mergeSort(b)
          colors =  Array.from({ length: slider.value }).map((u, i) => 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)')
          update(arr)
      } else if(type.value === "Heap Sort") {
          let arr = await heapSort(b)
          colors =  Array.from({ length: slider.value }).map((u, i) => 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)')
          update(arr)
      } else if(type.value === "Insertion Sort") {
          let arr = await insertionSort(b)
          colors =  Array.from({ length: slider.value }).map((u, i) => 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)')
          update(arr)
      } else {
      start.innerText = "Start!"
        
        return 0
      }
      start.innerText = "Start!"
}
})