const path  = require('path');
const fs = require('fs');
const fsPromises = fs.promises;

async function copyDir(){
  try {
    const destFolder = path.join(__dirname, 'copy_files');
    createDir = await fsPromises.mkdir(destFolder, {recursive:true});
    const files = await fsPromises.readdir(path.join(__dirname,'files'),{withFileTypes: true});
    for(const file of files){
      if(!file.isFile()){
        fsPromises.readdir(path.join(__dirname, 'files', file.name));
      }
      await fsPromises.copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname,'copy_files', file.name))
    }
  } catch (error) {
    console.log(error);
  }
}

copyDir();