var required = require('./commands.js');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var arrData = data.toString().trim().split(" ");
  var cmd = arrData[0]; // remove the newline
  var inputData = arrData.slice(1).join(" ");
  var output;

  var done = function(output){
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
  };

  if (cmd === 'pwd'){
    required.pwd(null, done);
  }
  else if (cmd === 'date'){
    done(new Date().toString());
  }
  else if (cmd === 'ls'){
    required.ls(null, done);
  }
  else if (cmd === 'echo'){
    output = required.echo(inputData);
  }
  else if (cmd === 'cat'){
    required.cat(inputData);
  }
  else if (cmd === 'head'){
    output = required.head(inputData);
  }
  else if (cmd === 'curl'){
    output = required.curl(inputData);
  }
  required.done(output);

});

