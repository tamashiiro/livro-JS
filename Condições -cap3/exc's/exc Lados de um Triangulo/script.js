const frm = document.querySelector("form")
    const resp1 = document.querySelector("#resposta1")
    const resp2 = document.querySelector("#resposta2")

    frm.addEventListener("submit", (e) => {
      e.preventDefault()

      const a = Number(document.querySelector("#ladoA").value)
      const b = Number(document.querySelector("#ladoB").value)
      const c = Number(document.querySelector("#ladoC").value)

      if (a < b + c && b < a + c && c < a + b) {
        resp1.innerText = "Lados podem formar um triângulo"

        if (a == b && b == c) {
          resp2.innerText = "Tipo: Equilátero"
        } else if (a == b || a == c || b == c) {
          resp2.innerText = "Tipo: Isósceles"
        } else {
          resp2.innerText = "Tipo: Escaleno"
        }
      } else {
        resp1.innerText = "Lados não podem formar um triângulo"
        resp2.innerText = ""
      }
    })