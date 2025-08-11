const rslt1 = document.querySelector("#rslt1")
const rslt2 = document.querySelector("#rslt2")
const frm = document.querySelector("form")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const produto = document.querySelector("#produto").value
    const preco = Number(document.querySelector("#preco").value)
    

rslt1.innerText = `${produto} - Promoção Leve 3 por R$: ${preco *2 + (preco/2)}`

rslt2.innerText = `O 3 Produto custa apenas R$: ${preco/2}`

})