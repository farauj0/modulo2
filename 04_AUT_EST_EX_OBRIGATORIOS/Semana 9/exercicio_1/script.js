function isOdd() {
    const input = document.getElementById('input').value
    if (input[0]%2 != 0) {
        document.getElementById('output').innerText = 'é ímpar'
    }
    else {
        document.getElementById('output').innerText = 'é par'
    }
}