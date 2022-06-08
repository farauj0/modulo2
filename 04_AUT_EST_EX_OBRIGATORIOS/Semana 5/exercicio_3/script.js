function SortFindValue() {
    var string = document.getElementById('string').value
    var keyValue = document.getElementById('keyValue').value
    var array = string.split(', ')
    var i = 0

    var length = array.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                   if(array[j] > array[j+1]) {
                           var tmp = array[j]; 
                array[j] = array[j+1]; 
                array[j+1] = tmp; 
            }
        }        
    }

    document.getElementById('output').innerHTML += `Lista Ordenada: ${array} <br>`
    document.getElementById('output').innerHTML += `Valor foco: ${array.indexOf(keyValue)+1}° Número`
    // console.log(array)
    // console.log(typeof array)
}