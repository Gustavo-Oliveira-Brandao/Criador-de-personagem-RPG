const { app, BrowserWindow } = require('electron');

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 800 });
    win.loadFile('dist/projeto-rpg/browser/index.html');
}

app.whenReady().then(() => {
    createWindow()
})