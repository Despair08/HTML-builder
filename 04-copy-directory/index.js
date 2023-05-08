const path  = require('path');
const fs = require('fs');
const fsPromises = fs.promises;

async function copyDir(){
  try {
    const destFolder = path.join(__dirname, 'copy_files');
    const remove = await fsPromises.rm(destFolder,{recursive:true},(err)=>{
      console.log(err)
    })
    createDir = await fsPromises.mkdir(destFolder, {recursive:true});
    const files = await fsPromises.readdir(path.join(__dirname,'files'),{withFileTypes: true});
    for(const file of files){
      if(file.isFile()){
        await fsPromises.copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname,'copy_files', file.name))
      }
    }
  } catch (error) {
    console.log(error);
  }
}

copyDir();