function studentInputs() {
    document.getElementById("studentInputs").innerHTML = ``
    var qty = document.getElementById("qtyStudents").value

    for (let i=1; i<=qty; i++) {
        document.getElementById("studentInputs").innerHTML += `
        <div>
            <label for="test${i}">Nota Prova ${i}</label>
            <input id="test${i}" type="text" >
            <label for="project${i}">Nota Trabalho ${i}</label>
            <input id="project${i}" type="text">
        </div>`
    }
    document.getElementById("studentInputs").innerHTML += `<button id="inputsButton" onclick="calcGrades()">Calcular</button>`
}

function calcGrades() {
    document.getElementById(`result`).innerHTML = ``
    var qty = document.getElementById("qtyStudents").value
    var sumTest = 0
    var sumProject = 0
    var testResults = []
    var projectResults = []

    for (let i=1; i<=qty; i++) {
        var testResult = document.getElementById(`test${i}`).value
        var projectResult = document.getElementById(`project${i}`).value
        var mean = (testResult*2 + projectResult*3)/5
        
        testResults.push(testResult)
        projectResults.push(projectResult)
        sumTest += testResult*0.4
        sumProject += projectResult*0.6
        document.getElementById(`result`).innerHTML += `Média Aluno ${i} = ${mean.toFixed(2)} <br> `
    }
    
    testResults.sort(function(a, b){return a-b})
    projectResults.sort(function(a, b){return a-b})

    document.getElementById(`result`).innerHTML += `<br> `
    document.getElementById(`result`).innerHTML += `Média Geral = ${((sumTest+sumProject)/qty).toFixed(2)} <br> `
    document.getElementById(`result`).innerHTML += `Média Notas Prova = ${((sumTest)/qty).toFixed(2)} <br> `
    document.getElementById(`result`).innerHTML += `Média Notas Trabalho = ${((sumProject)/qty).toFixed(2)} <br> `
    document.getElementById(`result`).innerHTML += `<br> `
    document.getElementById(`result`).innerHTML += `Maior nota da prova = ${Number(testResults[qty-1]).toFixed(2)} <br>`
    document.getElementById(`result`).innerHTML += `Menor nota da prova = ${Number(testResults[0]).toFixed(2)} <br>`
    document.getElementById(`result`).innerHTML += `Maior nota do trabalho = ${Number(projectResults[qty-1]).toFixed(2)} <br>`
    document.getElementById(`result`).innerHTML += `Menor nota do trabalho = ${Number(projectResults[0]).toFixed(2)} <br>`
}