import { contextBridge, shell } from 'electron'

// Add a `window.api` object inside the renderer process with the `openUrl`
// function.
contextBridge.exposeInMainWorld('api', {
  // Open an URL into the default web-browser.
  openUrl: (url: string) => shell.openExternal(url),
})


// // All of the Node.js APIs are available in the preload process.
// // It has the same sandbox as a Chrome extension.
//
// // @ts-ignore
// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector: string, text: string) => {
//     const element = document.getElementById(selector)
//     if (element) element.innerText = text
//   }
//
//   for (const dependency of ['chrome', 'node', 'electron']) {
//     // @ts-ignore
//     replaceText(`${dependency}-version`, process.versions[dependency])
//   }
// })
