import {Module} from '../core/module'
import { getRandomColor } from '../utils/utils'

export class BackgroundModule extends Module {
  trigger() {
    document.body.style.background = getRandomColor()
  }
}