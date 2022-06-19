function fibonacciSequence() {
    const umpteenth = parseInt(document.getElementById('umpteenth').value)
    sequence = []
    if (umpteenth>0) {
        sequence.push(1)
        if (umpteenth>1) {
            sequence.push(1)
            if (umpteenth>2) {   
                for (let i=2; i<umpteenth; i++) {
                    sequence.push(sequence[i-2]+sequence[i-1])
                
            }
        }
        }
    }
    else {
        sequence.push('vazio')
    }
    document.getElementById('output').innerText = sequence
}