var fs = require('fs');

module.exports = {
  pwd : function (filename){
    //console.log(process.cwd());
    var output = process.cwd();
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
  },
  ls : function(filename){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
  },
  echo : function(filename, string){
    process.stdout.write(string);
    process.stdout.write('\nprompt > ');
  },
  cat : function(filename){
    fs.readFile('./'+filename, (err, data) => {
      if (err) throw err;
      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    });
  },
};
