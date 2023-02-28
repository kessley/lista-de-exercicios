function soma(){
    let n1 = + document.getElementById('n1').value
    let n2 = + document.getElementById('n2').value
    let comicao = (n2 * 0.04)
    document.getElementById('res').innerHTML = n1 + comicao
}
