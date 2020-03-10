function keyDrum(e){
    key = document.querySelector(`[data-key='${e.keyCode}']`)
    audio = document.querySelector(`[data-key='${e.keyCode}'] > audio`)
    if(!key || !audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add("playing")
    const keys = document.querySelectorAll("section")
    keys.forEach(key => key.addEventListener("transitionend", removeTransition))
}

function removeTransition(e) {
    if(e.propertyName !== "transform") return
    this.classList.remove("playing")
}

window.onkeydown = keyDrum
