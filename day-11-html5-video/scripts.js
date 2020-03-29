/* Get our elements */
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullscreenButton = player.querySelector('.fullscreen')
const muteButton = player.querySelector('.mute')
const speedButton = player.querySelector('.speed')

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}

function goFullscreen() {
  video.requestFullscreen()
}

function muteVideo() {
  if (video.volume !== 0) {
    video.volume = 0
    this.textContent = "Unmute"
  } else {
    video.volume = 1
    this.textContent = "Mute"
  }
}

function defaultSpeed() {
  video['playbackRate'] = 1
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

// Speed and Volume Sliders
ranges.forEach(button => button.addEventListener('change', handleRangeUpdate))
ranges.forEach(button => button.addEventListener('mousemove', handleRangeUpdate))

// Mute and Default Speed
muteButton.addEventListener('click', muteVideo)
speedButton.addEventListener('click', defaultSpeed)

// Video Progress Indicator/Scubber
video.addEventListener('timeupdate', handleProgress)

let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

// Fullscreen
fullscreenButton.addEventListener('click', goFullscreen)
