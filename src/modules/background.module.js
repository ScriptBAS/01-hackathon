import {Module} from '../core/module'
import { getRandomColor } from '../utils/utils'

export class BackgroundModule extends Module {
  trigger() {
    document.body.style.background = getRandomColor()
    document.body.style.transition = "background-color 0.7s linear";
  }
}