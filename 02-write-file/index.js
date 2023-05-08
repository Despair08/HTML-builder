const fs = require('fs');
const path = require('path');
const { stdin,stdout,stderr } = process;


stdout.write('Ну ты и соня! Тебя даже вчерашний шторм не разбудил.. \n');

fs.writeFile(
    path.join(__dirname, 'userInput.txt'),
    '',
    (err) => {
        if (err) throw err;
    }
);

stdin.on('data',data => fs.appendFile(
  path.join(__dirname, 'userInput.txt'),
  data,
  (err) =>{
    if(err)throw err;
    if(data.toString().trim() === 'exit'){
      process.exit(0);
    }
  }
))

process.on('exit', code => {
if(code === 0){
  stdout.write('Удачи')
}else{
  stderr.write(`Что то пошло не так ${code}`)
}
})

process.on('SIGINT', () => {
  process.exit(0)
})