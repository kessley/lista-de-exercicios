function areaQuadrado(){
    let n1 = + document.getElementById('n1').value
    document.getElementById('res').innerHTML = n1 * n1
}

function subtrair(){
    let n1 = + document.getElementById('n1').value
    let n2 = + document.getElementById('n2').value

    document.getElementById('res').innerHTML = n1 - n2 
} 

function mult(){
    let n1 = + document.getElementById('n1').value
    let n2 = + document.getElementById('n2').value

    document.getElementById('res').innerHTML = n1 * n2 
}

function dividir(){
    let n1 = + document.getElementById('n1').value
    let n2 = + document.getElementById('n2').value
    if (n2 == 0) {
        alert("O segundo numero tem que ser diferente de zero")
        return
    }
    document.getElementById('res').innerHTML = n1 / n2 
}

function media(){
    let n1 = + document.getElementById('n1').value
    let n2 = + document.getElementById('n2').value
    let media = (n1*2 + n2*3) / 2+3 
    document.getElementById('res').innerHTML = media
}

function salario(){
    let n1 = + document.getElementById('n1').value
    let n2 = + document.getElementById('n2').value
    let comicao = (n2 * 0.04)
    document.getElementById('res').innerHTML = n1 + comicao
}

function peso(){
    let n1 = + document.getElementById('n1').value
    let gramas = n1 * 1000
    document.getElementById('res').innerHTML = gramas
}

function areaTrapezio(){
    let n1 = + document.getElementById('n1').value
    let n2 = + document.getElementById('n2').value
    let n3 = + document.getElementById('n3').value
    let area = ((n1 + n2) * n3) / 2
    document.getElementById('res').innerHTML = area
}
