 const frm = document.querySelector("form")
    const resp1 = document.querySelector("#resposta1")
    const resp2 = document.querySelector("#resposta2")

    frm.addEventListener("submit", (e) => {
      e.preventDefault()
      const valor = Number(document.querySelector("#valor").value)
      let tempo = 0
      let troco = 0

      if (valor < 1) {
        resp1.innerText = "Valor Insuficiente"
        resp2.innerText = ""
      } else if (valor < 1.75) {
        tempo = 30
        troco = valor - 1.00
      } else if (valor < 3.00) {
        tempo = 60
        troco = valor - 1.75
      } else {
        tempo = 120
        troco = valor - 3.00
      }

      if (valor >= 1) {
        resp1.innerText = `Tempo: ${tempo} min`
        resp2.innerText = `Troco: R$ ${troco.toFixed(2)}`
      }
    })