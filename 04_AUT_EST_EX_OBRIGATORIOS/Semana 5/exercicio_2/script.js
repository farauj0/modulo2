function Calculate() {
    document.getElementById('result').innerHTML = ``
    var cem = 0
    var cinquenta = 0
    var vinte = 0
    var dez = 0
    var cinco = 0
    var dois = 0
    var um = 0
    var cinqc = 0
    var vintc = 0
    var dezc = 0
    var cincc = 0
    var umc = 0

    const x = Number(document.getElementById('val').value)

    for (let i = x; i>=100; i=i-100) {
        cem += 1
    }

    for (let i = x-(cem*100); i>=50; i=i-50) {
        cinquenta += 1
    }
    for (let i = x-(cem*100)-(cinquenta*50); i>=20; i=i-20) {
        vinte += 1
    }
    for (let i = x-(cem*100)-(cinquenta*50)-(vinte*20); i>=10; i=i-10) {
        dez += 1
    }
    for (let i = x-(cem*100)-(cinquenta*50)-(vinte*20)-(dez*10); i>=5; i=i-5) {
        cinco += 1
    }
    for (let i = x-(cem*100)-(cinquenta*50)-(vinte*20)-(dez*10)-(cinco*5); i>=2; i=i-2) {
        dois += 1
    }
    for (let i = x-(cem*100)-(cinquenta*50)-(vinte*20)-(dez*10)-(cinco*5)-(dois*2); i>=1; i--) {
        um += 1
    }
    for (let i = x-(cem*100)-(cinquenta*50)-(vinte*20)-(dez*10)-(cinco*5)-(dois*2)-(um); i>=0.5; i=i-0.5) {
        cinqc += 1
    }
    for (let i = x-(cem*100)-(cinquenta*50)-(vinte*20)-(dez*10)-(cinco*5)-(dois*2)-(um)-(cinqc*0.5); i>=0.25; i=i-0.25) {
        vintc += 1
    }
    for (let i = x-(cem*100)-(cinquenta*50)-(vinte*20)-(dez*10)-(cinco*5)-(dois*2)-(um)-(cinqc*0.5)-(vintc*0.25); i>=0.1; i=i-0.1) {
        dezc += 1
    }
    for (let i = x-(cem*100)-(cinquenta*50)-(vinte*20)-(dez*10)-(cinco*5)-(dois*2)-(um)-(cinqc*0.5)-(vintc*0.25)-(dezc*0.1); i>=0.05; i=i-0.05) {
        cincc += 1
    }
    for (let i = x-(cem*100)-(cinquenta*50)-(vinte*20)-(dez*10)-(cinco*5)-(dois*2)-(um)-(cinqc*0.5)-(vintc*0.25)-(dezc*0.1)-(cincc*0.05); i>=0.01; i=i-0.01) {
        umc += 1
    }

    console.log(cem)
    document.getElementById('result').innerHTML += 'NOTAS: <br>'
    document.getElementById('result').innerHTML += cem + ' nota(s) de R$ 100.00 <br>'
    document.getElementById('result').innerHTML += cinquenta + ' nota(s) de R$ 50.00 <br>'
    document.getElementById('result').innerHTML += vinte + ' nota(s) de R$ 20.00 <br>'
    document.getElementById('result').innerHTML += dez + ' nota(s) de R$ 10.00 <br>'
    document.getElementById('result').innerHTML += cinco + ' nota(s) de R$ 5.00 <br>'
    document.getElementById('result').innerHTML += dois + ' nota(s) de R$ 2.00 <br>' 
    document.getElementById('result').innerHTML += 'MOEDAS: <br>'
    document.getElementById('result').innerHTML += um + ' moeda(s) de R$ 1.00 <br>'
    document.getElementById('result').innerHTML += cinqc + ' moeda(s) de R$ 0.50 <br>'
    document.getElementById('result').innerHTML += vintc + ' moeda(s) de R$ 0.25 <br>'
    document.getElementById('result').innerHTML += dezc + ' moeda(s) de R$ 0.10 <br>'
    document.getElementById('result').innerHTML += cincc + ' moeda(s) de R$ 0.05 <br>'
    document.getElementById('result').innerHTML += umc + ' moeda(s) de R$ 0.01 <br>'
}