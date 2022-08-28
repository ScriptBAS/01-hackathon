import './styles.css'
import './components/style/42.css'
import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'
import { easyMessage } from './modules/message.module'
import { SoundModule } from './modules/sound.module'
import { TwentyOne } from './modules/twentyone.module'
import { ShapeModule } from './modules/shape.module'
import { Module42 } from './modules/42.module'

const contextMenu = new ContextMenu('#menu')

document.body.addEventListener('contextmenu', (event)=> {
  event.preventDefault()
  contextMenu.open(event)
})

const backgroundModule = new BackgroundModule('BackgroundModule', 'Сменить фон')
contextMenu.add(backgroundModule)

const messageModule = new easyMessage('easyMessage', 'Случайный текст')
contextMenu.add(messageModule)

const soundModule = new SoundModule('SoundModule', 'Воспроизвести звук')
contextMenu.add(soundModule)


const boxgame = new TwentyOne('TwentyOne', '21');
contextMenu.add(boxgame)

const shapeModule = new ShapeModule('ShapeModule', 'Случайная фигура')
contextMenu.add(shapeModule)

const module42 = new Module42('42Module', 'В чём смысл жизни')
contextMenu.add(module42)