var required = require('./commands.js');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  var output;

  if (cmd === 'pwd'){
    required.pwd();
  }
  else if (cmd === 'date'){
    output = new Date().toString();
  }
});

