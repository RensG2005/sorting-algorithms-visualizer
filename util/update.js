import sleep from './sleep.js'

const update = async(arr, colors) => {
    await sleep(20)
      content.innerHTML = ""
        arr.map((num, i) => {
            let color = colors[i] ? colors[i] : "black"
            content.innerHTML += `<div class="text-white" style="height: ${num * 5}px; width: 100px; border: 1px solid #2165F1; background: ${color}; margin-right: 10px;"></div>` 
        })
  }

  export default update