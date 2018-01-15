var fs = require('fs');
var request = require('request');

module.exports = {
  pwd : function (filename, done){
    done(process.cwd());
  },

  ls : function(filename, done){
    var finalStr = '';
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        finalStr += file.toString() + "\n";
      });
      done(finalStr);
    });
  },

  echo : function(string, done){
    done(string);
  },

  cat : function(filename){
    fs.readFile('./'+filename, 'utf8', function(err, data) {
      if (err) throw err;
    });
  },

  // head : function(filename){
  //   var something;
  //   fs.readFile('./'+filename, 'utf8', (err, data) => {
  //     if (err) throw err;
  //     something = data.split('U+000A');
  //     console.log('In FS!', something[0]);
  //   });
  // },

  curl : function(url, done){
    request('http://' + url, function(err, response, body){
      if (err) throw err;
      //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      done('body:' + body);
    });
  }
};
