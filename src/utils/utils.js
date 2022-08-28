export function getRandomNumber(number) {
  return Math.floor(Math.random()*(number+1))
}

export function getRandomColor() {
  const red = getRandomNumber(255)
  const green = getRandomNumber(255)
  const blue = getRandomNumber(255)
  return `rgb(${red}, ${green}, ${blue})`
}

export function getSumPoints(array) {
  return array.reduce((total, current) => total += current.point,0)

export function removeElement(el, timeout) {
  const clear = function () {
    setTimeout(() => {
      el.remove()
    }, timeout);
  }
  clear()
}