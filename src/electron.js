import { app, BrowserWindow, ipcMain } from 'electron';

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadURL('http://localhost:3050');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

const uri = "your_mongodb_uri"; // Local MongoDB URI
const client = new MongoClient(uri);

ipcMain.handle('search-users', async (event, query) => {
  try {
    await client.connect();
    const db = client.db("your_db_name");
    const users = await db.collection('users').find({ name: new RegExp(query) }).toArray();
    return users;
  } catch (err) {
    console.error(err);
    // Handle errors
  } finally {
    await client.close();
  }
});
