/* eslint-disable @typescript-eslint/no-var-requires */

const { initRemix } = require('remix-electron')
const {
  app,
  // uncomment to hide menu on windows
  Menu,
  BrowserWindow,
  dialog
} = require('electron')
const { join } = require('node:path')

/** @type {BrowserWindow | undefined} */
let win

// uncomment to hide menu on windows
if (process.env.NODE_ENV !== 'development') {
  Menu.setApplicationMenu(null)
}

/** @param {string} url */
async function createWindow(url) {
  win = new BrowserWindow({
    show: false,
    height: 860,
    width: 1600,
    resizable: true,
    webPreferences: {
      devTools: !app.isPackaged
    }
  })
  await win.loadURL(url)
  win.show()

  // uncomment to automatically show dev tools
  // if (process.env.NODE_ENV === 'development') {
  //   win.webContents.openDevTools()
  // }
}

app.on('ready', async () => {
  try {
    if (process.env.NODE_ENV === 'development') {
      const {
        default: installExtension,
        REACT_DEVELOPER_TOOLS
      } = require('electron-devtools-installer')

      await installExtension(REACT_DEVELOPER_TOOLS)
    }
    const url = await initRemix({ serverBuild: join(__dirname, 'build') })
    await createWindow(url)
  } catch (error) {
    dialog.showErrorBox('Error', getErrorStack(error))
    console.error(error)
  }
})

app.on('web-contents-created', (event, contents) => {
  contents.setWindowOpenHandler(({ url }) => {
    console.log(`attempt to open url ${url}: denied`)

    return { action: 'deny' }
  })
})

/** @param {unknown} error */
function getErrorStack(error) {
  return error instanceof Error ? error.stack || error.message : String(error)
}
