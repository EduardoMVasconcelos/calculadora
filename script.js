let numero1 = document.querySelector("#numero1")
let numero2 = document.querySelector("#numero2")
let result = document.querySelector("#result")

const execucao = document.querySelector("button")
execucao.addEventListener("click", calcular)

function calcular() {
    numero1 = Number(document.querySelector("#numero1").value)
    numero2 = Number(document.querySelector("#numero2").value)
    let resultado = numero1 + numero2
    result.innerHTML = `O resultado é igual a = ${resultado}`
}