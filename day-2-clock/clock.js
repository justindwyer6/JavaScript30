function setDate() {
    const now     = new Date(),
          seconds = now.getSeconds(),
          minutes = now.getMinutes(),
          hours   = (now.getHours() > 12) ? (now.getHours() - 12) : now.getHours(),
          secondsDegrees = 90 + seconds*6,
          minutesDegrees = 90 + minutes*6,
          hoursDegrees   = 90 + hours*30,
          secondHand = document.querySelector(".second-hand"),
          minuteHand = document.querySelector(".minute-hand"),
          hourHand = document.querySelector(".hour-hand"),
          allHands = document.querySelectorAll(".hand")

    // if(secondsDegrees === 90){
    //     allHands.forEach(hand => {hand.style.transition = "none"})
    // } else {
    //     allHands.forEach(hand => {hand.style.transition = "all 0.5s"})
    // }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)
