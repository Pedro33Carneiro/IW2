var resultado = document.getElementById('resultado')

function peganumero1() {
    var numero1 = Number(document.getElementById('numero1').value)
    console.log('nome: ', numero1)
}

function peganumero2() {
    var numero2 = Number(document.getElementById('numero2').value)
    console.log('nome: ', numero2)
}
function soma() {
    var numero1 = Number(document.getElementById('numero1').value)
    var numero2 = Number(document.getElementById('numero2').value)
    var soma = numero1 + numero2
    result.innerHTML = soma
    console.log('Soma: ', soma)
}
function sub() {
    var numero1 = Number(document.getElementById('numero1').value)
    var numero2 = Number(document.getElementById('numero2').value)
    var sub = numero1 - numero2
    result.innerHTML = sub
    console.log('Subtração: ', sub)
}
function mult() {
    var numero1 = Number(document.getElementById('numero1').value)
    var numero2 = Number(document.getElementById('numero2').value)
    var sub = numero1 - numero2
    result.innerHTML = sub
    console.log('Subtração: ', sub)
}
function div() {
    var Number = document.getElementById('numero1').value
    var Number = document.getElementById('numero2').value
    var soma = numero1 / numero2
    result.innerHTML = div
    console.log('divisão: ', div)
}
function limp() {
    result.innerHTML = " "
    numero1.innerHTML = ' '
    numero2.innerHTML = ' '
}
