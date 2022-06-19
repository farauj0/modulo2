function primeNumbers() {
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    var primes = []
    for (let i = 0; i<=num2;i++) {
        var m = false
        if (i>=num1) {
            if (i == 2) {
                var m = true
              } else if (i > 1) {
                for (var j = 2; j < i; j++) {
            
                  if (i % j != 0) {
                    var m = true;
                  } else if (i == j * j) {
                    var m = false
                  } else {
                    var m = false;
                  }
                }
              } else {
                var m = false;
              }
            if (m == true) {
                primes.push(i)
            }
            
            }
    }
    document.getElementById('output').innerText = primes
    // document.getElementById('output').innerText += 'oi'
}
