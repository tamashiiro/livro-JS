const pagamento = document.querySelector("h3")
const frm = document.querySelector("form")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const valor = Number(document.querySelector("#valor").value)
    const tempo = Number(document.querySelector("#tempo").value)

    const calculo = valor/15 * tempo

pagamento.innerText = `Valor a Pagar R$: ${calculo.toFixed(2)}`


})