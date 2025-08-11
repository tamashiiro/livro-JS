const promDe = document.querySelector("#promDe")
const prom = document.querySelector("#prom")
const frm = document.querySelector("form")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
const medicamento = document.querySelector("#medicamento").value
const preco = Number(document.querySelector("#preco").value)
const calculo = (Math.floor(preco) / 2) * 2


promDe.innerText = `promoção de ${medicamento}`
prom.innerText = `Leve 2 por apenas R$: ${calculo}`
})