import update from './util/update.js'

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
    case("insertion Sort"):
      info.innerText = "Time complexity: O(n^2); Space complexity: O(1)"
      break
  }
}

const generateArr = (length) => {
  return Array.from({length: length}, () => Math.floor(Math.random() * 93 + 7));
}

let a = generateArr(slider.value)

arr.innerHTML += `${a.length} values`

slider.onchange = function() {
  content.innerHTML = ""
  arr.innerHTML = ""
  let a = generateArr(this.value)
  colors =  Array.from({ length: slider.value }).map((u, i) => 0)
  arr.innerHTML += `${a.length} values`
}

start.innerText = "Start!"

let colors = [];
start.addEventListener("click", async () => {
  colors =  Array.from({ length: slider.value }).map(i => 0)
    if(start.innerText === "stop!") {
        window.location = window.location
    } else {
    start.innerText = "stop!"

    content.innerHTML=""
    let b = generateArr(slider.value)
    if(type.value === "Quick Sort") {
      const quickSort = await import("./algos/quickSort.js")
      let arr = await quickSort.default(b, 0, b.length - 1, colors)
      colors =  Array.from({ length: slider.value }).map((u, i) => '#2165F1')
      update(arr, colors)
      } else if(type.value === "Bubble Sort") {
          const bubbleSort = await import('./algos/bubbleSort.js')
          let arr = await bubbleSort.default(b, colors)
          colors =  Array.from({ length: slider.value }).map((u, i) => '#2165F1')
          update(arr, colors)
  
      } else if(type.value === "Selection Sort") {
          const selectionSort = await import("./algos/selectionsort.js")
          let arr = await selectionSort.default(b, colors)
          colors =  Array.from({ length: slider.value }).map((u, i) => '#2165F1')
          update(arr, colors)
  
      } else if(type.value === "Merge Sort") {
        const mergeSort = await import("./algos/mergeSort.js")
          let arr = await mergeSort.default(b,0, b.length - 1, colors)
          colors =  Array.from({ length: slider.value }).map((u, i) => '#2165F1')
          update(arr, colors)
      } else if(type.value === "Heap Sort") {
        const heapSort = await import("./algos/heapSort.js")
          let arr = await heapSort.default(b, colors)
          colors =  Array.from({ length: slider.value }).map((u, i) => '#2165F1')
          update(arr, colors)
      } else if(type.value === "Insertion Sort") {
          const insertionSort = await import("./algos/insertionSort.js")
          let arr = await insertionSort.default(b,colors)
          colors =  Array.from({ length: slider.value }).map((u, i) => '#2165F1')
          update(arr, colors)
      } else {
      start.innerText = "Start!"
        
        return 0
      }
      start.innerText = "Start!"
}
})