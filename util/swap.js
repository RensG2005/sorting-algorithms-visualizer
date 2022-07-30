import sleep from './sleep.js'
import update from './update.js'

export default async function swap(arr, a, b, colors) {
    colors[a] = "#2165F1"
    colors[b] = "#2165F1"
      await sleep(10);
      let temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
      update(arr, colors)
      colors[a] = 0
      colors[b] = 0
}