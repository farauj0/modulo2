// function formatToPhone() { 

//     const input = document.getElementById("phoneNumber").value;
//     const areaCode = input.substring(0,2);
//     const areaCode2 = input.substring(0,4)
//     const middle = input.substring(4,9);
//     const middle2 = input.substring(4,9)
//     const last = input.substring(9,16);
        
//     var inputKey = document.getElementById('phoneNumber');
    

//     inputKey.onkeydown = function() {
//         var key = event.keyCode || event.charCode;
//         if( key != 8 && key != 46){
//             if(input.length == 9){document.getElementById("phoneNumber").value = `${areaCode2}${middle2}-${last}`;}
//             else if(input.length == 7){document.getElementById("phoneNumber").value = `${areaCode2}${middle}`;}
//             else if(input.length == 2){document.getElementById("phoneNumber").value = `(${areaCode})`;}}
//     };
// };

function checkVal() {
    var value = document.getElementById("phoneNumber").value
    if ((value[0] == '(') && (value[3] == ')') && (value[9] == "-") && (value.length == 14)) {
        return document.getElementById("output").innerText = `Formato correto`
    } else {
        return document.getElementById("output").innerText = `Formato errado`
    } 
}