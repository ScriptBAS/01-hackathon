import './styles.css'
import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'
import { easyMessage } from './modules/easyMessage'
import { SoundModule } from './modules/sound.module'

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