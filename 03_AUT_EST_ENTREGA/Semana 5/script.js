
let tableData = []

function getList() {
  let url = '/userget'

  let xhttp = new XMLHttpRequest()
  xhttp.open('get', url, false)
  xhttp.send()

  let data = JSON.parse(xhttp.responseText)
  data.forEach((row, index) => {
    tableData.push(row)
  })
}

function showEmployee(id) {
    let url = '/employee/' + id
  
    let xhttp = new XMLHttpRequest()
    xhttp.open('get', url, false)
    xhttp.send()
  
    let data = JSON.parse(xhttp.responseText)
    console.log(data)
  }
getList()

let qualificacoes_pessoais = '#qp-table'
$(qualificacoes_pessoais).bootstrapTable({
  data: tableData
})

$(`${qualificacoes_pessoais} tr:not(:first)`).addClass('table-body-row')

$(qualificacoes_pessoais).on('sort.bs.table', function () {
  setTimeout(function () {
    $(`${qualificacoes_pessoais} tr:not(:first)`).addClass('table-body-row')
  }, 0)
})

let qualificaoes_pessoaisRows = $('.table-body-row')
let qualificacoes_pessoaisReversedRows = []