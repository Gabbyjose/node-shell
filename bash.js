var required = require('./commands.js');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var arrData = data.toString().trim().split(" ");
  var cmd = arrData[0]; // remove the newline
  var inputData = arrData.slice(1).join(" ");
  var output;

  if (cmd === 'pwd'){
    required.pwd();
  }
  else if (cmd === 'date'){
    output = new Date().toString();
  }
  else if (cmd === 'ls'){
    required.ls();
  }
  else if (cmd === 'echo'){
    required.echo(inputData);
  }
  else if (cmd === 'cat'){
    required.cat(inputData);
  }
});

