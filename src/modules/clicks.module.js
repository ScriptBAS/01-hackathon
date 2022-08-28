import {Module} from '../core/module'
// import '../assets/click-module.css'


export class ClicksModule extends Module {

  #render () {
    const body = document.querySelector('body')

    const main = document.createElement('main')

    const divClickers = document.createElement('div')
    divClickers.id = 'divclickers'

    const divDisplay = document.createElement('div')
    divDisplay.id = 'display'

    const divUnity = document.createElement('div')
    divUnity.className = 'unity'

    const button = document.createElement('button')
    button.id = 'button'
    button.textContent = 'Клик!'

    const cancelCross = document.createElement('a')
    cancelCross.className = 'close'

    const counter = document.createElement('div')
    counter.id = 'counter'

    body.append(divClickers)
    divClickers.append(main)
    main.append(divDisplay, divUnity, counter)
    divUnity.append(button, cancelCross)
    
    return divClickers
    
  }

  trigger() {
    const clikerDiv = document.querySelector('#divclickers')
    if (clikerDiv) {
      clikerDiv.remove()
    }
    this.#render()
    let click = 1

    const TIMEOUT = 10000

    const getMain = document.querySelector('main')
    const display = document.querySelector('#display')
    display.textContent = 'Нажмите, чтобы начать играть'
    const button = document.querySelector('button')
    const counter = document.querySelector('#counter')
    const cancelCross = document.querySelector('.close')

    button.onclick = start
    cancelCross.onclick = end

    function end() {
      getMain.remove()
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