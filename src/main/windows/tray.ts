/* Tray */
import { Menu, Tray, MenuItemConstructorOptions, MenuItem } from 'electron'
import isDev from 'electron-is-dev'
import path from 'path'
import { appWindow, createAppWindow } from './app'
import { createPlayerWindow, playerWindow } from './player'
import packageJson from '../../../package.json'

export let tray: Tray

export const createTray = () => {
  const trayImgPath = isDev ? path.join(__dirname, '../assets/icons/256x256.png') : path.join(process.resourcesPath, 'ex-assets', 'icons', '256x256.png')
  tray = new Tray(trayImgPath)
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
