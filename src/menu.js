import { Module } from './core/module'
import {Menu} from './core/menu'

export class ContextMenu extends Menu {
  #modules
  constructor(selector) {
    super(selector)
    this.#modules = []
  }
  open(event) {
    if (this.#modules) {
      this.el.classList.add('open')
      if (event.y + this.el.offsetHeight > window.innerHeight) {
        this.el.style.top = `${event.y - this.el.offsetHeight}px`;
      } else {
        this.el.style.top = `${event.y}px`
      }
      if (event.x + this.el.offsetWidth > window.innerWidth){
      this.el.style.left = `${event.x - this.el.offsetWidth}px`
      } else {
        this.el.style.left = `${event.x}px`
      }
    }
  }

  close() {
    this.el.classList.remove('open')
  }

  add(module) {
    if (module instanceof Module) {
      this.#modules.push(module)
      const menuItem = new DOMParser().parseFromString(module.toHTML(), 'text/html').body.firstChild
      this.el.append(menuItem)
      menuItem.addEventListener('click', () => {
        module.trigger()
        this.close()})
    }
  }
}

