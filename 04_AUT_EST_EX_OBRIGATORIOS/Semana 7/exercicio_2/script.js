function swapVal() {
     const val1 = document.getElementById("val1").value
     const val2 = document.getElementById("val2").value

     document.getElementById("val1").value = val2
     document.getElementById("val2").value = val1
}