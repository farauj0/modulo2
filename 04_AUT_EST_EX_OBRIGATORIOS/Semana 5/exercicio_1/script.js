function Calculate() {
    var result = 0
    var val1 = Number(document.getElementById('val1').value)
    var val2 = Number(document.getElementById('val2').value)
    var operator = document.getElementById('operator').value
    
    if (operator == 'sum') {
        result = val1+val2
    } else if  (operator == 'subtraction') {
        result = val1-val2
    } else if (operator == 'multiplication') {
        result = val1*val2
    } else if (operator == 'division') {
        result = val1/val2
    } else if (operator == 'floorDivision') {
        result = (Math.floor(val1/val2))
    } else if (operator == 'modulus') {
        result = val1%val2
    }

    document.getElementById('result').innerText = `Resultado: ${result}`
}