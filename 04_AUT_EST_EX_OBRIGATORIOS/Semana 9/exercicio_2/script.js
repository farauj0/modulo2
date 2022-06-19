function calculate() {
    var num = document.getElementById('value').value
    var sum = 0
    for (let i=0; i<num.length; i++) {
        sum += parseFloat(num[i])
    }
    document.getElementById('output').innerText = sum
    // document.getElementById('output').innerText = typeof num
}