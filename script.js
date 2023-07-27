const celsius = document.getElementById("celsius")
const fahrenheit = document.getElementById("fahrenheit")


celsius.addEventListener("input", ()=>{
    fah = (celsius.value * 9/5) + 32
    fahrenheit.value = fah.toFixed(2)
})
fahrenheit.addEventListener("input", ()=>{
    cel = (fahrenheit.value - 32) * 5/9
    celsius.value = cel.toFixed(2)
})