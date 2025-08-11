const frm = document.querySelector("form")

const rslt = document.querySelector("h3")
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const num = Number(document.querySelector("#num").value)
    let vrfr
    if (num%2 == 0) {
        vrfr = "par"
    } else {
        vrfr = "impar"
    }
rslt.innerText = `${num} é ${vrfr}`

})