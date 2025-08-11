
const respF = document.querySelector("#respFinal")
const filme = document.querySelector("#filme")
const frm = document.querySelector("form")

frm.addEventListener("submit", (e) =>{
     e.preventDefault()

const titulo = document.querySelector("#titulo").value
const duracao = Number(document.querySelector("#duracao").value)


const calculoH = Math.floor(duracao/60)

const calculoM = (duracao % 60)


filme.innerText = titulo
respF.innerText = `${calculoH} hora(s) e ${calculoM} minuto(s)`

})


console.log("asds")