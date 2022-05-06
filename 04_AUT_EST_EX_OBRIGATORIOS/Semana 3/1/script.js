//comentário em js

function ex1() {
    //criando uma mensagem de aviso com alert
    //pegar o valor do form
    var v0 = document.getElementById('v0').value;
    const g = 10; //aceleração gravitacional 10 m/s²

    tSubida = v0/g;
    document.getElementById('vem').innerHTML = "TEMPO DE SUBIDA = " + tSubida;
    console.log("TEMPO DE SUBIDA = " + tSubida);

    hMax = ((v0*v0)/(2*g))
    document.getElementById('vem2').innerHTML = "ALTURA MÀXIMA = " + hMax;
}