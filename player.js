function move() {
  if (RIGHT) {
    player.x += player.speed
  }
  if (LEFT) {
    player.x -= player.speed
  }
}

export { move }
