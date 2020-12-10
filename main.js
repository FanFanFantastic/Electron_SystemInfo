const {app, BrowserWindow} = require('electron');

const path = require('path');
const url = require('url');

let win;

function createWindow(){
    //Create window
    win = new BrowserWindow({width:800, height:600,
        webPreferences: {
            nodeIntegration: true
          }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: 'file',
        slashes: true
    }));

    //open dev tools
    win.webContents.openDevTools();


    //Life cycle hooks
    win.on('closed', ()=>{
        win = null;
    })
}

//Life cycle to create window
app.on('ready', createWindow);


//quit when all windows are closed
app.on('window-all-closed', ()=>{

    //if on a Mac
    if(process.platform !== 'darwin'){
        app.quit();
    }
})