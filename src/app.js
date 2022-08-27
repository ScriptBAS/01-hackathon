import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'
import './styles.css'
import { easyMessage } from './modules/easyMessage';

const contextMenu = new ContextMenu('#menu')

document.body.addEventListener('contextmenu', (event)=> {
  event.preventDefault()
  contextMenu.open(event)
})

const backgroundModule = new BackgroundModule('BackgroundModule', 'Сменить фон')
contextMenu.add(backgroundModule)

const messageModule = new easyMessage('easyMessage', 'Случайный текст')
contextMenu.add(messageModule)