const btnPlay = document.getElementById("btn-play")
const btnClear = document.getElementById("btn-clear")

let interval
let isResume = false

btnPlay.addEventListener("click", () => {
  if (!isResume) {
    isResume = true
    start()
  } else {
    null
  }
})

btnClear.addEventListener("click", () => {
  stop()
  isResume = false
})

function start() {
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")
  let player = {
    x: canvas.width / 2 - 50,
    y: canvas.height - 25,
    speed: 8,
  }

  let RIGHT = false
  let LEFT = false

  document.onkeydown = function (e) {
    if (e.key == "ArrowRight" || e.key == "d") {
      RIGHT = true
    }
    if (e.key == "ArrowLeft" || e.key == "q") {
      LEFT = true
    }
    if (e.key == "Shift" && player.speed == 8) {
      boost()
    }
  }

  document.onkeyup = function (e) {
    if (e.key == "ArrowRight" || e.key == "d") {
      RIGHT = false
    }
    if (e.key == "ArrowLeft" || e.key == "q") {
      LEFT = false
    }
    if (e.key == "Shift") {
      player.speed = 8
    }
  }
  function move() {
    if (RIGHT) {
      player.x += player.speed
    }
    if (LEFT) {
      player.x -= player.speed
    }
  }

  function boost() {
    player.speed *= 3
  }

  function limit() {
    if (player.x < 0) {
      player.x = 0
    }
    if (player.x > canvas.width - 100) {
      player.x = canvas.width - 100
    }
  }

  function ship() {
    let xShip = player.x
    let yShip = player.y
    ctx.fillStyle = "red"

    ctx.beginPath()
    ctx.rect(xShip, yShip, 100, 25)
    ctx.fill()
  }

  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  function ship() {
    let xShip = player.x
    let yShip = player.y
    ctx.fillStyle = "red"

    ctx.beginPath()
    ctx.rect(xShip, yShip, 100, 25)
    ctx.fill()
  }

  function limit() {
    if (player.x < 0) {
      player.x = 0
    }
    if (player.x > canvas.width - 100) {
      player.x = canvas.width - 100
    }
  }

  function boost() {
    player.speed *= 3
  }

  function update() {
    clear()
    ship()
    move()
    limit()
  }
  return (interval = setInterval(update, 10))
}

function stop() {
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")
  clearInterval(interval)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
