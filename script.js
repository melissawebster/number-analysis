let array = []

function add() {
    let num = document.querySelector('input#id_number')
    let list = document.querySelector('select#id_list')

    if (num.value > 0 && num.value <=100) {
        array.push(Number(num.value))
        let item = document.createElement('option')
        item.text = num.value
        list.appendChild(item)
    } else {
        alert('You should type a number between 1 - 100!')
    }
    num.value = '' // clears entry after sent
    num.focus()  // keeps cursor in input after sent
} 

function reset() {
    document.getElementById('id_number').reset()
    // add reset all

}


function analyze() {
    let res = document.querySelector('div#result')

    if (array.length == 0) {
        alert('You should add at least one number to the list!')
    } else {
        let tot = array.length
        let highest = array[0]
        let lowest = array[0]
        let sum = 0
        let average = 0

        for(let pos in array) {
            if (array[pos] > highest) {
                highest = array[pos]
            }
            if (array[pos] < lowest) {
                lowest = array[pos]
            }
            sum += array[pos]
        }
        average = sum / array.length

        res.innerHTML = `<p> [ ${array} ] </p>`
        res.innerHTML += `Input numbers: ${tot} <br>`
        res.innerHTML += `Lowest number: ${lowest} <br>`
        res.innerHTML += `Highest number: ${highest} <br>`
        res.innerHTML += `Sum: ${sum} <br>`
        res.innerHTML += `Average: ${average.toFixed(2)} <br>`
    }
}
