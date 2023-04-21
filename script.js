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


function analyze() {
    let res = document.querySelector('div#result')

    if (array.length == 0) {
        alert('You should add at least one number to the list!')
    } else {
        res.innerHTML = `[ ${array} ]`
    }
}
