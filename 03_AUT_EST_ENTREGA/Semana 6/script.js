
let tableData = []

// function getList() {
//   let url = '/userget'

//   let xhttp = new XMLHttpRequest()
//   xhttp.open('GET', url, false)
//   xhttp.send()

//   // let data = JSON.parse(xhttp.responseText)
//   let data = xhttp.json()
//   data.forEach((row, index) => {
//     tableData.push(row)
//   })
// }

var conteudo = document.getElementById('conteudo')

function escreveTela (arg) {
  for (item of arg) {
    let por = document.createElement('p')
    let ted = document.getElementById('ted')
    ted.appendChild(por)
    por.innerHTML = `${item}`
  }
}


function getList() {
  fetch('http://127.0.0.1:3071/userget', {method:'GET'}).then((res) => {
    return res.json()
  }).then((dados) => {
      tableData.push(dados[0].text)
      tableData.push(dados[0].text2)
      escreveTela(tableData)
  })
}


// function showEmployee(id) {
//     let url = '/employee/' + id
  
//     let xhttp = new XMLHttpRequest()
//     xhttp.open('get', url, false)
//     xhttp.send()
  
//     let data = JSON.parse(xhttp.responseText)
//     console.log(data)
//   }
getList()

// let qualificacoes_pessoais = '#qp-table'
// $(qualificacoes_pessoais).bootstrapTable({
//   data: tableData[0]
// })


// $(`${qualificacoes_pessoais} tr:not(:first)`).addClass('table-body-row')

// $(qualificacoes_pessoais).on('sort.bs.table', function () {
//   setTimeout(function () {
//     $(`${qualificacoes_pessoais} tr:not(:first)`).addClass('table-body-row')
//   }, 0)
// })

// let qualificaoes_pessoaisRows = $('.table-body-row')
// let qualificacoes_pessoaisReversedRows = []