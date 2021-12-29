/* Tray */
import { Menu, Tray, MenuItemConstructorOptions, MenuItem } from 'electron'
import isDev from 'electron-is-dev'
import path from 'path'
import { appWindow, createAppWindow } from './app'
import { createPlayerWindow, playerWindow } from './player'
import packageJson from '../../../package.json'

export let tray: Tray

export const createTray = () => {
  const trayImgPath = isDev ? path.join(__dirname, '../assets/tray.jpg') : path.join(process.resourcesPath, 'default', 'tray.jpg')
  tray = new Tray(trayImgPath)
  // tray = new Tray('https://raw.githubusercontent.com/kkan0615/my-personal-manger/main/src/main/default/tray.jpg')
  tray.setToolTip(packageJson.name)

  const trayTemplate: Array<(MenuItemConstructorOptions) | (MenuItem)> = [{
    label: 'Open Setting',
    click: () => {
      if (appWindow)
        appWindow.show()
      else {
        createAppWindow()
      }
    },
  }, {
    label: 'Open Player',
    click: () => {
      if (playerWindow)
        playerWindow.show()
      else {
        createPlayerWindow()
      }
    },
  }, {
    label: 'Exit',
    click: () => {
      if (appWindow && appWindow.closable)
        appWindow.close()
      if (playerWindow && playerWindow.closable)
        playerWindow.close()
    },
  }]

  const contextMenuList = Menu.buildFromTemplate(trayTemplate)
  tray.setContextMenu(contextMenuList)
}
