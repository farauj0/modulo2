function calcValue() {
    var qty = document.getElementById("qty").value
    var time = document.getElementById("time").value
    var output = document.getElementById.innerText
    var price = 0
    
    if (time == "placeholder") {
        document.getElementById("output").innerText = `Por favor, selecione o período do voo`
    } else {
        if (time == "diurno") {
            if (qty<=50) {
                price = qty*200
            } else {
                price = qty*120
            }
        } else if (time == "noturno") {
            if (qty<=50) {
                price = qty*100
            } else {
                price = qty*80
            }
        }
        document.getElementById("output").innerText = `Total = R$ ${price},00`
    }
}