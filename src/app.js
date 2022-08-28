import './styles.css'
import './assets/click-module.css'

import { getRandomColor, getRandomNumber } from './utils/utils'

import { ClicksModule } from './modules/clicks.module'

const clickModule = new ClicksModule('ClicksModule', 'Считать клики за 10 секунд')
