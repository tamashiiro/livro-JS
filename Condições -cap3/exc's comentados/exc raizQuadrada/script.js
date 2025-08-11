const frm = document.querySelector("form")
const resp = document.querySelector("h3")
// obtén elementos da página
frm.addEventListener ("submit", (e) => {
    e.preventDefault()
// evita envio do form
const numero = Number(frm.inNumero.value) // obtén número digitado no form
const raiz = Math.sqrt(numero)
// calcula raiz quadrada do número
if (Number.isInteger(raiz)) {
// se valor da raiz for um número inteiro
resp.innerText = `Raiz: ${raiz}`
// ...mostra a raiz
    } else {
// senão,
resp.innerText = `Não há raiz exata para ${numero}` // ...mostra mensagem
    }
})