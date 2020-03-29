// Get our elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

// Build out functions
function togglePlay() {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
}

function skip() {
  console.log(video.currentTime)
  console.log(this.dataset.skip)
  video.currentTime += parseInt(this.dataset.skip)
}

/* Add event listeners */
// Play on clicks
video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)
// Update button on play
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
// Skip logic
skipButtons.forEach(button => button.addEventListener('click', skip))
