const frm = document.querySelector("form")
const promocaoF = document.querySelector("#promocaoF")
const entradaF = document.querySelector("#entradaF")
const parcelaF = document.querySelector("#parcelaF")


frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    const veic = document.querySelector("#veic").value
    const preco = Number(document.querySelector("#preco").value)
    const entrada = preco/2
    const resto = (preco - entrada) / 12


promocaoF.innerText = `promoção: ${veic}`
entradaF.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
parcelaF.innerText = `+12x de R$: ${resto.toFixed(2)}`
})