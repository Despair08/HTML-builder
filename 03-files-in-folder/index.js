const path = require('path');
const fs = require('fs');
const { stdout } = process;

const dirPath = path.join(__dirname, 'secret-folder');


try {
fs.readdir(dirPath, {withFileTypes: true}, (err, files)=>{
  if(err) return err;
  for (const file of files){
    if(file.isFile()){

      const filePath = path.join(dirPath, file.name);

      fs.stat(filePath, (err, stats) => {
        if(err) return err;

        const fileName = path.extname(file.name).slice(1);
        const fileExt = path.extname(file.name).split('.')[1];
        const size = Math.ceil(stats.size / 1024);
        stdout.write(`${fileName} - ${fileExt} - ${size} kB\n`);
      })

    }
  }
});
} catch (error) {
  stdout.write(error)
}