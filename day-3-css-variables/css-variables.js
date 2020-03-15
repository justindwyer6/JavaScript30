const inputs = document.querySelectorAll("input"),
      image = document.querySelector("img")

function inputChange() {
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => {
    input.addEventListener("change", inputChange)
    input.addEventListener("mousemove", inputChange)
})
