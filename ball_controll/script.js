const ball = document.getElementById('ball')

const play_controll = document.getElementById('play')
const pause_controll = document.getElementById('pause')
const reset_controll = document.getElementById('reset')
const reverse_controll = document.getElementById('reverse')

window.addEventListener('load', () => {
  ball.style.animation = 'none'
})

reverse_controll.addEventListener('click', () => {
  ball.style.animationDirection = 'reverse'
})

reset_controll.addEventListener('click', () => {
  ball.style.animation = 'none'
  ball.offsetHeight
  ball.style.animation = null
})

play_controll.addEventListener('click', () => {
  ball.offsetHeight
  ball.style.animation = null
  ball.style.animationPlayState = 'running'
})

pause_controll.addEventListener('click', () => {
  ball.style.animationPlayState = 'paused'
})

