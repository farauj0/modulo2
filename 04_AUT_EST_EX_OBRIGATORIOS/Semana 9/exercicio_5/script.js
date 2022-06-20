function primeNumbers() {
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    var primes = []
    for (let i = 0; i<=num2;i++) {
      let isPrime = true
      if (i > 1) {
        for (let j = 2; j < i; j++) {
          if (i % j == 0) {
              isPrime = false;
              break;
          }
      }
      if (isPrime) {
        primes.push(i);
    }
      }
    }
    document.getElementById('output').innerText = primes
    // document.getElementById('output').innerText += 'oi'
}
