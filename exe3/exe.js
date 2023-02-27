function soma(){
    let n1 = + document.getElementById('n1').value
    let n2 = + document.getElementById('n2').value
    if (n2 == 0) {
        alert("O segundo numero tem que ser diferente de zero")
        return
    }
    document.getElementById('res').innerHTML = n1 / n2 
}