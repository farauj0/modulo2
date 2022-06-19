function Order() {
    var name1 = document.getElementById('name1').value 
    var name2 = document.getElementById('name2').value 
    var name3 = document.getElementById('name3').value 
    var names = [name1, name2, name3]
    names.sort()

    document.getElementById('output').innerText = names
}