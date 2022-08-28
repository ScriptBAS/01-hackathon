import {Module} from '../core/module'
import './assets/click-module.css'

export class ClicksModule extends Module {
  #domHTML
  #clickFunc

  trigger() {
    this.#domHTML()
    this.#clickFunc()
  }

  #domHTML() {
    const html = document.html
    const main = document.createElement('main')

    const divDisplay = document.createElement('div')
    divDisplay.id = 'display'

    const divUnity = document.createElement('div')
    divUnity.className = 'unity'

    const button = document.createElement('button')
    button.id = 'button'
    
    const cancelCross = document.createElement('a')
    cancelCross.className = 'close'
    cancelCross.id = '#'
    
    const counter = document.createElement('div')
    counter.id = 'counter'

    document.body.append(main)
    main.append(divDisplay, divUnity, button, counter)
    divDisplay.append(button, cancelCross)

    return main
  }

  #clickFunc() {
    let click = 0

    const TIMEOUT = 10000

    const display = document.querySelector('#display')
    display.textContent = 'Нажмите, чтобы начать играть'
    const button = document.querySelector('button')
    const counter = document.querySelector('#counter')
    const cancelCross = document.querySelector('.close')

    button.onclick = start
    cancelCross.onclick = end

    function end() {
      display.remove()
      button.remove()
      counter.remove()
      cancelCross.remove()
    }

    function start() {
      const startTime = Date.now()

      display.textContent = formatTime(TIMEOUT)
      button.onclick = () => counter.textContent = click++

      const interval = setInterval(() => {
        const delta = Date.now() - startTime
        display.textContent = formatTime(TIMEOUT - delta)
      }, 100)

      const timeout = setTimeout(() => {
        button.onclick = null
        display.textContent = 'Game Over'
        counter.textContent = `Ваш результат: ${click} кликов`

        clearInterval(interval)
        clearInterval(timeout)
      }, TIMEOUT)
    }

    function formatTime(ms) {
      return Number(ms / 1000).toFixed(2)
    }
  }
}