
function toCfromF(initialTemp) {
    return (initialTemp - 32) * 5/9
}

function toKfromC(initialTemp) {
    return (Number(initialTemp) + 273.15)
}

function toCfromK(initialTemp) {
    return (initialTemp - 273.15)
}

function toFfromC(initialTemp) {
    return (initialTemp * 9/5) + 32
}




let convertClick = document.getElementById('start').addEventListener('click', function() {
    let fromChoice = document.getElementById('fromTemp')
    let toChoice = document.getElementById('toTemp')
    let answer = ""
    let initialTemp = input.value

    if (fromChoice.value === "f" && toChoice.value === "c" ) {
        answer = toCfromF(initialTemp)
    } else if (fromChoice.value === 'c' && toChoice.value === 'k') {
        answer = toKfromC(initialTemp) 
    } else if (fromChoice.value === 'k' && toChoice.value === 'c') {
        answer = toCfromK(initialTemp)
    } else if (fromChoice.value === 'c' && toChoice.value === 'f') {
        answer = toFfromC(initialTemp)
    } else if (fromChoice.value === 'f' && toChoice.value === 'k') {
        answer = toKfromC(toCfromF(initialTemp))
    } else if (fromChoice.value === 'k' && toChoice.value === 'f') {
        answer = toFfromC(toCfromK(initialTemp))
    } else {
        alert("Please select two different systems!")
    }
    
    
    
    document.getElementById('output').innerText = answer + "°"

})

let clearClick = document.getElementById('end').addEventListener('click', function() {
    input.value = ""
    output.value = ""
    
})
