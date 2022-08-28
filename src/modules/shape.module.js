import {Module} from '../core/module'
import { getRandomColor, getRandomNumber, removeElement } from '../utils/utils'

export class ShapeModule extends Module {
  trigger() {
    const canvas = document.createElement('canvas')
    canvas.style.position = 'absolute'
    // canvas.width = window.innerWidth
    // canvas.height = window.innerHeight
    document.body.append(canvas)
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = getRandomColor()
    const maxX = Math.max(50, getRandomNumber(canvas.width))
    const maxY = Math.max(50, getRandomNumber(canvas.height))
    const minX = Math.min(maxX-50, getRandomNumber(maxX))
    const minY = Math.min(maxY-50, getRandomNumber(maxY))
    canvas.style.top = `${getRandomNumber(window.innerHeight - canvas.height)}px`
    canvas.style.left = `${getRandomNumber(window.innerWidth - canvas.width)}px`
    
    const randomShape = getRandomNumber(2)
    if (randomShape === 0) {
      ctx.beginPath()
      const startX = getRandomNumber(canvas.width)
      const startY = getRandomNumber(canvas.height)
      const secondX = this.randomCoord(secondX, startX, canvas.width)
      const secondY = this.randomCoord(secondY, startY, canvas.height)
      const thirdX = this.randomCoord(thirdX, secondX, canvas.width)
      const thirdY = this.randomCoord(thirdY, secondY, canvas.height)
      ctx.moveTo(startX, startY)
      ctx.lineTo(secondX, secondY)
      ctx.lineTo(thirdX, thirdY)
      ctx.closePath()
      ctx.fill()
    }

    if (randomShape === 1) {
      ctx.beginPath()
      const minX = getRandomNumber(canvas.width / 3)
      const maxX = Math.max(minX+50, getRandomNumber(canvas.width))
      const minY = getRandomNumber(canvas.height / 3)
      const maxY = Math.max(minY+50, getRandomNumber(canvas.height))
      ctx.rect(minX, minY, maxX, maxY)
      ctx.closePath()
      ctx.fill()
    }

    if (randomShape === 2) {
      ctx.beginPath();
      const centerX = canvas.width/2
      const centerY = canvas.height/2
      const radius = Math.max(50, getRandomNumber(centerY))
      ctx.arc(centerX, centerY, radius, 0, Math.PI*2)
      ctx.closePath();
      ctx.fill();
    }
    
    removeElement(canvas)
  }

  randomCoord(currentPoint, prevPoint, max) {
    while (!currentPoint || Math.abs(currentPoint - prevPoint) < 50) {
      currentPoint = getRandomNumber(max)
    }
    return currentPoint
  }
}