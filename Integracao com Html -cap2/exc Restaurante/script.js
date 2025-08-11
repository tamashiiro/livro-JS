const frm = document.querySelector("form")
const precoF = document.querySelector("h3")

frm.addEventListener("submit", (e)   =>{
    e.preventDefault()
    const preco = Number(document.querySelector("#preco").value)
    const peso = Number(document.querySelector("#peso").value)
    const calculo = (peso/1000) * preco

precoF.innerText = `Valor a pagar R$: ${calculo.toFixed(2)}`

})