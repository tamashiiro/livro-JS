const frm = document.querySelector("form")
const resposta = document.querySelector("h3")   

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const vmax = Number(frm.vmax.value)
    const v = Number(frm.v.value)

    let multa
    if (v <= vmax) {
        multa = "Nao ouve multa!"
    } else if ( v > vmax && v <= vmax * 1.20) {
        multa = "Multa leve !"
    } else {
        multa = "Multa grave!"
    }

resposta.innerText = `${multa}`


})